'use client';

import { useState } from 'react';
import { allGridEvents, type EventItem } from '../lib/data';
import { EventCard } from './event-card';
import { ElectropolyModal } from './electropoly-modal';
import { InternInsightsModal } from './intern-insights-modal';
import { CodeverseModal } from './codeverse-modal';
import { ElectroquizModal } from './electroquiz-modal';
import { ByteBattlesModal } from './byte-battles-modal';
import { GenericEventModal } from './generic-event-modal';
import { SectionReveal } from '@/modules/home/components/section-reveal';

/* Map event IDs that have dedicated modals */
type ModalId = 'bitotsav' | 'interninsights' | 'codeverse' | 'electroquiz' | 'bytebattles';
const DEDICATED_MODALS = new Set<string>(['bitotsav', 'interninsights', 'codeverse', 'electroquiz', 'bytebattles']);

export function EventGrid() {
    const [bitotsavOpen, setBitotsavOpen] = useState(false);
    const [internInsightsOpen, setInternInsightsOpen] = useState(false);
    const [codeverseOpen, setCodeverseOpen] = useState(false);
    const [electroquizOpen, setElectroquizOpen] = useState(false);
    const [bytebattlesOpen, setBytebattlesOpen] = useState(false);
    const [genericEvent, setGenericEvent] = useState<EventItem | null>(null);

    function openModal(event: EventItem) {
        switch (event.id) {
            case 'bitotsav': setBitotsavOpen(true); break;
            case 'interninsights': setInternInsightsOpen(true); break;
            case 'codeverse': setCodeverseOpen(true); break;
            case 'electroquiz': setElectroquizOpen(true); break;
            case 'bytebattles': setBytebattlesOpen(true); break;
            default: setGenericEvent(event);
        }
    }

    return (
        <>
            {/* Dedicated modals */}
            <ElectropolyModal open={bitotsavOpen} onClose={() => setBitotsavOpen(false)} />
            <InternInsightsModal open={internInsightsOpen} onClose={() => setInternInsightsOpen(false)} />
            <CodeverseModal open={codeverseOpen} onClose={() => setCodeverseOpen(false)} />
            <ElectroquizModal open={electroquizOpen} onClose={() => setElectroquizOpen(false)} />
            <ByteBattlesModal open={bytebattlesOpen} onClose={() => setBytebattlesOpen(false)} />
            <GenericEventModal event={genericEvent} onClose={() => setGenericEvent(null)} />

            {/* Section heading */}
            <SectionReveal className="mb-12 text-center flex flex-col items-center gap-6">
                <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                    Events &amp; Workshops
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    Explore Our <br />
                    <span className="text-[#2DD4BF]">Full Calendar</span>
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                    From competitions and techfests to hands-on workshops — these are the experiences that define your ECE journey.
                </p>
            </SectionReveal>

            {/* 3×3 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allGridEvents.map((event, i) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        delay={i * 0.07}
                        onCardClick={() => openModal(event)}
                    />
                ))}
            </div>
        </>
    );
}
