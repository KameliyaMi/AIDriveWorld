
import React, { useState } from 'react';
import AssistantCard, { AssistantCardProps } from './AssistantCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const assistants: AssistantCardProps[] = [
  {
    id: '1',
    title: 'Business Analyst AI',
    description: 'Sophisticated AI solution that transforms raw business data into actionable insights.',
    detailedDescription: 'Business Analyst AI is an advanced artificial intelligence system designed to revolutionize business intelligence and strategic decision-making. By leveraging advanced machine learning algorithms and big data processing, this AI assistant provides comprehensive analysis of complex business landscapes.',
    benefits: [
      'Generate real-time financial performance reports',
      'Identify emerging market trends and opportunities',
      'Predict potential risks and develop mitigation strategies',
      'Optimize resource allocation and budget planning',
      'Provide data-driven insights for executive decision-making'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.8,
    tags: ['analytics', 'reports', 'forecasts', 'insights']
  },
  {
    id: '2',
    title: 'Personal Assistant',
    description: 'Intelligent AI assistant that streamlines your daily workflow by managing schedules and tasks.',
    detailedDescription: 'The Personal Assistant AI is a cutting-edge productivity tool that seamlessly integrates into your professional and personal life. Using advanced natural language processing and machine learning, it adapts to your unique working style and preferences.',
    benefits: [
      'Automate schedule management and appointment booking',
      'Prioritize tasks based on urgency and importance',
      'Send intelligent reminders and notifications',
      'Learn and adapt to individual work patterns',
      'Reduce administrative workload by up to 60%'
    ],
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80',
    category: 'Personal',
    rating: 4.5,
    tags: ['calendar', 'tasks', 'reminders', 'scheduling']
  },
  {
    id: '3',
    title: 'Marketing Strategist',
    description: 'Cutting-edge AI platform for developing data-driven marketing strategies and campaigns.',
    detailedDescription: 'The Marketing Strategist AI is a comprehensive digital marketing solution that transforms how businesses approach customer engagement and brand growth. By analyzing vast amounts of consumer data and market trends, it creates highly targeted and effective marketing strategies.',
    benefits: [
      'Develop personalized marketing campaigns',
      'Analyze consumer behavior and sentiment',
      'Optimize marketing channels and messaging',
      'Predict campaign performance and ROI',
      'Reduce customer acquisition costs'
    ],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.6,
    tags: ['marketing', 'campaigns', 'analytics', 'optimization']
  },
  {
    id: '4',
    title: 'HR Assistant',
    description: 'Comprehensive HR management solution powered by AI to streamline recruitment and team management.',
    detailedDescription: 'The HR Assistant AI is a comprehensive human resources management system that transforms traditional HR processes. By integrating advanced AI technologies, it provides end-to-end support in talent acquisition, employee development, and organizational culture enhancement.',
    benefits: [
      'Automate resume screening and candidate matching',
      'Create personalized onboarding experiences',
      'Monitor team performance and engagement',
      'Develop targeted training and development programs',
      'Improve hiring quality and retention rates'
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80',
    category: 'Business',
    rating: 4.3,
    tags: ['HR', 'recruiting', 'personnel', 'onboarding']
  },
  {
    id: '5',
    title: 'Financial Advisor',
    description: 'Sophisticated AI financial assistant providing personalized investment and financial planning.',
    detailedDescription: 'The Financial Advisor AI is an intelligent financial management platform that offers comprehensive wealth management and financial strategy services. Using advanced predictive analytics, it provides personalized financial guidance tailored to individual or business financial goals.',
    benefits: [
      'Create personalized investment portfolios',
      'Analyze market trends and investment opportunities',
      'Optimize tax planning strategies',
      'Provide real-time financial risk assessment',
      'Develop long-term financial growth plans'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    category: 'Finance',
    rating: 4.9,
    tags: ['finance', 'investments', 'budget', 'planning']
  },
  {
    id: '6',
    title: 'Creative Assistant',
    description: 'Innovative AI creativity partner that enhances content creation across multiple formats.',
    detailedDescription: 'The Creative Assistant AI is an advanced content generation and ideation platform designed to spark creativity and streamline content production. By combining natural language processing with generative AI technologies, it provides intelligent support for various creative industries.',
    benefits: [
      'Generate unique content ideas',
      'Assist in writing and copywriting',
      'Provide design and visual content suggestions',
      'Maintain consistent brand voice',
      'Overcome creative blocks and boost productivity'
    ],
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
