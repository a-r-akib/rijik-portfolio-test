"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Quote,
  GraduationCap,
  Briefcase,
  Globe2,
  Sparkles,
  Globe,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const statsData = [
  {
    icon: GraduationCap,
    iconBg: "bg-rose-500/20 text-rose-400",
    value: "5000+",
    label: "Students Supported Globally",
  },
  {
    icon: Briefcase,
    iconBg: "bg-amber-500/20 text-amber-400",
    value: "1500+",
    label: "Career & Job Placements",
  },
  {
    icon: Globe2,
    iconBg: "bg-emerald-500/20 text-emerald-400",
    value: "20+",
    label: "Countries & Regions Served",
  },
  {
    icon: Sparkles,
    iconBg: "bg-blue-500/20 text-blue-400",
    value: "98%",
    label: "Visa & Program Success Rate",
  },
];

const quoteText =
  '"At Rijik International, our mission is to create genuine pathways for students and skilled talent to achieve their ambitions in Japan and beyond. We bridge aspirations with opportunities through transparent guidance and continuous support."';

export default function HomeSocialWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center 0.2"],
  });

  // Smooth global spring to drive fluid scroll transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Staggered progress windows for cards
  const rawStep1 = useTransform(smoothProgress, [0.0, 0.25], [0, 1]);
  const rawStep2 = useTransform(smoothProgress, [0.2, 0.45], [0, 1]);
  const rawStep3 = useTransform(smoothProgress, [0.4, 0.65], [0, 1]);
  const rawStep4 = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);

  const steps = [rawStep1, rawStep2, rawStep3, rawStep4];

  // Right column typewriter progress tracking
  const textCharsCount = quoteText.length;
  const rawCharsVisible = useTransform(
    smoothProgress,
    [0.2, 0.85],
    [0, textCharsCount]
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col lg:flex-row bg-slate-900 overflow-hidden"
    >
      {/* Left Stats Panel - Stacked Cards with Impact Shake */}
      <div className="bg-slate-900 lg:w-1/4 p-8 sm:p-10 flex flex-col justify-center gap-4 relative overflow-hidden z-10">
        {statsData.map((stat, index) => {
          const step = steps[index];

          // Card slide up into stacked position
          const y = useTransform(step, [0, 1], [60, 0]);
          const opacity = useTransform(step, [0, 0.4, 1], [0, 0.8, 1]);
          const scale = useTransform(step, [0, 1], [0.94, 1]);

          const IconComponent = stat.icon;

          return (
            <motion.div
              key={index}
              style={{
                y,
                opacity,
                scale,
              }}
              className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors shadow-lg"
            >
              <div
                className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center shrink-0`}
              >
                <IconComponent size={24} />
              </div>
              <div>
                <h4 className="text-white font-black text-2xl tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-slate-300 text-xs font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:w-2/4 relative min-h-[450px] lg:min-h-[550px] overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
          alt="Rijik International Students and Professionals"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/20" />
      </motion.div>

      {/* Right Quote Panel - Writing/Typewriter Text Effect */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-rose-600 lg:w-1/4 p-8 sm:p-10 flex flex-col justify-between text-white relative"
      >
        <Quote
          size={80}
          className="text-white/10 absolute top-6 right-6 pointer-events-none"
        />

        <div className="relative z-10 my-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-200 block mb-4">
            • Leadership Message •
          </span>

          {/* Typing Text Effect */}
          <h3 className="text-xl sm:text-xl font-semibold leading-relaxed mb-8 text-white min-h-[160px]">
            {quoteText.split("").map((char, index) => {
              const charOpacity = useTransform(rawCharsVisible, (latest) =>
                latest >= index ? 1 : 0.15
              );
              const charY = useTransform(rawCharsVisible, (latest) =>
                latest >= index ? 0 : 2
              );

              return (
                <motion.span
                  key={index}
                  style={{ opacity: charOpacity, y: charY }}
                  className="inline-block transition-opacity duration-100"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </h3>

          <div>
            <h4 className="font-extrabold text-xl">Managing Director</h4>
            <p className="text-rose-100 text-sm font-medium">
              Rijik International Ltd.
            </p>
          </div>
        </div>

        {/* Social / Website Links */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/20 relative z-10">
          <a
            href="https://rijikint.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Website"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </a>
          <a
            href="#"
            aria-label="Facebook Profile"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </a>
          <a
            href="#"
            aria-label="YouTube Channel"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}