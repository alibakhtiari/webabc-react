import BlogPostClient from '@/components/BlogPostClient';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function BlogPostRoute({ params: { locale, slug } }: BlogPostPageProps) {
  return <BlogPostClient slug={slug} />;
}

// Generate metadata for blog posts
export async function generateMetadata({ params: { locale, slug } }: BlogPostPageProps) {
  try {
    // In a real app, you'd fetch the blog post data based on slug and locale
    // For now, we'll use placeholder metadata
    const title = `${slug.replace(/-/g, ' ').toUpperCase()} | WebABC Blog`;
    const description = `Read our comprehensive guide about ${slug.replace(/-/g, ' ')} in our blog.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/blog/${slug}`,
        languages: {
          'fa-IR': `/fa/blog/${slug}`,
          'en-US': `/en/blog/${slug}`,
          'ar-SA': `/ar/blog/${slug}`,
        },
      },
      openGraph: {
        title,
        description,
        type: 'article',
        images: [
          {
            url: '/og-image-blog.png',
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/og-image-blog.png'],
      },
    };
  } catch (error) {
    // If post not found, return 404
    return {
      title: 'Post Not Found | WebABC',
      description: 'The requested blog post could not be found.',
    };
  }
}

// Generate static params for all blog posts (for SSG)
export async function generateStaticParams() {
  // In a real app, you'd fetch all blog posts for all locales
  // This would generate pages at build time for better performance
  const locales = ['fa', 'en', 'ar'];

  // Example slugs - in real app, fetch from your blog data
  const blogSlugs = [
    'seo-best-practices-2025',
    'web-design-trends-2025',
    'digital-marketing-strategies',
    'wordpress-vs-custom-development',
    'mobile-first-design-2025'
  ];

  const params = [];

  for (const locale of locales) {
    for (const slug of blogSlugs) {
      params.push({
        locale,
        slug,
      });
    }
  }

  return params;
}
