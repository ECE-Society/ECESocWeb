'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { SectionReveal } from './section-reveal';

const galleryImages = [
    '/blogs/AESA.jpeg',
    '/blogs/CE20.jpeg',
    '/blogs/Chipsets.jpeg',
    '/blogs/DHRUV.jpeg',
    '/blogs/EVM.jpeg',
    '/blogs/Holograph.jpeg',
    '/blogs/IOMT.jpeg',
    '/blogs/IoT .jpeg',
    '/blogs/Networks.jpeg',
    '/blogs/Neuromorphic .jpeg',
    '/blogs/Optimus.jpeg',
    '/blogs/Paper.jpeg',
    '/blogs/Satellite .jpeg',
    '/blogs/Summit .jpeg',
    '/blogs/Thermal .jpeg',
    '/home/batch.PNG',
];

export const GallerySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    };

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(nextSlide, 2000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    return (
        <section className="py-36 bg-gradient-to-b from-[#0e0e0e] to-[#080808] overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                <SectionReveal className="mb-24 flex flex-col items-center text-center px-6">
                    <div className="flex flex-col gap-6 items-center">
                        <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                            Visual Synthesis
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                            The Ingenuity <br />
                            <span className="text-[#2DD4BF]">Gallery</span>
                        </h2>
                    </div>
                </SectionReveal>

                {/* 3D Coverflow Container */}
                <div
                    className="relative h-[500px] flex items-center justify-center perspective-[1500px]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                        {galleryImages.map((src, index) => {
                            const offset = index - activeIndex;

                            // Circular logic (showing items within a range)
                            let normalizedOffset = offset;
                            if (offset > galleryImages.length / 2) normalizedOffset -= galleryImages.length;
                            if (offset < -galleryImages.length / 2) normalizedOffset += galleryImages.length;

                            const absNormalizedOffset = Math.abs(normalizedOffset);

                            // Hide items that are too far away
                            const isVisible = absNormalizedOffset <= 3;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        x: normalizedOffset * 320,
                                        scale: 1 - absNormalizedOffset * 0.15,
                                        rotateY: normalizedOffset * -45,
                                        zIndex: 10 - absNormalizedOffset,
                                        opacity: isVisible ? 1 - absNormalizedOffset * 0.3 : 0,
                                        pointerEvents: absNormalizedOffset === 0 ? 'auto' : 'none'
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 150,
                                        damping: 25
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    className="absolute w-[350px] md:w-[500px] aspect-[16/10] cursor-pointer group"
                                    style={{
                                        display: isVisible ? 'block' : 'none',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#2DD4BF]/40 group-hover:shadow-[0_0_40px_-5px_rgba(45,212,191,0.3)]">
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            sizes="500px"
                                        />

                                        {/* Dynamic Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${absNormalizedOffset === 0 ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />

                                        {/* Status Text (focused on active card) */}
                                        <div className={`absolute bottom-10 left-10 transition-all duration-500 ${absNormalizedOffset === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[#2DD4BF] font-black text-[10px] uppercase tracking-widest">Captured Moment #{index + 1}</span>
                                                <div className="h-[2px] w-6 bg-[#2DD4BF]" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </section>
    );
};