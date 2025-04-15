
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MessageCircle, Brain, ChevronRight, Check } from 'lucide-react';

const PersonalSection = () => {
  const features = [
    {
      icon: <Calendar size={28} className="text-ai-blue" />,
      title: "Schedule Management",
      description: "Planning meetings, reminders of important events, and optimizing work time."
    },
    {
      icon: <MessageCircle size={28} className="text-ai-blue" />,
      title: "Personal Consultant",
      description: "Help with decision making, information search, and preparation of recommendations."
    },
    {
      icon: <Brain size={28} className="text-ai-blue" />,
      title: "Learning and Development",
      description: "Personalized training programs and tracking progress in acquiring new skills."
    },
    {
      icon: <Clock size={28} className="text-ai-blue" />,
      title: "Time Optimization",
      description: "Automation of routine tasks and freeing up time for creativity and rest."
    },
  ];

  const useCases = [
    "Planning daily tasks and schedules",
    "Analyzing habits and finding ways to increase productivity",
    "Personalized recommendations for books, movies, restaurants",
    "Help with organizing travel and events",
    "Assistant for learning new skills and knowledge"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Assistants for Personal Use</h2>
          <p className="text-ai-neutral-dark max-w-2xl mx-auto">
            Simplify everyday tasks, increase productivity, and enjoy more free time
            with personal AI assistants.
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
                  <h3 className="font-medium text-xl text-ai-purple-dark">Personal Assistant</h3>
                  <p className="text-sm text-ai-neutral">Always available</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-ai-blue/10 p-2 rounded-full mr-3">
                    <Calendar size={20} className="text-ai-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Meeting with client</h4>
                    <p className="text-xs text-ai-neutral">Today, 3:00 PM - 4:30 PM</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Today's priorities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-blue flex items-center justify-center">
                        <Check size={12} className="text-ai-blue" />
                      </div>
                      <span className="text-sm">Prepare presentation for client</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-blue flex items-center justify-center">
                        <Check size={12} className="text-ai-blue" />
                      </div>
                      <span className="text-sm">Send monthly report</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full border border-ai-neutral/30 flex items-center justify-center">
                      </div>
                      <span className="text-sm">Call technical support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-ai-blue/10 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    You have a meeting with Anna in 30 minutes. I've prepared all the necessary materials, they're available in the project folder.
                  </p>
                  <p className="text-xs text-ai-blue">
                    Would you like me to remind you 10 minutes before it starts?
                  </p>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" className="text-xs h-8">No, thanks</Button>
                  <Button size="sm" className="text-xs h-8 bg-ai-blue hover:bg-ai-blue-dark">Yes, remind me</Button>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-ai-blue/30 to-ai-purple/30 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Free up your time with a personal AI assistant</h3>
            <p className="text-ai-neutral-dark mb-6">
              Our personal AI assistants adapt to your preferences and help you effectively
              manage time, plan tasks, and receive recommendations.
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
              Choose a personal assistant
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
