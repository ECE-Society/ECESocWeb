'use client';

import { motion } from 'framer-motion';
import { MouseParticles } from './mouse-particles';
import { SectionReveal } from './section-reveal';

export const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen overflow-hidden section-glow-bottom">
            {/* Background interactive particles */}
            <MouseParticles />

            <SectionReveal className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto w-full">
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
                    className="text-7xl md:text-[9.5rem] font-black mb-12 flex flex-wrap justify-center gap-x-8 leading-[0.85] tracking-tighter uppercase"
                >
                    <div className="relative group cursor-default">
                        <span className="text-white relative z-10">ECE</span>
                        {/* Retro Glitch Layers */}
                        <span className="absolute inset-0 text-[#2DD4BF] opacity-40 -translate-x-1.5 translate-y-0.5 blur-[1px] pointer-events-none group-hover:animate-pulse">ECE</span>
                        <span className="absolute inset-0 text-red-500/30 opacity-30 translate-x-1.5 -translate-y-0.5 blur-[1px] pointer-events-none">ECE</span>
                    </div>
                    <span className="text-[#2DD4BF] drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">Society</span>
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
                    <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-[#2DD4BF] hover:text-black hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1 text-xs">
                        Discover Innovation
                    </button>
                    <button className="px-12 py-6 border-2 border-white/10 text-white font-black uppercase tracking-widest rounded-full hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-500 transform hover:-translate-y-1 text-xs backdrop-blur-sm">
                        Past Archive
                    </button>
                </motion.div>
            </SectionReveal>

            {/* Bottom Section Bleed */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none z-20" />
        </section>
    );
};
