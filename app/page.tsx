import { Hero } from "@/modules/home/components/hero";
import { AboutSection } from "@/modules/home/components/about-section";
import { BlogSection } from "@/modules/home/components/blog-section";
import { GallerySection } from "@/modules/home/components/gallery-section";
import { EventsSection } from "@/modules/home/components/events-section";
import { SocialSection } from "@/modules/home/components/social-section";
import { FacultyTestimonials } from "@/modules/home/components/faculty-testimonials";
import { getAllBlogs } from "@/modules/blogs/lib/data";

export default function Home() {
  const allBlogs = getAllBlogs();
  const latestBlogs = allBlogs.slice(0, 7);
  const galleryImages = allBlogs.map(b => b.image).filter(Boolean) as string[];

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
