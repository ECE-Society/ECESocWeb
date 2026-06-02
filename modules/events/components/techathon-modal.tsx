'use client';

import { useState } from 'react';
import { techathonRounds, techathonPhotos } from '../lib/data';
import {
    useModalKeys,
    usePhotoLightbox,
    ModalShell,
    ModalHeader,
    PhotoGrid,
    PhotoLightbox,
} from './modal-helpers';
import { Calendar, MapPin } from 'lucide-react';

const ACCENT = '#a78bfa';
const ACCENT_RGB = '167,139,250';

export function TechathonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);
    const { selectedPhoto, setSelectedPhoto, clearPhoto } = usePhotoLightbox();

    return (
        <>
            <ModalShell
                open={open}
                onClose={onClose}
                accentColor={ACCENT}
                accentRgb={ACCENT_RGB}
                backdropKey="techathon-backdrop"
                panelKey="techathon-panel"
            >
                {/* Header */}
                <ModalHeader
                    eyebrow="Tech-A-Thon · Flagship Event"
                    title={<>Tech-A-Thon <span style={{ color: ACCENT }}>2025</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* Stat Boxes */}
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                        {[
                            { label: 'Participants', value: '500+', sub: 'Registered teams', color: ACCENT, rgb: '167,139,250' },
                            { label: 'Prizes Worth', value: '₹15K', sub: 'Total prize pool', color: '#2DD4BF', rgb: '45,212,191' },
                            { label: 'Platform', value: 'Unstop', sub: "Hosted on India's platform", color: '#fb923c', rgb: '251,146,60' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                style={{ backgroundColor: `${stat.color}0d`, borderColor: `${stat.color}30` }}
                            >
                                <div
                                    className="absolute -inset-2 blur-2xl opacity-20 pointer-events-none rounded-2xl"
                                    style={{ background: `radial-gradient(ellipse at 50% 50%, ${stat.color}, transparent 70%)` }}
                                />
                                <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] relative z-10" style={{ color: `${stat.color}70` }}>
                                    {stat.label}
                                </span>
                                <span className="text-3xl lg:text-4xl font-black text-white leading-none relative z-10" style={{ color: stat.color }}>
                                    {stat.value}
                                </span>
                                <span className="text-xs lg:text-sm text-neutral-400 font-medium relative z-10 text-center">
                                    {stat.sub}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className="relative flex flex-col gap-3 rounded-2xl border p-6 overflow-hidden items-center text-center"
                        style={{ backgroundColor: '#06b6d410', borderColor: '#06b6d430' }}
                    >
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.35em] text-[#06b6d4]">
                            Problem Tracks
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {[
                                { label: 'Core Electronics', color: '#a78bfa' },
                                { label: 'Web Development', color: '#2DD4BF' },
                                { label: 'AI / ML', color: '#fb923c' },
                            ].map((track) => (
                                <span
                                    key={track.label}
                                    className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border"
                                    style={{ backgroundColor: `${track.color}15`, borderColor: `${track.color}35`, color: track.color }}
                                >
                                    {track.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* About */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>About</span>
                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                        ECE Society, BIT Mesra proudly presents its flagship event – Tech-A-Thon. This is a month-long, hybrid
                        inter-college innovation sprint that brings together students from across India to build impactful solutions
                        in Artificial Intelligence/Machine Learning, Core Electronics, Embedded Systems, Automation, and Web Development.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <Calendar className="w-3 h-3" /> July–August 2025
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <MapPin className="w-3 h-3" /> ECE Block, BIT Mesra
                        </span>
                    </div>
                </div>

                {/* Round Guide */}
                <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        How It Works · Round Guide
                    </span>
                    <div className="flex flex-col gap-6">
                        {techathonRounds.map((round) => {
                            const RoundIcon = round.icon;
                            return (
                                <div
                                    key={round.number}
                                    className="relative rounded-2xl p-6 border"
                                    style={{ backgroundColor: `${round.color}08`, borderColor: `${round.color}25` }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="flex items-center justify-center w-10 h-10 rounded-xl border flex-shrink-0"
                                            style={{ backgroundColor: `${round.color}15`, borderColor: `${round.color}30` }}
                                        >
                                            <RoundIcon className="w-5 h-5" style={{ color: round.color }} />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: `${round.color}90` }}>
                                                Round {round.number}
                                            </span>
                                            <span className="text-base font-black uppercase tracking-wide text-white">{round.name}</span>
                                        </div>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        {round.points.map((point, pi) => (
                                            <li key={pi} className="flex items-start gap-3">
                                                <span className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: round.color }} />
                                                <span className="text-sm text-neutral-300 leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>Event Highlights</span>
                        <span className="text-sm text-neutral-400 font-medium">Click any image to enlarge and view session highlights</span>
                    </div>
                    <PhotoGrid photos={techathonPhotos} accentColor={ACCENT} onSelect={setSelectedPhoto} />
                </div>

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    More details will be shared with registered teams closer to each round.
                </p>
            </ModalShell>

            <PhotoLightbox src={selectedPhoto} alt="Tech-A-Thon session highlight" onClose={clearPhoto} />
        </>
    );
}
