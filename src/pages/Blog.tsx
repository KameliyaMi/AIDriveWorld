
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, TrendingUp, Briefcase, BarChartHorizontal, BookOpen as Education } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'AI Assistants and Their Capabilities',
    description: 'Overview of different types of assistants, their features, and application areas',
    date: 'April 15, 2025',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    slug: 'ai-assistants',
  },
  {
    id: 2,
    title: 'Artificial Intelligence Today',
    description: 'News, trends, and insights from the world of AI',
    date: 'April 14, 2025',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    slug: 'ai-today',
  },
  {
    id: 3,
    title: 'Business Case Studies',
    description: 'Examples of successful AI implementation across various industries',
    date: 'April 12, 2025',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    slug: 'business-cases',
  },
  {
    id: 4,
    title: 'Business Process Optimization',
    description: 'Practical tips on using AI to increase efficiency',
    date: 'April 10, 2025',
    icon: <BarChartHorizontal className="h-8 w-8 text-primary" />,
    slug: 'business-optimization',
  },
  {
    id: 5,
    title: 'Training and Instructions',
    description: 'Educational materials for working with AI tools',
    date: 'April 8, 2025',
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
              AIDrive.World Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Latest news, trends, and practical advice from the world of artificial intelligence
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
                    <span className="text-sm text-primary font-medium">Read more →</span>
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
