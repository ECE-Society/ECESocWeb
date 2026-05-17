'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogHero = ({ post }: { post: BlogPost }) => {
    // Basic reading time estimation (approx 200 words per minute)
    const wordCount = post.content === "Content pending" ? 500 : post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] min-h-[600px] mb-20 md:mb-32 rounded-[3.5rem] overflow-hidden group">
            {/* Immersive Background Image */}
            <div className="absolute inset-0">
                {post.imageUrl && (
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                )}
                {/* Layered Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/30 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16 lg:p-24 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-8 max-w-4xl"
                >
                    {/* Featured Badge */}
                    <div className="glass-panel w-fit px-5 py-2 rounded-full border border-tertiary/20 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        <span className="text-tertiary font-black tracking-[0.2em] uppercase text-[10px]">
                            Featured Entry
                        </span>
                    </div>

                    {/* Meta Info (Date & Author) */}
                    <div className="flex items-center gap-4 text-on-surface-variant font-black text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md w-fit px-4 py-2 rounded-lg border border-white/5">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>{post.author}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                        {post.title.split(':').map((part, i) => (
                            <span key={i} className="block last:text-tertiary">
                                {part}{i === 0 && post.title.includes(':') ? ':' : ''}
                            </span>
                        ))}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-on-surface-variant text-lg md:text-xl font-medium leading-relaxed max-w-2xl line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-wrap items-center gap-8 mt-4">
                        <Link href={`/blogs/${post.id}`}>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-tertiary hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 flex items-center gap-4 text-xs"
                            >
                                Read Investigation
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <div className="flex items-center gap-3 text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">
                            <Clock className="w-4 h-4 text-tertiary/60" />
                            <span>Est. {readingTime} min read</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Inner Interactive Border */}
            <div className="absolute inset-6 border border-white/5 rounded-[2.8rem] pointer-events-none transition-all duration-700 group-hover:border-tertiary/20" />
        </section>
    );
};
