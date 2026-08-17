'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Trophy, Medal, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { techathonRound3Results } from '@/modules/events/lib/techathon-results';

export default function TechathonRound3ResultsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResults = techathonRound3Results.filter((result) => {
        const query = searchQuery.toLowerCase();
        return (
            result.teamName.toLowerCase().includes(query) ||
            result.teamLeader.toLowerCase().includes(query)
        );
    });

    return (
        <main className="min-h-screen bg-[#080808] text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#a78bfa]/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-[#a78bfa] transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Events
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#a78bfa]/10 border border-[#a78bfa]/30 mb-6 shadow-[0_0_30px_rgba(167,139,250,0.15)]">
                        <Trophy className="w-8 h-8 text-[#a78bfa]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-2">
                        Round 3 Results
                    </h1>
                    <p className="text-lg md:text-xl text-[#a78bfa] font-bold uppercase tracking-widest mb-4">
                        Presentation of Solution
                    </p>
                    <p className="text-[#a78bfa]/70 font-bold uppercase tracking-[0.2em] mb-4">
                        Tech-A-Thon 5.0
                    </p>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Congratulations to all the teams that have successfully qualified! The competition was fierce, and we are excited for the next phase.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative max-w-xl mx-auto mb-12"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by team or leader name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/50 focus:border-[#a78bfa]/50 transition-all backdrop-blur-md"
                    />
                </motion.div>

                {/* Results List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
                >
                    <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/[0.02] text-xs font-black uppercase tracking-widest text-neutral-400">
                        <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                        <div className="col-span-5 md:col-span-6">Team Name</div>
                        <div className="col-span-5 text-right md:text-left">Team Leader</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {filteredResults.length > 0 ? (
                            filteredResults.map((result, index) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={result.id}
                                    className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-white/5 transition-colors group"
                                >
                                    <div className="col-span-2 md:col-span-1 flex justify-center">
                                        <span className="text-neutral-500 font-bold group-hover:text-[#a78bfa] transition-colors">
                                            {searchQuery ? '-' : index + 1}
                                        </span>
                                    </div>
                                    <div className="col-span-5 md:col-span-6">
                                        <span className="font-bold text-base md:text-lg text-white group-hover:text-[#a78bfa] transition-colors">
                                            {result.teamName}
                                        </span>
                                    </div>
                                    <div className="col-span-5 text-right md:text-left text-neutral-300">
                                        {result.teamLeader}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="p-12 text-center text-neutral-400">
                                {techathonRound3Results.length === 0 ? "Results will be updated soon." : `No teams found matching "${searchQuery}"`}
                            </div>
                        )}
                    </div>
                </motion.div>
                
                <div className="mt-12 text-center text-xs text-neutral-500 max-w-xl mx-auto">
                    <p>
                        Further details will be communicated shortly. For any queries, please reach out to the organizing team.
                    </p>
                </div>
            </div>
        </main>
    );
}
