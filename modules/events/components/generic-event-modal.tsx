'use client';

import { type EventItem } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    ModalAbout,
    PhotoLightbox,
    PhotoGrid,
} from './modal-helpers';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function GenericEventModal({
    event,
    onClose,
}: {
    event: EventItem | null;
    onClose: () => void;
}) {
    useModalKeys(!!event, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();

    if (!event) return null;

    const { color } = event;
    const rgb = '128,128,128'; // fallback; not used for colored shadow here

    return (
        <>
            <ModalShell
                open={!!event}
                onClose={onClose}
                accentColor={color}
                accentRgb={rgb}
                backdropKey={`generic-${event.id}-backdrop`}
                panelKey={`generic-${event.id}-panel`}
            >
                {/* Header */}
                <ModalHeader
                    eyebrow={`${event.tagline} · ECE Society`}
                    title={<span style={{ color }}>{event.title}</span>}
                    accentColor={color}
                    onClose={onClose}
                />

                {/* About */}
                <ModalAbout
                    description={event.description}
                    date={event.date}
                    location={event.location}
                    accentColor={color}
                />

                {/* Features — shown for workshops */}
                {event.features && event.features.length > 0 && (
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${color}90` }}>
                            What&apos;s in Store?
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {event.features.map((feat) => (
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
                )}

                {/* Event Gallery or Cover Image */}
                {event.photos && event.photos.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${color}90` }}>Event Gallery</span>
                            <span className="text-sm text-neutral-400 font-medium">Click any image to enlarge</span>
                        </div>
                        <PhotoGrid photos={event.photos} accentColor={color} onSelect={setSelectedPhoto} />
                    </div>
                ) : event.image && (
                    <div className="flex flex-col gap-3">
                        <span
                            className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]"
                            style={{ color: `${color}90` }}
                        >
                            Event Photo
                        </span>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in"
                            onClick={() => setSelectedPhoto(event.image!)}
                        >
                            <div className="aspect-video w-full relative overflow-hidden bg-neutral-950/70 p-2">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                                    <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                        View Photo
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border"
                                style={{
                                    backgroundColor: `${color}10`,
                                    borderColor: `${color}25`,
                                    color: `${color}cc`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt={`${event.title} event photo`} onClose={clearPhoto} />
        </>
    );
}
