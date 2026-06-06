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

  // K21 Batch
  {
    name: "Honey Pradhan",
    image: "/images/alumni/Honey Pradhan_K21.jpg",
    role: "SWE",
    company: "Google",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/honey-pradhan-806678236"
  },
  {
    name: "Devansh Shukla",
    image: "/images/alumni/Devansh Shukla_K21.png",
    role: "Product Analytics",
    company: "Swiggy",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/devanshshukla"
  },
  {
    name: "Ankit Mishra",
    image: "/images/alumni/Ankit Mishra_K21.jpg",
    role: "ASE",
    company: "Qualcomm",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/ankit-mishra-904182229"
  },
  {
    name: "Gautam Bhaskar",
    image: "/images/alumni/Gautam Bhaskar_K21.jpg",
    role: "Flow & Methodology Engineer",
    company: "Infineon Technologies",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/gautam-bhaskar-47467a164"
  },
  {
    name: "Shreyansh Kumar",
    image: "/images/alumni/Shreyansh Kumar_K21.jpg",
    role: "Associate",
    company: "PwC India",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/shreyansh-kumar-49911b232"
  },
  {
    name: "Akshar Dubey",
    image: "/images/alumni/Akshar Dubey_K21.jpg",
    role: "Decision Analytics Associate",
    company: "ZS",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/akshar-dubey"
  },
  {
    name: "Shovic Dhar",
    image: "/images/alumni/Shovic Dhar_K21.jpg",
    role: "Associate",
    company: "ZS",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/shovic-dhar-992b66292"
  },
  {
    name: "Jhil Kumari",
    image: "/images/alumni/Jhil Kumari_K21.jpg",
    role: "SWE",
    company: "Grid Dynamics",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/jhil-kumari-347b0722b"
  },
  {
    name: "Reyanul Abdin",
    image: "/images/alumni/Reyanul Abdin_K21.jpg",
    role: "Dev Ops",
    company: "Grid Dynamics",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/reyanul-abdin-832160231"
  },
  {
    name: "Harsh Verma",
    image: "/images/alumni/Harsh Verma_K21.jpg",
    role: "SDE",
    company: "Fastenel India",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/harsh-verma2025"
  },
  {
    name: "Anant Bharti",
    image: "/images/alumni/Anant Bharti_K21.png",
    role: "RnD Engineer",
    company: "Logic Fruit Technologies",
    year: "K21 Batch",
    linkedin: "https://linkedin.com/in/anant-bharti"
  },
  // K20 Batch
  {
    name: "Kajal Kiran",
    image: "/images/alumni/Kajal Kiran_K20.jpg",
    role: "SWE",
    company: "Intuit",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/kajal-kiran-4a82b5217"
  },
  {
    name: "Souhardya Chatterjee",
    image: "/images/alumni/Souhardya Chatterjee_K20.jpg",
    role: "SMTS",
    company: "SiemensEDA",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/souhardya-chatterjee-b2648b205"
  },
  {
    name: "Abhinav Anand",
    image: "/images/alumni/Abhinav Anand_K20.png",
    role: "Software Engineer",
    company: "TCS",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/abhianand54"
  },
  {
    name: "Anshu Gaurav",
    image: "/images/alumni/Anshu Gaurav_K20.jpg",
    role: "Associate",
    company: "PwC India",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/anshu-gaurav"
  },
  {
    name: "Nishant Biyani",
    image: "/images/alumni/Nishant Biyani_K20.jpg",
    role: "PhD Candidate",
    company: "Northeastern University",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/nishant-biyani20"
  },
  {
    name: "Aryan Goel",
    image: "/images/alumni/Aryan Goel_K20.png",
    role: "Masters in Data Science",
    company: "UTS",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/16aryan"
  },
  {
    name: "Soumak Nandi",
    image: "/images/alumni/Soumak Nandi_K20.jpg",
    role: "Research Assistant",
    company: "Holonyak Micro and Nanotechnology Lab",
    year: "K20 Batch",
    linkedin: "https://linkedin.com/in/soumak-nandi"
  },

  // K22 Batch
  {
    name: "Abhyuday Pandey",
    image: "/images/alumni/k22/Abhyuday Pandey_k22.jpg",
    role: "R&D Intern",
    company: "Logic Fruit Technologies",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/abhyuday-pandey-2302ad"
  },
  {
    name: "Keshav Agarwal",
    image: "/images/alumni/k22/Keshav Agarwal_k22.jpg",
    role: "SWE",
    company: "MightyBot",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/keshavagarwal0927"
  },
  {
    name: "Khushi Choudhary",
    image: "/images/alumni/k22/Khushi Choudhary_k22.png",
    role: "Software Engineer Intern",
    company: "MSCI Inc.",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/khushi-choudhary-a45078260"
  },
  {
    name: "Prashant Gautam",
    image: "/images/alumni/k22/Prashant Gautam-k22.jpg",
    role: "Frontend Developer Intern",
    company: "Vetty",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/prashant-gautam-b84532291"
  },
  {
    name: "Prem Kumar Lohani",
    image: "/images/alumni/k22/Prem Kumar Lohani_k22.png",
    role: "Intern",
    company: "Paytm",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/prem-kumar-lohani"
  },
  {
    name: "Ritik Raj",
    image: "/images/alumni/k22/Ritik Raj_k22.jpg",
    role: "SDE Intern",
    company: "Oracle",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/ritik-raj1875"
  },
  {
    name: "Sagun Patwari",
    image: "/images/alumni/k22/Sagun Patwari_k22.jpg",
    role: "SDE Intern",
    company: "Razorpay",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/sagun-patwari"
  },
  {
    name: "Sushant Gupta",
    image: "/images/alumni/k22/Sushant Gupta_k22.jpg",
    role: "Analyst (Intern)",
    company: "Miebach",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/sushant-gupta-0aab48255"
  },
  {
    name: "Ansh Aryan",
    image: "/images/alumni/k22/Ansh Aryan_k22.jpg",
    role: "Full Stack Developer",
    company: "Navodita Infotech",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/ansh--aryan"
  },
  {
    name: "Harsh Ranjan",
    image: "/images/alumni/k22/Harsh Ranjan_k22.jpg",
    role: "Intern",
    company: "Truemeds",
    year: "K22 Batch",
    linkedin: "https://linkedin.com/in/harsh-ranjan-34a5531b7"
  },


  // K19 Batch
  {
    name: "Mahavadi Sri Shashank",
    image: "/images/alumni/k19/Mahavadi Sri Shashank_k19.jpg",
    role: "Senior Member of Technical Staff",
    company: "Siemens EDA",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/mahavadi-sri-shashank-a82ab3207"
  },
  {
    name: "Abhinav Pratap Singh",
    image: "/images/alumni/k19/Abhinav Pratap Singh_k19.png",
    role: "Software Engineer",
    company: "DP World",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/abhinav-pratap-singh-2357871b3"
  },
  {
    name: "Akshat Jain",
    image: "/images/alumni/k19/Akshat Jain_k19.png",
    role: "Senior Marketing Manager",
    company: "Star Union Dai-ichi Life Insurance",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/akshat-jain-0520"
  },
  {
    name: "Harshvardhan Agrawal",
    image: "/images/alumni/k19/Harshvardhan Agrawal_k19.jpg",
    role: "Salesforce Software Engineer",
    company: "OSI Digital",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/harshvardhanagrawal007"
  },
  {
    name: "Hemanshu Sogra",
    image: "/images/alumni/k19/Hemanshu Sogra_k19.jpg",
    role: "Senior Design Engineer",
    company: "NXP Semiconductors",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/hemanshu-sogra-111b551a2"
  },
  {
    name: "Kshitij Sharma",
    image: "/images/alumni/k19/Kshitij Sharma_k19.jpg",
    role: "SDE",
    company: "Amazon",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/kshitijsharma19"
  },
  {
    name: "Kumar Utkarsh",
    image: "/images/alumni/k19/kumar utkarsh_k19.jpg",
    role: "SDE-2",
    company: "Fastenal",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/kumar-utkarsh-02"
  },
  {
    name: "Pinki Kumari Munda",
    image: "/images/alumni/k19/PINKY KUMARI  MUNDA_k19.jpg",
    role: "SoC DFT Engineer",
    company: "NXP Semiconductors",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/pinky-kumari-munda-008741209"
  },
  {
    name: "Pranav Prakhar",
    image: "/images/alumni/k19/Pranav Prakhar_k19.jpg",
    role: "Applied Scientist",
    company: "Amazon",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/pranav-prakhar"
  },
  {
    name: "Rohan Sahana",
    image: "/images/alumni/k19/ROHAN SAHANA_k19.jpg",
    role: "IND Associate",
    company: "PwC India",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/rohan-sahana-10120"
  },
  {
    name: "Saket Mishra",
    image: "/images/alumni/k19/Saket Mishra_k19.jpg",
    role: "SDE",
    company: "Enquero",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/saketmishra21"
  },
  {
    name: "Subham Surana",
    image: "/images/alumni/k19/Subham Surana_k19.jpg",
    role: "Tech Consultant - Lead Software Engineer",
    company: "PwC India",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/subham-surana"
  },
  // {
  //   name: "Swapnil Goyal",
  //   image: "/images/alumni/k19/Swapnil Goyal_k19.jpg",
  //   role: "SDE III",
  //   company: "Walmart",
  //   year: "K19 Batch",
  //   linkedin: "https://linkedin.com/in/swapnil-goyal-1010"
  // },
  {
    name: "Vaibhav Mishra",
    image: "/images/alumni/k19/vaibhav mishra_k19.jpg",
    role: "Production Manager",
    company: "Britannia Industries Ltd",
    year: "K19 Batch",
    linkedin: "https://linkedin.com/in/vaibhav-mishra-"
  },
  // K17 Batch
  {
    name: "Bhavya",
    image: "/images/alumni/k17/Bhavya_K17.png",
    role: "Staff Engineer",
    company: "Synopsys Inc",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/pantam-bhavya-harika-3a88a916b/"
  },
  {
    name: "Dev Gupta",
    image: "/images/alumni/k17/Dev Gupta_K17.png",
    role: "Lead Design Engineer",
    company: "NXP Semiconductors",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/dev-g-gupta"
  },
  {
    name: "Himanshu Bhushan",
    image: "/images/alumni/k17/Himanshu Bhushan_K17.png",
    role: "Design Engineer",
    company: "eInfochips",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/himanshu-bhushan-736a6b19b"
  },
  {
    name: "Kushal Gella",
    image: "/images/alumni/k17/Kushal Gella_K17.png",
    role: "Senior SOC Verification Engineer",
    company: "NXP Semiconductors",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/kushalgella/"
  },
  {
    name: "Pradipta Ray",
    image: "/images/alumni/k17/Pradipta Ray_K17.jpg",
    role: "Staff Engineer",
    company: "FermionIC Design",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/raypradipta/"
  },
  {
    name: "Pratyush Agarwal",
    image: "/images/alumni/k17/Pratyush Agarwal_K17.png",
    role: "SSDE",
    company: "AMD",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/pratyush-agarwal-998599161/"
  },
  {
    name: "Raghav Charan",
    image: "/images/alumni/k17/Raghav Charan_K17.jpg",
    role: "Senior Consultant",
    company: "Deloitte",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/raghavcharan/"
  },
  {
    name: "Shreshth Gupta",
    image: "/images/alumni/k17/Shreshth Gupta_K17.jpg",
    role: "SBA",
    company: "Wishlink",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/shreshthgupta5/"
  },
  {
    name: "Tanmay Gupta",
    image: "/images/alumni/k17/Tanmay Gupta_K17.jpg",
    role: "Senior Project Engineer",
    company: "Wipro",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/tantheta/"
  },
  {
    name: "Vivek Basant",
    image: "/images/alumni/k17/Vivek Basant_K17.jpg",
    role: "Senior Lead Engineer",
    company: "Logic Fruit Technologies",
    year: "K17 Batch",
    linkedin: "https://linkedin.com/in/vivek-b-09201817b/"
  }
];

export function AlumniArchive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredAlumni = alumniList.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedAlumni = filteredAlumni.slice(0, visibleCount);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
      <motion.div
        animate="visible"
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
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
      {displayedAlumni.length > 0 ? (
        <motion.div
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {displayedAlumni.map((alumni) => (
            <motion.div
              key={alumni.name}
              variants={fadeUp}
              className="group relative bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)] transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] overflow-hidden bg-[#121212]">
                <Image
                  src={alumni.image}
                  alt={alumni.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover lg:group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <p className="text-[#2DD4BF] text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase mb-0.5">{alumni.role}</p>
                  <p className="text-white/70 text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase">{alumni.company}</p>
                </div>
                <h3 className="text-lg md:text-xl font-black tracking-normal mb-4 text-white flex-grow">{alumni.name}</h3>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                  <span className="text-xs md:text-sm text-neutral-500 font-medium">
                    {alumni.year}
                  </span>
                  <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1 md:py-1.5 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-full opacity-100 lg:opacity-0 lg:translate-y-1.5 lg:scale-95 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:scale-100 transition-all duration-400 ease-out origin-right">
                    {alumni.linkedin ? (
                      <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors outline-none">
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </button>
                    )}
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
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-20 text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center mb-2">
            <Search className="w-8 h-8 text-neutral-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Looks like we missed this alumni !
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Please fill in the form below with their details, and we will cross-check and be happy to include them in the network
          </p>
        </motion.div>
      )}

      {visibleCount < filteredAlumni.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-8 py-4 rounded-full border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm"
          >
            Load More
          </button>
        </motion.div>
      )}
    </section>
  );
}
