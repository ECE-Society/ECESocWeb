"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export const featuredAlumni = [
  {
    name: "Ananya",
    lastName: "Iyer",
    role: "Neural Systems Architect",
    description: "Pioneering the intersection of neural networks and architectural bio-mimicry at the forefront of urban evolution. Her ground-breaking research at the ECE Society laid the foundation for modern adaptive smart-cities, directly influencing metropolitan infrastructures across four continents.",
    image: "/images/alumni/elara.png",
    year: "K15 batch"
  },
  {
    name: "Arjun",
    lastName: "Mehta",
    role: "Lead Systems Architect",
    description: "Specializing in the development of hyper-redundant power grids for low-earth orbit satellite constellations and deep-space missions. Arjun's innovative research continues to push the boundaries of energy efficiency in orbital environments, ensuring resilient connectivity for the next generation of global communications.",
    image: "/images/alumni/marcus.png",
    year: "K18 batch"
  },
  {
    name: "Ishita",
    lastName: "Sharma",
    role: "AI Safety Researcher",
    description: "Spearheading the development of robust ethical alignment protocols for large-scale generative models at OpenAI. Ishita's published frameworks on algorithmic transparency have set new global standards, ensuring that advanced machine learning systems are navigated safely and serve humanity's core interests.",
    image: "/images/alumni/sarah.png",
    year: "K20 batch"
  }
];

export function AlumniHero() {
  const [activeFeatured, setActiveFeatured] = useState(0);

  const nextProfile = () => {
    setActiveFeatured((prev) => (prev + 1) % featuredAlumni.length);
  };

  const prevProfile = () => {
    setActiveFeatured((prev) => (prev - 1 + featuredAlumni.length) % featuredAlumni.length);
  };

  const currentAlumnus = featuredAlumni[activeFeatured];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[180px] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none leading-none uppercase">
        Legacy
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${activeFeatured}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 absolute top-0 left-0 w-full"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 backdrop-blur-sm">
                  <span className="text-[#2DD4BF] text-[10px] font-black uppercase tracking-[0.3em]">
                    Distinguished Alumni
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                {currentAlumnus.name} <span className="text-[#2DD4BF]">{currentAlumnus.lastName}</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-medium">
                {currentAlumnus.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#080808] font-black uppercase tracking-widest text-xs hover:bg-[#2DD4BF] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1">
                  Read More
                  <ArrowUpRight className="w-4 h-4 text-[#080808]" />
                </button>
                <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                  View Profile
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${activeFeatured}`}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[#1A1A1A]"></div>
                <Image
                  src={currentAlumnus.image}
                  alt={currentAlumnus.name}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out relative z-0"
                  priority
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[#2DD4BF] text-xs font-bold uppercase tracking-widest mb-1">{currentAlumnus.role}</p>
                  <p className="text-white text-lg font-medium">{currentAlumnus.name} {currentAlumnus.lastName}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevProfile}
              className="p-4 rounded-full border border-white/10 hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all group"
              aria-label="Previous profile"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-400 group-hover:text-[#2DD4BF] transition-colors" />
            </button>

            <div className="flex items-center gap-2 px-4">
              {featuredAlumni.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeFeatured ? 'w-8 bg-[#2DD4BF]' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>

            <button
              onClick={nextProfile}
              className="p-4 rounded-full border border-white/10 hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all group"
              aria-label="Next profile"
            >
              <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#2DD4BF] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
