'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/* ── Shared modal keyboard + scroll-lock hook ── */
export function useModalKeys(open: boolean, onClose: () => void) {
    useEffect(() => {
        if (!open) return;
        const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [open, onClose]);
    useEffect(() => {
        if (open) {
            const originalBodyOverflow = document.body.style.overflow;
            const originalHtmlOverflow = document.documentElement.style.overflow;
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalBodyOverflow;
                document.documentElement.style.overflow = originalHtmlOverflow;
            };
        }
    }, [open]);
}

/* ── Shared photo lightbox ── */
export function PhotoLightbox({
    src,
    alt,
    onClose,
}: {
    src: string | null;
    alt?: string;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                        aria-label="Close photo"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <motion.img
                        key={src}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        src={src}
                        alt={alt ?? 'Event photo'}
                        className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── Shared photo grid ── */
export function PhotoGrid({
    photos,
    accentColor,
    onSelect,
}: {
    photos: { src: string; alt: string }[];
    accentColor: string;
    onSelect: (src: string) => void;
}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.025, y: -2 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 cursor-zoom-in transition-all duration-300"
                    onClick={() => onSelect(photo.src)}
                >
                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-950/70">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-3 py-1.5 rounded-full bg-black/60 text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                                View Photo
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/* ── Shared modal shell ── */
export function ModalShell({
    open,
    onClose,
    accentColor,
    accentRgb,
    backdropKey,
    panelKey,
    children,
}: {
    open: boolean;
    onClose: () => void;
    accentColor: string;
    accentRgb: string;
    backdropKey: string;
    panelKey: string;
    children: React.ReactNode;
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key={backdropKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key={panelKey}
                        initial={{ opacity: 0, scale: 0.93, y: 32 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 32 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl lg:max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[2.5rem] bg-[#0d0d0d] [&::-webkit-scrollbar]:hidden"
                        style={{
                            border: `1px solid ${accentColor}28`,
                            boxShadow: `0 40px 100px -20px rgba(${accentRgb},0.22), 0 0 0 1px rgba(255,255,255,0.04)`,
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top shimmer */}
                        <div
                            className="absolute top-0 left-16 right-16 h-[1px] pointer-events-none"
                            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}70, transparent)` }}
                        />
                        {/* Glow blob */}
                        <div
                            className="absolute -inset-4 rounded-[3rem] opacity-25 blur-3xl pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}22, transparent 70%)` }}
                        />
                        <div className="relative z-10 p-8 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── Shared modal header ── */
export function ModalHeader({
    eyebrow,
    title,
    accentColor,
    onClose,
}: {
    eyebrow: string;
    title: React.ReactNode;
    accentColor: string;
    onClose: () => void;
}) {
    return (
        <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
                <span
                    className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em]"
                    style={{ color: `${accentColor}90` }}
                >
                    {eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    {title}
                </h2>
            </div>
            <button
                onClick={onClose}
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Close"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}

/* ── Shared about section ── */
export function ModalAbout({
    description,
    date,
    location,
    accentColor,
}: {
    description: string;
    date: string;
    location: string;
    accentColor: string;
}) {
    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: `${accentColor}90` }}
            >
                About
            </span>
            <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-3 mt-1">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    📅 {date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    📍 {location}
                </span>
            </div>
        </div>
    );
}

/* ── Shared highlights section header ── */
export function ModalHighlightsHeader({
    accentColor,
    subtitle,
}: {
    accentColor: string;
    subtitle?: string;
}) {
    return (
        <div className="flex flex-col gap-0.5">
            <span
                className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: `${accentColor}90` }}
            >
                Event Highlights
            </span>
            <span className="text-sm text-neutral-400 font-medium">
                {subtitle ?? 'Click any image to enlarge'}
            </span>
        </div>
    );
}

/* ── WithLightbox HOC helper ── */
export function usePhotoLightbox() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    return { selectedPhoto, setSelectedPhoto, clearPhoto: () => setSelectedPhoto(null) };
}
