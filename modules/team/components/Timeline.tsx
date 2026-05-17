'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FiInstagram, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    role: 'President',
    title: 'Former President',
    description: 'Led the society through innovation, expanded membership, and drove the most ambitious events calendar yet.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/rahulsharma',
      instagram: 'https://instagram.com/rahulsharma',
      gmail: 'rahul.sharma@college.edu',
    },
  },
  {
    year: '2022',
    role: 'Vice President',
    title: 'Former Vice President',
    description: 'Supported leadership strategy, improved member experience, and coordinated flagship workshops.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/priyapatel',
      instagram: 'https://instagram.com/priyapatel',
    },
  },
  {
    year: '2021',
    role: 'President',
    title: 'Former President',
    description: 'Championed the society vision and strengthened partnerships across campus communities.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/amitkumar',
      github: 'https://github.com/amitkumar',
    },
  },
  {
    year: '2020',
    role: 'President',
    title: 'Former President',
    description: 'Delivered remote events and ensured continuity through an adaptive digital-first approach.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/snehareddy',
      instagram: 'https://instagram.com/sneha.reddy',
    },
  },
  {
    year: '2019',
    role: 'President',
    title: 'Former President',
    description: 'Built an energized community and launched the society’s signature outreach programs.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/vikramsingh',
      gmail: 'vikram.singh@college.edu',
    },
  },
  {
    year: '2018',
    role: 'President',
    title: 'Former President',
    description: 'Laid the foundation for the modern society with a bold culture of innovation and collaboration.',
    photo: '/teams/default.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/anjaliimehta',
      github: 'https://github.com/anjaliimehta',
    },
  },
];

const iconForRole = (role: string) => {
  switch (role) {
    case 'President':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 14l-3 3 7-7-3 3V5" />
        </svg>
      );
    case 'Vice President':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12h16M12 4v16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
};

const socialIcon = (social: { instagram?: string; github?: string; gmail?: string; linkedin?: string }, isLeft: boolean = false) => {
  return (
    <div className={`mt-6 flex flex-wrap items-center gap-3 ${isLeft ? 'sm:justify-end justify-start' : 'justify-start'}`}>
      {social.instagram && (
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
        >
          <FiInstagram size={18} />
        </a>
      )}
      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
        >
          <FiLinkedin size={18} />
        </a>
      )}
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
        >
          <FiGithub size={18} />
        </a>
      )}
      {social.gmail && (
        <a
          href={`mailto:${social.gmail}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
        >
          <FiMail size={18} />
        </a>
      )}
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-[#080808] section-glow-bottom overflow-hidden" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#2DD4BF]/90">Animated Timeline</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Leadership Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-400">
            A responsive vertical timeline using the same green-accented theme and glassmorphism cards from the team section.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 flex w-8 -translate-x-1/2 justify-center">
            <div className="relative h-full w-1 overflow-hidden rounded-full bg-white/10 shadow-[0_0_80px_rgba(45,212,191,0.08)]">
              <motion.div
                className="absolute inset-x-0 top-0 h-full origin-top bg-linear-to-b from-[#2DD4BF] to-[#10B981]"
                style={{ scaleY: progress }}
              />
            </div>
          </div>

          <div className="space-y-5">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const sideClasses = isLeft ? 'lg:pr-6 lg:items-end' : 'lg:pl-6 lg:items-start';

              return (
                <motion.div
                  key={`${item.year}-${item.role}`}
                  className={`relative flex flex-col items-center ${sideClasses}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]/90 shadow-[0_0_24px_rgba(45,212,191,0.18)] backdrop-blur-xl">
                    <motion.div
                      whileInView={{ scale: 1.1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2DD4BF] shadow-[0_0_18px_rgba(45,212,191,0.35)]"
                    >
                      {iconForRole(item.role)}
                    </motion.div>
                  </div>

                  <div className={`mt-3 w-full max-w-md lg:max-w-none lg:w-[46%] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex flex-col sm:flex-row ${isLeft ? 'sm:flex-row-reverse' : ''} rounded-[1.75rem] border border-white/10 bg-[#090909]/90 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_24px_60px_-18px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30`}>
                      <div className={`relative sm:w-40 sm:shrink-0 overflow-hidden rounded-t-[1.75rem] sm:rounded-none aspect-[4/3] sm:aspect-auto ${isLeft ? 'sm:rounded-r-[1.75rem] sm:border-l sm:border-white/5' : 'sm:rounded-l-[1.75rem] sm:border-r sm:border-white/5'}`}>
                        <Image
                          src={item.photo}
                          alt={`${item.role} ${item.year}`}
                          fill
                          className="object-cover transition-transform duration-1000 hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent)] ${isLeft ? 'sm:bg-[linear-gradient(to_left,rgba(0,0,0,0.8),transparent)]' : ''}`} />
                        <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4">
                          <span className="inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.35em] text-[#2DD4BF] shadow-sm">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <div className={`flex flex-col justify-center flex-1 p-5 lg:p-6 ${isLeft ? 'items-start sm:items-end' : 'items-start'}`}>
                        <div className="mb-2">
                          <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">{item.role}</h3>
                          <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#2DD4BF]/90">{item.title}</p>
                        </div>
                        <p className="text-sm leading-6 text-neutral-300">{item.description}</p>
                        <div className="w-full">
                          {socialIcon(item.social, isLeft)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
