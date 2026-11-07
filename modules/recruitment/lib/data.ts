export type Batch = 'K25' | 'K26';

export type SubteamId = 'all' | 'core' | 'tech' | 'design-content' | 'management';

export interface RecruitedCandidate {
    id: string;
    name: string;
    rollNumber: string;
    batch: Batch;
    branch: string;
    subteam: 'Core' | 'Tech' | 'Design & Content' | 'Events & Management';
    domainPreference?: string;
    notes?: string;
}

export interface SubteamGroup {
    id: SubteamId;
    name: string;
    label: string;
    description: string;
    k25: RecruitedCandidate[];
    k26: RecruitedCandidate[];
}

export const recruitmentStats = {
    cycle: "Recruitment'26",
    session: '2026-27',
    orientationDate: 'To Be Announced Soon',
    orientationVenue: 'ECE Seminar Hall, BIT Mesra',
};

export const subteamFilters: { id: SubteamId; label: string }[] = [
    { id: 'all', label: 'All Subteams' },
    { id: 'core', label: 'Core' },
    { id: 'tech', label: 'Tech' },
    { id: 'design-content', label: 'Design & Content' },
    { id: 'management', label: 'Events & Management' },
];

export const recruitedCandidates: RecruitedCandidate[] = [
    // ==========================================
    // CORE SUBTEAM - K25
    // ==========================================
    {
        id: 'k25-core-1',
        name: 'Aditya Srivastava',
        rollNumber: 'BTECH/10282/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k25-core-2',
        name: 'Jatin Bhawsinka',
        rollNumber: 'BTECH/10190/25',
        batch: 'K25',
        branch: 'EEE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k25-core-3',
        name: 'Rishit Kumar',
        rollNumber: 'BTECH/10201/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k25-core-4',
        name: 'Yuvraj Sinha',
        rollNumber: 'BTECH/10260/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k25-core-5',
        name: 'Rohit Bendi',
        rollNumber: 'BTECH/10782/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core, Tech',
        notes: 'Embedded Systems',
    },
    {
        id: 'k25-core-6',
        name: 'Yash Raghuvanshi',
        rollNumber: 'BTECH/10688/25',
        batch: 'K25',
        branch: 'EEE',
        subteam: 'Core',
        domainPreference: 'Core, Tech',
    },

    // ==========================================
    // CORE SUBTEAM - K26
    // ==========================================
    {
        id: 'k26-core-1',
        name: 'Akash Singh',
        rollNumber: 'BTECH/10318/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k26-core-2',
        name: 'Aman Agarwal',
        rollNumber: '—',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-3',
        name: 'Arnav Dash',
        rollNumber: 'BTECH/10389/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-4',
        name: 'Kamaraj Sairam T P',
        rollNumber: 'BTECH/10303/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k26-core-5',
        name: 'Kartikey Bora',
        rollNumber: 'BTECH/10244/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-6',
        name: 'Krishna Raj',
        rollNumber: 'BTECH/11029/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k26-core-7',
        name: 'Navya Sharma',
        rollNumber: 'BTECH/10570/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k26-core-8',
        name: 'Ninad Patil',
        rollNumber: 'BTECH/10811/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-9',
        name: 'Rajshree',
        rollNumber: '—',
        batch: 'K26',
        branch: 'EEE',
        subteam: 'Core',
        domainPreference: 'Core',
    },
    {
        id: 'k26-core-10',
        name: 'Ridhi Agarwal',
        rollNumber: 'BTECH/11154/26',
        batch: 'K26',
        branch: 'CHEMICAL',
        subteam: 'Core',
        domainPreference: 'Core (VLSI)',
    },
    {
        id: 'k26-core-11',
        name: 'Rounak Kumar',
        rollNumber: 'BTECH/10097/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-12',
        name: 'Shubham Kumar',
        rollNumber: 'BTECH/10167/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-core-13',
        name: 'Tanmai Parth',
        rollNumber: 'BTECH/10615/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Core',
        domainPreference: 'Core and Tech',
    },

    // ==========================================
    // TECH SUBTEAM - K25
    // ==========================================
    {
        id: 'k25-tech-1',
        name: 'Ankesh Singh',
        rollNumber: 'BTECH/11025/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k25-tech-2',
        name: 'Harsh Kumar',
        rollNumber: 'BTECH/10540/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core, ML',
    },

    // ==========================================
    // TECH SUBTEAM - K26
    // ==========================================
    {
        id: 'k26-tech-1',
        name: 'Aakash Kumar',
        rollNumber: 'BTECH/10341/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-2',
        name: 'Aakarsh',
        rollNumber: 'BTECH/10861/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-tech-3',
        name: 'Aanshi Soni',
        rollNumber: 'BTECH/10504/26',
        batch: 'K26',
        branch: 'CHEMICAL',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-4',
        name: 'Aarushi Jaiswal',
        rollNumber: 'BTECH/10841/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-tech-5',
        name: 'Atharv Tripathi',
        rollNumber: 'BTECH/10195/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-6',
        name: 'Avani Kothari',
        rollNumber: 'BTECH/10852/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-tech-7',
        name: 'Ayushi Singh',
        rollNumber: 'BTECH/10364/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-8',
        name: 'Himanshu Prakash',
        rollNumber: 'BTECH/10797/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core and Tech',
    },
    {
        id: 'k26-tech-9',
        name: 'Md Taha Faruqui',
        rollNumber: 'BTECH/10261/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-10',
        name: 'Manthan Mahajan',
        rollNumber: 'BTECH/10840/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-11',
        name: 'Maulik Dadhich',
        rollNumber: 'BTECH/10597/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-12',
        name: 'Shashwat Siddhant',
        rollNumber: 'BTECH/11158/26',
        batch: 'K26',
        branch: 'CHEMICAL',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-13',
        name: 'Soustrik Banerjee',
        rollNumber: 'BTECH/10918/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Tech',
    },
    {
        id: 'k26-tech-14',
        name: 'Swarnali Shome',
        rollNumber: 'BTECH/10845/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Tech',
        domainPreference: 'Core and Tech',
    },

    // ==========================================
    // DESIGN & CONTENT SUBTEAM - K25
    // ==========================================
    {
        id: 'k25-design-1',
        name: 'Anushka Sharma (BIT PATNA)',
        rollNumber: 'BTECH/15148/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Design',
        notes: 'Research projects, VLSI',
    },
    {
        id: 'k25-design-2',
        name: 'Kshitij Kumar',
        rollNumber: 'BTECH/10224/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Video Editing',
    },
    {
        id: 'k25-design-3',
        name: 'Sai Chetan',
        rollNumber: 'BTECH/10155/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Design & Video Editing',
    },

    // ==========================================
    // DESIGN & CONTENT SUBTEAM - K26
    // ==========================================
    {
        id: 'k26-design-1',
        name: 'Aditya Chandna',
        rollNumber: 'BTECH/10148/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Design',
    },
    {
        id: 'k26-design-2',
        name: 'Anushka Mazumdar',
        rollNumber: 'BTECH/10781/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core and Tech (Design)',
    },
    {
        id: 'k26-design-3',
        name: 'Arkapravo Halder',
        rollNumber: 'BTECH/10254/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Video Editing',
    },
    {
        id: 'k26-design-4',
        name: 'Bhaskar Krishnan',
        rollNumber: 'BTECH/10521/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core and Tech (Video Editing)',
    },
    {
        id: 'k26-design-5',
        name: 'Dhruvi Gandhi',
        rollNumber: 'BTECH/11062/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Tech and Video Editing',
    },
    {
        id: 'k26-design-6',
        name: 'Harsh Kumar Sahu',
        rollNumber: 'BTECH/10420/26',
        batch: 'K26',
        branch: 'EEE',
        subteam: 'Design & Content',
        domainPreference: 'Core and Tech (Video & Design)',
    },
    {
        id: 'k26-design-7',
        name: 'Mohd Sadat Khan',
        rollNumber: 'BTECH/10298/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core and Tech (Design & Video)',
    },
    {
        id: 'k26-design-8',
        name: 'Saptak Mukhopadhyay',
        rollNumber: 'BTECH/10278/26',
        batch: 'K26',
        branch: 'ECE',
        subteam: 'Design & Content',
        domainPreference: 'Core, Tech, Video Editing',
    },

    // ==========================================
    // EVENTS & MANAGEMENT SUBTEAM - K25
    // ==========================================
    {
        id: 'k25-mgmt-1',
        name: 'Ayush Singh',
        rollNumber: 'BTECH/10269/25',
        batch: 'K25',
        branch: 'ECE',
        subteam: 'Events & Management',
        domainPreference: 'Event management, sponsorship',
    },
];

export const subteamsData: SubteamGroup[] = [
    {
        id: 'core',
        name: 'Core Subteam',
        label: 'Core',
        description: 'Silicon architecture, hardware design, embedded systems, and VLSI engineering.',
        k25: recruitedCandidates.filter((c) => c.subteam === 'Core' && c.batch === 'K25'),
        k26: recruitedCandidates.filter((c) => c.subteam === 'Core' && c.batch === 'K26'),
    },
    {
        id: 'tech',
        name: 'Tech Subteam',
        label: 'Tech',
        description: 'Full-stack software engineering, algorithms, system architecture, and machine learning.',
        k25: recruitedCandidates.filter((c) => c.subteam === 'Tech' && c.batch === 'K25'),
        k26: recruitedCandidates.filter((c) => c.subteam === 'Tech' && c.batch === 'K26'),
    },
    {
        id: 'design-content',
        name: 'Design & Content Subteam',
        label: 'Design & Content',
        description: 'Visual identity, UI/UX, video production, motion graphics, and creative media.',
        k25: recruitedCandidates.filter((c) => c.subteam === 'Design & Content' && c.batch === 'K25'),
        k26: recruitedCandidates.filter((c) => c.subteam === 'Design & Content' && c.batch === 'K26'),
    },
    {
        id: 'management',
        name: 'Events & Management Subteam',
        label: 'Events & Management',
        description: 'Event curation, institutional sponsorship, operations, and public outreach.',
        k25: recruitedCandidates.filter((c) => c.subteam === 'Events & Management' && c.batch === 'K25'),
        k26: recruitedCandidates.filter((c) => c.subteam === 'Events & Management' && c.batch === 'K26'),
    },
];
