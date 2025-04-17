
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

export interface AssistantCardProps {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  image: string;
  category: string;
  rating: number;
  tags: string[];
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  title,
  description,
  detailedDescription,
  benefits,
  image,
  category,
  rating,
  tags
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover-scale border-2 border-transparent hover:border-ai-purple/20 transition-all">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          />
          <Badge className="absolute top-3 right-3 bg-ai-purple text-white">
            {category}
          </Badge>
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl text-ai-purple-darkest">{title}</CardTitle>
            <div className="flex items-center">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100 text-ai-neutral-dark text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50">
          <Button 
            onClick={() => setIsDialogOpen(true)} 
            className="w-full"
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <DialogDescription className="mb-4">
                {detailedDescription}
              </DialogDescription>
              <h3 className="text-lg font-semibold mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-ai-neutral-dark">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssistantCard;
