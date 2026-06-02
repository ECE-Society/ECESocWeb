"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FiLinkedin, FiMail } from "react-icons/fi";

export const featuredAlumni = [
  {
    name: "Shree K",
    lastName: "Nayar",
    role: "T. C. Chang Professor of Computer Science, Columbia University",
    description: "Shree K. Nayar is the T.C. Chang Professor of Computer Science at Columbia University and a global pioneer in computer vision and computational imaging. His groundbreaking innovations have transformed digital photography and smartphone imaging for billions of users worldwide. A member of the U.S. National Academy of Engineering, American Academy of Arts and Sciences, National Academy of Inventors, and Indian National Academy of Engineering, he is the recipient of the Okawa Prize, Funai Achievement Award, IEEE PAMI Distinguished Researcher Award, and the David Marr Prize.",
    image: "/images/alumni/Hero/Shree%20K%20Nayar.jpg",
    year: "Batch of 1984",
    linkedin: "https://www.linkedin.com/in/shree-nayar-54877989/",
    readMore: "https://en.wikipedia.org/wiki/Shree_K._Nayar",
    // email: "#"
  },
  {
    name: "Amit",
    lastName: "Chadha",
    role: "CEO and Managing Director, L&T Technology Services Limited",
    description: "Amit Chadha is the Chief Executive Officer and Managing Director of L&T Technology Services (LTTS) and a globally respected leader in engineering and technology services. A BIT Mesra alumnus, he played a key role in LTTS's successful IPO and its emergence as a leading global ER&D company. Recognized for his transformative leadership and contributions to industry, he is the recipient of the BIT Mesra Distinguished Alumni Award (2022) and the Indo-American Chamber of Commerce Corporate Leader of the Year Award (2023), while also serving in prominent leadership roles within NASSCOM's global technology ecosystem.",
    image: "/images/alumni/Hero/Amit%20Chadha.jpg",
    year: "Batch of 1996",
    linkedin: "https://www.linkedin.com/in/amit-chadha-1b6aa8/",
    readMore: " https://www.ltts.com/about-us/board-of-directors/mr-amit-chadha",
    // email: "#"
  },
  {
    name: "Jaya Singh",
    lastName: "Panda",
    role: "Chief, Learning & Development and Chief Diversity Officer, Tata Steel",
    description: "Jaya Singh Panda is the Chief Learning & Development Officer and Chief Diversity Officer at Tata Steel and a distinguished alumna of BIT Mesra. Over a career spanning more than three decades, she has led transformational initiatives across engineering, supply chain, quality management, and human resources. She currently drives Tata Steel's learning and inclusion agenda, shaping the development of thousands of employees while championing diversity and workplace excellence. As a member of the Board of Governors of the Board of Practical Training, Ministry of Education, and the driving force behind the J. N. Tata Vocational Training Institute, she has made significant contributions to skill development, vocational education, and workforce empowerment in India.",
    image: "/images/alumni/Hero/Jaya%20Singh%20Panda.jpg",
    year: "Batch of 1989",
    linkedin: "https://www.linkedin.com/in/jaya-singh-panda-8084671/",
    readMore: " https://www.mjunction.in/jaya-singh-panda%20/",
    // email: "#"
  }
];

export function AlumniHero() {
  const [activeFeatured, setActiveFeatured] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatured((prev) => (prev + 1) % featuredAlumni.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextProfile = () => {
    setActiveFeatured((prev) => (prev + 1) % featuredAlumni.length);
  };

  const prevProfile = () => {
    setActiveFeatured((prev) => (prev - 1 + featuredAlumni.length) % featuredAlumni.length);
  };

  const currentAlumnus = featuredAlumni[activeFeatured];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[180px] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none leading-none uppercase">
        Legacy
      </div>

      {/* Mobile Section Badge */}
      <div className="flex items-center justify-center mb-8 lg:hidden relative z-10 w-full">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 backdrop-blur-sm">
          <span className="text-[#2DD4BF] text-[10px] font-black uppercase tracking-[0.3em]">
            Distinguished Alumni
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${activeFeatured}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="hidden lg:flex items-center lg:justify-start gap-4">
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

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={currentAlumnus.readMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#080808] font-black uppercase tracking-widest text-xs hover:bg-[#2DD4BF] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 text-[#080808]" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-8 order-1 lg:order-2">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[#1A1A1A]"></div>
                <Image
                  src={currentAlumnus.image}
                  alt={currentAlumnus.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out relative z-0"
                  priority
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <p className="text-[#2DD4BF] text-xs font-bold uppercase tracking-widest mb-1">{currentAlumnus.role}</p>
                    <p className="text-white text-lg font-medium">{currentAlumnus.name} {currentAlumnus.lastName}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={currentAlumnus.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]">
                      <FiLinkedin size={18} />
                    </a>
                  </div>
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
