import { Hero } from "@/modules/home/components/hero";
import { AboutSection } from "@/modules/home/components/about-section";
import { BlogSection } from "@/modules/home/components/blog-section";
import { GallerySection } from "@/modules/home/components/gallery-section";
import { EventsSection } from "@/modules/home/components/events-section";
import { SocialSection } from "@/modules/home/components/social-section";
import { FacultyTestimonials } from "@/modules/home/components/faculty-testimonials";
import { getHomeBlogs } from "@/modules/blogs/lib/data";

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Home() {
  const latestBlogs = getHomeBlogs();
  const galleryImages = shuffleArray([
    '/forgallery/IMG_9815.jpg',
    '/forgallery/IMG_9827.jpg',
    '/forgallery/IMG_9831.jpg',
    '/forgallery/IMG_9904.jpg',
    '/forgallery/IMG_9980.jpg',
    '/forgallery/IMG_9984.jpg',
    '/forgallery/_MG_9611.JPG',
    '/forgallery/_MG_9787.JPG',
    '/forgallery/_MG_9834.JPG',
    '/forgallery/_MG_9846.JPG',
  ]);

  return (
    <main className="min-h-screen selection:bg-tertiary/30 selection:text-tertiary bg-surface text-on-surface flex flex-col">
      <Hero />
      <AboutSection />
      <BlogSection posts={latestBlogs} />
      <EventsSection />
      <GallerySection images={galleryImages} />
      <SocialSection />
      <FacultyTestimonials />
    </main>
  );
}
