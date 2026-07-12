'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { flagshipEvent } from '../lib/data';
import { TechathonModal } from './techathon-modal';
import { useState } from 'react';
import { SectionReveal } from '@/modules/home/components/section-reveal';

export function FlagshipCard() {
    const [modalOpen, setModalOpen] = useState(false);
    const event = flagshipEvent;
    const Icon = event.icon;
    const BadgeIcon = event.badgeIcon;

    return (
        <>
            <TechathonModal open={modalOpen} onClose={() => setModalOpen(false)} />

            <SectionReveal className="mb-12 text-center flex flex-col items-center gap-6">
                <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                    Featured
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    Our Flagship <br />
                    <span className="text-[#2DD4BF]">Event</span>
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                    The signature festival that defines our year — bringing together the brightest ECE minds for a month-long innovation sprint.
                </p>
            </SectionReveal>

            {/* Full-width flagship card */}
            <motion.div
                onClick={() => setModalOpen(true)}
                className="group relative w-full bg-[#111]/80 backdrop-blur-md rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] border border-white/5 hover:border-[#2DD4BF]/40 hover:shadow-[0_0_60px_-10px_rgba(45,212,191,0.2)]"
            >
                {/* Glow layers — matching home page card pattern */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2DD4BF]/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />



                {/* Content — image first on mobile, side-by-side on lg */}
                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_1.8fr] gap-0">
                    {/* Image — shown first on mobile (order-first), right column on lg */}
                    {event.image && (
                        <div className="relative overflow-hidden bg-neutral-950/80 lg:rounded-r-[3rem] min-h-[240px] lg:min-h-[420px] order-first lg:order-last">
                            <img
                                src={event.image}
                                alt={event.title}
                                loading="eager"
                                className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-700"
                            />
                            {/* Fade overlay on left edge for desktop */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111]/80 to-transparent pointer-events-none hidden lg:block" />
                        </div>
                    )}

                    {/* Text — below image on mobile, left column on lg */}
                    <div className="flex flex-col justify-between gap-6 p-8 md:p-10 lg:p-14 order-last lg:order-first">
                        {/* Upper content group */}
                        <div className="flex flex-col gap-6">
                            {/* Icon + label and Badges */}
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 transition-all duration-300 group-hover:border-[#2DD4BF]/40">
                                        <Icon className="w-6 h-6 text-[#2DD4BF]" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF]">
                                        {event.tagline}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    {/* Flagship badge */}
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/10">
                                        <BadgeIcon className="w-3 h-3 text-[#2DD4BF]" style={{ fill: '#2DD4BF' }} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2DD4BF]">
                                            {event.badgeLabel}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight group-hover:text-[#2DD4BF] transition-colors duration-500 uppercase tracking-tight">
                                {event.title}
                            </h2>

                            {/* Description */}
                            <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300 max-w-lg">
                                {event.description}
                            </p>

                            {/* Metadata chips */}
                            <div className="flex flex-wrap gap-3">
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                    📅 {event.date}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                    📍 {event.location}
                                </span>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                            className="group/btn flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer bg-[#111] border border-white/10 text-white hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 hover:text-[#2DD4BF] hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.4)] w-full sm:w-auto justify-center sm:justify-start"
                        >
                            <span>Explore Event</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
