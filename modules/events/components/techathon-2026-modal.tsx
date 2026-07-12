'use client';

import { useState } from 'react';
import { liveEvent, techathon2026Rounds, techathon2026Features } from '../lib/data';
import {
    useModalKeys,
    ModalShell,
    ModalHeader,
} from './modal-helpers';
import { Calendar, MapPin, Users, Link2 } from 'lucide-react';

const ACCENT = '#a78bfa';
const ACCENT_RGB = '167,139,250';

export function Techathon2026Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useModalKeys(open, onClose);

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
                    title={<>Tech-A-Thon <span style={{ color: ACCENT }}>2026</span></>}
                    accentColor={ACCENT}
                    onClose={onClose}
                />

                {/* Registration Button */}
                <div className="mt-4">
                    <a 
                        href={liveEvent.unstopLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300"
                    >
                        <Link2 className="w-4 h-4" />
                        Register on Unstop
                    </a>
                </div>

                {/* Stat Boxes */}
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        {techathon2026Features.map((feature) => (
                            <div
                                key={feature.title}
                                className="relative flex flex-col justify-center gap-3 rounded-2xl border p-6 lg:p-8 overflow-hidden"
                                style={{ backgroundColor: `${feature.color}0d`, borderColor: `${feature.color}30` }}
                            >
                                <div
                                    className="absolute -inset-2 blur-2xl opacity-10 pointer-events-none rounded-2xl"
                                    style={{ background: `radial-gradient(ellipse at 50% 50%, ${feature.color}, transparent 70%)` }}
                                />
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{feature.emoji}</span>
                                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] relative z-10" style={{ color: `${feature.color}90` }}>
                                        {feature.title}
                                    </span>
                                </div>
                                <span className="text-sm lg:text-base text-neutral-300 font-medium relative z-10 leading-relaxed">
                                    {feature.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About */}
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>About</span>
                    <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                        {liveEvent.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <Calendar className="w-3 h-3" /> 18 July–23 August 2026
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <MapPin className="w-3 h-3" /> Hybrid
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <Users className="w-3 h-3" /> Team: 1-3 Members
                        </span>
                    </div>
                </div>

                {/* Round Guide */}
                <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: `${ACCENT}90` }}>
                        How It Works · Round Guide
                    </span>
                    <div className="flex flex-col gap-6">
                        {techathon2026Rounds.map((round) => {
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

                <p className="text-[11px] text-neutral-600 font-medium text-center">
                    More details will be shared with registered teams closer to each round.
                </p>
            </ModalShell>
        </>
    );
}
