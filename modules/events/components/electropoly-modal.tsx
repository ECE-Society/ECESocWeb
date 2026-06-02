'use client';

import { bitotsavPhotos, bitotsavPhases, genericEvents, electropolyFeatures } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    ModalAbout,
    PhotoGrid,
    PhotoLightbox,
} from './modal-helpers';

const ACCENT = '#2DD4BF';
const ACCENT_RGB = '45,212,191';

export function ElectropolyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();
    const description = genericEvents.find(e => e.id === 'bitotsav')?.description ?? '';

    return (
        <>
            <ModalShell
                open={open}
                onClose={onClose}
                accentColor={ACCENT}
                accentRgb={ACCENT_RGB}
                backdropKey="bito-backdrop"
                panelKey="bito-panel"
            >
                {/* Header */}
                <ModalHeader
                    eyebrow="Electropoly · Bitotsav 2025"
                    title={<>Electro<span style={{ color: ACCENT }}>poly</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* About */}
                <ModalAbout
                    description={description}
                    date="Mar 14–16, 2025"
                    location="Main Campus, BIT Mesra"
                    accentColor={ACCENT}
                />

                {/* Features */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        What&apos;s in Store?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {electropolyFeatures.map((feat) => (
                            <div key={feat.title} className="rounded-2xl p-5 border" style={{ backgroundColor: `${feat.color}08`, borderColor: `${feat.color}25` }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-xl border flex-shrink-0 text-base" style={{ backgroundColor: `${feat.color}15`, borderColor: `${feat.color}30` }}>
                                        {feat.emoji}
                                    </div>
                                    <span className="text-sm font-bold text-white">{feat.title}</span>
                                </div>
                                <p className="text-xs text-neutral-400 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Phases */}
                <div className="flex flex-col gap-4">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        How It Works · Phases
                    </span>
                    <div className="flex flex-col gap-6">
                        {bitotsavPhases.map((phase) => (
                            <div
                                key={phase.number}
                                className="rounded-2xl p-6 border"
                                style={{ backgroundColor: `${phase.color}08`, borderColor: `${phase.color}25` }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{phase.emoji}</span>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: `${phase.color}90` }}>
                                            Phase {phase.number}
                                        </span>
                                        <span className="text-base font-black uppercase tracking-wide text-white">{phase.name}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-3">{phase.intro}</p>
                                <ul className="flex flex-col gap-2">
                                    {phase.points.map((point, pi) => (
                                        <li key={pi} className="flex items-start gap-3">
                                            <span className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }} />
                                            <span className="text-sm text-neutral-300 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>Event Highlights</span>
                        <span className="text-sm text-neutral-400 font-medium">Click any image to enlarge</span>
                    </div>
                    <PhotoGrid photos={bitotsavPhotos} accentColor={ACCENT} onSelect={setSelectedPhoto} />
                </div>

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    💥 Get ready to spark your strategy and{' '}
                    <span style={{ color: ACCENT }}>Electrify the Game!</span>
                </p>
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt="Electropoly session highlight" onClose={clearPhoto} />
        </>
    );
}
