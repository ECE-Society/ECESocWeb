'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Trigger initially in case page is already scrolled on load
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Events', href: '/events' },
        { label: 'Alumni', href: '/alumni' },
        { label: 'Our Team', href: '/team' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? 'bg-gradient-to-b from-black/95 to-black/40 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'
        }`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link 
                        href="/"
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="flex-shrink-0 flex items-center gap-3 group"
                    >
                        <img 
                            src="/home/logo.png" 
                            alt="ECE SOC Logo" 
                            className="w-9 h-9 bg-white border-2 border-white/20 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:border-[#2DD4BF]/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]" 
                        />
                        <span className="text-xl font-black text-white tracking-widest transition-all duration-500 group-hover:text-[#2DD4BF]">
                            ECESOC
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="relative px-5 py-2.5 rounded-full transition-all duration-500 group"
                                >
                                    <span className={`relative z-10 font-bold tracking-wider text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                    {/* Luminous Underglow */}
                                    <span 
                                        className={`absolute inset-0 rounded-full transition-all duration-500 ${
                                            isActive 
                                            ? 'bg-[#2DD4BF]/15 shadow-[0_0_25px_rgba(45,212,191,0.25)] border border-[#2DD4BF]/20' 
                                            : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-[#2DD4BF]/10 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] border border-transparent group-hover:border-[#2DD4BF]/20'
                                        }`}
                                    ></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-400 hover:text-white hover:cursor-pointer focus:outline-none transition-colors relative z-50 p-2"
                        >
                            {isOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Expanded Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl rounded-3xl mt-6 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex flex-col p-4 gap-2">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`px-6 py-4 rounded-2xl text-base font-bold tracking-wider transition-all duration-300 flex items-center ${
                                                isActive 
                                                ? 'text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 shadow-[0_0_20px_rgba(45,212,191,0.1)]' 
                                                : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>
        </nav>
    );
}
