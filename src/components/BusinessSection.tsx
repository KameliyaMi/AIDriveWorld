
import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, ArrowRight, TrendingUp, Users, MessageSquareText, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessSection = () => {
  const businessCases = [
    {
      icon: <BarChart3 size={24} className="text-ai-purple" />,
      title: "Аналитика данных",
      description: "Автоматизированный анализ больших объемов данных для принятия обоснованных решений."
    },
    {
      icon: <Users size={24} className="text-ai-purple" />,
      title: "HR и рекрутинг",
      description: "Оптимизация процессов подбора и обучения персонала, адаптация новых сотрудников."
    },
    {
      icon: <MessageSquareText size={24} className="text-ai-purple" />,
      title: "Клиентская поддержка",
      description: "Автоматизация обработки запросов, быстрые ответы на вопросы, улучшение качества обслуживания."
    },
    {
      icon: <TrendingUp size={24} className="text-ai-purple" />,
      title: "Маркетинг и продажи",
      description: "Персонализация рекламы, сегментация аудитории, прогнозирование поведения клиентов."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-ассистенты для вашего бизнеса</h2>
          <p className="text-ai-neutral-dark max-w-2xl mx-auto">
            Внедрение искусственного интеллекта в бизнес-процессы позволяет увеличить эффективность,
            сократить расходы и открыть новые возможности для роста.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Увеличьте эффективность бизнес-процессов</h3>
            <p className="text-ai-neutral-dark mb-6">
              Наши AI-решения помогают компаниям автоматизировать рутинные операции, улучшать принятие решений
              на основе данных и оптимизировать рабочие процессы.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-ai-purple/10 p-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Сокращение времени на выполнение задач до 70%</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-ai-purple/10 p-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Уменьшение операционных расходов на 30-50%</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-ai-purple/10 p-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Повышение точности прогнозов до 85%</span>
              </li>
            </ul>
            <Button className="bg-ai-purple hover:bg-ai-purple-dark text-white">
              Запросить консультацию
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-ai-purple-dark font-medium">Аналитический дашборд</h4>
                  <span className="text-xs text-ai-neutral">Реальные данные</span>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-sm">Эффективность отделов</h5>
                      <PieChart size={16} className="text-ai-purple" />
                    </div>
                    <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-ai-purple w-1/4 flex items-center justify-center">
                          <span className="text-white text-xs">25%</span>
                        </div>
                        <div className="bg-ai-blue w-2/5 flex items-center justify-center">
                          <span className="text-white text-xs">40%</span>
                        </div>
                        <div className="bg-ai-purple-light w-1/3 flex items-center justify-center">
                          <span className="text-ai-neutral-dark text-xs">35%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-ai-neutral">
                      <span>Маркетинг</span>
                      <span>Продажи</span>
                      <span>Разработка</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-sm">Рост продаж после внедрения AI</h5>
                      <BarChart2 size={16} className="text-ai-blue" />
                    </div>
                    <div className="flex h-32 items-end justify-between gap-1">
                      <div className="w-1/6 bg-ai-purple/20 rounded-t-sm h-[20%]"></div>
                      <div className="w-1/6 bg-ai-purple/30 rounded-t-sm h-[30%]"></div>
                      <div className="w-1/6 bg-ai-purple/40 rounded-t-sm h-[45%]"></div>
                      <div className="w-1/6 bg-ai-purple/60 rounded-t-sm h-[65%]"></div>
                      <div className="w-1/6 bg-ai-purple/80 rounded-t-sm h-[80%]"></div>
                      <div className="w-1/6 bg-ai-purple rounded-t-sm h-full"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-ai-neutral">
                      <span>Янв</span>
                      <span>Фев</span>
                      <span>Мар</span>
                      <span>Апр</span>
                      <span>Май</span>
                      <span>Июнь</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-ai-purple/30 to-ai-blue/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessCases.map((item, index) => (
            <Card key={index} className="hover:shadow-md hover:border-ai-purple/20 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="bg-ai-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white">
            Все бизнес-решения
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
