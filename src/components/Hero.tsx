
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-ai-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-ai-blue opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-ai-purple">Персональные</span> и <span className="text-ai-blue">бизнес</span> AI-ассистенты для вашего успеха
            </h1>
            <p className="text-lg md:text-xl text-ai-neutral-dark mb-8 max-w-xl mx-auto lg:mx-0">
              Откройте новые возможности с искусственным интеллектом. Интегрируйте AI-ассистентов для оптимизации процессов и увеличения эффективности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-ai-purple hover:bg-ai-purple-dark text-white px-8 py-6">
                Для личного использования
                <ChevronRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white px-8 py-6">
                Для бизнеса
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 mx-auto max-w-md animate-float">
              <div className="bg-ai-purple-light/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-ai-purple flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-ai-purple-dark">AI Ассистент</h3>
                    <p className="text-xs text-ai-neutral">Онлайн</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm">Как я могу увеличить эффективность отдела маркетинга с помощью AI?</p>
                  </div>
                  <div className="bg-ai-purple/10 rounded-lg p-3 ml-6">
                    <p className="text-sm">Я могу помочь с автоматизацией контент-маркетинга, анализом данных, персонализацией коммуникаций и оптимизацией рекламных кампаний.</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm">Какие инструменты ты рекомендуешь для начала?</p>
                  </div>
                  <div className="bg-ai-purple/10 rounded-lg p-3 ml-6 animate-pulse-glow">
                    <p className="text-sm">Рекомендую начать с интеграции аналитического AI для анализа целевой аудитории и оптимизации контента на основе данных...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-ai-purple-light/50 to-ai-blue-light/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
