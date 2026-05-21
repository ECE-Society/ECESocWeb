import Link from 'next/link';
import { BlogPost } from '../types';
import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';

export function BlogCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  const wordCount = post.content === "Content pending" ? 500 : post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <Link href={`/blogs/${post.id}`} className="flex flex-col group p-6 rounded-2xl border border-outline-variant/10 bg-surface-container-low/30 hover:bg-surface-container-low transition-all h-full">
      <div className="aspect-square mb-8 overflow-hidden rounded-xl bg-surface-container-low relative">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </div>
      <div className="flex items-center space-x-3 text-on-surface-variant font-label text-[11px] uppercase tracking-widest mb-4">
        <span>{post.date}</span>
      </div>
      <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 leading-snug group-hover:text-tertiary transition-colors">
        {post.title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <div className="inline-flex items-center space-x-2 text-white text-base group/link relative">
          <span>Read Article</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant font-label text-[10px] uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5 text-tertiary/60" />
          <span>Est. {readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
