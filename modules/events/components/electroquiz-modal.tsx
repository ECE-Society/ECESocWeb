'use client';

import { electroquizPhotos, genericEvents, electroquizFeatures } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    ModalAbout,
    PhotoGrid,
    PhotoLightbox,
} from './modal-helpers';

const ACCENT = '#fb923c';
const ACCENT_RGB = '251,146,60';

export function ElectroquizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();
    const description = genericEvents.find(e => e.id === 'electroquiz')?.description ?? '';

    return (
        <>
            <ModalShell
                open={open}
                onClose={onClose}
                accentColor={ACCENT}
                accentRgb={ACCENT_RGB}
                backdropKey="electroquiz-backdrop"
                panelKey="electroquiz-panel"
            >
                {/* Header */}
                <ModalHeader
                    eyebrow="Electroquiz · Electronics Quiz Championship"
                    title={<>Electro<span style={{ color: ACCENT }}>quiz</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* About */}
                <ModalAbout
                    description={description}
                    date="Mar 01, 2025"
                    location="Seminar Hall, ECE Dept."
                    accentColor={ACCENT}
                />

                {/* Features */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        What&apos;s in Store?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {electroquizFeatures.map((feat) => (
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
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>Event Highlights</span>
                        <span className="text-sm text-neutral-400 font-medium">Click any image to enlarge</span>
                    </div>
                    <PhotoGrid photos={electroquizPhotos} accentColor={ACCENT} onSelect={setSelectedPhoto} />
                </div>

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    Test your electronics knowledge and{' '}
                    <span style={{ color: ACCENT }}>Rise as the Quiz Champion!</span>
                </p>
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt="Electroquiz session highlight" onClose={clearPhoto} />
        </>
    );
}
