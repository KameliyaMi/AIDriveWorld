import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Для бизнеса', href: '/business' },
    { name: 'Для пользователей', href: '/personal' },
    { name: 'Блог', href: '/blog' },
  ];

  return (
    
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            AIDrive<span className="text-primary">.World</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Button onClick={signOut} variant="outline" className="hidden md:flex">
              Выйти
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="hidden md:flex">
                Войти
              </Button>
            </Link>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                {user ? (
                  <Button onClick={signOut} className="mt-4">
                    Выйти
                  </Button>
                ) : (
                  <Link to="/auth" className="mt-4">
                    <Button className="w-full">Войти</Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
