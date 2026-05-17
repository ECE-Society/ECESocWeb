'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    photo: string;
    social: {
      instagram?: string;
      gmail?: string;
      linkedin?: string;
    };
    objectPosition?: string;
    zoom?: number;
  };
  priority?: boolean;
}

export const TeamMemberCard = ({ member, priority }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_35px_90px_-20px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="relative h-full overflow-hidden">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-1000"
              style={{
                transform: member.zoom ? `scale(${member.zoom})` : 'none',
                transformOrigin: member.objectPosition || 'center center'
              }}
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{ objectPosition: member.objectPosition || 'center center' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 px-2 min-[530px]:px-4 pb-3 min-[530px]:pb-4 pt-16 min-[530px]:pt-20">
              <div className="-translate-y-2 lg:translate-y-4 transition-transform duration-300 lg:group-hover:-translate-y-2">
                <h3 className="text-[14px] min-[530px]:text-lg md:text-xl font-black text-white tracking-tight leading-tight">{member.name}</h3>
                <p className="text-[10px] min-[530px]:text-xs md:text-sm text-neutral-300 mt-1">{member.role}</p>
              </div>
              <div className="mt-2 min-[530px]:mt-5 flex items-center justify-center gap-1 min-[530px]:gap-3 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 min-[530px]:h-11 min-[530px]:w-11 items-center justify-center rounded-xl min-[530px]:rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiInstagram size={18} className="scale-75 min-[530px]:scale-100" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 min-[530px]:h-11 min-[530px]:w-11 items-center justify-center rounded-xl min-[530px]:rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiLinkedin size={18} className="scale-75 min-[530px]:scale-100" />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={`mailto:${member.social.gmail}`}
                    className="inline-flex h-8 w-8 min-[530px]:h-11 min-[530px]:w-11 items-center justify-center rounded-xl min-[530px]:rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiMail size={18} className="scale-75 min-[530px]:scale-100" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};