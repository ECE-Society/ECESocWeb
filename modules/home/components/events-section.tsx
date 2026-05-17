'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { SectionReveal } from './section-reveal';

const events = [
    {
        title: "Silicon Saga",
        date: "Oct 12-14, 2023",
        location: "Main Auditorium",
        description: "A deep dive into the world of semiconductors and VLSI design, featuring industry experts and hands-on workshops.",
        side: "left"
    },
    {
        title: "Electro-Quest",
        date: "Nov 05, 2023",
        location: "ECE Labs",
        description: "The ultimate electronics scavenger hunt where participants solve circuit puzzles to find the hidden treasure.",
        side: "right"
    },
    {
        title: "Signal Summit",
        date: "Dec 20, 2023",
        location: "Virtual Room 4",
        description: "An international conference on signal processing and its applications in modern communication systems.",
        side: "left"
    },
    {
        title: "Bot-Build 2.0",
        date: "Jan 15-18, 2024",
        location: "Robotics Arena",
        description: "Build, program, and battle your own autonomous robots in this high-octane competitive event.",
        side: "right"
    }
];

export const EventsSection = () => {
    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-10 lg:py-0 px-6 relative overflow-hidden section-glow-bottom">
            <div className="max-w-[1800px] mx-auto">
                {/* Section Header */}
                <SectionReveal className="text-center mb-32">
                    <div className="flex flex-col gap-6 items-center w-full">
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
                    </div>
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
                                    className={`w-full ${widths[index % 4]} p-10 md:p-12 bg-[#111]/80 backdrop-blur-md rounded-[3rem] border border-white/5 relative group hover:border-[#2DD4BF]/40 transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] overflow-hidden`}
                                >
                                    {/* Animated background glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-[#2DD4BF]/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />

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
