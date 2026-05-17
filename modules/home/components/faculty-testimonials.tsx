'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { SectionReveal } from './section-reveal';

const testimonials = [
    {
        id: 1,
        name: "Dr. John Doe",
        designation: "Head of ECE Department",
        quote: "The ECE Society has consistently been at the forefront of technical excellence. Our students aren't just learning electronics; they are architecting the future of silicon and signal processing with unparalleled passion.",
        image: "https://api.dicebear.com/7.x/avataaars/png?seed=John&backgroundColor=b6e3f4"
    },
    {
        id: 2,
        name: "Prof. Jane Smith",
        designation: "Faculty Advisor, ECE SOC",
        quote: "Witnessing the evolution of this society over the years has been truly inspiring. From building complex robotics to organizing international symposia, the leadership and technical depth shown here are world-class.",
        image: "https://api.dicebear.com/7.x/avataaars/png?seed=Jane&backgroundColor=ffdfbf"
    },
    {
        id: 3,
        name: "Dr. Alan Turing",
        designation: "Senior Professor",
        quote: "Innovation is the heartbeat of ECE. The projects coming out of this community reflect a deep understanding of core engineering principles combined with a bold vision for the AI-integrated electronics of tomorrow.",
        image: "https://api.dicebear.com/7.x/avataaars/png?seed=Alan&backgroundColor=d1d4f9"
    }
];

export const FacultyTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 6000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)'
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)'
        })
    };

    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-10 lg:py-0 px-6 relative overflow-hidden bg-[#080808] section-glow-bottom">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header - Tiered Theme */}
                <SectionReveal className="text-center mb-12">
                    <div className="flex flex-col gap-6 items-center">
                        <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                            Faculty Insights
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Wisdom from <br />
                            <span className="text-[#2DD4BF]">Our Mentors</span>
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mt-8 font-medium max-w-2xl mx-auto">
                        Guidance and perspectives from the academic pillars supporting our technical journey.
                    </p>
                </SectionReveal>

                {/* Carousel Container */}
                <div className="relative min-h-[500px] flex items-center justify-center mb-24">
                    {/* Navigation Arrows */}
                    <div className="absolute -bottom-[4.5rem] left-1/2 -translate-x-1/2 w-full max-w-[320px] flex justify-between z-20 pointer-events-none items-center">
                        <button 
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all duration-300 backdrop-blur-md pointer-events-auto group"
                        >
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all duration-300 backdrop-blur-md pointer-events-auto group"
                        >
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Testimonial Stage */}
                    <div 
                        className="relative w-full max-w-5xl h-[450px] cursor-grab active:cursor-grabbing"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="h-full w-full bg-[#0A0A0A]/50 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden group">
                                    {/* Decorative Quote Icon */}
                                    <Quote className="absolute -top-10 -left-10 w-48 h-48 text-[#2DD4BF]/5 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />
                                    
                                    {/* Faculty Identity */}
                                    <div className="relative mb-8">
                                        <div className="w-32 h-32 rounded-full border-2 border-[#2DD4BF]/50 p-1.5 bg-[#111] shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                                <Image 
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 112px, 112px"
                                                />
                                            </div>
                                        </div>
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-4 bg-[#2DD4BF]/20 blur-2xl rounded-full -z-10" />
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed italic mb-10 max-w-3xl relative">
                                        "{testimonials[currentIndex].quote}"
                                    </p>

                                    {/* Metadata */}
                                    <div className="mt-auto">
                                        <h4 className="text-[#2DD4BF] font-black text-2xl uppercase tracking-tight mb-1">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <span className="text-neutral-500 font-bold uppercase text-xs tracking-[0.2em]">
                                            {testimonials[currentIndex].designation}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute -bottom-[3.25rem] left-1/2 -translate-x-1/2 flex gap-3 h-10 items-center">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-1.5 transition-all duration-500 rounded-full ${
                                    i === currentIndex ? 'w-10 bg-[#2DD4BF]' : 'w-2 bg-white/10 hover:bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-full bg-[#2DD4BF]/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30%] h-full bg-[#2DD4BF]/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};
