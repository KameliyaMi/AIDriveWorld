
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface SelectedPlan {
  title: string;
  price: number;
  description: string;
  priceId: string;
}

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Ensure user is logged in
    if (!user) {
      navigate('/auth', { state: { redirectTo: '/checkout' } });
      return;
    }
    
    // Get the selected plan from localStorage
    const planData = localStorage.getItem('selectedPlan');
    if (planData) {
      setSelectedPlan(JSON.parse(planData));
    } else {
      // If no plan is selected, redirect to the pricing page
      navigate('/pricing');
    }
  }, [navigate, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan || !user) {
      toast.error('Missing plan information or user not logged in');
      return;
    }
    
    try {
      // Create Stripe checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: selectedPlan.priceId }
      });

      if (error) {
        console.error('Error creating checkout session:', error);
        toast.error('Could not initiate checkout. Please try again.');
        return;
      }

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error in checkout process:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  if (!selectedPlan || !user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
            Complete Your Order
          </h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Selected Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{selectedPlan.title}</span>
                  <span className="font-bold">${selectedPlan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit}>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Your profile information will be used for billing
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      readOnly
                      className="w-full p-2 border rounded-md bg-gray-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="comments" className="text-sm font-medium">
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="comments"
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    placeholder="Any specific requirements or questions about your subscription"
                  />
                </div>
              </CardContent>
            </Card>

            <CardFooter className="flex justify-center pt-4">
              <Button type="submit" size="lg">
                Proceed to Payment
              </Button>
            </CardFooter>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
