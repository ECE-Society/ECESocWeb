'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { SectionReveal } from './section-reveal';
import Link from 'next/link';

const events = [
    {
        title: "Tech-A-Thon",
        date: "July-August 2025",
        location: "Hybrid",
        description: "A month-long, hybrid inter-college innovation sprint that brings together students from across India to build impactful solutions.",
        side: "left"
    },
    {
        title: "Electropoly",
        date: "Mar 14–16, 2025",
        location: "Offline",
        description: "Roll the Dice. Rule the Grid. Where your strategic mind meets high-voltage fun in this electronic monopoly-style board game.",
        side: "right"
    },
    {
        title: "Intern Insights",
        date: "May 13-15, 2025",
        location: "Online",
        description: "A career-forward session connecting students with industry professionals, featuring panel talks, resume critiques, and insider tips.",
        side: "left"
    },
    {
        title: "Codeverse",
        date: "Feb 08, 2025",
        location: "Offline",
        description: "An intense competitive programming contest spanning multiple difficulty tiers — from DSA to system design — crafted to challenge and elevate every coder's limits.",
        side: "right"
    }
];

export const EventsSection = () => {
    return (
        <section className="relative py-10 lg:py-16 px-6 overflow-hidden section-glow-bottom">
            <div className="max-w-[1800px] mx-auto">
                {/* Section Header */}
                <SectionReveal className="text-center mb-12">
                    <div className="flex flex-col gap-6 items-center">
                        <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                            Chronology
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            The <br />
                            <span className="text-[#2DD4BF]">Tech Pulse</span>
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mt-8 font-medium max-w-2xl mx-auto">
                        A detailed journey documenting our workshops, hackathons, and high-tech symposia.
                    </p>
                </SectionReveal>

                <div className="relative">
                    <div className="flex flex-wrap gap-8 md:gap-10">
                        {events.map((event, index) => {
                            // Define widths for asymmetrical grid
                            const widths = [
                                "md:flex-[1_1_58%]",
                                "md:flex-[1_1_35%]",
                                "md:flex-[1_1_35%]",
                                "md:flex-[1_1_58%]"
                            ];

                            return (
                                <SectionReveal
                                    key={index}
                                    delay={index * 0.1}
                                    className={`w-full ${widths[index % 4]} p-10 md:p-12 bg-[#111]/80 backdrop-blur-md rounded-[3rem] border border-white/5 relative group hover:border-[#2DD4BF]/40 transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer`}
                                >
                                    <Link href="/events" className="absolute inset-0 z-20" />
                                    {/* Animated background glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-[#2DD4BF]/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />

                                    <div className="relative z-10 text-left h-full flex flex-col">
                                        <div className="flex flex-col gap-4 mb-6">
                                            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2DD4BF]/10 w-fit border border-[#2DD4BF]/20 transition-all duration-300 group-hover:bg-[#2DD4BF]/20 group-hover:border-[#2DD4BF]/30">
                                                <Calendar className="w-4 h-4 text-[#2DD4BF]" />
                                                <span className="text-[#2DD4BF] font-black text-[10px] uppercase tracking-[0.2em]">{event.date}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-[#2DD4BF] transition-colors leading-tight uppercase tracking-tight">{event.title}</h3>

                                        <p className="text-neutral-400 font-medium leading-relaxed mb-8 text-base md:text-lg group-hover:text-neutral-200 transition-colors max-w-xl">
                                            {event.description}
                                        </p>

                                        <div className="mt-auto flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                            <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-[#2DD4BF]/40 transition-all duration-500" />
                                            <MapPin className="w-4 h-4 text-[#2DD4BF]/50" />
                                            <span className="font-mono">{event.location}</span>
                                        </div>
                                    </div>
                                </SectionReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
