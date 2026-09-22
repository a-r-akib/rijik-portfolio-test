"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Plus, Play, Phone, Mail, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function HomeAchievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position relative to the section element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // [element-top reaches-viewport-bottom, element-center reaches-viewport-40%]
    offset: ["start end", "center 0.4"],
  });

  // Dynamic Scroll Transforms for Each Bento Card Direction
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  // Card 1: Top-Left (-x, -y)
  const card1X = useTransform(scrollYProgress, [0, 1], [-120, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  // Card 2: Bottom-Left (-x, +y)
  const card2X = useTransform(scrollYProgress, [0, 1], [-120, 0]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  // Card 3: Top-Center (0x, -y)
  const card3Y = useTransform(scrollYProgress, [0, 1], [-140, 0]);

  // Card 4: Bottom-Center (0x, +y)
  const card4Y = useTransform(scrollYProgress, [0, 1], [140, 0]);

  // Card 5: Top-Right (+x, -y)
  const card5X = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const card5Y = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  // Card 6: Bottom-Right (+x, +y)
  const card6X = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const card6Y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  // Header fade-down
  const headerY = useTransform(scrollYProgress, [0, 1], [-60, 0]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#fafafa] text-slate-900 relative overflow-hidden"
    >
      <WebPageWrapper>
        {/* Header */}
        <motion.div
          style={{ opacity, y: headerY }}
          className="text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            • ACHIEVEMENTS •
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b132b] leading-tight">
            Our Track Record
          </h2>
        </motion.div>

        {/* 3-Column Bento Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            {/* Bento 1: Top-Left Entry */}
            <motion.div
              style={{ opacity, scale, x: card1X, y: card1Y }}
              className="relative rounded-[2.5rem] overflow-hidden h-72 group shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Students studying"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="absolute bottom-6 left-8 z-10">
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  5000+
                </div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Students Supported
                </div>
              </div>
            </motion.div>

            {/* Bento 2: Bottom-Left Entry */}
            <motion.div
              style={{ opacity, scale, x: card2X, y: card2Y }}
              className="bg-[#f4f5f7] rounded-[2.5rem] p-8 flex flex-col justify-center h-52"
            >
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Successfully guided students to their educational goals in Japan and worldwide through dedicated support.
              </p>
            </motion.div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            {/* Bento 3: Top-Center Entry */}
            <motion.div
              style={{ opacity, scale, y: card3Y }}
              className="bg-[#0b132b] text-white rounded-[2.5rem] p-8 flex flex-col justify-between h-72 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Image
                    className="w-10 h-10 rounded-full border-2 border-[#0b132b] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="Client avatar"
                  />
                  <Image
                    className="w-10 h-10 rounded-full border-2 border-[#0b132b] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="Client avatar"
                  />
                  <Image
                    className="w-10 h-10 rounded-full border-2 border-[#0b132b] object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="Client avatar"
                  />
                </div>
                <div>
                  <div className="flex text-amber-400 gap-0.5 text-xs">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    Happy clients worldwide
                  </span>
                </div>
              </div>

              <div>
                <div className="text-5xl font-black tracking-tight mb-2">98%</div>
                <div className="text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-1">
                  Satisfaction Rate
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Client satisfaction and proven success stories across all programs.
                </p>
              </div>
            </motion.div>

            {/* Bento 4: Bottom-Center Entry */}
            <motion.div
              style={{ opacity, scale, y: card4Y }}
              className="bg-[#f4f5f7] rounded-[2.5rem] p-8 flex flex-col justify-between h-52"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  1500+
                </div>
                <h3 className="text-slate-900 font-extrabold text-base leading-snug mt-0.5">
                  Job Placements— <br />
                  Worldwide Careers.
                </h3>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm hover:scale-105 transition-transform">
                  <Plus size={16} />
                </button>
                <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-rose-500 shadow-sm hover:scale-105 transition-transform">
                  <Play size={14} className="fill-rose-500 ml-0.5" />
                </button>
                <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-500 shadow-sm hover:scale-105 transition-transform">
                  <Phone size={15} />
                </button>
                <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-amber-500 shadow-sm hover:scale-105 transition-transform">
                  <Mail size={15} />
                </button>
                <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-pink-500 shadow-sm hover:scale-105 transition-transform">
                  <MapPin size={15} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            {/* Bento 5: Top-Right Entry */}
            <motion.div
              style={{ opacity, scale, x: card5X, y: card5Y }}
              className="bg-[#f7f6f0] rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center h-52 relative"
            >
              <div className="absolute top-6 right-8 text-amber-400 text-2xl">
                ★
              </div>
              <div className="text-5xl font-black text-slate-900 mb-1">20+</div>
              <div className="font-extrabold text-slate-900 text-base mb-2">
                Countries Served
              </div>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Expanding our presence and global reach across multiple strategic regions.
              </p>
            </motion.div>

            {/* Bento 6: Bottom-Right Entry */}
            <motion.div
              style={{ opacity, scale, x: card6X, y: card6Y }}
              className="relative rounded-[2.5rem] overflow-hidden h-72 shadow-sm group"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Professional portrait"
              />
            </motion.div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}