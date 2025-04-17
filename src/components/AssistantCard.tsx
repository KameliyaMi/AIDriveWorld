
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

export interface AssistantCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  tags: string[];
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  title,
  description,
  image,
  category,
  rating,
  tags
}) => {
  return (
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
        <button className="w-full py-2 text-center text-ai-purple hover:text-ai-purple-dark font-medium transition-colors">
          Learn More
        </button>
      </CardFooter>
    </Card>
  );
};

export default AssistantCard;
