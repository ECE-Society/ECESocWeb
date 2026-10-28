'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const RecruitmentSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="group relative max-w-3xl mx-auto bg-[#111]/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-[#2DD4BF]/30 hover:border-[#2DD4BF]/60 p-6 sm:p-8 transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.25)] overflow-hidden text-left"
        >
            {/* Ambient hover glows */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#2DD4BF]/15 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl pointer-events-none" />

            {/* Top shimmer line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-[#2DD4BF]/70 to-transparent" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/25 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2DD4BF] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Recruitment Open
                        </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                        Want to Join <span className="text-[#2DD4BF]">our Team?</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                        We are looking for passionate engineers, coders, and creators to shape the future of electronics at BIT Mesra.
                    </p>
                </div>

                {/* CTA Button */}
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCBTs2TN0WyfGVufZ_ewloCjWYmldzsqTLghH8nGdfFSl2Zw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2DD4BF] text-black font-black uppercase text-xs tracking-[0.15em] hover:bg-white hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
                >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
};
