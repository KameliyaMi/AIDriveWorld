
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
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
              Personal and business AI assistants for your success. Integrate artificial intelligence into your life and business.
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
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-ai-purple" />
                <a href="mailto:aidrive.world@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  aidrive.world@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MessageSquare size={18} className="mr-3 text-ai-purple mt-1" />
                <a href="https://t.me/KameliyaMi" className="text-gray-300 hover:text-white transition-colors">
                  @KameliyaMi
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-ai-purple mt-1" />
                <span className="text-gray-300">
                  Limassol, Spyridonos Lamprou St.
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-ai-purple hover:bg-ai-purple-dark w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 AIDrive.World. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-6 text-sm justify-center">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
