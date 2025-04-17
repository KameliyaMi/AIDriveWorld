
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AssistantShowcase from '@/components/AssistantShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AssistantShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
