import { EventsHero } from '@/modules/events/components/events-hero';
import { FlagshipCard } from '@/modules/events/components/flagship-card';
import { EventGrid } from '@/modules/events/components/event-grid';

export const metadata = {
    title: 'Events | ECE Society – BIT Mesra',
    description:
        'Explore all ECE Society events and workshops — from flagship hackathons to hands-on technical sessions.',
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
            </div>

            {/* Hero */}
            <EventsHero />

            {/* Flagship */}
            <section className="relative px-6 md:px-12 lg:px-20 pt-10 md:pt-16 lg:pt-20 pb-16 max-w-[1600px] mx-auto">
                <FlagshipCard />
            </section>

            {/* Events & Workshops grid */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <EventGrid />
            </section>
        </main>
    );
}
