"use client";

import { ArrowUpRight, Play, Goal, Waypoints } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

// Stagger & Reveal Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const},
  },
};

export default function HomeAbout() {
  return (
    <section className="py-24 relative bg-slate-900 text-white overflow-hidden">
      <WebPageWrapper>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
          >
            {/* Image Container */}
            <motion.div
              variants={scaleIn}
              className="relative mb-12 rounded-[2rem] overflow-hidden h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Rijik International Team"
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-8 right-8 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white p-6 rounded-2xl text-center shadow-xl z-10"
              >
                <div className="text-4xl font-black">100%</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1">
                  Trusted Global
                  <br />
                  Support
                </div>
              </motion.div>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-300 mb-8 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Rijik International connects people and opportunities across
              borders by offering trusted support at every stage of the journey.
              We recruit with care, ensuring that each candidate finds the right
              career path with confidence and clarity.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={fadeInUp}
              className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white px-6 py-3.5 rounded-full font-semibold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group shadow-lg shadow-rose-950/40 cursor-pointer"
            >
              <span>Know About Us</span>
              <span className="w-8 h-8 rounded-full text-slate-900 bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
          >
            {/* Tagline */}
            <motion.span
              variants={fadeInUp}
              className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2"
            >
              • About Us •
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white"
            >
              Connecting People & Opportunities Across Borders
            </motion.h2>

            {/* Feature Cards Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {/* Card 1 */}
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-rose-500/50 transition-colors">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-inner mb-4">
                  <Goal className="text-rose-500" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  Student Guidance
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For students in Japan, we provide hands-on guidance, cultural
                  orientation, and continuous assistance so they can adapt smoothly
                  and focus on growth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-rose-500/50 transition-colors">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-inner mb-4">
                  <Waypoints className="text-rose-500" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  Global Transfers
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Beyond education and employment, we make global money transfers
                  easier and reliable, helping individuals stay connected with
                  their families and goals.
                </p>
              </div>
            </motion.div>

            {/* Bottom Media Section */}
            <motion.div variants={fadeInUp} className="flex gap-4 h-40">
              {/* Stats Card */}
              <div className="w-1/3 bg-slate-800 rounded-2xl border border-slate-700/80 p-5 text-white flex flex-col justify-center">
                <div className="flex -space-x-2 mb-3">
                  <Image
                    className="size-8 rounded-full border-2 border-slate-800 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    width={32}
                    height={32}
                    alt="User"
                  />
                  <Image
                    className="size-8 rounded-full border-2 border-slate-800 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    width={32}
                    height={32}
                    alt="User"
                  />
                  <div className="size-8 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-rose-400">
                    +
                  </div>
                </div>
                <div className="text-2xl font-black mb-0.5 text-white">5K+</div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  Empowered globally across borders.
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="w-2/3 rounded-2xl overflow-hidden relative border border-slate-700/80">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
                  fill
                  className="object-cover"
                  alt="Students and professionals"
                />
                <div className="absolute inset-0 bg-slate-950/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-rose-500/90 hover:bg-rose-600 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  >
                    <Play
                      size={18}
                      className="text-white ml-0.5 fill-white"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </WebPageWrapper>
    </section>
  );
}