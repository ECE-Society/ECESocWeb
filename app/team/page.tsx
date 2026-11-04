'use client';

import { motion } from 'framer-motion';
import { FacultyAdvisors } from "@/modules/team/components/faculty-advisors";
import { LeadershipBody } from "@/modules/team/components/leadership-body";
import { Executives } from "@/modules/team/components/executives";
import { Contributors } from "@/modules/team/components/contributors";
import { HallOfFame } from "@/modules/team/components/hall-of-fame";
import { SectionReveal } from '@/modules/home/components/section-reveal';

export default function Team() {
  return (
    <main className="min-h-screen selection:bg-tertiary/30 selection:text-tertiary bg-surface text-on-surface relative">
      <section className="relative overflow-hidden bg-[#080808] section-glow-bottom py-32 px-6 md:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.1),transparent_30%)] opacity-80 pointer-events-none" />
        <SectionReveal className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex flex-col gap-4"
          >
            <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
              Team Composition
            </span>
            <h1 className="text-6xl md:text-8xl font-black flex flex-wrap justify-center gap-x-4 leading-[0.85] tracking-tighter uppercase">
              <span className="text-white">ECE Society</span>
              <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.3)]">Team</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: [0, 1], y: [30, 0, 6, 0], scale: [0.95, 1.02, 0.98, 1] }}
            transition={{
              duration: 1.9,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-2xl mx-auto mt-8 text-neutral-400 text-lg md:text-xl leading-relaxed font-medium"
          >
            Different minds, one frequency — connected by curiosity and driven to create.
          </motion.p>
        </SectionReveal>
      </section>

      <FacultyAdvisors />
      <LeadershipBody />
      <Executives />
      <HallOfFame />
      <Contributors />
    </main>
  );
}