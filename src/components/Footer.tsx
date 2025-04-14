import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-ai-purple-darkest text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">AI<span className="text-ai-purple">Drive</span>.World</h3>
            <p className="text-gray-300 mb-6">
              Персональные и бизнес AI-ассистенты для вашего успеха. Интегрируйте искусственный интеллект в свою жизнь и бизнес.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ai-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ai-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ai-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ai-purple transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ai-purple transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Каталог AI-ассистентов</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Для бизнеса</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Для личного использования</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-ai-purple" />
                <a href="mailto:4759377@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  4759377@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-ai-purple" />
                <a href="tel:+78001234567" className="text-gray-300 hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-ai-purple mt-1" />
                <span className="text-gray-300">
                  г. Москва, ул. Примерная, д. 123, офис 456
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписка на новости</h4>
            <p className="text-gray-300 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-ai-purple hover:bg-ai-purple-dark w-full">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 AIDrive.World. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
