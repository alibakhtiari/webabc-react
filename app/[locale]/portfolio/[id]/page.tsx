import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { portfolioItems } from '@/lib/portfolioData';

const PortfolioItemPage = dynamic(() => import('@/components/PortfolioItemPage'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

interface PortfolioItemPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function PortfolioItemRoute(props: PortfolioItemPageProps) {
  const { locale, id } = await props.params;
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <PortfolioItemPage portfolioItems={portfolioItems} id={id} />
    </Suspense>
  );
}

// Generate metadata for portfolio items
export async function generateMetadata(props: PortfolioItemPageProps) {
  const { locale, id } = await props.params;
  // In a real app, you'd fetch portfolio data based on id
  const title = `Portfolio Item ${id} | WebABC`;
  const description = `View detailed portfolio case study for project ${id} by WebABC digital agency.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${id}`,
      languages: {
        'fa-IR': `/fa/portfolio/${id}`,
        'en-US': `/en/portfolio/${id}`,
        'ar-SA': `/ar/portfolio/${id}`,
      },
    },
  };
}

// Generate static params for all portfolio items (for SSG)
export async function generateStaticParams() {
  // In a real app, you'd fetch all portfolio items
  const portfolioIds = ['1', '2', '3']; // Example IDs

  const params = [];
  const locales = ['fa', 'en', 'ar'];

  for (const locale of locales) {
    for (const id of portfolioIds) {
      params.push({
        locale,
        id,
      });
    }
  }

  return params;
}
