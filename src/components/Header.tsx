
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { toast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из своего аккаунта",
    });
    navigate('/');
  };

  const getInitials = () => {
    if (!user) return "U";
    return user.email?.[0].toUpperCase() || "U";
  };

  return (
    <header className="w-full py-4 px-6 md:px-10 lg:px-20 bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-5xl font-bold text-primary">AI<span className="text-primary-dark">Drive</span>.World</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/catalog" className="text-ai-neutral-dark hover:text-ai-purple transition-colors">
            AI Catalog
          </Link>
          <Link to="/business" className="text-ai-neutral-dark hover:text-ai-purple transition-colors">
            For Business
          </Link>
          <Link to="/personal" className="text-ai-neutral-dark hover:text-ai-purple transition-colors">
            For Personal Use
          </Link>
          <Link to="/blog" className="text-ai-neutral-dark hover:text-ai-purple transition-colors">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px]">
                  <div className="flex flex-col gap-6 pt-10">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={user.user_metadata?.avatar_url} />
                        <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.user_metadata?.username || user.email}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="justify-start" onClick={() => navigate('/profile')}>
                        <User className="mr-2 h-4 w-4" />
                        Мой профиль
                      </Button>
                      <Button variant="destructive" className="justify-start" onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Выйти
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="text-ai-neutral-dark hover:text-ai-purple"
                onClick={() => navigate('/auth')}>
                Войти
              </Button>
              <Button className="bg-ai-purple hover:bg-ai-purple-dark text-white"
                onClick={() => {
                  navigate('/auth');
                }}>
                Регистрация
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 animate-slide-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/catalog" 
              className="text-ai-neutral-dark hover:text-ai-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Catalog
            </Link>
            <Link 
              to="/business" 
              className="text-ai-neutral-dark hover:text-ai-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Business
            </Link>
            <Link 
              to="/personal" 
              className="text-ai-neutral-dark hover:text-ai-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Personal Use
            </Link>
            <Link 
              to="/blog" 
              className="text-ai-neutral-dark hover:text-ai-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-2 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium truncate">{user.email}</span>
                  </div>
                  <Button variant="outline" className="justify-center" onClick={() => {
                    navigate('/profile');
                    setIsMenuOpen(false);
                  }}>
                    <User className="mr-2 h-4 w-4" />
                    Мой профиль
                  </Button>
                  <Button variant="destructive" className="justify-center" onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="justify-center text-ai-neutral-dark hover:text-ai-purple"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}>
                    Войти
                  </Button>
                  <Button className="justify-center bg-ai-purple hover:bg-ai-purple-dark text-white"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}>
                    Регистрация
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
