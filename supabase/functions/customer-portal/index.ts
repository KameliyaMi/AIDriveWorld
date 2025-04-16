
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@12.18.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CUSTOMER-PORTAL] ${step}${detailsStr}`);
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

    // Find customer by email
    const customers = await stripe.customers.list({ email: userData.email, limit: 1 });
    
    if (customers.data.length === 0) {
      throw new Error('No customer found for this user');
    }
    
    const customerId = customers.data[0].id;
    logStep('Found Stripe customer', { customerId });

    // Create customer portal session
    const origin = req.headers.get('origin') || 'http://localhost:5173';
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/pricing`,
    });
    
    logStep('Customer portal session created', { url: portalSession.url });

    return new Response(JSON.stringify({ url: portalSession.url }), {
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
