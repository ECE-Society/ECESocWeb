'use client';

import { useState, useMemo } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Orbitron } from 'next/font/google';
import {
    recruitedCandidates,
    subteamFilters,
    subteamsData,
    recruitmentStats,
    type SubteamId,
    type RecruitedCandidate,
} from '../lib/data';

const orbitron = Orbitron({ subsets: ['latin'], weight: '900' });

export function ResultsSection() {
    const [selectedSubteam, setSelectedSubteam] = useState<SubteamId>('all');

    // Filter subteam groups based on selection
    const visibleSubteams = useMemo(() => {
        if (selectedSubteam === 'all') {
            return subteamsData;
        }
        return subteamsData.filter((group) => group.id === selectedSubteam);
    }, [selectedSubteam]);

    // Total counts
    const totalSelected = useMemo(() => {
        return visibleSubteams.reduce(
            (acc, curr) => ({
                k25: acc.k25 + curr.k25.length,
                k26: acc.k26 + curr.k26.length,
                total: acc.total + curr.k25.length + curr.k26.length,
            }),
            { k25: 0, k26: 0, total: 0 }
        );
    }, [visibleSubteams]);

    return (
        <section id="results-roster" className="relative px-4 sm:px-6 md:px-10 lg:px-12 pb-32 max-w-6xl mx-auto w-full">
            {/* The Unified Result Board Card */}
            <div className="relative bg-[#0e0e0e] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Brand Teal Header Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF]/80 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/5 text-neutral-400 font-mono text-xs sm:text-[13px] uppercase tracking-wider">
                        <div className="flex items-center gap-2.5 text-[#2DD4BF]">
                            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                            <span className="font-semibold">ECE Society // Technical Board</span>
                        </div>
                        <span className="text-neutral-500 hidden sm:inline">
                            Session {recruitmentStats.session} · BIT Mesra
                        </span>
                    </div>

                    {/* Card Title & Roster Stats */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-7 pb-7">
                        <div>
                            <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight text-white ${orbitron.className}`}>
                                Selection Roster
                            </h2>
                            <p className="text-neutral-400 text-sm sm:text-base mt-1.5 font-normal">
                                Official Induction · Department of Electronics &amp; Communication Engineering
                            </p>
                        </div>

                        <div className="self-start sm:self-auto px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs sm:text-sm text-neutral-300">
                            <span className="text-[#2DD4BF] font-bold text-sm sm:text-base">{totalSelected.total}</span> Inducted{' '}
                            <span className="text-neutral-500">
                                ({totalSelected.k25} K25 · {totalSelected.k26} K26)
                            </span>
                        </div>
                    </div>

                    {/* Subteam Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-5 pt-2 border-b border-white/5 scrollbar-none flex-wrap">
                        {subteamFilters.map((subteam) => {
                            const isActive = selectedSubteam === subteam.id;
                            return (
                                <button
                                    key={subteam.id}
                                    onClick={() => setSelectedSubteam(subteam.id)}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? 'bg-[#2DD4BF] text-black font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                                            : 'bg-white/[0.03] text-neutral-400 border border-white/5 hover:border-white/20 hover:text-white'
                                    }`}
                                >
                                    {subteam.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Roster Listing by Subteam (Each with 2 columns: K25 on left, K26 on right) */}
                    <div className="space-y-10 pt-6">
                        {visibleSubteams.map((subteam) => {
                            const subteamTotal = subteam.k25.length + subteam.k26.length;

                            return (
                                <div key={subteam.id} className="space-y-4">
                                    {/* Subteam Header Banner */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 px-4 bg-white/[0.025] border-y border-white/5 rounded-lg">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-[#2DD4BF] font-mono text-sm font-bold">//</span>
                                            <span className={`text-white text-base sm:text-lg font-bold tracking-wider uppercase ${orbitron.className}`}>
                                                {subteam.name}
                                            </span>
                                        </div>
                                        <span className="text-xs sm:text-sm font-mono text-neutral-400">
                                            {subteamTotal} {subteamTotal === 1 ? 'Inductee' : 'Inductees'} (
                                            <span className="text-neutral-300 font-semibold">{subteam.k25.length} K25</span> ·{' '}
                                            <span className="text-neutral-300 font-semibold">{subteam.k26.length} K26</span>)
                                        </span>
                                    </div>

                                    {/* Two Columns Grid: One for K25, One for K26 */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                        {/* ========================================= */}
                                        {/* COLUMN 1: K25 RECRUITS                    */}
                                        {/* ========================================= */}
                                        <div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 sm:p-5 flex flex-col">
                                            {/* Column Header */}
                                            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                                                    <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white">
                                                        K25 Batch
                                                    </h3>
                                                </div>
                                                <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                                    {subteam.k25.length} {subteam.k25.length === 1 ? 'Candidate' : 'Candidates'}
                                                </span>
                                            </div>

                                            {/* Column Table Header */}
                                            <div className="grid grid-cols-12 gap-2 pb-2 text-[11px] font-mono text-neutral-500 uppercase tracking-wider border-b border-white/5 px-2">
                                                <span className="col-span-1">No.</span>
                                                <span className="col-span-5">Name</span>
                                                <span className="col-span-4">Roll Number</span>
                                                <span className="col-span-2 text-right">Branch</span>
                                            </div>

                                            {/* Candidate Rows */}
                                            {subteam.k25.length > 0 ? (
                                                <div className="divide-y divide-white/[0.04] flex-1">
                                                    {subteam.k25.map((candidate, idx) => (
                                                        <div
                                                            key={candidate.id}
                                                            className="py-3 px-2 grid grid-cols-12 items-center gap-2 hover:bg-white/[0.03] rounded-md transition-colors"
                                                        >
                                                            <div className="col-span-1 font-mono text-xs sm:text-sm text-neutral-500">
                                                                {(idx + 1).toString().padStart(2, '0')}
                                                            </div>
                                                            <div className="col-span-5 text-white font-medium text-sm sm:text-[15px] truncate pr-1">
                                                                {candidate.name}
                                                            </div>
                                                            <div className="col-span-4 font-mono text-xs sm:text-[13px] text-neutral-400 truncate">
                                                                {candidate.rollNumber}
                                                            </div>
                                                            <div className="col-span-2 flex justify-end">
                                                                <span className="font-mono text-[11px] sm:text-xs text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded border border-[#2DD4BF]/25 font-semibold">
                                                                    {candidate.branch}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-8 text-center text-xs font-mono text-neutral-500 flex-1 flex items-center justify-center">
                                                    No K25 inductees in this subteam
                                                </div>
                                            )}
                                        </div>

                                        {/* ========================================= */}
                                        {/* COLUMN 2: K26 RECRUITS                    */}
                                        {/* ========================================= */}
                                        <div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 sm:p-5 flex flex-col">
                                            {/* Column Header */}
                                            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                                                    <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white">
                                                        K26 Batch
                                                    </h3>
                                                </div>
                                                <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                                    {subteam.k26.length} {subteam.k26.length === 1 ? 'Candidate' : 'Candidates'}
                                                </span>
                                            </div>

                                            {/* Column Table Header */}
                                            <div className="grid grid-cols-12 gap-2 pb-2 text-[11px] font-mono text-neutral-500 uppercase tracking-wider border-b border-white/5 px-2">
                                                <span className="col-span-1">No.</span>
                                                <span className="col-span-5">Name</span>
                                                <span className="col-span-4">Roll Number</span>
                                                <span className="col-span-2 text-right">Branch</span>
                                            </div>

                                            {/* Candidate Rows */}
                                            {subteam.k26.length > 0 ? (
                                                <div className="divide-y divide-white/[0.04] flex-1">
                                                    {subteam.k26.map((candidate, idx) => (
                                                        <div
                                                            key={candidate.id}
                                                            className="py-3 px-2 grid grid-cols-12 items-center gap-2 hover:bg-white/[0.03] rounded-md transition-colors"
                                                        >
                                                            <div className="col-span-1 font-mono text-xs sm:text-sm text-neutral-500">
                                                                {(idx + 1).toString().padStart(2, '0')}
                                                            </div>
                                                            <div className="col-span-5 text-white font-medium text-sm sm:text-[15px] truncate pr-1">
                                                                {candidate.name}
                                                            </div>
                                                            <div className="col-span-4 font-mono text-xs sm:text-[13px] text-neutral-400 truncate">
                                                                {candidate.rollNumber}
                                                            </div>
                                                            <div className="col-span-2 flex justify-end">
                                                                <span className="font-mono text-[11px] sm:text-xs text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded border border-[#2DD4BF]/25 font-semibold">
                                                                    {candidate.branch}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-8 text-center text-xs font-mono text-neutral-500 flex-1 flex items-center justify-center">
                                                    No K26 inductees in this subteam
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Integrated Institutional Notice & Instagram Button */}
                    <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#2DD4BF]">
                                // Induction Notice
                            </span>
                            <p className="text-neutral-300 text-sm sm:text-[15px] max-w-lg leading-relaxed">
                                Selected inductees will receive orientation schedules through official channels.
                            </p>
                            <div className="flex items-center gap-2 pt-0.5 font-mono text-xs sm:text-sm text-neutral-400">
                                <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                                <span>Venue for 1st General Body Meet will be announced Soon</span>
                            </div>
                        </div>

                        <a
                            href="https://www.instagram.com/ecesociety/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-mono font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-[#2DD4BF] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 w-full md:w-auto justify-center cursor-pointer"
                        >
                            <span>Follow for Updates</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
