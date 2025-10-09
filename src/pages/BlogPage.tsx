import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getAllBlogPosts, getCategories, filterPostsByCategory, BlogMetadata } from '@/lib/blogUtils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { t, language, languageMeta } = useLanguage();
  const [posts, setPosts] = useState<BlogMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      const blogPosts = await getAllBlogPosts(language);
      setPosts(blogPosts);
      setFilteredPosts(blogPosts);
      setCategories(getCategories(blogPosts));
      setIsLoading(false);
    };

    loadPosts();
  }, [language]);

  useEffect(() => {
    setFilteredPosts(filterPostsByCategory(posts, selectedCategory));
  }, [selectedCategory, posts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fa' ? 'fa-IR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t('blog.title'),
    description: t('blog.blogDescription'),
    url: window.location.href,
    blogPost: filteredPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.image.startsWith('http') ? post.image : `${window.location.origin}${post.image}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author
      },
      url: `${window.location.origin}/${language}/blog/${post.slug}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t('common.home'),
        item: `${window.location.origin}/${language}`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t('blog.title'),
        item: window.location.href
      }
    ]
  };

  return (
    <div dir={languageMeta.direction} className={languageMeta.fontFamily}>
      <SEOHead 
        title={t('blog.blogTitle')}
        description={t('blog.blogDescription')}
        keywords={t('seo.keywords')}
      />
      <SchemaMarkup schema={[blogListSchema, breadcrumbSchema]} />
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('blog.title')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t('blog.blogDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/30 backdrop-blur-sm sticky top-16 z-10 border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="text-sm font-semibold text-foreground/80">{t('blog.filterBy')}:</span>
              <Button
                variant={selectedCategory === '' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('')}
                className="transition-all duration-200 hover:scale-105"
              >
                {t('blog.allCategories')}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">{t('common.noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link 
                    key={post.slug} 
                    to={`/${language}/blog/${post.slug}`}
                    className="group block h-full"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden border-border/50 hover:border-primary/30">
                      <div className="aspect-video overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime} {t('blog.minuteRead')}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl leading-tight">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                          {t('blog.readMore')}
                          <ArrowRight className={`h-4 w-4 group-hover:translate-x-1 transition-transform ${languageMeta.direction === 'rtl' ? 'rotate-180' : ''}`} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
