"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    iconBg: "bg-rose-500/10 text-rose-600 border border-rose-200/60",
    value: "5000+",
    label: "Students Supported Globally",
  },
  {
    icon: Briefcase,
    iconBg: "bg-amber-500/10 text-amber-600 border border-amber-200/60",
    value: "1500+",
    label: "Career & Job Placements",
  },
  {
    icon: Globe2,
    iconBg: "bg-emerald-500/10 text-emerald-600 border border-emerald-200/60",
    value: "20+",
    label: "Countries & Regions Served",
  },
  {
    icon: Sparkles,
    iconBg: "bg-blue-500/10 text-blue-600 border border-blue-200/60",
    value: "98%",
    label: "Visa & Program Success Rate",
  },
];

const quoteText =
  '"At Rijik International, our mission is to create genuine pathways for students and skilled talent to achieve their ambitions in Japan and beyond. We bridge aspirations with opportunities through transparent guidance and continuous support."';

export default function HomeSocialWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center 0.2"],
  });

  // Tuned spring physics for butter-smooth scroll tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.8,
    restDelta: 0.001,
  });

  const rawStep1 = useTransform(smoothProgress, [0.0, 0.25], [0, 1]);
  const rawStep2 = useTransform(smoothProgress, [0.2, 0.45], [0, 1]);
  const rawStep3 = useTransform(smoothProgress, [0.4, 0.65], [0, 1]);
  const rawStep4 = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);

  const steps = [rawStep1, rawStep2, rawStep3, rawStep4];

  const textCharsCount = quoteText.length;
  const rawCharsVisible = useTransform(
    smoothProgress,
    [0.15, 0.85],
    [0, textCharsCount],
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col lg:flex-row bg-[#fafafa] overflow-hidden"
    >
      {/* Left Column: Stats (Shake-free stable opacity & scale fade) */}
      <div className="bg-[#fafafa] lg:w-1/4 p-8 sm:p-10 flex flex-col justify-center gap-4 relative overflow-hidden">
        {statsData.map((stat, index) => {
          const step = steps[index];

          // Removed 'y' translation which caused shaking; using stable opacity & slight scale up only
          const opacity = useTransform(step, [0, 0.3, 1], [0, 0.5, 1]);
          const scale = useTransform(step, [0, 1], [0.98, 1]);

          const IconComponent = stat.icon;

          return (
            <motion.div
              key={index}
              style={{
                opacity,
                scale,
              }}
              className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all shadow-xs will-change-[opacity,transform]"
            >
              <div
                className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center shrink-0`}
              >
                <IconComponent size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-black text-2xl tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-slate-600 text-xs font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Middle Column: Image Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="lg:w-2/4 relative min-h-[450px] lg:min-h-[550px] overflow-hidden group will-change-[transform,opacity]"
      >
        <Image
          src="/img/achivment.jpg"
          alt="Rijik International Students and Professionals"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/20" />
      </motion.div>

      {/* Right Column: Leadership Quote */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 85, damping: 22 }}
        className="bg-rose-600 lg:w-1/4 p-8 sm:p-10 flex flex-col justify-between text-white relative will-change-[transform,opacity]"
      >
        <Quote
          size={80}
          className="text-white/10 absolute top-6 right-6 pointer-events-none"
        />

        <div className="relative z-10 my-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-200 block mb-4">
            • Leadership Message •
          </span>

          <h3 className="text-xl sm:text-xl font-semibold leading-relaxed mb-8 text-white min-h-[160px]">
            {quoteText.split("").map((char, index) => {
              const charOpacity = useTransform(rawCharsVisible, (latest) =>
                latest >= index ? 1 : 0.2,
              );

              return (
                <motion.span
                  key={index}
                  style={{ opacity: charOpacity }}
                  className="inline-block will-change-opacity"
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

        <div className="flex items-center gap-3 pt-6 border-t border-white/20 relative z-10">
          <Link
            href="https://rijikint.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Website"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </Link>
          <Link
            href="#"
            aria-label="Facebook Profile"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </Link>
          <Link
            href="#"
            aria-label="YouTube Channel"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-rose-600 transition-colors"
          >
            <Globe size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
