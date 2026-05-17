import dynamic from 'next/dynamic';

// Dynamically import Three.js to avoid SSR issues
const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <ThreeBackground />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
    </div>
  );
}