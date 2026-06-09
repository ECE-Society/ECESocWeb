'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
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
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_35px_90px_-20px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="relative h-full overflow-hidden">
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              priority={true}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

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
  const timelineMembers = [...hallOfFame].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="relative py-20 px-4 sm:px-6 md:py-24 md:px-12 lg:px-16 bg-[#0a0a0a]">
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

        <div className="relative">
          <div className="mb-8 lg:mb-12">
            <div className="relative mx-auto max-w-7xl">
              {/* Center glowing vertical line (lg+) */}
              <div className="hidden lg:block absolute left-1/2 top-24 bottom-16 -translate-x-1/2 pointer-events-none z-0">
                <div className="relative h-full w-1">
                  <div className="absolute inset-0 mx-auto w-1 rounded-full bg-linear-to-b from-[#2DD4BF]/70 via-[#2DD4BF]/50 to-[#10B981]/40 shadow-[0_0_60px_rgba(45,212,191,0.12)]" />
                  <div className="absolute inset-0 mx-auto w-1 rounded-full bg-white/5 blur-sm opacity-30" />
                </div>
              </div>

              <div className="relative z-10">
                {/* Desktop grid: balanced left and right groups around the center divider */}
                <div className="hidden lg:grid grid-cols-2 items-start gap-x-16">
                  {/* LEFT group (upper-left) */}
                  <div className="flex justify-end pr-6 xl:pr-10">
                    <div className="w-full max-w-160">
                      <div className="mb-6">
                        <h3 className="text-2xl font-extrabold text-white">2022</h3>
                        <p className="text-sm text-neutral-400">Leadership roles from 2022</p>
                      </div>

                      <div className="flex flex-nowrap justify-end gap-6">
                        {timelineMembers.filter((m) => m.year === '2022').map((member, idx, arr) => (
                          <div key={member.name} className="relative w-64 xl:w-72">
                            {/* connector to center - only show for the rightmost card (closest to timeline) */}
                            {idx === arr.length - 1 && (
                              <>
                                <div className="hidden lg:block absolute top-6 -right-12 z-10">
                                  <div className="h-5 w-5 rounded-full border-4 border-[#2DD4BF] bg-[#08110f] shadow-[0_0_28px_rgba(45,212,191,0.18)] flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                                  </div>
                                </div>
                                <div className="hidden lg:block absolute top-8 -right-12 w-12 z-0">
                                  <div className="w-full h-0.5 rounded-full bg-linear-to-r from-white/8 to-[#2DD4BF]/30" />
                                </div>
                              </>
                            )}

                            <HallOfFameCard member={member} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT group (lower-right) */}
                  <div className="flex justify-start pl-6 xl:pl-10 pt-56 xl:pt-64">
                    <div className="w-full max-w-160">
                      <div className="mb-6">
                        <h3 className="text-2xl font-extrabold text-white">2021</h3>
                        <p className="text-sm text-neutral-400">Leadership roles from 2021</p>
                      </div>

                      <div className="flex flex-nowrap gap-6 justify-start">
                        {timelineMembers.filter((m) => m.year === '2021').map((member, idx) => (
                          <div key={member.name} className="relative w-64 xl:w-72">
                            {/* connector to center - only show for the leftmost card (closest to timeline) */}
                            {idx === 0 && (
                              <>
                                <div className="hidden lg:block absolute top-6 -left-12 z-10">
                                  <div className="h-5 w-5 rounded-full border-4 border-[#2DD4BF] bg-[#08110f] shadow-[0_0_28px_rgba(45,212,191,0.18)] flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                                  </div>
                                </div>
                                <div className="hidden lg:block absolute top-8 -left-12 w-12 z-0">
                                  <div className="w-full h-0.5 rounded-full bg-linear-to-r from-[#2DD4BF]/30 to-white/8" />
                                </div>
                              </>
                            )}

                            <HallOfFameCard member={member} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile / stacked layout */}
                <div className="lg:hidden space-y-8">
                  {timelineMembers.map((member, idx) => (
                    <motion.div
                      key={`${member.name}-${member.year}-${idx}`}
                      className="w-full max-w-72 mx-auto"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <HallOfFameCard member={member} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};