import { Award, Briefcase, Code2, Cpu, GitBranch, Shield, Star, Terminal, Trophy, Users, Zap } from 'lucide-react';

/* ══════════════════════════════════════════
   FLAGSHIP EVENT
══════════════════════════════════════════ */

export const flagshipEvent = {
    id: 'techathon',
    title: 'Tech-A-Thon',
    tagline: '4-Week Hackathon',
    date: 'July–August 2025',
    location: 'ECE Block, BIT Mesra',
    description:
        'ECE Society, BIT Mesra proudly presents its flagship event – Tech-A-Thon. This is a month-long, hybrid inter-college innovation sprint that brings together students from across India to build impactful solutions in Artificial Intelligence/Machine Learning, Core Electronics, Embedded Systems, Automation, and Web Development.',
    icon: Zap,
    color: '#a78bfa',
    badgeLabel: 'Flagship',
    badgeIcon: Star,
    image: '/events/techathon/ece soc front.jpg',
} as const;

/* ── Techathon rounds ── */
export const techathonRounds = [
    {
        number: 1,
        name: 'Quiz-A-Bit',
        icon: Award,
        color: '#a78bfa',
        points: [
            'Participants completed a multiple-choice quiz with aptitude, technical, and general trivia questions.',
            '1 hour time limit: Teams had to submit their answers within the stipulated time frame.',
            'One representative from each team participated — their score counted as the team\'s total for Round 1.',
            'No negative marking was applied; each question was worth 2 marks.',
            'Final scoring considered test duration and accuracy — faster solvers with higher accuracy ranked higher.',
            'Top 50 teams advanced to Round 2 based on their performance.',
        ],
    },
    {
        number: 2,
        name: 'Tech-a-Bit',
        icon: GitBranch,
        color: '#38bdf8',
        points: [
            '48-hour development round where shortlisted teams built innovative solutions from multiple problem tracks.',
            'Teams chose from: Core Electronics, Web Development, and AI/ML categories.',
            'Participants submitted solutions as private GitHub repositories with complete documentation and assets.',
            'Teams were allowed to make updates and refinements up until the submission deadline.',
            'Judging criteria: code quality, innovation, feasibility, and presentation of the solution.',
            'Top 12 teams qualified for the Grand Finale presentation round.',
        ],
    },
    {
        number: 3,
        name: 'Grand Finale',
        icon: Users,
        color: '#2DD4BF',
        points: [
            'Finalists presented their 15-minute project presentations to the ECE Society judging panel.',
            'Presentations included live demo, problem statement overview, and technical implementation details.',
            'Q&A session allowed judges to evaluate depth of understanding and problem-solving approach.',
            'Winners were selected based on innovation, technical depth, execution quality, and presentation skills.',
            'Prize distribution ceremony recognized the top 3 teams and special achievement awards.',
            'Event concluded with networking and feedback session between participants and judges.',
        ],
    },
];

export const techathonPhotos = [
    { src: '/events/techathon/techathon inside.jpg', alt: 'Students reviewing certificates and phones' },
    { src: '/events/techathon/techathon inside1.jpg', alt: 'Certification receipt with teachers' },
    { src: '/events/techathon/techathon inside 2.jpg', alt: 'Arduino prototype and electronics setup' },
    { src: '/events/techathon/techathon inside 3.jpg', alt: 'Student presenting data visualization charts' },
    { src: '/events/techathon/IMG_9795.jpg', alt: 'Tech-A-Thon event highlight' },
    { src: '/events/techathon/IMG_9991.jpg', alt: 'Tech-A-Thon session highlight' },
];

/* ══════════════════════════════════════════
   EVENTS (grid items 1-5)
══════════════════════════════════════════ */

export type FeatureBlock = { title: string; desc: string; emoji: string; color: string };

export type EventItem = {
    id: string;
    title: string;
    tagline: string;
    date: string;
    location: string;
    description: string;
    icon: React.ElementType;
    color: string;
    gradientFrom: string;
    gradientTo: string;
    tags: string[];
    image: string;
    category: 'event' | 'workshop';
    features?: FeatureBlock[];
    photos?: { src: string; alt: string }[];
};



/* ── Electropoly phases ── */
export const bitotsavPhases = [
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

export const bitotsavPhotos = [
    { src: '/events/electropoly/bitotsav inside 2.jpeg', alt: 'Classroom Hackathon Session' },
    { src: '/events/electropoly/Screenshot 2026-05-23 163923.png', alt: 'Team building and presentation' },
    { src: '/events/electropoly/bitotsav inside.jpeg', alt: 'Event presentation and evaluation' },
];

export const electropolyFeatures: FeatureBlock[] = [
    { title: 'Phase 1: Board Game', desc: 'Navigate an electronics-themed Monopoly board — buy components, avoid power cuts, and build your empire.', emoji: '🎲', color: '#2DD4BF' },
    { title: 'Phase 2: Circuit Race', desc: 'Top players from Phase 1 race to build and troubleshoot real circuits. More complex builds earn more points.', emoji: '⚡', color: '#f472b6' },
    { title: 'Venue', desc: 'Hosted at Bitotsav — the grand annual techfest of BIT Mesra, attended by students from across the country.', emoji: '🏛️', color: '#a78bfa' },
    { title: 'Team-Based', desc: 'Compete in teams, strategise together, and combine your knowledge of electronics and game theory to win.', emoji: '👥', color: '#facc15' },
];

/* ── Intern Insights ── */
export const internInsightsPhotos = [
    { src: '/events/intern-insights/intern insight inside 5.jpeg', alt: 'Google Meet Speaker Session 2' },
    { src: '/events/intern-insights/intern insight inside 6.jpeg', alt: 'Google Meet Speaker Session 4' },
    { src: '/events/intern-insights/intern insight inside 7.png', alt: 'Google Meet Speaker Session 5' },
    { src: '/events/intern-insights/intern insight inside 3.jpeg', alt: 'Day 2 Speaker Info - Romil & Tanishk' },
    { src: '/events/intern-insights/intern insight inside 4.jpeg', alt: 'Day 3 Speaker Info - Kunal & Subham' },
    { src: '/events/intern-insights/intern insight inside 1.jpeg', alt: 'Day 1 Winner & Runner-up' },
];

export const internInsightsFeatures: FeatureBlock[] = [
    { title: 'Live Sessions', desc: 'Real-time, candid conversations with students who landed internships at top-tier companies.', emoji: '🎙️', color: '#34d399' },
    { title: 'Interview Strategies', desc: 'Learn exactly how they cracked tech, core, and research interviews — from preparation to offer.', emoji: '🎯', color: '#2DD4BF' },
    { title: '3-Day Series', desc: 'Spread across May 13–15, 2025 with a different speaker each day covering diverse company types.', emoji: '📅', color: '#a78bfa' },
    { title: 'All Domains', desc: 'Speakers from software, core ECE, and research backgrounds — something for every career path.', emoji: '🌐', color: '#facc15' },
];

/* ── Codeverse features ── */
export const codeverseFeatures = [
    { title: 'Platform', desc: 'Hosted on HackerRank.', emoji: '💻', color: '#38bdf8' },
    { title: 'DSA-focused Problems', desc: 'Crafted to challenge your logic, speed, and problem-solving under pressure.', emoji: '🧩', color: '#a78bfa' },
    { title: 'Time-Locked Rounds', desc: 'Because every second counts in the world of competitive coding.', emoji: '⏱', color: '#facc15' },
    { title: 'Solo Participation', desc: "It's just you and the code. No teammates. No lifelines. Just pure skill.", emoji: '🔥', color: '#f87171' },
];

export const codeversePhotos = [
    { src: '/events/codeverse/codeverse inside 2.JPG', alt: 'Collaborative Problem Solving' },
    { src: '/events/codeverse/codeverse inside 3.JPG', alt: 'Coding in Action' },
    { src: '/events/codeverse/codeverse inside 4.JPG', alt: 'Intense Coding Focus' },
    { src: '/events/codeverse/codeverse inside 5.JPG', alt: 'Peer Discussion and Debugging' },
    { src: '/events/codeverse/codeverse inside 6.JPG', alt: 'Codeverse Session' },
    { src: '/events/codeverse/codeverse inside 1.jpg', alt: 'Codeverse Group Session' },
];

/* ── Electroquiz ── */
export const electroquizPhotos = [
    { src: '/events/electroquiz/electro inside1.jpeg', alt: 'Students solving paper quiz' },
    { src: '/events/electroquiz/electro inside 2.jpeg', alt: 'Peer discussion during quiz' },
    { src: '/events/byte-battles/Electro-Quiz 2025- Fusion of Knowledge & creativity! From intense brain teasers to electrifying.jpg', alt: 'Byte Battles session 4' },
];

export const electroquizFeatures: FeatureBlock[] = [
    { title: 'ECE Fundamentals', desc: 'Questions spanning circuit theory, signal processing, microcontrollers, and digital systems.', emoji: '📚', color: '#fb923c' },
    { title: 'Timed Rounds', desc: 'Fast-paced format with strict time limits — accuracy and speed both matter on the leaderboard.', emoji: '⏱️', color: '#f87171' },
    { title: 'Open to All', desc: 'All ECE department students are eligible to participate, regardless of year or specialisation.', emoji: '🎓', color: '#a78bfa' },
    { title: 'Quiz Champion', desc: 'The top scorer is crowned Electroquiz Champion and receives special recognition from the society.', emoji: '🏅', color: '#facc15' },
];

/* ── Byte Battles ── */
export const byteBattlesPhotos = [
    { src: '/events/byte-battles/Electro-Quiz 2025- Fusion of Knowledge & creativity! From intense brain teasers to electrifying (1).jpg', alt: 'Byte Battles session 1' },
    { src: '/events/byte-battles/Electro-Quiz 2025- Fusion of Knowledge & creativity! From intense brain teasers to electrifying (2).jpg', alt: 'Byte Battles session 2' },
    { src: '/events/byte-battles/Electro-Quiz 2025- Fusion of Knowledge & creativity! From intense brain teasers to electrifying (3).jpg', alt: 'Byte Battles session 3' },
];

export const byteBattlesFeatures: FeatureBlock[] = [
    { title: 'Round 1: Prompt Engineering', desc: 'Craft creative prompts that push ChatGPT past its usual guardrails — the most creative wins.', emoji: '🤖', color: '#f472b6' },
    { title: 'Round 2: AI Development', desc: 'Build a functional, AI-powered solution within the time limit. Creativity meets engineering here.', emoji: '💻', color: '#a78bfa' },
    { title: 'Focus: AI & Creativity', desc: 'Blend technical depth with creative problem-solving to outmaneuver the competition.', emoji: '⚡', color: '#38bdf8' },
    { title: 'Hackathon Format', desc: 'Compete solo or in small teams for prizes, recognition, and bragging rights at the annual techfest.', emoji: '🏆', color: '#34d399' },
];

export const genericEvents: EventItem[] = [
    {
        id: 'bitotsav',
        title: 'Electropoly',
        tagline: 'The Strategic Electronics Game',
        date: 'Mar 14–16, 2025',
        location: 'Main Campus, BIT Mesra',
        description:
            'Roll the Dice. Rule the Grid. Electropoly is a high-voltage strategic board game where circuits meet commerce — buy, sell, and trade your way through an electronics-themed Monopoly board at Bitotsav, the grand annual techfest of BIT Mesra. Navigate power cuts, component auctions, and circuit challenges as you race to build the most powerful electronic empire on the board.',
        icon: Trophy,
        color: '#2DD4BF',
        gradientFrom: 'from-[#2DD4BF]/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Strategy', 'Bitotsav', 'BIT Mesra'],
        image: '/events/electropoly/Screenshot 2026-05-23 160748.png',
        category: 'event',
        features: electropolyFeatures,
    },
    {
        id: 'interninsights',
        title: 'Intern Insights',
        tagline: 'Industry Connect Series',
        date: 'May 13–15, 2025',
        location: 'Seminar Hall, BIT Mesra',
        description:
            "We interview students who landed internships at top companies and ask them everything — how they prepared, what the interviews were like, and what it's really like on the inside. A raw, honest, peer-to-peer series that turns real experiences into a practical roadmap. Whether you're targeting core ECE roles, software giants, or research labs, every session arms you with the inside knowledge you need to land your dream internship.",
        icon: Briefcase,
        color: '#34d399',
        gradientFrom: 'from-emerald-500/20',
        gradientTo: 'to-teal-500/10',
        tags: ['Career', 'Industry', 'Internship'],
        image: '/events/intern-insights/intern insight.jpeg',
        category: 'event',
        features: internInsightsFeatures,
    },
    {
        id: 'codeverse',
        title: 'Codeverse',
        tagline: 'Competitive Programming',
        date: 'Feb 08, 2025',
        location: 'Computing Labs, BIT Mesra',
        description:
            "An intense competitive programming contest spanning multiple difficulty tiers — from core DSA to advanced system design — crafted to challenge and elevate every coder's limits. Hosted on HackerRank, Codeverse puts you through time-locked rounds where solo skill is all that counts. Whether you're a seasoned competitive programmer or leveling up fast, this is the arena where your problem-solving instincts get sharpened under real pressure.",
        icon: Code2,
        color: '#38bdf8',
        gradientFrom: 'from-sky-500/20',
        gradientTo: 'to-[#2DD4BF]/10',
        tags: ['DSA', 'Competitive', 'Coding'],
        image: '/events/codeverse/codeverse.jpeg',
        category: 'event',
        features: codeverseFeatures,
    },
    {
        id: 'electroquiz',
        title: 'Electroquiz',
        tagline: 'Electronics Quiz Championship',
        date: 'Mar 01, 2025',
        location: 'Seminar Hall, ECE Dept.',
        description:
            'A rigorous electronics and communication engineering quiz that pushes participants on circuit theory, signal processing, microcontrollers, and digital systems. Electroquiz is designed to test the depth and breadth of your ECE fundamentals in a fast-paced, competitive format. Go head-to-head with peers from across departments, prove your domain knowledge, and rise through the ranks to claim the title of Quiz Champion.',
        icon: Cpu,
        color: '#fb923c',
        gradientFrom: 'from-orange-500/20',
        gradientTo: 'to-red-500/10',
        tags: ['Electronics', 'Quiz', 'ECE Domain'],
        image: '/events/electroquiz/electroquiz.jpeg',
        category: 'event',
        features: electroquizFeatures,
    },
    {
        id: 'bytebattles',
        title: 'Byte Battles',
        tagline: 'The Ultimate Techfest',
        date: 'Apr 05, 2025',
        location: 'Main Auditorium, BIT Mesra',
        description:
            "Byte Battles is an AI-focused hackathon built around two thrilling rounds. In Round 1, craft creative prompts that push ChatGPT past its usual limits — a true test of your prompt engineering creativity. Round 2 challenges you to leverage AI tools to build innovative, functional solutions under time pressure. Combine technical depth, creative thinking, and AI fluency to outmaneuver the competition and claim victory.",
        icon: Shield,
        color: '#f472b6',
        gradientFrom: 'from-pink-500/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Techfest', 'BIT Mesra', 'Annual'],
        image: '/events/byte-battles/pantheon.jpeg',
        category: 'event',
        features: byteBattlesFeatures,
    },
];

/* ══════════════════════════════════════════
   WORKSHOPS (grid items 6-9)
══════════════════════════════════════════ */

export const workshopEvents: EventItem[] = [
    {
        id: 'gateway-to-electronics',
        title: 'Gateway to Electronics',
        tagline: 'Foundations Workshop',
        date: 'Feb 10, 2025',
        location: 'ECE Lab A, BIT Mesra',
        description:
            'A comprehensive, beginner-friendly workshop on the core foundations of electronics. Dive into resistors, capacitors, diodes, and transistors through live demonstrations and hands-on circuit analysis sessions. Designed specifically for freshers stepping into the world of ECE, this workshop builds the essential conceptual bedrock you need — and the practical confidence to apply it — from day one of your engineering journey.',
        icon: Zap,
        color: '#facc15',
        gradientFrom: 'from-yellow-500/20',
        gradientTo: 'to-orange-500/10',
        tags: ['Basics', 'Electronics', 'Beginner'],
        image: '/events/workshops/gateway to electronics.jpeg',
        category: 'workshop',
        features: [
            { title: 'Resistors & Capacitors', desc: 'Core passive component fundamentals — how they work, how to read values, and where they appear in real circuits.', emoji: '🔌', color: '#facc15' },
            { title: 'Diodes & Transistors', desc: 'Active component theory and applications, including basic amplifier and switching circuit analysis.', emoji: '💡', color: '#fb923c' },
            { title: 'Live Demonstrations', desc: 'Watch and participate in hands-on circuit builds using actual components on a breadboard.', emoji: '🔧', color: '#2DD4BF' },
            { title: 'For Freshers', desc: 'Tailored for first-year ECE students with zero prior electronics experience. No background needed.', emoji: '🎓', color: '#a78bfa' },
        ],
        photos: [
            { src: '/events/workshops/The glimpse of How to pursue career in electronics.Yet again a successful workshop and student (1).jpg', alt: 'Gateway to Electronics workshop 1' },
            { src: '/events/workshops/The glimpse of How to pursue career in electronics.Yet again a successful workshop and student (2).jpg', alt: 'Gateway to Electronics workshop 2' },
            { src: '/events/workshops/The glimpse of How to pursue career in electronics.Yet again a successful workshop and student.jpg', alt: 'Gateway to Electronics workshop 3' },
        ],
    },
    {
        id: 'intro-to-aiml',
        title: 'Intro to AI/ML',
        tagline: 'Artificial Intelligence Workshop',
        date: 'Mar 05, 2025',
        location: 'Computing Lab, BIT Mesra',
        description:
            'Explore the world of Artificial Intelligence and Machine Learning in this comprehensive, hands-on workshop. Learn supervised learning algorithms, neural networks, and model training techniques with practical, real-world ECE applications. Whether you are a complete beginner or have some prior AI exposure, this session offers structured insights and foundational understanding that will meaningfully advance your skills and open new opportunities in the field.',
        icon: Terminal,
        color: '#22d3ee',
        gradientFrom: 'from-cyan-500/20',
        gradientTo: 'to-sky-500/10',
        tags: ['AI', 'ML', 'Neural Networks'],
        image: '/events/workshops/intro to aiml.jpeg',
        category: 'workshop',
        features: [
            { title: 'Supervised Learning', desc: 'Regression, classification, and model evaluation techniques with intuitive real-world examples.', emoji: '🧠', color: '#22d3ee' },
            { title: 'Neural Networks', desc: 'Architecture, training, backpropagation, and practical applications in ECE and signal processing.', emoji: '🤖', color: '#a78bfa' },
            { title: 'Hands-on Coding', desc: 'Practical Python implementation using scikit-learn and TensorFlow with guided exercises.', emoji: '💻', color: '#2DD4BF' },
            { title: 'All Levels Welcome', desc: 'From complete beginners to intermediate learners — the content is structured for progressive understanding.', emoji: '🌟', color: '#34d399' },
        ],
        photos: [
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da (1).jpg', alt: 'Intro to AI/ML workshop session' },
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da (2).jpg', alt: 'Intro to AI/ML workshop audience' },
        ],
    },
    {
        id: 'intro-to-vlsi',
        title: 'Intro to VLSI',
        tagline: 'Chip Design Workshop',
        date: 'Mar 20, 2025',
        location: 'Seminar Hall, ECE Dept.',
        description:
            'Dive into VLSI design fundamentals with a hands-on workshop covering CMOS logic gates, digital circuits, and RTL coding in Verilog. Understand chip simulation workflows and gain practical insights into the fabrication pipeline used by the semiconductor industry. Perfect for engineers interested in hardware design, this session walks you through industry-standard practices to help you confidently navigate the world of chip development.',
        icon: Cpu,
        color: '#a3e635',
        gradientFrom: 'from-lime-500/20',
        gradientTo: 'to-green-500/10',
        tags: ['VLSI', 'Verilog', 'Chip Design'],
        image: '/events/workshops/intro to verfilog.jpeg',
        category: 'workshop',
        features: [
            { title: 'CMOS Logic Gates', desc: 'Understand inverters, NAND, NOR, and complex CMOS gate design at the transistor level.', emoji: '⚡', color: '#a3e635' },
            { title: 'Verilog RTL Coding', desc: 'Write and simulate hardware description language code for combinational and sequential circuits.', emoji: '💻', color: '#22d3ee' },
            { title: 'Chip Simulation', desc: 'Run functional simulations to verify digital circuit behaviour before moving to fabrication.', emoji: '🔬', color: '#facc15' },
            { title: 'Fabrication Pipeline', desc: 'Get a clear overview of how designs move from RTL through synthesis, layout, and tape-out.', emoji: '🏭', color: '#f472b6' },
        ],
        photos: [
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da (3).jpg', alt: 'Intro to VLSI workshop practical' },
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da (4).jpg', alt: 'Intro to VLSI workshop speaker' },
        ],
    },
    {
        id: 'intro-to-digital-design',
        title: 'Intro to Digital Design',
        tagline: 'Logic & Digital Circuits',
        date: 'Apr 02, 2025',
        location: 'ECE Lab C, BIT Mesra',
        description:
            'Master digital design fundamentals in this workshop covering Boolean algebra, combinational circuits, sequential circuits, flip-flops, and multiplexers. Gain practical, industry-relevant insights into the logic design workflow — from concept through simulation and verification. Whether you are brand new to digital electronics or looking to solidify your foundation, this session equips you with the essential skills to design and analyze real-world digital systems.',
        icon: Code2,
        color: '#c084fc',
        gradientFrom: 'from-purple-500/20',
        gradientTo: 'to-pink-500/10',
        tags: ['Digital', 'Logic Design'],
        image: '/events/workshops/intro to digital.jpeg',
        category: 'workshop',
        features: [
            { title: 'Boolean Algebra', desc: 'Logic gates, truth tables, Karnaugh maps, and expression simplification from first principles.', emoji: '🔢', color: '#c084fc' },
            { title: 'Combinational Circuits', desc: 'Design and analyse multiplexers, decoders, encoders, and binary adder circuits.', emoji: '⚙️', color: '#f472b6' },
            { title: 'Sequential Circuits', desc: 'Flip-flops, registers, counters, and finite state machine design with practical examples.', emoji: '🔄', color: '#38bdf8' },
            { title: 'Simulation & Verification', desc: 'Design and verify circuits using industry-standard simulation tools to confirm correctness.', emoji: '🛠️', color: '#34d399' },
        ],
        photos: [
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da (5).jpg', alt: 'Intro to Digital Design presentation' },
            { src: '/events/workshops/ECE SOCIETY has once again come out with flying colours as it successfully conducted its two da.jpg', alt: 'Intro to Digital Design group work' },
        ],
    },
];

/* ── Combined 3×3 grid ── */
export const allGridEvents: EventItem[] = [...genericEvents, ...workshopEvents];
