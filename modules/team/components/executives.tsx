'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { TeamMemberCard } from './team-member-card';
import { executives } from '../lib/data';

export const Executives = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 xl:px-12 bg-[#080808] section-glow-bottom overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full opacity-80" />
      <SectionReveal className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
        >
          <span className="text-[#2DD4BF]">Executives</span>
        </motion.h2>
        <div className="grid grid-cols-2 min-[530px]:grid-cols-3 min-[930px]:grid-cols-4 gap-3 min-[530px]:gap-6 min-[930px]:gap-8 xl:gap-14 px-2 sm:px-0">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              className="w-full max-w-[280px] mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <TeamMemberCard member={exec} priority={index < 4} />
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};