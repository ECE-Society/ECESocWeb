'use client';

import { motion } from 'framer-motion';

export function EventsHero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-48 pb-32 overflow-hidden">
            <div className="flex flex-col items-center gap-6 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-[#2DD4BF] font-black tracking-[0.4em] uppercase text-xs mb-2"
                >
                    ECE Society · Events
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
                >
                    <span className="text-white">Our</span>{' '}
                    <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.35)]">Events</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                    className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mt-2"
                >
                    Where circuits meet creativity. Explore the signature events crafted by the ECE Society
                    to challenge, inspire, and connect the engineering community.
                </motion.p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        </section>
    );
}
