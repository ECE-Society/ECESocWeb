'use client';

import Image from 'next/image';
import { SectionReveal } from './section-reveal';

export const AboutSection = () => {
    return (
        <section id="about" className="relative min-h-[100vh] flex flex-col justify-center py-10 lg:py-0 px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto section-glow-bottom">
            {/* Background Glow (Subtle) */}
            <div className="accent-glow top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />

            <SectionReveal className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                            Our Identity
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Synthesizing Talent & <br />
                            <span className="text-[#2DD4BF]">Technology</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                        <p>
                            Since its inception, ECESOC has served as the neural hub for engineering students.
                            We bridge the gap between theoretical schematics and real-world silicon applications.
                        </p>
                        <p>
                            From high-frequency communication labs to embedded system workshops,
                            we foster an environment where every "bit" of knowledge translates into tangible progress.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-black text-white tracking-tighter">
                                500<span className="text-[#2DD4BF] text-3xl">+</span>
                            </span>
                            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em]">Active Members</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-black text-white tracking-tighter">
                                40<span className="text-[#2DD4BF] text-3xl">+</span>
                            </span>
                            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em]">Annual Events</span>
                        </div>
                    </div>
                </div>

                {/* Right Image Container */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-4xl aspect-[4/3] p-2 bg-gradient-to-br from-[#2DD4BF]/20 to-transparent rounded-[3rem] overflow-hidden group transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(45,212,191,0.3)]">
                        <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden border border-white/10 group-hover:border-[#2DD4BF]/50 bg-[#080808] transition-colors duration-700">
                            <Image
                                src="/home/batch.PNG"
                                alt="ECESOC Team Representation"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Cyan Under-Glow on Hover */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-[#2DD4BF]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                        {/* Decorative Blur Layers */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2DD4BF]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
};
