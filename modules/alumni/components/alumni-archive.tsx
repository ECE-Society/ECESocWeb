"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Mail } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export const alumniList = [
  {
    name: "Arjun Mehta",
    image: "/images/alumni/marcus.png",
    role: "Lead Systems Architect",
    description: "Specializing in redundant power grids for low-earth orbit satellite constellations.",
    year: "K18 batch"
  },
  {
    name: "Ishita Sharma",
    image: "/images/alumni/sarah.png",
    role: "AI Safety Researcher",
    description: "Developing ethical alignment protocols for large-scale generative models at OpenAI.",
    year: "K20 batch"
  },
  {
    name: "Kabir Malhotra",
    image: "/images/alumni/julian.png",
    role: "Creative Director",
    description: "Bridging the gap between industrial hardware design and spatial computing interfaces.",
    year: "K16 Batch"
  },
  {
    name: "Priyanka Das",
    image: "/images/alumni/elena.png",
    role: "Hardware Lead",
    description: "Developing the next generation of wearable bio-sensors for extreme environmental tracking.",
    year: "K19 Batch"
  }
];

export function AlumniArchive() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlumni = alumniList.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
      <motion.div
        animate="visible"
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            The <span className="text-[#2DD4BF]">Archive</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed">
            Tracing the legacy of ECE Society excellence through decades of innovation.
          </p>
        </div>

        <div className="relative w-full md:w-64 lg:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search alumni..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-white/5 text-white placeholder:text-neutral-500 rounded-full py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#2DD4BF]/50 focus:ring-1 focus:ring-[#2DD4BF]/50 transition-all text-sm"
          />
        </div>
      </motion.div>

      {/* Alumni Cards Grid */}
      <motion.div
        animate="visible"
        variants={staggerChildren}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {filteredAlumni.map((alumni) => (
          <motion.div
            key={alumni.name}
            variants={fadeUp}
            className="group relative bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)] transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-square overflow-hidden bg-[#121212]">
              <Image
                src={alumni.image}
                alt={alumni.name}
                fill
                className="object-cover grayscale mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-[#2DD4BF] text-[10px] font-black tracking-[0.2em] uppercase mb-2">{alumni.role}</p>
              <h3 className="text-xl font-black tracking-normal mb-3 text-white">{alumni.name}</h3>
              <p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed font-medium">
                "{alumni.description}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <span className="text-sm text-neutral-500 font-medium">
                  {alumni.year}
                </span>
                <div className="flex items-center gap-3 px-3 py-1.5 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-full opacity-100 md:opacity-0 md:translate-y-1.5 md:scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-400 ease-out origin-right">
                  <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </button>
                  <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                  <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
