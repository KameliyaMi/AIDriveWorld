
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Prompt Master',
      price: 50,
      description: 'Профессиональное составление промптов по заданию клиента',
      features: [
        'Разработка эффективных промптов',
        'Оптимизация под конкретные AI-модели',
        'Итеративная доработка до результата',
        'Консультация по применению',
      ],
      isPopular: false,
    },
    {
      title: 'AI Assistant Developer',
      price: 150,
      description: 'Разработка полноценного AI-ассистента с настроенным рабочим процессом',
      features: [
        'Разработка системы взаимосвязанных промптов',
        'Настройка рабочего процесса',
        'Комплексное тестирование',
        'Документация по использованию',
        'Техническая поддержка',
      ],
      isPopular: true,
    },
    {
      title: 'AI Landing Page Creator',
      price: 150,
      description: 'Создание лендингов с применением AI-технологий',
      features: [
        'Дизайн с использованием AI',
        'Полная интеграция с GitHub',
        'Настройка автоматического деплоя',
        'SEO-оптимизация',
        'Адаптивный дизайн',
      ],
      isPopular: false,
    },
    {
      title: 'AI Landing Page Workshop',
      price: 100,
      description: 'Интенсивное часовое обучение созданию лендингов с использованием AI',
      features: [
        'Практический подход к обучению',
        'Интеграция с GitHub',
        'Индивидуальная программа',
        'Материалы для самостоятельной работы',
        'Поддержка после обучения',
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
                Тарифные планы
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Выберите план, который подходит именно вам и вашим задачам
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Нужен индивидуальный план?</h2>
              <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
                Если ни один из стандартных планов не соответствует вашим потребностям, мы можем разработать индивидуальное решение.
              </p>
              <Button variant="outline" size="lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Button = ({ children, variant = "default", size = "default", className = "" }) => {
  const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-11 px-8 text-base",
  };
  
  return (
    <button 
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Pricing;
