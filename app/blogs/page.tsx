"use client";

import { blogData } from "@/modules/blogs/lib/data";
import { BlogCard } from "@/modules/blogs/components/blog-card";
import { BlogHero } from "@/modules/blogs/components/blog-hero";
import { motion } from "framer-motion";

export default function BlogListingPage() {
  const featuredPost = blogData[0];
  const regularPosts = blogData.slice(1);

  return (
    <main className="min-h-screen pt-32 pb-32 px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto selection:bg-tertiary/30 selection:text-tertiary bg-surface text-on-surface">
      {/* Featured Hero Section */}
      <BlogHero post={featuredPost} />

      {/* Grid Header */}
      <motion.div 
        className="mb-12 flex flex-col gap-4 border-l-2 border-tertiary pl-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-tertiary font-black tracking-[0.3em] uppercase text-xs">Archive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Latest Investigations</h2>
      </motion.div>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {regularPosts.map((post, index) => (
          <motion.div 
            key={post.id}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </section>
    </main>
  );
}