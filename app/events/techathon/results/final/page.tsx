'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronLeft, Medal } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function TechathonFinalResultsPage() {
    useEffect(() => {
        // Fire confetti on mount
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#2DD4BF', '#a78bfa', '#f59e0b']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#2DD4BF', '#a78bfa', '#f59e0b']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    return (
        <main className="min-h-screen bg-[#080808] text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient glows and grid */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden flex justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2DD4BF]/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#a78bfa]/10 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-[#2DD4BF] transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Events
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 mb-6 shadow-[0_0_30px_rgba(45,212,191,0.15)]">
                        <Trophy className="w-8 h-8 text-[#2DD4BF]" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest mb-4">
                        Final Results
                    </h1>
                    <p className="text-xl md:text-2xl text-[#2DD4BF] font-bold uppercase tracking-widest mb-4">
                        Tech-a-Thon 5.0
                    </p>
                    <p className="text-neutral-400 max-w-2xl mx-auto mt-6">
                        The ultimate showdown has concluded. We are thrilled to announce the top 3 winning teams who have pushed the boundaries of innovation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                    className="h-px w-32 bg-gradient-to-r from-transparent via-[#2DD4BF]/50 to-transparent mx-auto mb-16"
                />

                {/* Top 3 Teams Skeleton Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8 mb-20 px-4"
                >
                    {/* Runner Up 1 (2nd Place) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="flex-1 w-full flex flex-col items-center order-2 md:order-1"
                    >
                        <div className="w-full bg-gradient-to-t from-slate-900/50 to-slate-900/10 border border-slate-700/50 rounded-t-3xl pt-8 pb-12 px-4 flex flex-col items-center relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(148,163,184,0.15)] md:h-[280px] hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(148,163,184,0.4)] transition-all duration-300">
                            <Medal className="w-12 h-12 text-slate-300 mb-4 drop-shadow-[0_0_15px_rgba(203,213,225,0.4)]" />
                            <div className="text-3xl font-black text-white mb-2">2nd</div>
                            <div className="text-sm text-slate-300 uppercase tracking-widest font-bold text-center leading-snug">CLAUDE PAGLU</div>
                        </div>
                    </motion.div>

                    {/* Winner (1st Place) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex-[1.2] w-full flex flex-col items-center order-1 md:order-2 z-10 -mb-4 md:mb-0"
                    >
                        <div className="w-full bg-gradient-to-t from-[#2DD4BF]/20 to-[#2DD4BF]/5 border border-[#2DD4BF]/40 rounded-t-3xl pt-10 pb-16 px-4 flex flex-col items-center relative overflow-hidden backdrop-blur-md shadow-[0_0_60px_-15px_rgba(45,212,191,0.3)] md:h-[340px] hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_0_80px_-15px_rgba(45,212,191,0.6)] transition-all duration-300">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-50" />
                            <Trophy className="w-16 h-16 text-[#2DD4BF] mb-4 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
                            <div className="text-4xl font-black text-white mb-2">1st</div>
                            <div className="text-sm text-[#2DD4BF] uppercase tracking-widest font-bold text-center leading-snug drop-shadow-[0_0_10px_rgba(45,212,191,0.5)] mt-1">SERIOUS SUMMER</div>
                        </div>
                    </motion.div>

                    {/* Runner Up 2 (3rd Place) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        className="flex-1 w-full flex flex-col items-center order-3 md:order-3"
                    >
                        <div className="w-full bg-gradient-to-t from-amber-900/40 to-amber-900/10 border border-amber-700/40 rounded-t-3xl pt-8 pb-12 px-4 flex flex-col items-center relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(217,119,6,0.2)] md:h-[260px] hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(217,119,6,0.4)] transition-all duration-300">
                            <Medal className="w-12 h-12 text-amber-500 mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
                            <div className="text-3xl font-black text-white mb-2">3rd</div>
                            <div className="text-sm text-amber-400 uppercase tracking-widest font-bold text-center leading-snug">INNOVATION INSURGENTS</div>
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-center text-sm text-neutral-400 max-w-2xl mx-auto px-4"
                >
                    <p className="leading-relaxed">
                        A huge congratulations to all the participating teams! Your dedication, late-night coding sessions, and innovative solutions have truly set a new benchmark for excellence. We are incredibly proud of the talent showcased in Tech-a-Thon 5.0.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
