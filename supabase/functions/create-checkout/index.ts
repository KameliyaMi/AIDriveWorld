
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@12.18.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper logging function for enhanced debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    logStep('Function started');

    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }
    logStep('Stripe key verified');

    const { priceId } = await req.json();
    if (!priceId) {
      throw new Error('Price ID is required');
    }
    logStep('Request data validated', { priceId });

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });

    // Get auth user from request headers
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header provided');
    }
    const token = authHeader.replace('Bearer ', '');

    // Call Supabase auth API to get user info
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL or anon key not set');
    }

    const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'apikey': supabaseAnonKey
      }
    });

    const userData = await userResponse.json();
    if (!userData?.email) {
      throw new Error('User not authenticated or email not available');
    }
    logStep('User authenticated', { email: userData.email });

    // Check if user already exists as a Stripe customer
    const customers = await stripe.customers.list({ email: userData.email, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep('Existing customer found', { customerId });
    }

    // Get origin for success and cancel URLs
    const origin = req.headers.get('origin') || 'http://localhost:5173';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : userData.email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${origin}/pricing?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=canceled`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      payment_method_types: ['card'],
      client_reference_id: userData.id,
    });

    logStep('Checkout session created', { sessionId: session.id, url: session.url });

    // Return session URL for client-side redirect
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep('ERROR', { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
