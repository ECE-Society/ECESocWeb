'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { TeamMemberCard } from './team-member-card';
import { contributors } from '../lib/data';

export const Contributors = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-[#0b0b0b] section-glow-bottom overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.12),transparent_30%)] pointer-events-none" />
      <SectionReveal className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
        >
          Our <span className="text-[#2DD4BF]">Contributors</span>
        </motion.h2>
        <div className="overflow-hidden marquee-container">
          <div className="flex gap-8 marquee-track">
            {contributors.concat(contributors).map((contrib, index) => (
              <div key={`${contrib.name}-${index}`} className="flex-shrink-0 w-[240px] sm:w-[280px]">
                <TeamMemberCard member={contrib} />
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
      <style jsx>{`
        .marquee-track {
          animation: marquee 24s linear infinite;
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};