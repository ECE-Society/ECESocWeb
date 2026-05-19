'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, MapPin, ArrowRight, Zap, Code2, Trophy, Cpu,
    Star, Briefcase, Shield, Terminal, X, Award, GitBranch, Users,
} from 'lucide-react';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { useState, useEffect } from 'react';

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const featuredEvents = [
    {
        id: 'techathon',
        title: 'Tech-A-Thon',
        tagline: '4-Week Hackathon',
        date: 'July-August 2025',
        location: 'ECE Block, BIT Mesra',
        description:
            'ECE Society, BIT Mesra proudly presents its flagship event – Tech-A-Thon. This is a month-long, hybrid inter-college innovation sprint that brings together students from across India to build impactful solutions in Artificial Intelligence/Machine Learning, Core Electronics, Embedded Systems, Automation, and Web Development.',
        icon: Zap,
        color: '#a78bfa',
        badgeLabel: 'Flagship',
        badgeIcon: Star,
        glowRgb: '167,139,250',
        purpleAccent: 'blue-600',
        subEvents: [] as any[],
        image: '/events photo/tech a thon.jpeg',
    },
];

/* ── Techathon round details ── */
const techathonRounds = [
    {
        number: 1,
        name: 'Quiz-A-Bit',
        icon: Award,
        color: '#a78bfa',
        points: [
            'Multiple-choice questions (Aptitude/Technical and Core Knowledge/General Trivia) in 1 hour.',
            'Any one member from each team must participate — their score counts as the team\u2019s total for Round 1.',
            'Click the assessment link and attempt it. Each team is allowed only one attempt.',
            'The challenge must be completed in one sitting before the timer runs out.',
            'No negative marking; each question is worth 2 marks.',
            'Tiebreaker: test duration first, then team accuracy.',
        ],
    },
    {
        number: 2,
        name: 'Tech-a-Bit',
        icon: GitBranch,
        color: '#38bdf8',
        points: [
            'All shortlisted teams gain access to the detailed problem statement once the round goes live.',
            'The document clearly outlines the challenge, steps to follow, and the evaluation process.',
            'Team leaders submit solutions as per instructions (private GitHub repo link + assets/documentation).',
            'Further submission instructions and access credentials will be shared closer to the round launch.',
            'Teams can change submissions until 11:50 PM on Friday, August 15, 2025.',
            'Only the team leader can make the submission.',
            'Participants can choose a topic from the provided list or propose their own ideas based on the theme.',
        ],
    },
    {
        number: 3,
        name: 'Grand Finale',
        icon: Users,
        color: '#2DD4BF',
        points: [
            'Top teams will present their solution to Team ECESoc.',
            'Presentations can be in both online and offline modes as per team availability.',
            'Schedule details will be shared with shortlisted teams accordingly.',
        ],
    },
];


/* ── Bitotsav / Electropoly phases ── */
const bitotsavPhases = [
    {
        number: 1,
        name: 'The Quick-Fire Business Game',
        emoji: '🔌',
        color: '#2DD4BF',
        intro: 'Think Monopoly… but make it electronic! Buy, sell, and trade your way through a power-packed board — where "Jail" is a Power Cut, and every square holds a new opportunity.',
        points: [
            'Navigate the electronic Monopoly-style board with strategy and speed.',
            'Buy, sell, and trade components to build your dream circuit.',
            '"Jail" is a Power Cut — avoid it or power through it.',
            'The sharper your moves, the brighter your future in Phase 2.',
        ],
    },
    {
        number: 2,
        name: 'The Ultimate Circuit Race',
        emoji: '⚙️',
        color: '#f472b6',
        intro: 'Only the best from Phase 1 will advance. Speed meets skill as teams race to build and troubleshoot real circuits. The more complex your build, the more points you spark!',
        points: [
            'Only top performers from Phase 1 advance to this stage.',
            'Race to build and troubleshoot real circuits under time pressure.',
            'More complex builds earn more points — push your limits.',
            'The team with the highest score walks away with glory. 🔋',
        ],
    },
];

/* ── Codeverse features ── */
const codeverseFeatures = [
    {
        title: 'Platform',
        desc: 'Hosted on HackerRank.',
        emoji: '💻',
        color: '#38bdf8',
    },
    {
        title: 'DSA-focused Problems',
        desc: 'Crafted to challenge your logic, speed, and problem-solving under pressure.',
        emoji: '🧩',
        color: '#a78bfa',
    },
    {
        title: 'Time-Locked Rounds',
        desc: 'Because every second counts in the world of competitive coding.',
        emoji: '⏱',
        color: '#facc15',
    },
    {
        title: 'Solo Participation',
        desc: 'It’s just you and the code. No teammates. No lifelines. Just pure skill.',
        emoji: '🔥',
        color: '#f87171',
    },
];

const genericEvents = [
    {
        id: 'bitotsav',
        title: 'Bitotsav',
        tagline: 'The Grand Tech Fest',
        date: 'Mar 14–16, 2025',
        location: 'Main Campus, BIT Mesra',
        description:
            'The flagship annual techno-cultural festival of BIT Mesra. Three days of innovation, competitions, workshops, and performances uniting the brightest minds from across the nation.',
        icon: Trophy,
        color: '#2DD4BF',
        gradientFrom: 'from-[#2DD4BF]/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Tech Fest', 'Multi-Day', 'BIT Mesra'],
        image: '/home/bitotsav-photo.png.png',
    },
    {
        id: 'interninsights',
        title: 'Intern Insights',
        tagline: 'Industry Connect Series',
        date: 'Feb 14, 2025',
        location: 'Seminar Hall, BIT Mesra',
        description:
            'A career-forward session connecting students with industry professionals, featuring panel talks, resume critiques, and insider tips on cracking top internships.',
        icon: Briefcase,
        color: '#34d399',
        gradientFrom: 'from-emerald-500/20',
        gradientTo: 'to-teal-500/10',
        tags: ['Career', 'Industry', 'Internship'],
        image: '/events photo/intern insight.jpeg',
    },
    {
        id: 'codeverse',
        title: 'Codeverse',
        tagline: 'Competitive Programming',
        date: 'Feb 08, 2025',
        location: 'Computing Labs, BIT Mesra',
        description:
            "An intense competitive programming contest spanning multiple difficulty tiers — from DSA to system design — crafted to challenge and elevate every coder's limits.",
        icon: Code2,
        color: '#38bdf8',
        gradientFrom: 'from-sky-500/20',
        gradientTo: 'to-[#2DD4BF]/10',
        tags: ['DSA', 'Competitive', 'Coding'],
        image: '/events photo/codeverse.jpeg',
    },
    {
        id: 'electroquiz',
        title: 'Electroquiz',
        tagline: 'Electronics Quiz Championship',
        date: 'Mar 01, 2025',
        location: 'Seminar Hall, ECE Dept.',
        description:
            'A rigorous electronics and communication engineering quiz that pushes participants on circuit theory, signal processing, microcontrollers, and beyond.',
        icon: Cpu,
        color: '#fb923c',
        gradientFrom: 'from-orange-500/20',
        gradientTo: 'to-red-500/10',
        tags: ['Electronics', 'Quiz', 'ECE Domain'],
        image: '/events photo/electroquiz.jpeg',
    },
    {
        id: 'pantheon',
        title: 'Pantheon',
        tagline: 'The Ultimate Techfest',
        date: 'Apr 05, 2025',
        location: 'Main Auditorium, BIT Mesra',
        description:
            'Pantheon is the grand techfest of BIT Mesra — a convergence of the brightest engineering minds across India. Packed with technical competitions, hackathons, workshops, and culturals, it celebrates innovation, creativity, and the spirit of engineering at its finest.',
        icon: Shield,
        color: '#f472b6',
        gradientFrom: 'from-pink-500/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Techfest', 'BIT Mesra', 'Annual'],
        image: '/events photo/pantheon.jpeg',
    },
];

const workshopEvents = [
    {
        id: 'gateway-to-electronics',
        title: 'Gateway to Electronics',
        tagline: 'Foundations Workshop',
        date: 'Feb 10, 2025',
        location: 'ECE Lab A, BIT Mesra',
        description:
            'A beginner-friendly workshop introducing the core foundations of electronics — resistors, capacitors, diodes, transistors, and basic circuit analysis. Perfect for freshers stepping into the world of ECE.',
        icon: Zap,
        color: '#facc15',
        gradientFrom: 'from-yellow-500/20',
        gradientTo: 'to-orange-500/10',
        tags: ['Basics', 'Electronics', 'Beginner'],
        image: '/events photo/gateway to electronics.jpeg',
    },
    {
        id: 'intro-to-aiml',
        title: 'Intro to AI/ML',
        tagline: 'Artificial Intelligence Workshop',
        date: 'Mar 05, 2025',
        location: 'Computing Lab, BIT Mesra',
        description:
            'An introductory workshop on Artificial Intelligence and Machine Learning — covering supervised learning, neural networks, model training, and real-world ECE applications of AI.',
        icon: Terminal,
        color: '#22d3ee',
        gradientFrom: 'from-cyan-500/20',
        gradientTo: 'to-sky-500/10',
        tags: ['AI', 'ML', 'Neural Networks'],
        image: '/events photo/intro to aiml.jpeg',
    },
    {
        id: 'intro-to-vlsi',
        title: 'Intro to VLSI',
        tagline: 'Chip Design Workshop',
        date: 'Mar 20, 2025',
        location: 'Seminar Hall, ECE Dept.',
        description:
            'A hands-on introduction to VLSI design — from CMOS logic gates and digital circuits to RTL coding in Verilog, simulation, and an overview of the chip fabrication pipeline.',
        icon: Cpu,
        color: '#a3e635',
        gradientFrom: 'from-lime-500/20',
        gradientTo: 'to-green-500/10',
        tags: ['VLSI', 'Verilog', 'Chip Design'],
        image: '/events photo/intro to verfilog.jpeg',
    },
    {
        id: 'intro-to-digital-design',
        title: 'Intro to Digital Design',
        tagline: 'Logic & Digital Circuits',
        date: 'Apr 02, 2025',
        location: 'ECE Lab C, BIT Mesra',
        description:
            'A structured workshop on digital design fundamentals — Boolean algebra, combinational and sequential circuits, flip-flops, multiplexers, and an introduction to FPGA programming with Verilog.',
        icon: Code2,
        color: '#c084fc',
        gradientFrom: 'from-purple-500/20',
        gradientTo: 'to-pink-500/10',
        tags: ['Digital', 'FPGA', 'Logic Design'],
        image: '/events photo/intro to digital.jpeg',
    },
];

/* ══════════════════════════════════════════
   REUSABLE MODAL HOOK HELPER
══════════════════════════════════════════ */

function useModalKeys(open: boolean, onClose: () => void) {
    useEffect(() => {
        if (!open) return;
        const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [open, onClose]);
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);
}

/* ══════════════════════════════════════════
   TECHATHON MODAL
══════════════════════════════════════════ */

function TechathonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="modal-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#a78bfa]/25"
                        style={{ boxShadow: '0 40px 100px -20px rgba(167,139,250,0.25), 0 0 0 1px rgba(255,255,255,0.04)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, #a78bfa70, transparent)' }} />

                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, #a78bfa22, transparent 70%)' }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#a78bfa]/70">
                                        Tech-A-Thon · Round Guide
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                        How It <span style={{ color: '#a78bfa' }}>Works</span>
                                    </h2>
                                    <img src="/events photo/techathon inside.jpeg" alt="Techathon Inside" className="w-full h-auto max-h-64 object-contain rounded-xl mt-4 border border-[#a78bfa]/20" />
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Rounds */}
                            <div className="flex flex-col gap-6">
                                {techathonRounds.map((round) => {
                                    const RoundIcon = round.icon;
                                    return (
                                        <div
                                            key={round.number}
                                            className="relative rounded-2xl p-6 border"
                                            style={{
                                                backgroundColor: `${round.color}08`,
                                                borderColor: `${round.color}25`,
                                            }}
                                        >
                                            {/* Round label */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div
                                                    className="flex items-center justify-center w-10 h-10 rounded-xl border flex-shrink-0"
                                                    style={{ backgroundColor: `${round.color}15`, borderColor: `${round.color}30` }}
                                                >
                                                    <RoundIcon className="w-5 h-5" style={{ color: round.color }} />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <span
                                                        className="text-[9px] font-black uppercase tracking-[0.3em]"
                                                        style={{ color: `${round.color}90` }}
                                                    >
                                                        Round {round.number}
                                                    </span>
                                                    <span className="text-base font-black uppercase tracking-wide text-white">
                                                        {round.name}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Points */}
                                            <ul className="flex flex-col gap-2">
                                                {round.points.map((point, pi) => (
                                                    <li key={pi} className="flex items-start gap-3">
                                                        <span
                                                            className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                                                            style={{ backgroundColor: round.color }}
                                                        />
                                                        <span className="text-sm text-neutral-300 leading-relaxed">
                                                            {point}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Footer note */}
                            <p className="text-[11px] text-neutral-600 font-medium text-center">
                                More details will be shared with registered teams closer to each round.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   BITOTSAV / ELECTROPOLY MODAL
══════════════════════════════════════════ */

function BitotsavModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="bito-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="bito-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#2DD4BF]/25"
                        style={{ boxShadow: '0 40px 100px -20px rgba(45,212,191,0.22), 0 0 0 1px rgba(255,255,255,0.04)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, #2DD4BF70, transparent)' }} />

                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, #2DD4BF22, transparent 70%)' }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#2DD4BF]/70">
                                        Bitotsav · Sub-Event
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">⚡🎲</span>
                                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                            Electro<span style={{ color: '#2DD4BF' }}>poly</span>
                                        </h2>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md">
                                        Roll the Dice. Rule the Grid. Where your strategic mind meets high-voltage fun.
                                    </p>
                                    <img src="/events photo/bitotsav inside.jpeg" alt="Bitotsav Inside" className="w-full h-auto max-h-64 object-contain rounded-xl mt-4 border border-[#2DD4BF]/20" />
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Phases */}
                            <div className="flex flex-col gap-6">
                                {bitotsavPhases.map((phase) => (
                                    <div
                                        key={phase.number}
                                        className="relative rounded-2xl p-6 border"
                                        style={{
                                            backgroundColor: `${phase.color}08`,
                                            borderColor: `${phase.color}25`,
                                        }}
                                    >
                                        {/* Phase label */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className="flex items-center justify-center w-10 h-10 rounded-xl border flex-shrink-0 text-lg"
                                                style={{ backgroundColor: `${phase.color}15`, borderColor: `${phase.color}30` }}
                                            >
                                                {phase.emoji}
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span
                                                    className="text-[9px] font-black uppercase tracking-[0.3em]"
                                                    style={{ color: `${phase.color}90` }}
                                                >
                                                    Phase {phase.number}
                                                </span>
                                                <span className="text-sm font-black uppercase tracking-wide text-white">
                                                    {phase.name}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                                            {phase.intro}
                                        </p>

                                        <ul className="flex flex-col gap-2">
                                            {phase.points.map((point, pi) => (
                                                <li key={pi} className="flex items-start gap-3">
                                                    <span
                                                        className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                                                        style={{ backgroundColor: phase.color }}
                                                    />
                                                    <span className="text-sm text-neutral-300 leading-relaxed">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* @ts-ignore */}
                                        {(phase as any).image && (
                                            <img src={(phase as any).image} alt={phase.name} className="w-full h-auto max-h-64 object-contain rounded-xl mt-5 border border-white/10" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer rally */}
                            <p className="text-center text-sm text-neutral-500 font-medium">
                                💥 Get ready to spark your strategy, light up the leaderboard, and{' '}
                                <span style={{ color: '#2DD4BF' }}>Electrify the Game!</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   INTERN INSIGHTS MODAL
══════════════════════════════════════════ */

function InternInsightsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="intern-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="intern-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#34d399]/25"
                        style={{ boxShadow: '0 40px 100px -20px rgba(52,211,153,0.2), 0 0 0 1px rgba(255,255,255,0.04)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, #34d39970, transparent)' }} />
                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, #34d39920, transparent 70%)' }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#34d399]/70">
                                        ECE Society · 3-Day Series
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                        Intern{' '}<span style={{ color: '#34d399' }}>Insights</span>
                                    </h2>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md">
                                        Talks That Guide — Real experiences from peers who’ve made their mark in core, tech, and research.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Photos */}
                            <div className="flex flex-col gap-6">
                                <img src="/events photo/intern insight inside 1.jpeg" alt="Intern Insights 1" className="w-full h-auto max-h-96 object-contain rounded-xl border border-white/10" />
                                <img src="/events photo/intern insight inside 2.jpeg" alt="Intern Insights 2" className="w-full h-auto max-h-96 object-contain rounded-xl border border-white/10" />
                            </div>

                            {/* Footer */}
                            <p className="text-center text-sm text-neutral-500 font-medium">
                                Whether you’re aiming for core, software, or research —{' '}
                                <span style={{ color: '#34d399' }}>this series is crafted to inspire, inform, and guide you.</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   CODEVERSE MODAL
══════════════════════════════════════════ */

function CodeverseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="codeverse-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="codeverse-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#38bdf8]/25"
                        style={{ boxShadow: '0 40px 100px -20px rgba(56,189,248,0.2), 0 0 0 1px rgba(255,255,255,0.04)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, #38bdf870, transparent)' }} />
                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, #38bdf820, transparent 70%)' }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#38bdf8]/70">
                                        The Ultimate Solo Showdown
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🚀</span>
                                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                            Code <span style={{ color: '#38bdf8' }}>Verse</span>
                                        </h2>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md">
                                        Ready to go head-to-head with the best and prove your dominance in the world of algorithms and logic? 
                                        Code Verse is not just a coding contest — it’s a battlefield where only the sharpest minds survive.
                                    </p>
                                    <img src="/events photo/codeverse inside.jpeg" alt="Codeverse Inside" className="w-full h-auto max-h-64 object-contain rounded-xl mt-4 border border-[#38bdf8]/20" />
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-2">
                                    🧠 What’s in Store?
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {codeverseFeatures.map((feat) => (
                                        <div
                                            key={feat.title}
                                            className="rounded-2xl p-5 border"
                                            style={{ backgroundColor: `${feat.color}08`, borderColor: `${feat.color}25` }}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 rounded-xl border flex-shrink-0 text-base"
                                                    style={{ backgroundColor: `${feat.color}15`, borderColor: `${feat.color}30` }}
                                                >
                                                    {feat.emoji}
                                                </div>
                                                <span className="text-sm font-bold text-white">{feat.title}</span>
                                            </div>
                                            <p className="text-xs text-neutral-400 leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <p className="text-center text-sm text-neutral-500 font-medium">
                                Whether you're a code ninja, an algorithm junkie, or someone who lives for the thrill of the scoreboard,{' '}
                                <span style={{ color: '#38bdf8' }}>Code Verse is where you belong.</span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   ELECTROQUIZ MODAL
══════════════════════════════════════════ */

function ElectroquizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="electroquiz-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="electroquiz-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#fb923c]/25"
                        style={{ boxShadow: '0 40px 100px -20px rgba(251,146,60,0.2), 0 0 0 1px rgba(255,255,255,0.04)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, #fb923c70, transparent)' }} />
                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, #fb923c20, transparent 70%)' }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#fb923c]/70">
                                        Electronics Quiz Championship
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🧠</span>
                                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                            Electro<span style={{ color: '#fb923c' }}>quiz</span>
                                        </h2>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md">
                                        A rigorous electronics and communication engineering quiz that pushes participants on circuit theory, signal processing, microcontrollers, and beyond.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                <img src="/events photo/electro inside1.jpeg" alt="Electroquiz Phase 1" className="w-full h-auto max-h-64 object-contain rounded-xl border border-white/10" />
                                <img src="/events photo/electro inside 2.jpeg" alt="Electroquiz Phase 2" className="w-full h-auto max-h-64 object-contain rounded-xl border border-white/10" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   SUB-EVENT BOX
══════════════════════════════════════════ */

type SubEventBoxProps = {
    name: string;
    subtitle: string;
    icon: React.ElementType;
    accentColor: string;
};

function SubEventBox({ name, subtitle, icon: Icon, accentColor }: SubEventBoxProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0a0a0a]/80 border cursor-pointer transition-all duration-300"
            style={{ borderColor: `${accentColor}25`, boxShadow: `0 4px 20px -8px ${accentColor}20` }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}55`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -8px ${accentColor}45`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}25`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px -8px ${accentColor}20`;
            }}
        >
            <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accentColor}08, transparent)` }} />

            <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border"
                style={{ backgroundColor: `${accentColor}12`, borderColor: `${accentColor}25` }}>
                <Icon className="w-5 h-5" style={{ color: accentColor }} />
            </div>

            <div className="relative flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black uppercase tracking-wider text-white/90">{name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border"
                        style={{ backgroundColor: `${accentColor}15`, borderColor: `${accentColor}30`, color: accentColor }}>
                        Sub-Event
                    </span>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium truncate">{subtitle}</span>
            </div>

            <ArrowRight className="relative flex-shrink-0 w-4 h-4 transition-all duration-300"
                style={{ color: `${accentColor}60` }} />
        </motion.div>
    );
}

/* ══════════════════════════════════════════
   FEATURED CARD (Bitotsav / Techathon)
══════════════════════════════════════════ */

function FeaturedCard({ event, onExplore }: { event: typeof featuredEvents[0]; onExplore?: () => void }) {
    const Icon = event.icon;
    const BadgeIcon = event.badgeIcon;
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-10 md:p-12 bg-[#0d0d0d]/90 backdrop-blur-xl rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-500"
            style={{
                border: `1px solid ${event.color}30`,
                boxShadow: `0 24px 80px -20px rgba(0,0,0,0.9)`,
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}60`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 32px 80px -12px rgba(${event.glowRgb},0.28)`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 80px -20px rgba(0,0,0,0.9)`;
            }}
        >
            {/* Glow blob */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none rounded-[3rem]"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${event.color}22, transparent 70%)` }} />

            {/* Inner surface tint */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${event.color}07, transparent)` }} />

            {/* Top shimmer */}
            <div className="absolute top-0 left-12 right-12 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${event.color}80, transparent)` }} />

            {/* Badge — only shown when set */}
            {BadgeIcon && event.badgeLabel && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border"
                    style={{ backgroundColor: `${event.color}12`, borderColor: `${event.color}30` }}>
                    <BadgeIcon className="w-3 h-3" style={{ color: event.color, fill: event.color }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: event.color }}>
                        {event.badgeLabel}
                    </span>
                </div>
            )}

            <div className="relative z-10 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}>
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                </div>

                {/* Title and Image */}
                <div className="flex flex-col gap-1">

                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-400"
                        style={{ ['--ec' as string]: event.color }}>
                        <span className="group-hover:text-[--ec] transition-colors duration-400"
                            style={{ ['--ec' as string]: event.color }}>
                            {event.title}
                        </span>
                    </h2>
                    
                    {/* @ts-ignore */}
                    {event.image && (
                        // @ts-ignore
                        <img src={event.image} alt={event.title} className="w-full h-auto max-h-96 object-contain object-center mt-4 rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
                    )}
                </div>

                {/* Description */}
                <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300">
                    {event.description}
                </p>

                {/* Sub-events */}
                {event.subEvents.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">
                            Sub-Events
                        </span>
                        <div className="flex flex-col gap-2">
                            {event.subEvents.map((sub) => (
                                <SubEventBox key={sub.name} {...sub} />
                            ))}
                        </div>
                    </div>
                )}



                {/* CTA */}
                <button
                    onClick={onExplore}
                    className="flex items-center gap-3 mt-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
                    style={{
                        backgroundColor: `${event.color}18`,
                        border: `1px solid ${event.color}35`,
                        color: event.color,
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = `${event.color}30`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${event.color}60`;
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = `${event.color}18`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${event.color}35`;
                    }}
                >
                    <span>Explore Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════
   GENERIC EVENT CARD (with description hover reveal)
══════════════════════════════════════════ */

function EventCard({ event, delay, onExplore }: { event: typeof genericEvents[0]; delay: number; onExplore?: () => void }) {
    const Icon = event.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <SectionReveal delay={delay}>
            <motion.div
                className="group relative overflow-hidden cursor-pointer rounded-[2.5rem] border border-white/5 bg-[#111]/80 backdrop-blur-md transition-all duration-500"
                style={{ boxShadow: '0 20px 60px -20px rgba(0,0,0,0.8)' }}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${event.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px -12px ${event.color}25`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px -20px rgba(0,0,0,0.8)';
                }}
            >
                {/* Glow layer */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${event.gradientFrom} via-transparent ${event.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none`} />

                {/* Top shimmer */}
                <div className="absolute top-0 left-10 right-10 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)` }} />

                {/* ── Static content (always visible) ── */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                            style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}>
                            <Icon className="w-6 h-6" style={{ color: event.color }} />
                        </div>
                    </div>

                    {/* Title and Image */}
                    <div className="flex flex-col gap-1">

                        
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-300"
                            style={{ ['--ec' as string]: event.color }}>
                            <span className="group-hover:text-[--ec] transition-colors duration-300"
                                style={{ ['--ec' as string]: event.color }}>
                                {event.title}
                            </span>
                        </h2>

                        {/* @ts-ignore - image is optional */}
                        {event.image && (
                            // @ts-ignore
                            <img src={event.image} alt={event.title} className="w-full h-auto max-h-96 object-contain object-center mt-4 rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
                        )}
                    </div>

                    {/* ── Hover-reveal description ── */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                key="desc"
                                initial={{ opacity: 0, height: 0, y: 8 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 8 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-neutral-300 font-medium leading-relaxed text-sm md:text-base pt-1 pb-2">
                                    {event.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer */}
                    <div className="flex items-center justify-end pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300 mt-auto">
                        <div className="flex gap-2">
                            {event.tags.slice(0, 2).map((tag) => (
                                <span key={tag}
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    {onExplore ? (
                        <button
                            onClick={onExplore}
                            className="flex items-center gap-3 mt-1 px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
                            style={{
                                backgroundColor: `${event.color}18`,
                                border: `1px solid ${event.color}35`,
                                color: event.color,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = `${event.color}30`;
                                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}60`;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = `${event.color}18`;
                                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}35`;
                            }}
                        >
                            <span>Explore Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                            <div className="w-6 h-[1px] transition-all duration-500 group-hover:w-10"
                                style={{ backgroundColor: event.color }} />
                            <span>Explore Event</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                style={{ color: event.color }} />
                        </div>
                    )}
                </div>
            </motion.div>
        </SectionReveal>
    );
}

/* ══════════════════════════════════════════
   GENERIC EVENT MODAL (for workshops & unassigned events)
══════════════════════════════════════════ */

function GenericEventModal({ event, onClose }: { event: typeof genericEvents[0] | null; onClose: () => void }) {
    useModalKeys(!!event, onClose);

    return (
        <AnimatePresence>
            {event && (
                <motion.div
                    key="generic-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="generic-panel"
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d]"
                        style={{
                            border: `1px solid ${event.color}40`,
                            boxShadow: `0 40px 100px -20px ${event.color}25, 0 0 0 1px rgba(255,255,255,0.04)`
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: `linear-gradient(90deg, transparent, ${event.color}70, transparent)` }} />
                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 50% 0%, ${event.color}20, transparent 70%)` }} />

                        <div className="relative z-10 p-8 sm:p-10 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.35em]" style={{ color: `${event.color}90` }}>
                                        {event.tagline}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <event.icon className="w-8 h-8" style={{ color: event.color }} />
                                        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                                            {event.title}
                                        </h2>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md mt-2">
                                        {event.description}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            
                            {/* @ts-ignore - Image is optional */}
                            {event.image && (
                                <div className="flex flex-col gap-6">
                                    {/* @ts-ignore */}
                                    <img src={event.image} alt={event.title} className="w-full h-auto max-h-96 object-contain rounded-xl border border-white/10" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */

export default function EventsPage() {
    const [techathonOpen, setTechathonOpen] = useState(false);
    const [bitotsavOpen, setBitotsavOpen] = useState(false);
    const [internInsightsOpen, setInternInsightsOpen] = useState(false);
    const [codeverseOpen, setCodeverseOpen] = useState(false);
    const [electroquizOpen, setElectroquizOpen] = useState(false);
    const [selectedGenericEvent, setSelectedGenericEvent] = useState<typeof genericEvents[0] | null>(null);

    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
            <TechathonModal open={techathonOpen} onClose={() => setTechathonOpen(false)} />
            <BitotsavModal open={bitotsavOpen} onClose={() => setBitotsavOpen(false)} />
            <InternInsightsModal open={internInsightsOpen} onClose={() => setInternInsightsOpen(false)} />
            <CodeverseModal open={codeverseOpen} onClose={() => setCodeverseOpen(false)} />
            <ElectroquizModal open={electroquizOpen} onClose={() => setElectroquizOpen(false)} />
            <GenericEventModal event={selectedGenericEvent} onClose={() => setSelectedGenericEvent(null)} />
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
            </div>

            {/* Hero */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-48 pb-32 overflow-hidden">
                <SectionReveal className="flex flex-col items-center gap-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-[#2DD4BF] font-black tracking-[0.4em] uppercase text-xs"
                    >
                        ECE Society · Events
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        <span className="text-white">Our</span>{' '}
                        <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.35)]">Events</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                        className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mt-2"
                    >
                        Where circuits meet creativity. Explore the signature events crafted by the
                        ECE Society to challenge, inspire, and connect the engineering community.
                    </motion.p>
                </SectionReveal>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            </section>

            {/* ── Featured Events (2-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-16 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── Flagship Events
                    </span>
                </SectionReveal>
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        {featuredEvents.map((event, i) => (
                            <SectionReveal key={event.id} delay={i * 0.1}>
                                <FeaturedCard
                                    event={event}
                                    onExplore={event.id === 'techathon' ? () => setTechathonOpen(true) : undefined}
                                />
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Generic Events (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── All Events
                    </span>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {genericEvents.map((event, i) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            delay={i * 0.1}
                            onExplore={
                                event.id === 'bitotsav' ? () => setBitotsavOpen(true)
                                : event.id === 'interninsights' ? () => setInternInsightsOpen(true)
                                : event.id === 'codeverse' ? () => setCodeverseOpen(true)
                                : event.id === 'electroquiz' ? () => setElectroquizOpen(true)
                                : () => setSelectedGenericEvent(event)
                            }
                        />
                    ))}
                </div>
            </section>
            {/* ── Workshops (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── Workshops
                    </span>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {workshopEvents.map((event, i) => (
                        <EventCard key={event.id} event={event} delay={i * 0.1} onExplore={() => setSelectedGenericEvent(event)} />
                    ))}
                </div>
            </section>
        </main>
    );
}
