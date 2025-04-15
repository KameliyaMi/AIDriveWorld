
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}) => {
  const navigate = useNavigate();
  
  const handleSelectPlan = () => {
    // Сохраняем выбранный тариф в localStorage
    const selectedPlan = { title, price, description };
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    // Перенаправляем на страницу оформления
    navigate('/checkout');
  };

  return (
    <Card className={`w-full max-w-sm border ${isPopular ? 'border-primary shadow-lg' : 'border-border'} transition-all hover:shadow-md`}>
      <CardHeader>
        {isPopular && (
          <Badge variant="default" className="w-fit mb-2">
            Популярный выбор
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
          Выбрать план
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
