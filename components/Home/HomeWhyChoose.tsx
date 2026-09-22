"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Star, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function HomeWhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Synchronized oppose-direction scroll movement
  const moveLeftToRight = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const moveRightToLeft = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  // Subtle Scroll Physics for Content Elements
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [90, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#fafafa] text-slate-800 relative overflow-hidden"
    >
      {/* Synchronized Dual-Direction Background Text */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-0 overflow-hidden whitespace-nowrap opacity-40">
        {/* Line 1: WHY CHOOSE (Moves Left to Right) */}
        <motion.div
          style={{ x: moveLeftToRight }}
          className="text-[10vw] font-black uppercase text-slate-200 tracking-tighter leading-none"
        >
          WHY CHOOSE • WHY CHOOSE • WHY CHOOSE • WHY CHOOSE
        </motion.div>

        {/* Line 2: RIJIK INTERNATIONAL (Moves Right to Left) */}
        <motion.div
          style={{ x: moveRightToLeft }}
          className="text-[10vw] font-black uppercase text-rose-100/70 tracking-tighter leading-none -mt-2 sm:-mt-6"
        >
          RIJIK INTERNATIONAL • RIJIK INTERNATIONAL
        </motion.div>
      </div>

      <WebPageWrapper>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Column */}
            <motion.div style={{ y: contentY, opacity }}>
              <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
                • WHY CHOOSE RIJIK INTERNATIONAL •
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Trusted Gateway to <br />
                <span className="text-rose-600">Japan</span> Education & Career
                Success
              </h2>

              <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
                Rijik International is an authorized consultancy agency
                specializing in Higher Education, Japanese Language Training,
                Skill Development, and Global Career Placements. We empower
                students and professionals with end-to-end guidance to achieve
                their aspirations in Japan and worldwide.
              </p>

              {/* Image & Features Row */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10 items-center sm:items-start">
                <div className="relative w-full sm:w-48 h-36 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                    alt="Students and Counsellor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3.5 w-full">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="text-rose-600 shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-slate-800 text-sm">
                      Authorized Visa & Documentation Support
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="text-rose-600 shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-slate-800 text-sm">
                      Certified Japanese Language Training (NAT / JLPT)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="text-rose-600 shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-slate-800 text-sm">
                      Direct Career & Job Placement Assistance
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="text-rose-600 shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-slate-800 text-sm">
                      Transparent & End-to-End Career Guidance
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA & Rating Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="https://rijikint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-8 rounded-full transition-colors text-sm shadow-lg shadow-rose-600/20"
                >
                  Explore Services
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <Image
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Student avatar"
                    />
                    <Image
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Student avatar"
                    />
                    <Image
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
                      width={40}
                      height={40}
                      alt="Student avatar"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star size={14} className="fill-amber-500" />
                      <Star size={14} className="fill-amber-500" />
                      <Star size={14} className="fill-amber-500" />
                      <Star size={14} className="fill-amber-500" />
                      <Star size={14} className="fill-amber-500" />
                    </div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5">
                      4.9 / 5 Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Feature Column */}
            <motion.div style={{ y: imageY, opacity }} className="relative">
              {/* Offset Accent Card */}
              <div className="absolute inset-0 bg-rose-100 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10 border border-rose-200/60" />

              <div className="relative rounded-[3rem] overflow-hidden h-[550px] lg:h-[600px] shadow-xl border border-slate-200 group bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="Rijik International Student Success"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

                {/* Floating Light Glass Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-rose-600/20">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      Empowering Global Dreams
                    </h4>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Direct partnership & support for Japan migration pathways.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}