"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export function AlumniNetwork() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    company: '',
    batch: '',
    linkedin: '',
    photoUrl: '',
    botField: '' // Honeypot
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return; // Honeypot triggered

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role || !formData.company || !formData.batch) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
      if (!url) throw new Error("Apps Script URL is not configured in .env.");

      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // With no-cors, the response is opaque (we can't read it), 
      // so we assume success if no network error was thrown.
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', role: '', company: '', batch: '', linkedin: '', photoUrl: '', botField: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-[#1A1A1A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DD4BF]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">
              Stay Connected to the <span className="text-[#2DD4BF]">Network</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-md leading-relaxed font-medium">
              Your expertise is our foundation. Join the network to mentor the current batch, access the alumni portal, and collaborate on next-gen projects.
            </p>

            <ul className="space-y-4">
              {[
                "Quarterly Newsletter",
                "Mentorship Opportunities",
                "Exclusive Networking Opportunity"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex justify-center items-center w-6 h-6 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-200 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 lg:p-16 bg-[#0E0E0E] border-l border-white/5 flex flex-col justify-center">
            <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-sm mx-auto w-full">
              <input type="text" name="botField" value={formData.botField} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">First Name *</label>
                  <input
                    type="text" name="firstName" required value={formData.firstName} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Last Name *</label>
                  <input
                    type="text" name="lastName" required value={formData.lastName} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-medium ml-1">Email *</label>
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange} disabled={status === 'loading'}
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                  placeholder="test@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Current Role *</label>
                  <input
                    type="text" name="role" required value={formData.role} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="Senior Engineer"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Company *</label>
                  <input
                    type="text" name="company" required value={formData.company} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="Google"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Batch *</label>
                  <input
                    type="text" name="batch" required value={formData.batch} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="e.g. k20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">LinkedIn URL</label>
                  <input
                    type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-medium ml-1">Photo URL</label>
                <input
                  type="url" name="photoUrl" value={formData.photoUrl} onChange={handleChange} disabled={status === 'loading'}
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                  placeholder="Drive or image link"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs font-medium text-center">{errorMessage}</p>
              )}

              {status === 'success' && (
                <p className="text-[#2DD4BF] text-xs font-medium text-center">Registration submitted successfully!</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 mt-2 rounded-full bg-white text-[#080808] font-black uppercase tracking-widest text-xs hover:bg-[#2DD4BF] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:hover:bg-white disabled:hover:-translate-y-0 disabled:hover:shadow-none"
              >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit Registration'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
