import Link from 'next/link';
import { getBlogById } from '@/modules/blogs/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PageAnimator } from '@/modules/blogs/components/page-animator';
import Image from 'next/image';
import { BlogProse } from '@/modules/blogs/components/blog-prose';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getBlogById(id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-32 bg-[#080808] text-on-surface font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed relative overflow-hidden">
            {/* SVG Vector Background */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    {/* Dot grid pattern */}
                    <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="rgba(45,212,191,0.25)" />
                    </pattern>
                    {/* Circuit line pattern */}
                    <pattern id="circuit" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                        <path d="M20 0 L20 40 L60 40 L60 20 L140 20" stroke="rgba(45,212,191,0.18)" strokeWidth="1" fill="none"/>
                        <path d="M0 80 L40 80 L40 120 L100 120 L100 80 L160 80" stroke="rgba(45,212,191,0.18)" strokeWidth="1" fill="none"/>
                        <path d="M80 0 L80 60 L120 60 L120 40" stroke="rgba(45,212,191,0.14)" strokeWidth="1" fill="none"/>
                        <path d="M0 140 L60 140 L60 160" stroke="rgba(45,212,191,0.14)" strokeWidth="1" fill="none"/>
                        <circle cx="20" cy="40" r="2.5" fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
                        <circle cx="60" cy="20" r="2.5" fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
                        <circle cx="100" cy="120" r="2.5" fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
                        <circle cx="40" cy="80" r="2.5" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
                        <circle cx="80" cy="60" r="2.5" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
                    </pattern>
                    {/* Radial gradient mask to fade towards center */}
                    <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#080808" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#080808" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Dot grid layer */}
                <rect width="100%" height="100%" fill="url(#dots)" />
                {/* Circuit lines layer */}
                <rect width="100%" height="100%" fill="url(#circuit)" />
                {/* Vignette mask so centre stays clean for reading */}
                <rect width="100%" height="100%" fill="url(#vignette)" />
            </svg>

            {/* Ambient glow blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#2DD4BF]/[0.06] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.06] blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10">
            <PageAnimator>
                <article className="max-w-5xl mx-auto px-6 lg:px-4">
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
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </section>

                    <div className="w-full max-w-4xl mx-auto">
                        <section className="w-full space-y-2">
                            <BlogProse content={post!.content} />

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
            </div>
        </main>
    );
}
