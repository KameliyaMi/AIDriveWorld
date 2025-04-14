
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-9xl font-bold text-ai-purple">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-ai-purple-darkest">Страница не найдена</h1>
          <p className="text-lg text-ai-neutral mb-8">
            Извините, но страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link to="/">
            <Button className="bg-ai-purple hover:bg-ai-purple-dark text-white">
              <ArrowLeft size={16} className="mr-2" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
