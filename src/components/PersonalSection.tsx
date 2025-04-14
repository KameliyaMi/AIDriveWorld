
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MessageCircle, Brain, ChevronRight, Check } from 'lucide-react';

const PersonalSection = () => {
  const features = [
    {
      icon: <Calendar size={28} className="text-ai-blue" />,
      title: "Управление расписанием",
      description: "Планирование встреч, напоминания о важных событиях и оптимизация рабочего времени."
    },
    {
      icon: <MessageCircle size={28} className="text-ai-blue" />,
      title: "Персональный консультант",
      description: "Помощь в принятии решений, поиск информации и подготовка рекомендаций."
    },
    {
      icon: <Brain size={28} className="text-ai-blue" />,
      title: "Обучение и развитие",
      description: "Персонализированные программы обучения и отслеживание прогресса в освоении новых навыков."
    },
    {
      icon: <Clock size={28} className="text-ai-blue" />,
      title: "Оптимизация времени",
      description: "Автоматизация рутинных задач и освобождение времени для творчества и отдыха."
    },
  ];

  const useCases = [
    "Планирование ежедневных задач и расписания",
    "Анализ привычек и поиск способов повышения продуктивности",
    "Персонализированные рекомендации по книгам, фильмам, ресторанам",
    "Помощь в организации путешествий и мероприятий",
    "Ассистент для обучения новым навыкам и знаниям"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-ассистенты для личного использования</h2>
          <p className="text-ai-neutral-dark max-w-2xl mx-auto">
            Упростите повседневные задачи, повысьте продуктивность и наслаждайтесь большим количеством свободного времени
            с персональными AI-ассистентами.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 mx-auto max-w-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-ai-blue flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-xl text-ai-purple-dark">Личный помощник</h3>
                  <p className="text-sm text-ai-neutral">Всегда на связи</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-ai-blue/10 p-2 rounded-full mr-3">
                    <Calendar size={20} className="text-ai-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Встреча с клиентом</h4>
                    <p className="text-xs text-ai-neutral">Сегодня, 15:00 - 16:30</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Сегодняшние приоритеты:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-blue flex items-center justify-center">
                        <Check size={12} className="text-ai-blue" />
                      </div>
                      <span className="text-sm">Подготовить презентацию для клиента</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-blue flex items-center justify-center">
                        <Check size={12} className="text-ai-blue" />
                      </div>
                      <span className="text-sm">Отправить ежемесячный отчет</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-neutral/30 flex items-center justify-center">
                      </div>
                      <span className="text-sm">Позвонить в техподдержку</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-ai-blue/10 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    Через 30 минут у вас встреча с Анной. Я подготовил все необходимые материалы, они доступны в папке проекта.
                  </p>
                  <p className="text-xs text-ai-blue">
                    Хотите, чтобы я напомнил вам за 10 минут до начала?
                  </p>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" className="text-xs h-8">Нет, спасибо</Button>
                  <Button size="sm" className="text-xs h-8 bg-ai-blue hover:bg-ai-blue-dark">Да, напомнить</Button>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-ai-blue/30 to-ai-purple/30 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Освободите свое время с персональным AI-ассистентом</h3>
            <p className="text-ai-neutral-dark mb-6">
              Наши персональные AI-ассистенты адаптируются к вашим предпочтениям и помогают эффективно 
              управлять временем, планировать задачи и получать рекомендации.
            </p>
            
            <ul className="space-y-4 mb-8">
              {useCases.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-ai-blue/10 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-ai-blue hover:bg-ai-blue-dark text-white">
              Выбрать персонального ассистента
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-ai-blue/20 transition-all duration-300">
              <div className="bg-ai-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-ai-neutral-dark text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
