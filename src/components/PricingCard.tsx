
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  priceId: string; // Added Stripe price ID
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  priceId,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const handleSelectPlan = async () => {
    // Save the selected plan to localStorage
    const selectedPlan = { title, price, description, priceId };
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    
    // If user is not logged in, redirect to auth page
    if (!user) {
      toast.info("Please log in to continue with subscription");
      navigate('/auth', { state: { redirectTo: '/checkout' } });
      return;
    }
    
    try {
      // Create Stripe checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId }
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

  return (
    <Card className={`w-full max-w-sm border ${isPopular ? 'border-primary shadow-lg' : 'border-border'} transition-all hover:shadow-md`}>
      <CardHeader>
        {isPopular && (
          <Badge variant="default" className="w-fit mb-2">
            Popular Choice
          </Badge>
        )}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="mt-2 flex items-baseline text-3xl font-extrabold">
          ${price}
        </div>
        <CardDescription className="mt-2 text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={isPopular ? "default" : "outline"} 
          onClick={handleSelectPlan}
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
