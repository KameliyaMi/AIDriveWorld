
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Check, Mail, MessageSquare } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <Card className={`w-full max-w-sm border ${isPopular ? 'border-primary shadow-lg' : 'border-border'} transition-all hover:shadow-md`}>
      <CardHeader>
        {isPopular && (
          <Badge variant="default" className="w-fit mb-2">
            Popular Choice
          </Badge>
        )}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
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
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full" 
              variant={isPopular ? "default" : "outline"}
            >
              Subscribe
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Contact Information</DialogTitle>
              <DialogDescription>
                Get in touch with us to subscribe to {title}.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ai-purple" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:aidrive.world@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    aidrive.world@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-ai-purple" />
                <div>
                  <p className="font-medium">Telegram</p>
                  <a 
                    href="https://t.me/KameliyaMi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @KameliyaMi
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
