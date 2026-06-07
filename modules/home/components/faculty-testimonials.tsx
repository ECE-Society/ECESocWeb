'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { SectionReveal } from './section-reveal';

const testimonials = [
    {
        id: 1,
        name: "Dr. Sanjay Kumar",
        designation: "Head of ECE Department",
        quote: "The ECE Society has become a cornerstone of our department’s growth, consistently pushing the boundaries of technical excellence. Through meticulously organized workshops and innovative projects, the society has significantly enriched our students' practical skills. Their unwavering commitment to fostering a culture of research, hardware prototyping, and professional development is truly commendable and vital for our future engineers.",
    },
    {
        id: 2,
        name: "Dr. Sanjaya Shankar Tripathy",
        designation: "Faculty Advisor, ECE SOC",
        quote: "Witnessing the evolution of this society over the years has been truly inspiring. From building complex robotics to organizing international symposia, the leadership and technical depth shown here are world-class.",
    },
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
        <section className="relative py-10 lg:py-16 px-6 overflow-hidden bg-[#080808] section-glow-bottom">
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
                <div className="relative min-h-[500px] flex items-center justify-center mb-0">
                    {/* Testimonial Stage */}
                    <div
                        className="relative w-full max-w-5xl h-[550px] md:h-[450px] cursor-grab active:cursor-grabbing"
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
                                <div className="h-full w-full bg-[#0A0A0A]/50 backdrop-blur-3xl rounded-[3rem] border border-white/10 relative overflow-hidden group">
                                    {/* Decorative Quote Icon */}
                                    <Quote className="absolute -top-10 -left-10 w-48 h-48 text-[#2DD4BF]/5 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />

                                    {/* Quote Text */}
                                    <div className="absolute top-0 left-0 right-0 bottom-[180px] flex flex-col justify-center px-8 md:px-16 pt-8 overflow-y-auto no-scrollbar">
                                        <p className="text-lg md:text-2xl font-medium text-white/90 leading-relaxed italic max-w-3xl text-center my-auto mx-auto w-full">
                                            "{testimonials[currentIndex].quote}"
                                        </p>
                                    </div>

                                    {/* Metadata & Navigation */}
                                    <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-6 w-full">
                                        <div className="flex items-center justify-center w-full max-w-[32rem] pointer-events-auto relative px-4">
                                            {/* Left Arrow */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    prevSlide();
                                                }}
                                                className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all duration-300 backdrop-blur-md group z-10"
                                            >
                                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
                                            </button>

                                            {/* Faculty Info */}
                                            <div className="text-center px-16 md:px-20 w-full h-[100px] flex flex-col justify-center items-center">
                                                <h4 className="text-[#2DD4BF] font-black text-lg md:text-xl uppercase tracking-tight mb-1 line-clamp-2">
                                                    {testimonials[currentIndex].name}
                                                </h4>
                                                <span className="text-neutral-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] line-clamp-3">
                                                    {testimonials[currentIndex].designation}
                                                </span>
                                            </div>

                                            {/* Right Arrow */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    nextSlide();
                                                }}
                                                className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all duration-300 backdrop-blur-md group z-10"
                                            >
                                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                        {/* Pagination Dots */}
                                        <div className="flex gap-3 h-4 items-center justify-center pointer-events-auto">
                                            {testimonials.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDirection(i > currentIndex ? 1 : -1);
                                                        setCurrentIndex(i);
                                                    }}
                                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-10 bg-[#2DD4BF]' : 'w-2 bg-white/10 hover:bg-white/30'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>


                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-full bg-[#2DD4BF]/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30%] h-full bg-[#2DD4BF]/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};
