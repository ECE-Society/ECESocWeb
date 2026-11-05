'use client';

import { useState, useMemo } from 'react';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { Orbitron } from 'next/font/google';
import {
    recruitedCandidates,
    recruitmentDomains,
    recruitmentStats,
    type RecruitmentDomain,
    type RecruitedCandidate,
} from '../lib/data';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '800', '900'] });

const domainsList: Exclude<RecruitmentDomain, 'All'>[] = [
    'Core',
    'Tech',
    'Design',
    'Video Editing',
];

export function ResultsSection() {
    const [selectedDomain, setSelectedDomain] = useState<RecruitmentDomain>('All');

    const filteredCandidates = useMemo(() => {
        return recruitedCandidates.filter((candidate) => {
            return selectedDomain === 'All' || candidate.domain === selectedDomain;
        });
    }, [selectedDomain]);

    // Group candidates by domain
    const groupedDomains = useMemo(() => {
        const groups: { domain: Exclude<RecruitmentDomain, 'All'>; candidates: RecruitedCandidate[] }[] = [];

        domainsList.forEach((domain) => {
            if (selectedDomain === 'All' || selectedDomain === domain) {
                const candidates = filteredCandidates.filter((c) => c.domain === domain);
                if (candidates.length > 0) {
                    groups.push({ domain, candidates });
                }
            }
        });

        return groups;
    }, [filteredCandidates, selectedDomain]);

    return (
        <section id="results-roster" className="relative px-4 sm:px-6 md:px-12 pb-32 max-w-4xl mx-auto w-full">
            {/* The Unified Result Board Card */}
            <div className="relative bg-[#0e0e0e] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
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
                                Department of Electronics &amp; Communication Engineering
                            </p>
                        </div>

                        <div className="self-start sm:self-auto px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs sm:text-sm text-neutral-300">
                            <span className="text-[#2DD4BF] font-bold text-sm sm:text-base">{filteredCandidates.length}</span> Inducted
                        </div>
                    </div>

                    {/* Domain Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-5 pt-2 border-b border-white/5 scrollbar-none flex-wrap">
                        {recruitmentDomains.map((domain) => {
                            const isActive = selectedDomain === domain.id;
                            return (
                                <button
                                    key={domain.id}
                                    onClick={() => setSelectedDomain(domain.id)}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? 'bg-[#2DD4BF] text-black font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                                            : 'bg-white/[0.03] text-neutral-400 border border-white/5 hover:border-white/20 hover:text-white'
                                    }`}
                                >
                                    {domain.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Table Column Labels for Desktop */}
                    <div className="hidden sm:grid grid-cols-12 gap-4 py-3.5 px-4 text-xs sm:text-[13px] font-mono text-neutral-500 uppercase tracking-wider border-b border-white/5 mt-5">
                        <span className="col-span-1">No.</span>
                        <span className="col-span-5">Candidate Name</span>
                        <span className="col-span-4">Roll Number</span>
                        <span className="col-span-2 text-right">Branch</span>
                    </div>

                    {/* Roster Listing by Domain */}
                    {groupedDomains.length > 0 ? (
                        <div className="space-y-7 pt-4">
                            {groupedDomains.map(({ domain, candidates }) => (
                                <div key={domain} className="space-y-1.5">
                                    {/* Domain Section Header */}
                                    <div className="flex items-center justify-between py-3 px-4 bg-white/[0.02] border-y border-white/5 rounded-md">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-[#2DD4BF] font-mono text-sm font-bold">//</span>
                                            <span className={`text-white text-sm sm:text-base font-bold tracking-wider uppercase ${orbitron.className}`}>
                                                {domain} Domain
                                            </span>
                                        </div>
                                        <span className="text-xs sm:text-sm font-mono text-neutral-400">
                                            {candidates.length} {candidates.length === 1 ? 'Inductee' : 'Inductees'}
                                        </span>
                                    </div>

                                    {/* Candidate Rows */}
                                    <div className="divide-y divide-white/[0.04]">
                                        {candidates.map((candidate, idx) => (
                                            <div
                                                key={candidate.id}
                                                className="py-3.5 px-4 flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-2 sm:gap-4 hover:bg-white/[0.02] transition-colors rounded-lg"
                                            >
                                                {/* Index */}
                                                <div className="hidden sm:block col-span-1 font-mono text-xs sm:text-sm text-neutral-500">
                                                    {(idx + 1).toString().padStart(2, '0')}
                                                </div>

                                                {/* Candidate Name */}
                                                <div className="col-span-5 flex items-center gap-2.5">
                                                    <span className="sm:hidden font-mono text-xs text-neutral-500">
                                                        {(idx + 1).toString().padStart(2, '0')}.
                                                    </span>
                                                    <span className="text-white font-semibold text-base sm:text-lg tracking-normal">
                                                        {candidate.name}
                                                    </span>
                                                </div>

                                                {/* Roll Number */}
                                                <div className="col-span-4 font-mono text-xs sm:text-sm text-neutral-400 pl-6 sm:pl-0 font-medium">
                                                    {candidate.rollNumber}
                                                </div>

                                                {/* Branch */}
                                                <div className="col-span-2 flex sm:justify-end pl-6 sm:pl-0">
                                                    <span className="font-mono text-xs sm:text-sm text-[#2DD4BF] bg-[#2DD4BF]/10 px-2.5 py-1 rounded border border-[#2DD4BF]/25 font-semibold">
                                                        {candidate.branch}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16 px-4">
                            <h3 className={`text-white font-bold text-lg mb-1.5 ${orbitron.className}`}>
                                No candidates listed yet
                            </h3>
                            <p className="text-neutral-400 text-sm max-w-xs mx-auto mb-4 font-mono">
                                Candidates for this domain will be published once verified.
                            </p>
                            <button
                                onClick={() => setSelectedDomain('All')}
                                className="px-5 py-2 rounded-lg font-mono text-xs sm:text-sm uppercase tracking-wider bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/25 hover:bg-[#2DD4BF] hover:text-black transition-all cursor-pointer"
                            >
                                View All Domains
                            </button>
                        </div>
                    )}

                    {/* Integrated Institutional Notice & Instagram Button */}
                    <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#2DD4BF]">
                                // Induction Notice
                            </span>
                            <p className="text-neutral-300 text-sm sm:text-[15px] max-w-lg leading-relaxed">
                                Selected inductees will receive orientation schedules through official channels. Attendance at the introductory meeting is mandatory.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs sm:text-sm text-neutral-400">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-[#2DD4BF]" />
                                    Date: To Be Announced
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-[#2DD4BF]" />
                                    Venue: ECE Seminar Hall, BIT Mesra
                                </span>
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
