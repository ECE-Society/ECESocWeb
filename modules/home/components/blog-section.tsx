'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionReveal } from './section-reveal';

const blogs = [
    {
        title: "AESA Radar Systems: The Future of Avionics",
        category: "Defense Tech",
        image: "/blogs/AESA.jpeg",
        date: "March 2024"
    },
    {
        title: "Neuromorphic Computing: Brain-Inspired Chips",
        category: "AI Hardware",
        image: "/blogs/Neuromorphic .jpeg",
        date: "February 2024"
    },
    {
        title: "IOMT: Transforming Healthcare Connectivity",
        category: "Medical IoT",
        image: "/blogs/IOMT.jpeg",
        date: "January 2024"
    },
    {
        title: "Next-Gen Chipsets: Pushing Moore's Law",
        category: "Semiconductors",
        image: "/blogs/Chipsets.jpeg",
        date: "December 2023"
    },
    {
        title: "Satellite Networking: Global Coverage",
        category: "Communication",
        image: "/blogs/Satellite .jpeg",
        date: "November 2023"
    },
    {
        title: "Quantum Engineering: The Qubit Frontier",
        category: "Physics",
        image: "/blogs/Summit .jpeg",
        date: "October 2023"
    },
    {
        title: "Thermal Management in Modern SoCs",
        category: "Hardware",
        image: "/blogs/Thermal .jpeg",
        date: "September 2023"
    }
];

export const BlogSection = () => {
    // Rotation and position logic for the fanned-out effect
    const getCardStyles = (index: number) => {
        const mid = Math.floor(blogs.length / 2);
        const offset = index - mid;

        // Circular arc math
        const rotationAngle = offset * 6; // slightly softened rotation for 7 items
        const xOffset = offset * 130; // wider horizontal separation
        const yOffset = Math.abs(offset) * 25; // increased vertical arch height

        return {
            rotate: rotationAngle,
            x: xOffset,
            y: yOffset,
            index: index
        };
    };

    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-10 lg:py-0 px-6 bg-[#000] overflow-hidden section-glow-bottom">
            <div className="max-w-[1800px] mx-auto text-center">
                {/* Header */}
                <SectionReveal className="text-center mb-10">
                    <div className="flex flex-col gap-6 items-center">
                        <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                            Insights
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Explore Our <br />
                            <span className="text-[#2DD4BF]">Technical Blogs</span>
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mt-8 font-medium leading-relaxed mx-auto">
                        Cutting-edge insights covering Electronics, Artificial Intelligence, and the future of Silicon.
                    </p>
                </SectionReveal>

                {/* Fan Layout Container (Desktop) */}
                <div className="relative h-[550px] hidden [@media(min-aspect-ratio:1300/930)]:flex justify-center items-center mb-2 perspective-[1500px]">
                    {blogs.map((blog, index) => {
                        const style = getCardStyles(index);
                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    rotate: 0,
                                    x: 0,
                                    y: 0,
                                    scale: 0.95
                                }}
                                whileInView={{
                                    opacity: 1,
                                    rotate: style.rotate,
                                    x: style.x,
                                    y: style.y,
                                    scale: 1,
                                    transition: {
                                        duration: 1.5,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: index * 0.1
                                    }
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "circOut"
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{
                                    rotate: 0,
                                    y: -30,
                                    scale: 1.15,
                                    zIndex: 50,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="absolute w-[300px] md:w-[350px] h-[350px] md:h-[400px] rounded-[3rem] overflow-hidden border border-white/10 cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group transition-all duration-300"
                                style={{ zIndex: style.index }}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                                        sizes="(max-w-768px) 300px, 350px"
                                    />
                                </div>

                                {/* Overlay & Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 text-left">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-[2px] w-8 bg-[#2DD4BF]" />
                                        <span className="text-[#2DD4BF] font-black text-xs uppercase tracking-[0.3em]">{blog.category}</span>
                                    </div>
                                    <h3 className="text-white font-black text-2xl leading-tight mb-8 tracking-tight italic">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                                        <span className="text-white/40 font-mono text-xs font-bold uppercase tracking-widest">{blog.date}</span>
                                        <div className="w-10 h-10 rounded-full bg-[#2DD4BF] flex items-center justify-center text-black">
                                            <ArrowUpRight className="w-5 h-5 shadow-sm" />
                                        </div>
                                    </div>
                                </div>

                                {/* Inner Border on Hover */}
                                <div className="absolute inset-4 border border-[#2DD4BF]/0 group-hover:border-[#2DD4BF]/20 rounded-[1.8rem] transition-all duration-700 pointer-events-none z-30" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile List Layout Container */}
                <div className="flex flex-col [@media(min-aspect-ratio:1300/930)]:hidden gap-4 mt-8 mb-12 text-left max-w-2xl mx-auto px-4">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={`mobile-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2DD4BF]/50 flex flex-row items-stretch cursor-pointer"
                        >
                            <div className="relative aspect-square w-[90px] sm:w-[110px] shrink-0 m-3 rounded-xl overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 110px, 110px"
                                />
                            </div>

                            <div className="p-3 sm:p-4 pl-1 sm:pl-2 flex flex-col justify-center flex-grow">
                                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                    <div className="h-[2px] w-4 bg-[#2DD4BF]" />
                                    <span className="text-[#2DD4BF] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">{blog.category}</span>
                                </div>
                                <h3 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2">
                                    {blog.title}
                                </h3>
                                <div className="mt-auto pt-2">
                                    <span className="text-white/40 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">{blog.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <SectionReveal delay={0.8} className="relative z-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-14 py-6 overflow-hidden rounded-full bg-[#111] border border-white/10 text-white font-black uppercase text-xs tracking-[0.4em] transition-all duration-300 hover:border-[#2DD4BF]/50 hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)]"
                    >
                        <span className="relative z-10 group-hover:text-[#2DD4BF] transition-colors">View More Blogs</span>
                        {/* Magnetic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </SectionReveal>
            </div>
        </section>
    );
};
