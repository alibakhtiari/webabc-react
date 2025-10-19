import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const About = dynamic(() => import('@/pages/About'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function AboutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <About />
    </Suspense>
  );
}
