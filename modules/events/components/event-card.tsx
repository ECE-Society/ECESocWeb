'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { type EventItem } from '../lib/data';
import { SectionReveal } from '@/modules/home/components/section-reveal';

export function EventCard({
    event,
    delay,
    onCardClick,
}: {
    event: EventItem;
    delay: number;
    onCardClick: () => void;
}) {
    const Icon = event.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <SectionReveal delay={delay} className="">
            <motion.div
                onClick={onCardClick}
                className="group relative overflow-hidden cursor-pointer rounded-[3rem] border border-white/5 bg-[#111]/80 backdrop-blur-md transition-all duration-500 flex flex-col shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] hover:border-[#2DD4BF]/40"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px -10px rgba(45,212,191,0.2)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px -20px rgba(0,0,0,0.8)';
                }}
            >
                {/* Glow layers — matching home page card pattern */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2DD4BF]/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none" />

                {/* Top shimmer — teal always */}
                <div className="absolute top-0 left-10 right-10 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-[#2DD4BF]/60 to-transparent" />

                {/* Category badge */}
                {event.category === 'workshop' && (
                    <div className="absolute top-5 right-5 z-10 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 text-[#2DD4BF]">
                        Workshop
                    </div>
                )}

                {/* Card content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col gap-5 flex-1">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 transition-all duration-300 group-hover:border-[#2DD4BF]/40 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#2DD4BF]" />
                    </div>

                    {/* Title — home page h3 style */}
                    <div className="flex flex-col gap-1">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-300 group-hover:text-[#2DD4BF]">
                            {event.title}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{event.tagline}</span>
                    </div>

                    {/* Cover image — object-contain so posters show in full */}
                    {event.image && (
                        <div className="rounded-xl bg-neutral-950/80 p-1.5 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-80 object-contain object-center rounded-lg transition-transform duration-500"
                            />
                        </div>
                    )}

                    {/* Hover-reveal description */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                key="desc"
                                initial={{ opacity: 0, height: 0, y: 8 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 8 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-neutral-300 font-medium leading-relaxed text-sm pt-1 pb-2">
                                    {event.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300 mt-auto">
                        <div className="flex gap-2 flex-wrap">
                            {event.tags.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60 transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div
                            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] transition-colors duration-300"
                            style={{ color: `${event.color}70` }}
                        >
                            <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">View</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionReveal>
    );
}
