"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const welfareSkillsData = [
  {
    title: "Community Support & Families",
    percentage: 85,
  },
  {
    title: "Education & Scholarship Aids",
    percentage: 92,
  },
  {
    title: "Grassroots Social Drives",
    percentage: 78,
  },
  {
    title: "Humanitarian Relief & Care",
    percentage: 90,
  },
];

export default function SocialWelfareSection() {
  return (
    <section className="relative text-slate-900 pt-24 bg-[#fafafa]">
      <WebPageWrapper>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative z-30 h-[400px]">
          {/* Left Side: Smooth Scroll-Triggered Image Container with Bottom Overflow */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative min-h-[460px] sm:min-h-[600px] lg:-mb-32 rounded-2xl overflow-hidden group z-40"
          >
            <Image
              src="/company/img/rf.jpg"
              alt="Rijik Foundation Social Welfare Activities"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

            {/* Floating Top Badge with Smooth Fade-In */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute top-4 left-4 bg-rose-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-md shadow-lg uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md"
            >
              <Sparkles size={14} />
              Community Care
            </motion.div>

            {/* Centered Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="https://rijikint.com/company/Rijik-Foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play Foundation Overview"
                  className="w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl transition-colors group/btn"
                >
                  <Play size={24} className="fill-current ml-1 text-white" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Smooth Scroll-Triggered Content & Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest block mb-2"
              >
                • Our Social Welfare Skill •
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 capitalize">
                Get a solution for{" "}
                <span className="text-rose-600">your community</span> needs.
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Through the Rijik Foundation, we possess a rich dedication to
              social welfare processes, combining compassionate support with
              impactful grassroots expertise to uplift underprivileged
              communities.
            </p>

            {/* Progress Bars with Fluid Staggered Animation */}
            <div className="flex flex-col gap-6 mt-3">
              {welfareSkillsData.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div
                    className={`flex justify-between items-center text-xs sm:text-sm font-extrabold tracking-wider ${index > 1 ? "text-slate-100" : "text-slate-800"}`}
                  >
                    <span>{item.title}</span>
                    <span className="text-rose-600 font-black text-base">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden relative shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 1, 0.5, 1],
                        delay: 0.3 + index * 0.15,
                      }}
                      className="h-full bg-gradient-to-r from-rose-600 to-rose-500 rounded-full relative shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </WebPageWrapper>
      <div className="h-[250px] bg-slate-900" />
    </section>
  );
}
