'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { TeamMemberCard } from './team-member-card';
import { leadershipBody } from '../lib/data';

export const LeadershipBody = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 xl:px-12 bg-[#0a0a0a] section-glow-bottom overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2DD4BF]/10 blur-3xl rounded-full opacity-70" />
      <SectionReveal className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
        >
          Leadership <span className="text-[#2DD4BF]">Body</span>
        </motion.h2>
        <div className="grid grid-cols-2 min-[530px]:grid-cols-3 min-[930px]:grid-cols-4 gap-3 min-[530px]:gap-6 min-[930px]:gap-8 xl:gap-14 px-2 sm:px-0">
          {leadershipBody.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="w-full max-w-[280px] mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <TeamMemberCard member={leader} />
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};
