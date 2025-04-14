
import React, { useState } from 'react';
import AssistantCard, { AssistantCardProps } from './AssistantCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

// Sample data for the assistant cards
const assistants: AssistantCardProps[] = [
  {
    id: '1',
    title: 'Бизнес-аналитик AI',
    description: 'Анализирует данные компании, предоставляет отчеты и прогнозы для принятия стратегических решений.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80',
    category: 'Бизнес',
    rating: 4.8,
    tags: ['аналитика', 'отчеты', 'прогнозы']
  },
  {
    id: '2',
    title: 'Персональный помощник',
    description: 'Помогает в организации ежедневных задач, напоминаниях и управлении графиком встреч.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80',
    category: 'Личный',
    rating: 4.5,
    tags: ['календарь', 'задачи', 'напоминания']
  },
  {
    id: '3',
    title: 'Маркетинговый стратег',
    description: 'Разрабатывает маркетинговые кампании, анализирует метрики эффективности и предлагает улучшения.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
    category: 'Бизнес',
    rating: 4.6,
    tags: ['маркетинг', 'кампании', 'аналитика']
  },
  {
    id: '4',
    title: 'HR ассистент',
    description: 'Помогает в подборе кандидатов, проведении интервью и адаптации новых сотрудников.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
    category: 'Бизнес',
    rating: 4.3,
    tags: ['HR', 'рекрутинг', 'персонал']
  },
  {
    id: '5',
    title: 'Финансовый консультант',
    description: 'Анализирует финансовые данные, предоставляет рекомендации по инвестициям и оптимизации расходов.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    category: 'Финансы',
    rating: 4.9,
    tags: ['финансы', 'инвестиции', 'бюджет']
  },
  {
    id: '6',
    title: 'Творческий помощник',
    description: 'Генерирует идеи для контента, помогает в написании текстов и создании графического дизайна.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80',
    category: 'Творчество',
    rating: 4.7,
    tags: ['контент', 'дизайн', 'идеи']
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог AI-ассистентов</h2>
          <p className="text-ai-neutral-dark max-w-2xl mx-auto">
            Изучите нашу коллекцию AI-ассистентов, разработанных для различных задач и отраслей. 
            Найдите идеальное решение для ваших потребностей.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ai-neutral" size={18} />
            <Input 
              type="search" 
              placeholder="Поиск ассистентов..." 
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
                Все
              </TabsTrigger>
              <TabsTrigger value="Бизнес" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Бизнес
              </TabsTrigger>
              <TabsTrigger value="Личный" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Личные
              </TabsTrigger>
              <TabsTrigger value="Финансы" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Финансы
              </TabsTrigger>
              <TabsTrigger value="Творчество" className="data-[state=active]:bg-ai-purple data-[state=active]:text-white">
                Творчество
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
          
          {['Бизнес', 'Личный', 'Финансы', 'Творчество'].map((category) => (
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
            <p className="text-ai-neutral-dark text-lg">По вашему запросу не найдено AI-ассистентов</p>
            <p className="text-ai-purple mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AssistantShowcase;
