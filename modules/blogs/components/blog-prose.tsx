'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React from 'react';

/* ─── Custom Component Map ──────────────────────────────────────── */
const components: React.ComponentProps<typeof ReactMarkdown>['components'] = {

    /* H1 — already shown in the page header, so render as a decorated H2 */
    h1: ({ children }) => (
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight mt-16 mb-6 border-b border-white/10 pb-4">
            {children}
        </h1>
    ),

    /* H2 — major section heading with a cyan accent line */
    h2: ({ children }) => (
        <div className="mt-14 mb-6">
            <div className="flex items-center gap-4">
                <span className="w-1 h-8 bg-[#2DD4BF] rounded-full shrink-0" />
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {children}
                </h2>
            </div>
        </div>
    ),

    /* H3 — sub-heading with subtle styling */
    h3: ({ children }) => (
        <h3 className="text-xl font-bold text-[#2DD4BF]/90 mt-10 mb-4 tracking-wide uppercase text-sm">
            {children}
        </h3>
    ),

    /* Paragraph */
    p: ({ children }) => (
        <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6">
            {children}
        </p>
    ),

    /* Blockquote — styled callout card */
    blockquote: ({ children }) => (
        <div className="my-8 rounded-2xl bg-[#111] border border-[#2DD4BF]/20 shadow-[0_0_40px_-15px_rgba(45,212,191,0.25)] overflow-hidden">
            <div className="border-l-4 border-[#2DD4BF] px-6 py-5">
                <div className="text-[#2DD4BF]/80 italic text-lg leading-relaxed [&>p]:mb-0">
                    {children}
                </div>
            </div>
        </div>
    ),

    /* Ordered list — styled container */
    ol: ({ children }) => (
        <div className="my-6 rounded-2xl bg-[#0e0e0e] border border-[#2DD4BF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] p-6">
            <ol className="list-none space-y-3 counter-reset-list">
                {React.Children.map(children, (child, i) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child as React.ReactElement<any>, { 'data-index': i + 1 })
                        : child
                )}
            </ol>
        </div>
    ),

    /* Unordered list — styled container */
    ul: ({ children }) => (
        <div className="my-6 rounded-2xl bg-[#0e0e0e] border border-[#2DD4BF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] p-6">
            <ul className="list-none space-y-3">
                {children}
            </ul>
        </div>
    ),

    /* List item */
    li: ({ children, ...props }) => {
        const index = (props as any)['data-index'];
        return (
            <li className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed">
                {index != null ? (
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-black flex items-center justify-center mt-0.5">
                        {index}
                    </span>
                ) : (
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2.5" />
                )}
                <span className="flex-1">{children}</span>
            </li>
        );
    },

    /* Strong / bold */
    strong: ({ children }) => (
        <strong className="text-white font-bold">{children}</strong>
    ),

    /* Inline code */
    code: ({ children, className }) => {
        const isBlock = className?.includes('language-');
        if (isBlock) {
            return (
                <div className="my-6 rounded-xl bg-[#0a0a0a] border border-[#2DD4BF]/10 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                            {className?.replace('language-', '') ?? 'code'}
                        </span>
                        <span className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        </span>
                    </div>
                    <pre className="p-5 overflow-x-auto text-sm text-zinc-300 font-mono leading-relaxed">
                        <code>{children}</code>
                    </pre>
                </div>
            );
        }
        return (
            <code className="px-1.5 py-0.5 rounded bg-[#1a1a1a] border border-white/10 text-[#2DD4BF] text-sm font-mono">
                {children}
            </code>
        );
    },

    /* Horizontal rule — decorative divider */
    hr: () => (
        <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
            <div className="flex-1 h-px bg-white/10" />
        </div>
    ),

    /* Table */
    table: ({ children }) => (
        <div className="my-8 rounded-2xl overflow-hidden border border-[#2DD4BF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <table className="w-full text-sm text-zinc-300">{children}</table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-[#2DD4BF]/10 text-[#2DD4BF] text-xs uppercase tracking-widest">
            {children}
        </thead>
    ),
    tr: ({ children }) => (
        <tr className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
            {children}
        </tr>
    ),
    th: ({ children }) => <th className="px-5 py-3 text-left font-bold">{children}</th>,
    td: ({ children }) => <td className="px-5 py-3">{children}</td>,

    /* Links */
    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2DD4BF] underline underline-offset-4 hover:text-white transition-colors"
        >
            {children}
        </a>
    ),
};

export function BlogProse({ content }: { content: string }) {
    return (
        <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    );
}
