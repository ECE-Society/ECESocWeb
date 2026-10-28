'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Audiowide, Orbitron } from 'next/font/google';
import { ArrowUpRight } from 'lucide-react';
import { MouseParticles } from './mouse-particles';
import { SectionReveal } from './section-reveal';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });
const orbitron = Orbitron({ subsets: ['latin'], weight: '900' });

export const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen overflow-hidden section-glow-bottom">
            {/* Background interactive particles */}
            <MouseParticles />

            <SectionReveal className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto w-full">
                {/* Recruitment Top Button */}
                <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCBTs2TN0WyfGVufZ_ewloCjWYmldzsqTLghH8nGdfFSl2Zw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#111]/85 hover:bg-[#161616] border border-[#2DD4BF]/40 hover:border-[#2DD4BF] backdrop-blur-xl shadow-[0_0_25px_rgba(45,212,191,0.25)] hover:shadow-[0_0_40px_rgba(45,212,191,0.5)] transition-all duration-300 mb-8 cursor-pointer z-30"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DD4BF]" />
                    </span>
                    <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-white group-hover:text-[#2DD4BF] transition-colors">
                        EceSoc Is Recruiting
                    </span>
                    <span className="text-[#2DD4BF] font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#2DD4BF]/15 border border-[#2DD4BF]/30">
                        Apply Now
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#2DD4BF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <div className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-transparent via-[#2DD4BF]/70 to-transparent" />
                </motion.a>

                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-[#2DD4BF] font-black tracking-[0.4em] uppercase text-xs mb-10 text-center"
                >
                    Welcome to Electronics & Communication
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-[9.5rem] mb-12 flex flex-wrap justify-center gap-x-8 leading-[0.85] uppercase"
                >
                    <div className={`relative group cursor-default ${orbitron.className}`}>
                        <span className="text-white relative z-10">ECE</span>
                        {/* Retro Glitch Layers */}
                        <span className="absolute inset-0 text-[#2DD4BF] opacity-40 -translate-x-1.5 translate-y-0.5 blur-[1px] pointer-events-none group-hover:animate-pulse">ECE</span>
                        <span className="absolute inset-0 text-red-500/30 opacity-30 translate-x-1.5 -translate-y-0.5 blur-[1px] pointer-events-none">ECE</span>
                    </div>
                    <span className={`text-[#2DD4BF] drop-shadow-[0_0_30px_rgba(45,212,191,0.3)] ${audiowide.className}`}>Society</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="max-w-2xl text-neutral-400 leading-relaxed text-lg md:text-xl font-medium mb-16 px-4"
                >
                    Empowering the next generation of engineers through neural-interfaced design, technical excellence, and hardware innovation. We bridge the gap between human logic and silicon execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    <Link href="/events">
                        <button className="px-12 py-6 border-2 border-transparent bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-[#2DD4BF] hover:text-black hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:cursor-pointer transition-all duration-500 transform hover:-translate-y-1 text-xs">
                            Explore Our Events
                        </button>
                    </Link>
                    <Link href="/alumni">
                        <button className="px-12 py-6 border-2 border-white/10 text-white font-black uppercase tracking-widest rounded-full hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 hover:cursor-pointer transition-all duration-500 transform hover:-translate-y-1 text-xs backdrop-blur-sm">
                            Meet Our Alumni
                        </button>
                    </Link>
                </motion.div>
            </SectionReveal>

            {/* Bottom Section Bleed */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none z-20" />
        </section>
    );
};
