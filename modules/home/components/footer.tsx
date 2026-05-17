import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



export const Footer = () => {
    return (
        <footer className="relative w-full bg-[#080808] pt-24 md:pt-36 pb-12 md:pb-20 border-t border-white/10 overflow-hidden">
            {/* Mirror Navbar Glass Effect */}
            <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[100px] pointer-events-none" />
            {/* Decorative top glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-[#2DD4BF]/5 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 md:mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <img src="/home/logo.png" alt="ECE SOC Logo" className="w-10 h-10 md:w-12 md:h-12 bg-white border border-white rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                ECESOC
                            </h2>
                        </div>
                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 max-w-sm">
                            The official departmental society of Electronics and Communication Engineering at BIT Mesra.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#2DD4BF]/20 text-neutral-400 hover:text-[#2DD4BF] transition-colors">
                                <FaInstagram size={28} />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#2DD4BF]/20 text-neutral-400 hover:text-[#2DD4BF] transition-colors">
                                <FaLinkedin size={28} />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#2DD4BF]/20 text-neutral-400 hover:text-[#2DD4BF] transition-colors">
                                <FaGithub size={28} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 text-xl md:text-2xl tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { label: 'About Us', href: '/#about' },
                                { label: 'Blogs', href: '/blogs' },
                                { label: 'Events', href: '/events' },
                                { label: 'Our Team', href: '/team' },
                                { label: 'Alumni', href: '/alumni' },
                                { label: 'Newsletter', href: '/#newsletter' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-[#2DD4BF] text-base md:text-lg transition-colors flex items-center gap-2 group py-1.5 md:py-0">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 text-xl md:text-2xl tracking-wide">Resources</h3>
                        <ul className="space-y-4">
                            {['Study Materials', 'Lab Manuals', 'Previous Year Questions', 'Tech Blog'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-[#2DD4BF] text-base md:text-lg transition-colors flex items-center gap-2 group py-1.5 md:py-0">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 text-xl md:text-2xl tracking-wide">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-[#2DD4BF] mt-1 shrink-0" size={24} />
                                <span className="text-neutral-400 text-base md:text-lg">
                                    Department of ECE,<br />
                                    BIT Mesra, Ranchi,<br />
                                    Jharkhand 835215
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-[#2DD4BF] shrink-0" size={24} />
                                <a href="mailto:ecesoc@bitmesra.ac.in" className="text-neutral-400 hover:text-[#2DD4BF] text-base md:text-lg break-all transition-colors">
                                    ecesoc@bitmesra.ac.in
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-[#2DD4BF] shrink-0" size={24} />
                                <span className="text-neutral-400 text-base md:text-lg">+91 XXXXX XXXXX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-[10px] md:text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} ECE Society, BIT Mesra. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-xs text-neutral-500 mt-2 md:mt-0">
                        <Link href="#" className="hover:text-[#2DD4BF] transition-colors py-1">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#2DD4BF] transition-colors py-1">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
