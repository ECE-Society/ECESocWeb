'use client';

import { internInsightsPhotos, genericEvents, internInsightsFeatures } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    ModalAbout,
    PhotoGrid,
    PhotoLightbox,
} from './modal-helpers';

const ACCENT = '#34d399';
const ACCENT_RGB = '52,211,153';

export function InternInsightsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();
    const description = genericEvents.find(e => e.id === 'interninsights')?.description ?? '';

    return (
        <>
            <ModalShell
                open={open}
                onClose={onClose}
                accentColor={ACCENT}
                accentRgb={ACCENT_RGB}
                backdropKey="intern-backdrop"
                panelKey="intern-panel"
            >
                {/* Header */}
                <ModalHeader
                    eyebrow="Intern Insights · ECE Society"
                    title={<>Intern <span style={{ color: ACCENT }}>Insights</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* About */}
                <ModalAbout
                    description={description}
                    date="May 13–15, 2025"
                    location="Seminar Hall, BIT Mesra"
                    accentColor={ACCENT}
                />

                {/* Features */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        What&apos;s in Store?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {internInsightsFeatures.map((feat) => (
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

                {/* Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                            Session Highlights
                        </span>
                        <span className="text-sm text-neutral-400 font-medium">Click any image to enlarge</span>
                    </div>
                    <PhotoGrid photos={internInsightsPhotos} accentColor={ACCENT} onSelect={setSelectedPhoto} />
                </div>

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    Whether you&apos;re aiming for core, software, or research —{' '}
                    <span style={{ color: ACCENT }}>this series is crafted to inspire, inform, and guide you.</span>
                </p>
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt="Intern Insights session highlight" onClose={clearPhoto} />
        </>
    );
}
