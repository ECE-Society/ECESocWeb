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
        subEvents: [],
        image: '/events photo/ece soc front.jpg',
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
        title: 'Electropoly',
        tagline: 'The Strategic Electronics Game',
        date: 'Mar 14–16, 2025',
        location: 'Main Campus, BIT Mesra',
        description:
            'Roll the Dice. Rule the Grid. Electropoly is a high-voltage strategic board game where circuits meet commerce — buy, sell, and trade your way through an electronics-themed Monopoly board at Bitotsav, the grand annual techfest of BIT Mesra.',
        icon: Trophy,
        color: '#2DD4BF',
        gradientFrom: 'from-[#2DD4BF]/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Strategy', 'Bitotsav', 'BIT Mesra'],
        image: '/events photo/Screenshot 2026-05-23 160748.png',
    },
    {
        id: 'interninsights',
        title: 'Intern Insights',
        tagline: 'Industry Connect Series',
        date: 'May 13-15, 2025',
        location: 'Seminar Hall, BIT Mesra',
        description:
            "We interview students who landed internships at top companies and ask them everything — how they prepared, what the interviews were like, and what it's really like on the inside. A raw, honest, peer-to-peer series that turns real experiences into your roadmap.",
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
        id: 'bytebattles',
        title: 'Byte Battles',
        tagline: 'The Ultimate Techfest',
        date: 'Apr 05, 2025',
        location: 'Main Auditorium, BIT Mesra',
        description:
            'Byte Battles is an AI-focused hackathon with two challenging rounds. First, craft creative prompts to make ChatGPT say things it won\'t usually—testing your prompt engineering. Then, leverage AI in a development round to build innovative solutions. Combine creativity, technical expertise, and AI knowledge to dominate competition and claim victory.',
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
            'Join us for a comprehensive beginner-friendly workshop on the core foundations of electronics. Learn about resistors, capacitors, diodes, and transistors through hands-on demonstrations and practical circuit analysis. This workshop is designed for freshers stepping into the world of ECE, providing essential knowledge and confidence to excel in your academic journey.',
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
            'Explore Artificial Intelligence and Machine Learning with our comprehensive workshop. Learn supervised learning algorithms, neural networks, and model training techniques with real-world ECE applications. Gain hands-on experience and knowledge. Whether you are a beginner or have prior AI experience, this workshop provides valuable insights and foundational understanding essential for advancing your skills in artificial intelligence.',
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
            'Dive into VLSI design fundamentals with our hands-on workshop covering CMOS logic gates, digital circuits, and RTL coding in Verilog. Understand simulation and gain insights into the chip fabrication pipeline. Learn industry-standard practices used in semiconductor design. This workshop is perfect for engineers interested in hardware design and advancing their skills in chip development.',
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
            'Master digital design fundamentals with our workshop covering Boolean algebra, combinational circuits, sequential circuits, flip-flops, and multiplexers. Gain practical insights into logic design workflow used in industry. Learn how to design, simulate, and verify circuits effectively. Whether you are new to digital electronics or strengthening your foundation, this workshop equips you with essential skills and knowledge.',
        icon: Code2,
        color: '#c084fc',
        gradientFrom: 'from-purple-500/20',
        gradientTo: 'to-pink-500/10',
        tags: ['Digital', 'Logic Design'],
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

const techathonPhotos = [
    { src: '/events photo/techathon inside.jpg', alt: 'Students reviewing certificates and phones' },
    { src: '/events photo/techathon inside1.jpg', alt: 'Certification receipt with teachers' },
    { src: '/events photo/techathon inside 2.jpg', alt: 'Arduino prototype and electronics setup' },
    { src: '/events photo/techathon inside 3.jpg', alt: 'Student presenting data visualization charts' },
    { src: '/events photo/techathon inside 4.jpg', alt: 'Evaluators assessing submissions' },
    { src: '/events photo/techathon inside 5.jpg', alt: 'Session view and presentation' },
];

function TechathonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
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
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#a78bfa]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(167,139,250,0.25), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #a78bfa70, transparent)' }} />

                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #a78bfa22, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#a78bfa]/70">
                                            Tech-A-Thon · Flagship Event
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Tech-A-Thon <span style={{ color: '#a78bfa' }}>2025</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Stat Boxes */}
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    {/* Participants */}
                                    <div
                                        className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                        style={{ backgroundColor: '#a78bfa0d', borderColor: '#a78bfa30' }}
                                    >
                                        <div className="absolute -inset-2 blur-2xl opacity-20 pointer-events-none rounded-2xl"
                                            style={{ background: 'radial-gradient(ellipse at 50% 50%, #a78bfa, transparent 70%)' }} />
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#a78bfa]/70 relative z-10">
                                            Participants
                                        </span>
                                        <span className="text-4xl lg:text-5xl font-black text-white leading-none relative z-10">
                                            4K<span style={{ color: '#a78bfa' }}>+</span>
                                        </span>
                                        <span className="text-xs lg:text-sm text-neutral-400 font-medium relative z-10">
                                            Registered teams
                                        </span>
                                    </div>

                                    {/* Prize Pool */}
                                    <div
                                        className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                        style={{ backgroundColor: '#2DD4BF0d', borderColor: '#2DD4BF30' }}
                                    >
                                        <div className="absolute -inset-2 blur-2xl opacity-20 pointer-events-none rounded-2xl"
                                            style={{ background: 'radial-gradient(ellipse at 50% 50%, #2DD4BF, transparent 70%)' }} />
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#2DD4BF]/70 relative z-10">
                                            Prizes Worth
                                        </span>
                                        <span className="text-4xl lg:text-5xl font-black text-white leading-none relative z-10">
                                            ₹<span style={{ color: '#2DD4BF' }}>25K</span>
                                        </span>
                                        <span className="text-xs lg:text-sm text-neutral-400 font-medium relative z-10">
                                            Total prize pool
                                        </span>
                                    </div>

                                    {/* Hosted on Unstop */}
                                    <div
                                        className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                        style={{ backgroundColor: '#fb923c0d', borderColor: '#fb923c30' }}
                                    >
                                        <div className="absolute -inset-2 blur-2xl opacity-20 pointer-events-none rounded-2xl"
                                            style={{ background: 'radial-gradient(ellipse at 50% 50%, #fb923c, transparent 70%)' }} />
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#fb923c]/70 relative z-10">
                                            Platform
                                        </span>
                                        <span className="text-2xl lg:text-3xl font-black text-white leading-none relative z-10" style={{ color: '#fb923c' }}>
                                            Unstop
                                        </span>
                                        <span className="text-xs lg:text-sm text-neutral-400 font-medium relative z-10">
                                            Hosted on India's platform
                                        </span>
                                    </div>

                                    {/* Categories */}
                                    <div
                                        className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                        style={{ backgroundColor: '#06b6d40d', borderColor: '#06b6d430' }}
                                    >
                                        <div className="absolute -inset-2 blur-2xl opacity-20 pointer-events-none rounded-2xl"
                                            style={{ background: 'radial-gradient(ellipse at 50% 50%, #06b6d4, transparent 70%)' }} />
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#06b6d4]/70 relative z-10">
                                            Categories
                                        </span>
                                        <span className="text-sm lg:text-base font-black text-white leading-snug relative z-10 text-center">
                                            Core Electronics<br />Web Dev · AI/ML
                                        </span>
                                        <span className="text-xs lg:text-sm text-neutral-400 font-medium relative z-10">
                                            Multiple problem tracks
                                        </span>
                                    </div>
                                </div>

                                {/* Event Description */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#a78bfa]/90">
                                        About
                                    </span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        ECE Society, BIT Mesra proudly presents its flagship event – Tech-A-Thon. This is a month-long, hybrid inter-college innovation sprint that brings together students from across India to build impactful solutions in Artificial Intelligence/Machine Learning, Core Electronics, Embedded Systems, Automation, and Web Development.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> July–August 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> ECE Block, BIT Mesra
                                        </span>
                                    </div>
                                </div>

                                {/* Rounds Guide */}
                                <div className="flex flex-col gap-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a78bfa]/90">
                                        How It Works · Round Guide
                                    </span>
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
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a78bfa]/90">
                                            Event Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge and view session highlights
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {techathonPhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
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

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Tech-A-Thon session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ══════════════════════════════════════════
   BITOTSAV / ELECTROPOLY MODAL
══════════════════════════════════════════ */

const bitotsavPhotos = [
    { src: '/events photo/Screenshot 2026-05-23 160748.png', alt: 'Electropoly Board Game' },
    { src: '/events photo/bitotsav inside 2.jpeg', alt: 'Classroom Hackathon Session' },
    { src: '/events photo/Screenshot 2026-05-23 163923.png', alt: 'Team building and presentation' },
    { src: '/events photo/bitotsav inside.jpeg', alt: 'Event presentation and evaluation' },
];

function BitotsavModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
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
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#2DD4BF]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(45,212,191,0.22), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #2DD4BF70, transparent)' }} />

                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #2DD4BF22, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#2DD4BF]/70">
                                            Electropoly · Bitotsav 2025
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Electro<span style={{ color: '#2DD4BF' }}>poly</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* About */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#2DD4BF]/90">About</span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        Roll the Dice. Rule the Grid. Electropoly is a high-voltage strategic board game where circuits meet commerce — buy, sell, and trade your way through an electronics-themed Monopoly board at Bitotsav, the grand annual techfest of BIT Mesra.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> Mar 14–16, 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> Main Campus, BIT Mesra
                                        </span>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#2DD4BF]/90">
                                            Event Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {bitotsavPhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[11px] text-neutral-600 font-medium text-center">
                                    💥 Get ready to spark your strategy and{' '}
                                    <span style={{ color: '#2DD4BF' }}>Electrify the Game!</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Electropoly session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

const internInsightsHighlights = [
    { src: '/events photo/intern insight inside 5.jpeg', alt: 'Google Meet Speaker Session 2' },
    { src: '/events photo/intern insight inside 6.jpeg', alt: 'Google Meet Speaker Session 4' },
    { src: '/events photo/intern insight inside 7.png', alt: 'Google Meet Speaker Session 5' },
];

const internInsightsRounds = [
    { src: '/events photo/intern insight inside 3.jpeg', alt: 'Day 2 Speaker Info - Romil & Tanishk' },
    { src: '/events photo/intern insight inside 4.jpeg', alt: 'Day 3 Speaker Info - Kunal & Subham' },
];

function InternInsightsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const allPhotos = [...internInsightsHighlights, ...internInsightsRounds];

    return (
        <>
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
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#34d399]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(52,211,153,0.2), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #34d39970, transparent)' }} />
                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #34d39920, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#34d399]/70">
                                            Intern Insights · ECE Society
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Intern <span style={{ color: '#34d399' }}>Insights</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* About */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#34d399]/90">About</span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        We interview students who landed internships at top companies and ask them everything — how they prepared, what the interviews were like, and what it&apos;s really like on the inside. A raw, honest, peer-to-peer series that turns real experiences into your roadmap.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> May 13–15, 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> Seminar Hall, BIT Mesra
                                        </span>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#34d399]/90">
                                            Session Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {allPhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[11px] text-neutral-600 font-medium text-center">
                                    Whether you&apos;re aiming for core, software, or research —{' '}
                                    <span style={{ color: '#34d399' }}>this series is crafted to inspire, inform, and guide you.</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Intern Insights session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ══════════════════════════════════════════
   CODEVERSE MODAL
══════════════════════════════════════════ */

const codeversePhotos = [
    { src: '/events photo/codeverse inside 2.JPG', alt: 'Collaborative Problem Solving' },
    { src: '/events photo/codeverse inside 3.JPG', alt: 'Coding in Action' },
    { src: '/events photo/codeverse inside 4.JPG', alt: 'Intense Coding Focus' },
    { src: '/events photo/codeverse inside 5.JPG', alt: 'Peer Discussion and Debugging' },
    { src: '/events photo/codeverse inside 6.JPG', alt: 'Codeverse Session' },
    { src: '/events photo/codeverse inside 1.jpg', alt: 'Codeverse Group Session' },
];

function CodeverseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
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
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#38bdf8]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(56,189,248,0.22), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #38bdf870, transparent)' }} />

                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #38bdf820, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#38bdf8]/70">
                                            Codeverse · Competitive Programming
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Code<span style={{ color: '#38bdf8' }}>verse</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* About */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#38bdf8]/90">About</span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        An intense competitive programming contest spanning multiple difficulty tiers — from DSA to system design — crafted to challenge and elevate every coder's limits.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> Feb 08, 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> Computing Labs, BIT Mesra
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#38bdf8]/90">What's in Store?</span>
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

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#38bdf8]/90">
                                            Event Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {codeversePhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[11px] text-neutral-600 font-medium text-center">
                                    Whether you're a code ninja, an algorithm junkie, or someone who lives for the thrill of the scoreboard,{' '}
                                    <span style={{ color: '#38bdf8' }}>Code Verse is where you belong.</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Electropoly session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ══════════════════════════════════════════
   ELECTROQUIZ MODAL
══════════════════════════════════════════ */

const electroquizPhotos = [
    { src: '/events photo/electro inside1.jpeg', alt: 'Students solving paper quiz' },
    { src: '/events photo/electro inside 2.jpeg', alt: 'Peer discussion during quiz' },
    { src: '/events photo/electro inside 3.jpeg', alt: 'Students working on the quiz' },
    { src: '/events photo/electro inside 4.jpeg', alt: 'Quiz competition in progress' },
];

function ElectroquizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
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
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#fb923c]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(251,146,60,0.22), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #fb923c70, transparent)' }} />

                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #fb923c20, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#fb923c]/70">
                                            Electroquiz · Electronics Quiz Championship
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Electro<span style={{ color: '#fb923c' }}>quiz</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* About */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#fb923c]/90">About</span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        A rigorous electronics and communication engineering quiz that pushes participants on circuit theory, signal processing, microcontrollers, and beyond.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> Mar 01, 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> Seminar Hall, ECE Dept.
                                        </span>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#fb923c]/90">
                                            Event Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {electroquizPhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[11px] text-neutral-600 font-medium text-center">
                                    Test your electronics knowledge and{' '}
                                    <span style={{ color: '#fb923c' }}>Rise as the Quiz Champion!</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox for viewing photos at full resolution */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Electroquiz session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ══════════════════════════════════════════
   BYTE BATTLES MODAL
══════════════════════════════════════════ */

const byteBattlesPhotos = [
    { src: '/events photo/pantheon.jpeg', alt: 'Byte Battles event overview' },
];

function ByteBattlesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (

        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="bytebattles-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                        style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                        onClick={onClose}
                    >
                        <motion.div
                            key="bytebattles-panel"
                            initial={{ opacity: 0, scale: 0.93, y: 32 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.93, y: 32 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#0d0d0d] border border-[#f472b6]/25"
                            style={{ boxShadow: '0 40px 100px -20px rgba(244,114,182,0.22), 0 0 0 1px rgba(255,255,255,0.04)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, transparent, #f472b670, transparent)' }} />

                            {/* Glow blob */}
                            <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, #f472b620, transparent 70%)' }} />

                            <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#f472b6]/70">
                                            Byte Battles · The Ultimate Techfest
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            Byte<span style={{ color: '#f472b6' }}>Battles</span>
                                        </h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* About */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#f472b6]/90">About</span>
                                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                                        Byte Battles is the grand techfest of BIT Mesra — a convergence of the brightest engineering minds across India. Packed with technical competitions, hackathons, workshops, and culturals, it celebrates innovation, creativity, and the spirit of engineering at its finest.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <Calendar className="w-3 h-3" /> Apr 05, 2025
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                            <MapPin className="w-3 h-3" /> Main Auditorium, BIT Mesra
                                        </span>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-[#f472b6]/90">
                                            Event Highlights
                                        </span>
                                        <span className="text-sm text-neutral-400 font-medium">
                                            Click any image to enlarge
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {byteBattlesPhotos.map((photo, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.025, y: -2 }}
                                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                                                onClick={() => setSelectedPhoto(photo.src)}
                                            >
                                                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                                            View Photo
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[11px] text-neutral-600 font-medium text-center">
                                    Join the ultimate engineering convergence and{' '}
                                    <span style={{ color: '#f472b6' }}>Battle with the Best!</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                            aria-label="Close photo"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            key={selectedPhoto}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedPhoto}
                            alt="Byte Battles session highlight"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/*   SUB-EVENT BOX
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

function FeaturedCard({
    event,
    onExplore,
    onCardClick,
}: {
    event: typeof featuredEvents[0];
    onExplore?: () => void;
    onCardClick?: () => void;
}) {
    const Icon = event.icon;
    const BadgeIcon = event.badgeIcon;
    return (
        <motion.div
            onClick={onCardClick}
            className="group relative bg-[#0d0d0d]/90 backdrop-blur-xl rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-500 flex flex-col h-screen"
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
                <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border"
                    style={{ backgroundColor: `${event.color}12`, borderColor: `${event.color}30` }}>
                    <BadgeIcon className="w-3 h-3" style={{ color: event.color, fill: event.color }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: event.color }}>
                        {event.badgeLabel}
                    </span>
                </div>
            )}

            {/* Top Content Area */}
            <div className="relative z-10 px-10 md:px-12 pt-10 md:pt-12 pb-6 flex flex-col gap-6 w-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-400"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}>
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-400"
                        style={{ ['--ec' as string]: event.color }}>
                        <span className="group-hover:text-[--ec] transition-colors duration-400"
                            style={{ ['--ec' as string]: event.color }}>
                            {event.title}
                        </span>
                    </h2>
                </div>
            </div>

            {/* Full-width Landscape Image */}
            {event.image && (
                <div className="relative z-10 w-full flex-1 min-h-0 overflow-hidden bg-neutral-950/80 p-2">
                    {/* @ts-ignore */}
                    <img
                        src={event.image}
                        alt={event.title}
                        loading="eager"
                        className="w-full h-full object-cover object-center rounded-lg"
                    />
                </div>
            )}

            {/* Bottom Content Area */}
            <div className="relative z-10 px-10 md:px-12 pb-10 md:pb-12 pt-6 flex flex-col gap-6 w-full">
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
                            {(event.subEvents as any[]).map((sub) => (
                                <SubEventBox key={sub.name} {...sub} />
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onExplore?.();
                    }}
                    className="flex items-center justify-center gap-3 mt-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer w-full"
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
                    <span>Explore More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════
   GENERIC EVENT CARD (with description hover reveal)
══════════════════════════════════════════ */

function EventCard({
    event,
    delay,
    onExplore,
    onCardClick,
}: {
    event: typeof genericEvents[0];
    delay: number;
    onExplore?: () => void;
    onCardClick?: () => void;
}) {
    const Icon = event.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <SectionReveal delay={delay} className="h-full">
            <motion.div
                onClick={onCardClick}
                className="group relative overflow-hidden cursor-pointer rounded-[2.5rem] border border-white/5 bg-[#111]/80 backdrop-blur-md transition-all duration-500 h-full flex flex-col"
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
                <div className="relative z-10 p-8 md:p-10 flex flex-col gap-5 h-full flex-1">
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
                            <div className="mt-4 rounded-xl bg-neutral-950/80 p-2">
                                <img src={event.image} alt={event.title} className="w-full h-64 md:h-80 object-contain object-center rounded-lg group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
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
                            onClick={(e) => {
                                e.stopPropagation();
                                onExplore?.();
                            }}
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
                            <span>Explore More</span>
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
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[2.5rem] bg-[#0d0d0d] [&::-webkit-scrollbar]:hidden"
                        style={{
                            border: `1px solid ${event.color}40`,
                            boxShadow: `0 40px 100px -20px ${event.color}25, 0 0 0 1px rgba(255,255,255,0.04)`,
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: `linear-gradient(90deg, transparent, ${event.color}70, transparent)` }} />
                        {/* Glow blob */}
                        <div className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 50% 0%, ${event.color}20, transparent 70%)` }} />

                        <div className="relative z-10 p-10 sm:p-14 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-black uppercase tracking-[0.35em]" style={{ color: `${event.color}90` }}>
                                        {event.tagline}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <event.icon className="w-8 h-8" style={{ color: event.color }} />
                                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                            {event.title}
                                        </h2>
                                    </div>
                                    <p className="text-base text-neutral-400 font-medium leading-relaxed max-w-md mt-2">
                                        {event.description}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>


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
    const [bytebattlesOpen, setBytebattlesOpen] = useState(false);
    const [selectedGenericEvent, setSelectedGenericEvent] = useState<typeof genericEvents[0] | null>(null);

    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
            <TechathonModal open={techathonOpen} onClose={() => setTechathonOpen(false)} />
            <BitotsavModal open={bitotsavOpen} onClose={() => setBitotsavOpen(false)} />
            <InternInsightsModal open={internInsightsOpen} onClose={() => setInternInsightsOpen(false)} />
            <CodeverseModal open={codeverseOpen} onClose={() => setCodeverseOpen(false)} />
            <ElectroquizModal open={electroquizOpen} onClose={() => setElectroquizOpen(false)} />
            <ByteBattlesModal open={bytebattlesOpen} onClose={() => setBytebattlesOpen(false)} />
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
                <div className="mb-8 max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">
                        Featured
                    </p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-white">
                        Flagship events that define our year.
                    </h2>
                    <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Discover the signature festivals, competitions, and meetups that bring the ECE community together.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="w-full">
                        {featuredEvents.map((event) => (
                            <FeaturedCard
                                key={event.id}
                                event={event}
                                onExplore={
                                    event.id === 'techathon'
                                        ? () => setTechathonOpen(true)
                                        : undefined
                                }
                                onCardClick={
                                    event.id === 'techathon'
                                        ? () => setTechathonOpen(true)
                                        : undefined
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Generic Events (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8 max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">
                        Events
                    </p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-white">
                        Explore every event across our calendar.
                    </h2>
                    <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        From competitions to community gatherings, these are the experiences you can join throughout the year.
                    </p>
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
                                        : event.id === 'codeverse' ? () => {
                                            setCodeverseOpen(true);
                                        }
                                            : event.id === 'electroquiz' ? () => {
                                                setElectroquizOpen(true);
                                            }
                                                : event.id === 'bytebattles' ? () => {
                                                    setBytebattlesOpen(true);
                                                }
                                                    : () => setSelectedGenericEvent(event)
                            }
                            onCardClick={
                                event.id === 'bitotsav' ? () => setBitotsavOpen(true)
                                    : event.id === 'interninsights' ? () => setInternInsightsOpen(true)
                                        : event.id === 'codeverse' ? () => {
                                            setCodeverseOpen(true);
                                        }
                                            : event.id === 'electroquiz' ? () => {
                                                setElectroquizOpen(true);
                                            }
                                                : event.id === 'bytebattles' ? () => {
                                                    setBytebattlesOpen(true);
                                                }
                                                    : undefined
                            }
                        />
                    ))}
                </div>
            </section>
            {/* ── Workshops (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8 max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">
                        Workshops
                    </p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-white">
                        Learn by doing in our hands-on sessions.
                    </h2>
                    <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Practical workshops designed to sharpen your skills with real tools, guided projects, and expert support.
                    </p>
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
