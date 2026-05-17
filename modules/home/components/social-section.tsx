'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

export const SocialSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.15
            }
        }
    } as any;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    } as any;

    const socials = [
        {
            name: 'Instagram',
            handle: '@ecesoc_official',
            icon: <FiInstagram className="text-white text-2xl" />,
            color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
            url: 'https://instagram.com/ecesoc_official'
        },
        {
            name: 'LinkedIn',
            handle: 'ECE Society',
            icon: <FiLinkedin className="text-white text-2xl" />,
            color: 'bg-[#0077B5]',
            url: 'https://linkedin.com/company/ece-society-bit-mesra'
        },
        {
            name: 'GitHub',
            handle: 'ECESOC-Mesra',
            icon: <FiGithub className="text-white text-2xl" />,
            color: 'bg-[#24292e]',
            url: 'https://github.com/ecesoc-mesra'
        },
        {
            name: 'Email',
            handle: 'ecesoc@bitmesra.ac.in',
            icon: <FiMail className="text-white text-2xl" />,
            color: 'bg-[#EA4335]',
            url: 'mailto:ecesoc@bitmesra.ac.in'
        }
    ];

    return (
        <section className="py-0 bg-gradient-to-b from-[#080808] to-[#040404] overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mt-0 mb-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative bg-[#060606]/40 backdrop-blur-3xl rounded-[3rem] py-24 md:py-32 px-12 md:px-24 overflow-hidden shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)]"
                >
                    {/* Dynamic Drifting Glows */}
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#2DD4BF]/5 blur-[120px] rounded-full pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            x: [0, -50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto">
                        <motion.div
                            variants={itemVariants}
                            className="text-center w-full"
                        >
                            <div className="flex flex-col gap-6 items-center">
                                <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                                    Stay Synced
                                </span>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                                    Join our <br />
                                    <span className="text-[#2DD4BF]">Digital Circuit</span>
                                </h2>
                            </div>
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mt-8 font-medium max-w-2xl mx-auto">
                                Connect with the brightest minds in electronics and stay updated with the latest technological shifts in real-time.
                            </p>
                        </motion.div>

                        {/* Social Cards Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 [@media(max-aspect-ratio:530/930)]:!grid-cols-1 gap-8 w-full mt-24">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.015,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    className="flex justify-between items-start [@media(max-aspect-ratio:530/930)]:!items-center w-full p-10 [@media(max-aspect-ratio:530/930)]:!p-5 bg-white/[0.02] backdrop-blur-md rounded-[3rem] [@media(max-aspect-ratio:530/930)]:!rounded-[2rem] group transition-all duration-500 hover:bg-white/[0.05] hover:border-[#2DD4BF]/30 hover:shadow-[0_20px_80px_-20px_rgba(45,212,191,0.3)]"
                                >
                                    {/* Left Group */}
                                    <div className="flex flex-col [@media(max-aspect-ratio:530/930)]:!flex-row items-start [@media(max-aspect-ratio:530/930)]:!items-center gap-10 [@media(max-aspect-ratio:530/930)]:!gap-4">
                                        
                                        {/* Main Icon */}
                                        <div className={`w-20 h-20 [@media(max-aspect-ratio:530/930)]:!w-12 [@media(max-aspect-ratio:530/930)]:!h-12 rounded-3xl [@media(max-aspect-ratio:530/930)]:!rounded-xl ${social.color} flex shrink-0 items-center justify-center shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="flex items-center justify-center [@media(max-aspect-ratio:530/930)]:scale-75">
                                                {social.icon}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col items-start text-left">
                                            <span className="text-white font-black text-2xl [@media(max-aspect-ratio:530/930)]:!text-lg mb-2 [@media(max-aspect-ratio:530/930)]:!mb-0 group-hover:text-[#2DD4BF] transition-colors duration-200 uppercase tracking-tight">{social.name}</span>
                                            <span className="text-neutral-500 text-sm [@media(max-aspect-ratio:530/930)]:!text-[10px] font-bold tracking-tight overflow-hidden text-ellipsis w-full group-hover:text-neutral-300 transition-colors duration-200 font-mono">
                                                {social.handle}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow icon */}
                                    <div className="w-14 h-14 [@media(max-aspect-ratio:530/930)]:!w-10 [@media(max-aspect-ratio:530/930)]:!h-10 shrink-0 rounded-2xl [@media(max-aspect-ratio:530/930)]:!rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 group-hover:bg-[#2DD4BF] group-hover:border-[#2DD4BF] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] group-hover:-translate-y-1 group-hover:translate-x-1 ml-4">
                                        <ArrowUpRight className="w-7 h-7 [@media(max-aspect-ratio:530/930)]:!w-5 [@media(max-aspect-ratio:530/930)]:!h-5" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
