
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

interface SubscriptionInfo {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
}

const Pricing = () => {
  const { user } = useAuth();
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const pricingPlans = [
    {
      title: 'Prompt Master',
      price: 50,
      description: 'Professional prompt creation tailored to client requirements',
      features: [
        'Develop effective prompts',
        'Optimize for specific AI models',
        'Iterative refinement until desired result',
        'Consultation on application',
      ],
      isPopular: false,
      priceId: 'price_1REWe7ENygiWP8cr4O5xXEAe',
    },
    {
      title: 'AI Assistant Developer',
      price: 150,
      description: 'Development of a comprehensive AI assistant with a configured workflow',
      features: [
        'Development of interconnected prompt systems',
        'Workflow configuration',
        'Comprehensive testing',
        'Usage documentation',
        'Technical support',
      ],
      isPopular: true,
      priceId: 'price_1REWeVENygiWP8crqSQnFXGM',
    },
    {
      title: 'AI Landing Page Creator',
      price: 150,
      description: 'Creating landing pages using AI technologies',
      features: [
        'Design using AI',
        'Full GitHub integration',
        'Automatic deployment setup',
        'SEO optimization',
        'Responsive design',
      ],
      isPopular: false,
      priceId: 'price_1REWoRENygiWP8crFAvjsOkr',
    },
    {
      title: 'AI Landing Page Workshop',
      price: 100,
      description: 'Intensive one-hour training on creating landing pages using AI',
      features: [
        'Practical learning approach',
        'GitHub integration',
        'Personalized program',
        'Self-study materials',
        'Post-training support',
      ],
      isPopular: false,
      priceId: 'price_1REWonENygiWP8crZNbZL5kU',
    },
  ];

  const checkSubscription = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Error checking subscription:', error);
        toast.error('Could not verify subscription status.');
        return;
      }
      
      setSubscriptionInfo(data as SubscriptionInfo);
    } catch (error) {
      console.error('Subscription check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        console.error('Error opening portal:', error);
        toast.error('Could not open subscription management.');
        return;
      }
      
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Customer portal error:', error);
      toast.error('Could not open subscription management.');
    }
  };

  useEffect(() => {
    if (user) {
      checkSubscription();
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
                Pricing Plans
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Choose a plan that fits your needs and tasks
              </p>
              
              {user && subscriptionInfo?.subscribed && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-medium text-green-800">
                    You are currently subscribed to: <span className="font-bold">{subscriptionInfo.subscription_tier}</span>
                  </p>
                  {subscriptionInfo.subscription_end && (
                    <p className="text-sm text-green-700 mt-1">
                      Your subscription is active until {new Date(subscriptionInfo.subscription_end).toLocaleDateString()}
                    </p>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={openCustomerPortal}
                    className="mt-2"
                  >
                    Manage Subscription
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  priceId={plan.priceId}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
              <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
                If none of the standard plans meet your requirements, we can develop a custom solution tailored to your specific needs.
              </p>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
