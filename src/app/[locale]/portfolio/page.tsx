import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Portfolio = dynamic(() => import('@/pages/Portfolio'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <Portfolio />
    </Suspense>
  );
}
