import { ResultsHero } from '@/modules/recruitment/components/results-hero';
import { ResultsSection } from '@/modules/recruitment/components/results-section';

export const metadata = {
    title: "Recruitment'26 Results | ECE Society – BIT Mesra",
    description:
        "Official selection roster and induction results for ECE Society, BIT Mesra Recruitment'26.",
};

export default function RecruitmentResultsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF]">
            {/* Ambient background glow layers */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
            </div>

            {/* Results Page Hero */}
            <ResultsHero />

            {/* Official Roster & Result Card Section */}
            <ResultsSection />
        </main>
    );
}

