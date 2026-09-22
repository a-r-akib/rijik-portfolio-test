"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, Briefcase } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  } as const,
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  } as const,
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Top Contact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800"
        >
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-rose-500/20">
              <Briefcase size={20} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">Rijik</span>
          </div>

          {/* Call Us */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center text-rose-500 shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-200">Call Support</div>
              <div className="text-slate-400 text-xs mt-0.5">+880 (17) 0000-0000</div>
            </div>
          </div>

          {/* Send Mail */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center text-rose-500 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-200">Email Us</div>
              <div className="text-slate-400 text-xs mt-0.5">support@rijik.com</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center text-rose-500 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-200">Headquarters</div>
              <div className="text-slate-400 text-xs mt-0.5">Gulshan-2, Dhaka, Bangladesh</div>
            </div>
          </div>
        </motion.div>

        {/* Animated Main Footer Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Col 1: Bio & Socials */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Rijik connects ambitious talent with top-tier recruiters, remote opportunities, and local companies driving innovation worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300"
              >
                <Briefcase size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300"
              >
                <Briefcase size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300"
              >
                <Briefcase size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-300"
              >
                <Briefcase size={16} />
              </a>
            </div>
          </motion.div>

          {/* Col 2: For Candidates */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white border-l-2 border-rose-500 pl-3">
              For Job Seekers
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Browse All Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Remote Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Career Advice & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Resume Builder Tools
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: For Employers & Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white border-l-2 border-rose-500 pl-3">
              For Employers
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Post a Job Opening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Search Candidate Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Enterprise Hiring Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6 text-white border-l-2 border-rose-500 pl-3">
              Job Alerts Newsletter
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="relative mb-4">
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="w-full bg-slate-800 border border-slate-700 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-rose-500 text-white placeholder-slate-500 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 bg-rose-500 hover:bg-rose-600 text-white rounded-full px-4 flex items-center justify-center transition-colors shadow-sm"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get instant alerts on top tech, design, and remote career opportunities delivered directly to your inbox.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-5 text-center text-xs text-slate-500 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>Copyright © 2026 Rijik Technologies Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}