'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Clock, Users, Link2, Zap, Medal } from 'lucide-react';
import { liveEvent } from '../lib/data';
import { useState } from 'react';
import Link from 'next/link';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { Techathon2026Modal } from './techathon-2026-modal';

export function LiveEventSpotlight() {
    const [modalOpen, setModalOpen] = useState(false);
    const event = liveEvent;

    return (
        <section className="relative px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-8 max-w-[1600px] mx-auto z-20">
            <Techathon2026Modal open={modalOpen} onClose={() => setModalOpen(false)} />

            <SectionReveal className="mb-10 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                        Live Event
                    </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mt-2">
                    {event.title} is <span className="text-emerald-400">Here.</span>
                </h2>
                <p className="text-neutral-400 max-w-xl mx-auto font-medium">
                    {event.tagline}
                </p>
            </SectionReveal>

            <motion.div
                onClick={() => setModalOpen(true)}
                className="group relative w-full cursor-pointer bg-[#111]/90 backdrop-blur-xl rounded-[3rem] border border-emerald-500/30 overflow-hidden shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)] hover:border-emerald-500/50 hover:shadow-[0_0_80px_-15px_rgba(16,185,129,0.3)] transition-all duration-500"
            >
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/10 opacity-50 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-0">
                    
                    {/* Details Column */}
                    <div className="flex flex-col justify-between gap-8 p-8 md:p-12 lg:p-16">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
                                {event.title}
                            </h3>
                            <p className="text-neutral-300 font-medium leading-relaxed text-lg max-w-xl">
                                {event.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <div className="p-3 bg-yellow-500/10 rounded-xl">
                                        <Trophy className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Prize Pool</div>
                                        <div className="text-xl font-bold text-white">{event.prizePool}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <div className="p-3 bg-emerald-500/10 rounded-xl">
                                        <Clock className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Deadline</div>
                                        <div className="text-lg font-bold text-white">{event.deadline}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link 
                                href="/events/techathon/results" 
                                className="flex-1 sm:flex-none"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] bg-[#a78bfa] text-[#080808] hover:bg-[#c4b5fd] hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)] transition-all duration-300 w-full h-full">
                                    <Medal className="w-4 h-4" />
                                    Round 1 Results
                                </div>
                            </Link>
                            <a 
                                href={event.unstopLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 flex-1 sm:flex-none"
                            >
                                <Link2 className="w-4 h-4" />
                                Unstop
                            </a>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModalOpen(true);
                                }}
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300 flex-1 sm:flex-none"
                            >
                                Details
                            </button>
                        </div>
                    </div>

                    {/* Image Column */}
                    {event.image && (
                        <div className="relative overflow-hidden bg-[#0a0a0a] lg:rounded-r-[3rem] min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-6 lg:p-10">
                            {/* Blurred Background to fill empty space */}
                            <div className="absolute inset-0 opacity-30">
                                <img src={event.image} alt="" className="w-full h-full object-cover blur-3xl scale-125" />
                            </div>
                            
                            {/* Clear Foreground Poster */}
                            <img
                                src={event.image}
                                alt={event.title}
                                loading="eager"
                                className="relative z-10 w-full h-full object-contain max-h-[600px] lg:max-h-[700px] rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 border border-white/10"
                            />
                            
                            {/* Blending gradients */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111]/90 to-transparent pointer-events-none hidden lg:block z-20" />
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111]/90 to-transparent pointer-events-none lg:hidden z-20" />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
