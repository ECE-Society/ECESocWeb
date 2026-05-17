'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useRef } from 'react';
import { FiInstagram, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { hallOfFame } from '../lib/data';
interface HallOfFameMember {
  year: string;
  name: string;
  pastPosition: string;
  tenure: string;
  photo: string;
  social: {
    instagram?: string;
    github?: string;
    gmail?: string;
    linkedin?: string;
  };
}

interface HallOfFameCardProps {
  member: HallOfFameMember;
}

const HallOfFameCard = ({ member }: HallOfFameCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_35px_90px_-20px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="relative h-full overflow-hidden">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            {/* Year Badge */}
            <div className="absolute top-5 left-5 z-10 transition-transform duration-500 group-hover:-translate-y-1">
              <span className="rounded-full bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2DD4BF] border border-[#2DD4BF]/20 shadow-[0_0_15px_rgba(45,212,191,0.15)] flex items-center justify-center">
                {member.year}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-20">
              <div className="-translate-y-2 lg:translate-y-0 transition-transform duration-300 lg:group-hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{member.name}</h3>
                <p className="text-sm md:text-base text-neutral-300 font-semibold mt-1">{member.pastPosition}</p>
                <p className="text-[10px] md:text-xs text-neutral-400 font-medium">{member.tenure}</p>
              </div>
              <div className="mt-4 flex items-center gap-3 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiInstagram size={18} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiLinkedin size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HallOfFame = () => {
  const years = useMemo(
    () => Array.from(new Set(hallOfFame.map((member) => member.year))).sort((a, b) => Number(b) - Number(a)),
    []
  );
  const [selectedYear, setSelectedYear] = useState(years[0] ?? '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedMembers = hallOfFame.filter((member) => member.year === selectedYear);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.05),transparent_70%)] pointer-events-none" />

      <SectionReveal className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Hall of Fame
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Past Leaders
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Pick a year to explore the interactive timeline of our past presidents and vice presidents.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)]">
          <div className="relative">
            <div className="sticky top-32 rounded-3xl border border-white/10 bg-[#070707]/90 p-4 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF] mb-4 font-black">Timeline</p>
              
              <div className="relative w-full z-50">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group w-full px-4 py-3 rounded-2xl border border-white/20 bg-[#0f0f0f]/90 text-white font-bold flex items-center justify-between shadow-[0_5px_15px_-5px_rgba(0,0,0,0.8)] hover:border-[#2DD4BF]/60 hover:bg-[#2DD4BF]/5 hover:text-[#2DD4BF] transition-all duration-300"
                >
                  <span className="tracking-widest text-sm uppercase">{selectedYear}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#2DD4BF]" : "text-white/50 group-hover:text-[#2DD4BF]"}`} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 p-2 bg-[#090909]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-3xl"
                    >
                      <div className="max-h-[250px] overflow-y-auto custom-scrollbar flex flex-col gap-1">
                        {years.map(year => (
                          <button
                            key={year}
                            type="button"
                            onClick={() => { setSelectedYear(year); setIsDropdownOpen(false); }}
                            className={`w-full text-center px-2 py-2 rounded-xl transition-all duration-300 font-bold tracking-widest text-sm ${selectedYear === year ? 'text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 shadow-[0_0_10px_-2px_rgba(45,212,191,0.2)]' : 'text-neutral-400 border border-transparent hover:text-white hover:bg-white/5'}`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="relative mt-6 flex flex-wrap gap-6 sm:gap-8 justify-center sm:justify-start">
                {selectedMembers.map((member, index) => {
                  return (
                    <motion.div
                      key={`${member.name}-${member.year}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 w-full max-w-[280px]"
                    >
                      <HallOfFameCard member={member} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};