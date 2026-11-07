'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ResultsHero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-12 overflow-hidden">
            <div className="flex flex-col items-center gap-6 relative z-10 max-w-4xl mx-auto">
                {/* Official Induction Eyebrow Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-white/10 shadow-[0_0_20px_rgba(45,212,191,0.1)]"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2DD4BF]">
                        Session 2026-27 · BIT Mesra
                    </span>
                </motion.div>

                {/* Main Headline matching site-wide Space Grotesque font */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] font-headline text-white"
                >
                    <span className="whitespace-nowrap inline-block text-white">
                        Recruitment&apos;26
                    </span>{' '}
                    <br className="hidden sm:inline" />
                    <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.35)] whitespace-nowrap inline-block">
                        Results
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="text-neutral-400 text-sm md:text-base lg:text-lg font-normal max-w-2xl leading-relaxed"
                >
                    Official selection list for the upcoming academic tenure. Congratulations to all newly inducted members joining the Electronics &amp; Communication Engineering Society.
                </motion.p>

                {/* Navigation Link */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                    className="flex flex-wrap items-center justify-center gap-3 pt-2"
                >
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                        ← Return to Homepage
                    </Link>
                </motion.div>
            </div>

            {/* Bottom section ambient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        </section>
    );
}
