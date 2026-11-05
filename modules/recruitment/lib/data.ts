export type RecruitmentDomain =
    | 'All'
    | 'Core'
    | 'Tech'
    | 'Design'
    | 'Video Editing';

export interface RecruitedCandidate {
    id: string;
    name: string;
    rollNumber: string;
    domain: Exclude<RecruitmentDomain, 'All'>;
    branch: string;
    batch?: string;
}

export const recruitmentDomains: { id: RecruitmentDomain; label: string }[] = [
    { id: 'All', label: 'All Domains' },
    { id: 'Core', label: 'Core' },
    { id: 'Tech', label: 'Tech' },
    { id: 'Design', label: 'Design' },
    { id: 'Video Editing', label: 'Video Editing' },
];

export const recruitmentStats = {
    cycle: "Recruitment'26",
    session: '2026-27',
    orientationDate: 'TBA · ECE Seminar Hall, BIT Mesra',
};

/**
 * Placeholder roster grouped across the 4 domains: Core, Tech, Design, Video Editing.
 * Replace or append with the real candidate list when shared.
 */
export const recruitedCandidates: RecruitedCandidate[] = [
    {
        id: 'core-01',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Core',
        branch: 'ECE',
        batch: '2024-28',
    },
    {
        id: 'tech-01',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Tech',
        branch: 'ECE',
        batch: '2024-28',
    },
    {
        id: 'design-01',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Design',
        branch: 'EEE',
        batch: '2024-28',
    },
    {
        id: 'video-01',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Video Editing',
        branch: 'ECE',
        batch: '2024-28',
    },
    {
        id: 'core-02',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Core',
        branch: 'ECE',
        batch: '2024-28',
    },
    {
        id: 'tech-02',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Tech',
        branch: 'CSE',
        batch: '2024-28',
    },
    {
        id: 'design-02',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Design',
        branch: 'ECE',
        batch: '2024-28',
    },
    {
        id: 'video-02',
        name: 'Selected Candidate',
        rollNumber: 'BTECH/10XXX/24',
        domain: 'Video Editing',
        branch: 'EEE',
        batch: '2024-28',
    },
];
