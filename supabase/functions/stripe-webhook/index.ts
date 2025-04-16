
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@12.18.0';
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// This webhook should be public (no auth required)
// Add to supabase/config.toml:
// [functions.stripe-webhook]
// verify_jwt = false

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[STRIPE-WEBHOOK] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    logStep('Webhook received');
    
    // Get the Stripe webhook secret
    const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }
    
    // Initialize the Stripe client
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });
    
    // Get the request body for verification
    const body = await req.text();
    
    // Get the signature from the headers
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      throw new Error('No Stripe signature found in request headers');
    }
    
    // Initialize Supabase client with the service role key for database operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error('Supabase credentials not set');
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { persistSession: false }
    });
    logStep('Supabase client initialized');
    
    let event;
    
    // If we have a webhook secret, verify the signature
    if (stripeWebhookSecret) {
      try {
        event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
        logStep('Event signature verified', { type: event.type });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        logStep('Webhook signature verification failed', { error: errorMessage });
        return new Response(`Webhook signature verification failed: ${errorMessage}`, { status: 400 });
      }
    } else {
      // Without the webhook secret, just parse the event (less secure, only for testing)
      try {
        event = JSON.parse(body);
        logStep('Event parsed without verification (webhook secret not provided)', { type: event.type });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        logStep('Error parsing event JSON', { error: errorMessage });
        return new Response(`Error parsing event JSON: ${errorMessage}`, { status: 400 });
      }
    }
    
    // Handle specific event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        logStep('Checkout session completed', { 
          sessionId: session.id,
          customerId: session.customer,
          customerEmail: session.customer_email,
          clientReferenceId: session.client_reference_id
        });
        
        // If we have a user ID (client_reference_id), update the subscriber record
        if (session.client_reference_id && (session.customer || session.customer_email)) {
          const userId = session.client_reference_id;
          const customerEmail = session.customer_email;
          const customerId = session.customer;
          
          // Get subscription information if available
          let subscriptionId = null;
          let subscriptionStatus = null;
          let priceId = null;
          
          if (session.subscription) {
            subscriptionId = session.subscription;
            
            // Fetch subscription details to get current period end and status
            try {
              const subscription = await stripe.subscriptions.retrieve(subscriptionId);
              subscriptionStatus = subscription.status;
              
              // Update subscriber record
              if (subscription.items.data.length > 0) {
                priceId = subscription.items.data[0].price.id;
              }
              
              // Map price IDs to tier names
              const priceTierMap: Record<string, string> = {
                'price_1REWe7ENygiWP8cr4O5xXEAe': 'Prompt Master',
                'price_1REWeVENygiWP8crqSQnFXGM': 'AI Assistant Developer',
                'price_1REWoRENygiWP8crFAvjsOkr': 'AI Landing Page Creator',
                'price_1REWonENygiWP8crZNbZL5kU': 'AI Landing Page Workshop',
              };
              
              const subscriptionTier = priceId ? priceTierMap[priceId] || 'Subscription' : null;
              const subscriptionEnd = subscription.current_period_end 
                ? new Date(subscription.current_period_end * 1000).toISOString()
                : null;
                
              logStep('Updating subscriber record', {
                userId,
                email: customerEmail,
                tier: subscriptionTier,
                end: subscriptionEnd,
                status: subscriptionStatus
              });
              
              // Update the subscriber record
              await supabase.from('subscribers').upsert({
                user_id: userId,
                email: customerEmail,
                stripe_customer_id: customerId,
                subscribed: subscriptionStatus === 'active',
                subscription_tier: subscriptionTier,
                subscription_end: subscriptionEnd,
                updated_at: new Date().toISOString(),
              }, { onConflict: 'email' });
              
            } catch (err) {
              const errorMessage = err instanceof Error ? err.message : 'Unknown error';
              logStep('Error fetching subscription', { error: errorMessage, subscriptionId });
            }
          }
        }
        break;
      }
      
      case 'customer.subscription.updated':
      case 'customer.subscription.created': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        
        logStep(`Subscription ${event.type === 'customer.subscription.created' ? 'created' : 'updated'}`, {
          subscriptionId: subscription.id,
          customerId: customerId,
          status: subscription.status
        });
        
        // Fetch customer to get email
        const customer = await stripe.customers.retrieve(customerId as string);
        if (customer.deleted) {
          logStep('Customer has been deleted', { customerId });
          break;
        }
        
        const customerEmail = 'email' in customer ? customer.email : null;
        if (!customerEmail) {
          logStep('No email found for customer', { customerId });
          break;
        }
        
        // Get price ID and determine tier
        let priceId = null;
        if (subscription.items?.data?.length > 0) {
          priceId = subscription.items.data[0].price.id;
        }
        
        // Map price IDs to tier names
        const priceTierMap: Record<string, string> = {
          'price_1REWe7ENygiWP8cr4O5xXEAe': 'Prompt Master',
          'price_1REWeVENygiWP8crqSQnFXGM': 'AI Assistant Developer',
          'price_1REWoRENygiWP8crFAvjsOkr': 'AI Landing Page Creator',
          'price_1REWonENygiWP8crZNbZL5kU': 'AI Landing Page Workshop',
        };
        
        const subscriptionTier = priceId ? priceTierMap[priceId] || 'Subscription' : null;
        const subscriptionEnd = subscription.current_period_end 
          ? new Date(subscription.current_period_end * 1000).toISOString()
          : null;
          
        // Find user by email
        const { data: userData, error: userError } = await supabase
          .from('subscribers')
          .select('user_id')
          .eq('email', customerEmail)
          .limit(1);
          
        if (userError) {
          logStep('Error finding user', { error: userError.message, email: customerEmail });
        }
        
        const userId = userData && userData.length > 0 ? userData[0].user_id : null;
        
        logStep('Updating subscriber record', {
          userId,
          email: customerEmail,
          tier: subscriptionTier,
          end: subscriptionEnd,
          status: subscription.status
        });
        
        // Update subscriber record
        await supabase.from('subscribers').upsert({
          user_id: userId,
          email: customerEmail,
          stripe_customer_id: customerId as string,
          subscribed: subscription.status === 'active',
          subscription_tier: subscriptionTier,
          subscription_end: subscriptionEnd,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'email' });
        
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        
        logStep('Subscription deleted', {
          subscriptionId: subscription.id,
          customerId: customerId
        });
        
        // Fetch customer to get email
        const customer = await stripe.customers.retrieve(customerId as string);
        if (customer.deleted) {
          logStep('Customer has been deleted', { customerId });
          break;
        }
        
        const customerEmail = 'email' in customer ? customer.email : null;
        if (!customerEmail) {
          logStep('No email found for customer', { customerId });
          break;
        }
        
        logStep('Marking subscription as inactive', { email: customerEmail });
        
        // Update subscriber record to mark subscription as inactive
        await supabase.from('subscribers').update({
          subscribed: false,
          subscription_tier: null,
          subscription_end: null,
          updated_at: new Date().toISOString(),
        }).eq('email', customerEmail);
        
        break;
      }
      
      // Add more event handlers as needed
      
      default:
        // Log unhandled event types but return success
        logStep('Unhandled event type', { type: event.type });
    }
    
    logStep('Webhook processed successfully');
    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep('ERROR in webhook processing', { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
