
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className="text-ai-neutral-dark hover:text-ai-purple">
            Login
          </Button>
          <Button className="bg-ai-purple hover:bg-ai-purple-dark text-white">
            Get Started
          </Button>
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
              <Button variant="ghost" className="justify-center text-ai-neutral-dark hover:text-ai-purple">
                Login
              </Button>
              <Button className="justify-center bg-ai-purple hover:bg-ai-purple-dark text-white">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
