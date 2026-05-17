'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { TeamMemberCard } from './team-member-card';
import { facultyAdvisors } from '../lib/data';

export const FacultyAdvisors = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-[#0b0b0b] section-glow-bottom overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#2DD4BF]/10 blur-3xl rounded-full opacity-70" />
      <SectionReveal className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
        >
          Faculty <span className="text-[#2DD4BF]">Advisors</span>
        </motion.h2>
        <div className="flex justify-center flex-wrap gap-14">
          {facultyAdvisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="w-full max-w-[280px]"
            >
              <TeamMemberCard member={advisor} priority={index < 4} />
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
};