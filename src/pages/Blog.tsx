
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Wrench, TrendingUp, Shield } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How AI Is Transforming Business in 2025: Tools & Real-World Use Cases',
    description: 'Discover how AI is revolutionizing marketing, HR, finance, and operations with practical tools and implementation strategies',
    date: 'May 28, 2025',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    slug: 'ai-transforming-business-2025',
  },
  {
    id: 2,
    title: '10 Careers AI Won\'t Replace — It Will Empower',
    description: 'Learn how AI enhances rather than replaces key professions and how to future-proof your career',
    date: 'May 25, 2025',
    icon: <Users className="h-8 w-8 text-primary" />,
    slug: 'careers-ai-wont-replace',
  },
  {
    id: 3,
    title: 'Best AI Tools You Should Be Using Right Now',
    description: 'Cut through the tool overload with our curated selection of the most effective AI tools for professionals',
    date: 'May 22, 2025',
    icon: <Wrench className="h-8 w-8 text-primary" />,
    slug: 'best-ai-tools-2025',
  },
  {
    id: 4,
    title: 'AI Trends to Watch in 2025 — and What They Mean for You',
    description: 'Stay ahead with insights on multimodal AI, governance, open-source models, and agent workflows',
    date: 'May 20, 2025',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    slug: 'ai-trends-2025',
  },
  {
    id: 5,
    title: 'Information Security in the Age of AI: How to Protect Your Data, Business, and Reputation',
    description: 'Essential security strategies for businesses leveraging AI while protecting sensitive data and maintaining trust',
    date: 'May 18, 2025',
    icon: <Shield className="h-8 w-8 text-primary" />,
    slug: 'ai-information-security',
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
              Latest insights, trends, and practical advice from the world of artificial intelligence
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
