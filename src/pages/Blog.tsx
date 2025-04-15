
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, TrendingUp, Briefcase, BarChartHorizontal, BookOpen as Education } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'AI-ассистенты и их возможности',
    description: 'Обзоры различных типов ассистентов, их особенности и сферы применения',
    date: '15 апреля, 2025',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    slug: 'ai-assistants',
  },
  {
    id: 2,
    title: 'Искусственный интеллект сегодня',
    description: 'Новости, тренды и инсайты из мира AI',
    date: '14 апреля, 2025',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    slug: 'ai-today',
  },
  {
    id: 3,
    title: 'Бизнес-кейсы',
    description: 'Примеры успешного внедрения AI в различных отраслях',
    date: '12 апреля, 2025',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    slug: 'business-cases',
  },
  {
    id: 4,
    title: 'Оптимизация бизнес-процессов',
    description: 'Практические советы по использованию AI для повышения эффективности',
    date: '10 апреля, 2025',
    icon: <BarChartHorizontal className="h-8 w-8 text-primary" />,
    slug: 'business-optimization',
  },
  {
    id: 5,
    title: 'Обучение и инструкции',
    description: 'Образовательные материалы по работе с AI-инструментами',
    date: '8 апреля, 2025',
    icon: <Education className="h-8 w-8 text-primary" />,
    slug: 'education',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
              Блог AIDrive.World
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Последние новости, тренды и практические советы из мира искусственного интеллекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="no-underline">
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {post.icon}
                    <div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <span className="text-sm text-primary font-medium">Читать далее →</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
