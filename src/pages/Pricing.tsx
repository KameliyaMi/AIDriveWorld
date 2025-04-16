
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';

const Pricing = () => {
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
    },
  ];

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
