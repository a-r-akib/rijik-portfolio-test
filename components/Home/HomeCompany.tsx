"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const brands = [
  { id: 1, name: "ZRND", logo: "/company/gb.png" },
  { id: 2, name: "Avasan", logo: "/company/gs.png" },
  { id: 3, name: "FLASH COVERAGE", logo: "/company/jejc.png" },
  { id: 4, name: "purplezen", logo: "/company/mct.png" },
  { id: 5, name: "vezlor", logo: "/company/mjh.png" },
  { id: 6, name: "Avasan", logo: "/company/mt.png" },
  { id: 7, name: "ZRND", logo: "/company/rf.png" },
  { id: 8, name: "FLASH COVERAGE", logo: "/company/rr.png" },
  { id: 9, name: "FLASH COVERAGE", logo: "/company/sbi.png" },
];

export default function HomeCompany() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Bind scroll progress to drive motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the track horizontally from left to right as you scroll down
  // Adjust pixel values (-400px to 200px) based on how fast/far you want it to travel
  const scrollX = useTransform(scrollYProgress, [0, 1], [-500, 200]);

  return (
    <section className="bg-slate-900 pt-40 -mt-34">
      <div
        ref={containerRef}
        className="py- bg-[#fafafa] overflow-hidden relative w-full"
      >
        {/* Edge Fade Masks (Left & Right) */}
        <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Full-width Scroll Track Container */}
        <div className="w-full flex justify-center items-center ">
          <motion.div
            style={{ x: scrollX }}
            className="flex gap-6 shrink-0 min-w-max px-8"
          >
            {brands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="transition-colors  px-8 py-5 flex items-center gap-3 shrink-0 cursor-pointer grayscale hover:grayscale-0 duration-300"
              >
                <Image src={brand.logo} height={800} width={800} alt="" className="h-30 w-auto"/>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
