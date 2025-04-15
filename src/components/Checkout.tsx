
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

interface SelectedPlan {
  title: string;
  price: number;
  description: string;
}

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the selected plan from localStorage
    const planData = localStorage.getItem('selectedPlan');
    if (planData) {
      setSelectedPlan(JSON.parse(planData));
    } else {
      // If no plan is selected, redirect to the pricing page
      navigate('/pricing');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be payment system integration
    // In this version, we just display a success message
    toast.success('Order successfully placed! We will contact you shortly.');
    // Clear localStorage
    localStorage.removeItem('selectedPlan');
    // Redirect to home page
    setTimeout(() => navigate('/'), 2000);
  };

  if (!selectedPlan) return null;

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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="comments" className="text-sm font-medium">
                    Comments (optional)
                  </label>
                  <textarea
                    id="comments"
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <CardFooter className="flex justify-center pt-4">
              <Button type="submit" size="lg">
                Place Order
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
