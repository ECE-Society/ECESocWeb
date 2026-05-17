'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Events', href: '/events' },
        { label: 'Alumni', href: '/alumni' },
        { label: 'Our Team', href: '/team' },
    ];

    return (
        <nav className="glass-panel fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 rounded-2xl overflow-hidden transition-colors duration-300">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/home/logo.png" alt="ECE SOC Logo" className="w-8 h-8 bg-white border-white rounded-full" />
                        <Link href="/" className="text-2xl font-bold text-white">
                            ECESOC
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="relative group text-gray-300 hover:text-white font-medium transition duration-200 py-1"
                            >
                                {item.label}
                                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-[#2DD4BF] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full shadow-[0_0_10px_#2DD4BF]"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-[#2DD4BF] focus:outline-none transition-colors"
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
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col space-y-4 px-2 pb-6 pt-4 border-t border-white/10 mt-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-[#2DD4BF] font-medium text-lg transition duration-200 block"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>
        </nav>
    );
}
