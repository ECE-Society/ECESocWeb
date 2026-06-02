'use client';

import { byteBattlesPhotos, genericEvents, byteBattlesFeatures } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    ModalAbout,
    PhotoGrid,
    PhotoLightbox,
} from './modal-helpers';

const ACCENT = '#f472b6';
const ACCENT_RGB = '244,114,182';

export function ByteBattlesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();
    const description = genericEvents.find(e => e.id === 'bytebattles')?.description ?? '';

    return (
        <>
            <ModalShell
                open={open}
                onClose={onClose}
                accentColor={ACCENT}
                accentRgb={ACCENT_RGB}
                backdropKey="bytebattles-backdrop"
                panelKey="bytebattles-panel"
            >
                {/* Header */}
                <ModalHeader
                    eyebrow="Byte Battles · AI-Focused Hackathon"
                    title={<>Byte<span style={{ color: ACCENT }}>Battles</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* About */}
                <ModalAbout
                    description={description}
                    date="Apr 05, 2025"
                    location="Main Auditorium, BIT Mesra"
                    accentColor={ACCENT}
                />

                {/* Features */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        What&apos;s in Store?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {byteBattlesFeatures.map((feat) => (
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
                    <PhotoGrid photos={byteBattlesPhotos} accentColor={ACCENT} onSelect={setSelectedPhoto} />
                </div>

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    Join the ultimate engineering convergence and{' '}
                    <span style={{ color: ACCENT }}>Battle with the Best!</span>
                </p>
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt="Byte Battles session highlight" onClose={clearPhoto} />
        </>
    );
}
