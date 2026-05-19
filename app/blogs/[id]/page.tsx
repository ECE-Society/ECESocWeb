import Link from 'next/link';
import { getBlogById } from '@/modules/blogs/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, Share2, Quote, Satellite, Brain } from 'lucide-react';
import { PageAnimator } from '@/modules/blogs/components/page-animator';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getBlogById(id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-12 pb-32 bg-surface text-on-surface font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
            <PageAnimator>
                <article className="max-w-4xl mx-auto px-6 lg:px-0">
                    <nav className="mb-16">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-label text-sm uppercase tracking-widest font-bold">Back to Blogs</span>
                        </Link>
                    </nav>

                    <header className="space-y-8 mb-20">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 bg-surface-container text-tertiary-fixed font-label text-[10px] uppercase tracking-[0.2em] rounded-full">
                                {post.tags[0] || 'Editorial'}
                            </span>
                            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1]">
                                {post.title}
                            </h1>
                        </div>
                        <div className="pt-6">
                            <span className="font-label text-sm text-zinc-300 uppercase tracking-wider">Published {post.date}</span>
                        </div>
                    </header>

                    <section className="mb-20 flex justify-center">
                        <div className="relative w-full max-w-xl aspect-square rounded-3xl overflow-hidden editorial-shadow bg-surface-container-low">
                            {post.image && (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            )}
                        </div>
                    </section>

                    <div className="flex flex-col lg:flex-row gap-16">
                        <aside className="hidden lg:flex flex-col gap-8 w-12 sticky top-12 h-fit">
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary">
                                <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <div className="h-24 w-[2px] bg-surface-container mx-auto rounded-full overflow-hidden">
                                <div className="h-1/3 w-full bg-tertiary-fixed"></div>
                            </div>
                        </aside>

                        <section className="flex-1 space-y-10">
                            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:text-white prose-a:text-tertiary-fixed prose-strong:text-white prose-p:text-on-surface-variant prose-p:leading-relaxed prose-th:text-white prose-table:border-outline-variant/10">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                            </div>

                            {post.contributors && post.contributors.length > 0 && (
                                <div className="pt-10 border-t border-outline-variant/10">
                                    <h3 className="font-headline text-lg font-bold text-white mb-6">Contributors</h3>
                                    <div className="flex flex-wrap gap-6">
                                        {post.contributors.map(contributor => (
                                            <div key={contributor} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold text-tertiary-fixed ring-1 ring-outline-variant/30">
                                                    {contributor.charAt(0)}
                                                </div>
                                                <span className="text-sm text-on-surface-variant font-medium">{contributor}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-3 pt-12 border-t border-outline-variant/10">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-surface-container text-on-surface-variant text-xs rounded-full cursor-default transition-all">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>
            </PageAnimator>
        </main>
    );
}
