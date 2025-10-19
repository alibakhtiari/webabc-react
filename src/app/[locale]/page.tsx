import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load the Home component for better performance
const Home = dynamic(() => import('@/pages/Home'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function LocalePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <Home />
    </Suspense>
  );
}
