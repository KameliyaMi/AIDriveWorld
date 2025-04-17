
import React, { useState } from 'react';
import AssistantCard, { AssistantCardProps } from './AssistantCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

// Enhanced data for the assistant cards with detailed descriptions
const assistants: AssistantCardProps[] = [
  {
    id: '1',
    title: 'Business Analyst AI',
    description: 'Sophisticated AI solution that transforms raw business data into actionable insights. Analyzes financial performance, market trends, and operational metrics to generate comprehensive reports and accurate forecasts. Helps identify growth opportunities, optimize resource allocation, and support data-driven decision making across all levels of your organization.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.8,
    tags: ['analytics', 'reports', 'forecasts', 'insights']
  },
  {
    id: '2',
    title: 'Personal Assistant',
    description: 'Intelligent AI assistant that streamlines your daily workflow by managing schedules, appointments, and tasks. Features advanced calendar integration, smart prioritization of activities, and automated reminders for important deadlines. Adapts to your working style over time to provide increasingly personalized support, helping you save up to 5 hours weekly on administrative tasks.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80',
    category: 'Personal',
    rating: 4.5,
    tags: ['calendar', 'tasks', 'reminders', 'scheduling']
  },
  {
    id: '3',
    title: 'Marketing Strategist',
    description: 'Cutting-edge AI platform for developing data-driven marketing strategies and campaigns. Analyzes consumer behavior, market trends, and competitor activities to identify optimal marketing channels and messaging. Provides real-time campaign performance tracking with automated optimization recommendations. Helps increase conversion rates by an average of 23% while reducing customer acquisition costs.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.6,
    tags: ['marketing', 'campaigns', 'analytics', 'optimization']
  },
  {
    id: '4',
    title: 'HR Assistant',
    description: 'Comprehensive HR management solution powered by AI. Streamlines recruitment by screening resumes, scheduling interviews, and identifying top candidates based on skill matching. Facilitates efficient onboarding processes with personalized training plans and documentation management. Provides insights on team performance, satisfaction metrics, and retention strategies to build stronger organizational culture.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.3,
    tags: ['HR', 'recruiting', 'personnel', 'onboarding']
  },
  {
    id: '5',
    title: 'Financial Advisor',
    description: 'Sophisticated AI financial assistant that provides personalized investment recommendations and expense optimization strategies. Analyzes spending patterns, market conditions, and risk profiles to create tailored financial plans. Features include automated budget tracking, investment portfolio analysis, tax optimization suggestions, and retirement planning scenarios to help maximize returns and achieve long-term financial goals.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    category: 'Finance',
    rating: 4.9,
    tags: ['finance', 'investments', 'budget', 'planning']
  },
  {
    id: '6',
    title: 'Creative Assistant',
    description: 'Innovative AI creativity partner that enhances content creation across multiple formats. Generates unique content ideas tailored to your brand voice, assists with writing compelling copy, and provides design suggestions for visuals. Helps overcome creative blocks, streamlines production workflows, and ensures consistent brand messaging. Perfect for marketing teams, content creators, and design professionals looking to boost productivity.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80',
    category: 'Creative',
    rating: 4.7,
    tags: ['content', 'design', 'ideas', 'creativity']
  },
];

const AssistantShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');
  
  // Filter assistants based on search term and category
  const filteredAssistants = assistants.filter(assistant => {
    const matchesSearch = assistant.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          assistant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          assistant.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                        
    const matchesCategory = currentCategory === 'all' || assistant.category.toLowerCase() === currentCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Assistant Catalog</h2>
          <p className="text-ai-neutral-dark max-w-2xl mx-auto">
            Explore our collection of AI assistants designed for various tasks and industries.
            Find the perfect solution for your needs.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ai-neutral" size={18} />
            <Input 
              type="search" 
              placeholder="Search assistants..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setCurrentCategory}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="Business" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Business
              </TabsTrigger>
              <TabsTrigger value="Personal" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Personal
              </TabsTrigger>
              <TabsTrigger value="Finance" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Finance
              </TabsTrigger>
              <TabsTrigger value="Creative" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Creative
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssistants.map((assistant) => (
                <AssistantCard key={assistant.id} {...assistant} />
              ))}
            </div>
          </TabsContent>
          
          {['Business', 'Personal', 'Finance', 'Creative'].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssistants.map((assistant) => (
                  <AssistantCard key={assistant.id} {...assistant} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {filteredAssistants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ai-neutral-dark text-lg">No AI assistants found matching your search</p>
            <p className="text-ai-purple mt-2">Try changing your search parameters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AssistantShowcase;
