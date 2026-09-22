"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

export default function HomeUSP() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal translation:
  // Starts offset at 25% (3/4 across screen) and slides left to -35%
  const x = useTransform(scrollYProgress, [0, 1], ["75%", "-35%"]);

  return (
    <div
      ref={targetRef}
      className="relative mb-5 -mt-34 z-10 w-full overflow-hidden py-6"
    >
      {/* Scroll-driven horizontal track */}
      <motion.div
        style={{ x }}
        className="flex gap-6 items-center w-max transition-transform ease-out"
      >
        {/* Col 1 */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="bg-slate-800 text-white rounded-2xl p-8 w-80 h-48 relative overflow-hidden flex flex-col justify-center shrink-0"
        >
          <h2 className="text-4xl font-bold mb-2 relative z-10">60-70%</h2>
          <p className="text-sm font-medium relative z-10 w-2/3">
            of collected waste will be recycled or composted instead of going
            to landfills
          </p>
          <div className="absolute -right-4 bottom-0 text-[100px] opacity-20 rotate-12 select-none">
            🌎
          </div>
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=200&auto=format&fit=crop"
            width={128}
            height={128}
            className="absolute bottom-0 -right-4 size-32 rounded-full opacity-50 object-cover"
            alt="plant"
          />
        </motion.div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 w-72"
          >
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl select-none">
              👨‍🌾
            </div>
            <div>
              <div className="flex items-center text-yellow-400 gap-0.5 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                4.9 / 5 Google Rating
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 w-72"
          >
            <p className="text-sm font-semibold text-gray-700 leading-snug">
              Our experienced team ensures efficient waste management services
            </p>
          </motion.div>
        </div>

        {/* Col 3 */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="bg-rose-500 text-white rounded-2xl p-6 w-64 h-48 flex flex-col justify-between overflow-hidden relative shrink-0"
        >
          <h3 className="font-bold text-lg leading-tight relative z-10">
            95% of collections
            <br />
            are completed on
            <br />
            time
          </h3>
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400&auto=format&fit=crop"
            width={96}
            height={96}
            className="absolute bottom-0 right-0 w-24 object-cover opacity-80"
            alt="bin"
          />
        </motion.div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4 h-48 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#f39c12] text-white rounded-2xl p-6 w-64 h-32 flex flex-col justify-center relative overflow-hidden"
          >
            <h2 className="text-4xl font-bold mb-1 relative z-10">500+</h2>
            <p className="text-xs relative z-10">
              Tons of waste collected
              <br />
              till date by our team
            </p>
            <Image
              src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=400&auto=format&fit=crop"
              width={96}
              height={128}
              className="absolute top-0 right-0 h-full w-24 object-cover opacity-50"
              alt="worker"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-3 w-64 h-12"
          >
            <span className="text-2xl font-bold text-blue-500">G</span>
            <span className="text-sm font-bold">4.9/5</span>
            <div className="flex items-center text-yellow-400 gap-0.5 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Col 5 */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="bg-slate-800 text-white rounded-2xl p-8 w-80 h-48 relative overflow-hidden flex flex-col justify-center shrink-0"
        >
          <h2 className="text-4xl font-bold mb-2 relative z-10">60-70%</h2>
          <p className="text-sm font-medium relative z-10 w-2/3">
            of collected waste will be recycled or composted instead of going
            to landfills
          </p>
          <div className="absolute -right-4 bottom-0 text-[100px] opacity-20 rotate-12 select-none">
            🌎
          </div>
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=200&auto=format&fit=crop"
            width={128}
            height={128}
            className="absolute bottom-0 -right-4 size-32 rounded-full opacity-50 object-cover"
            alt="plant"
          />
        </motion.div>

        {/* Col 6 */}
        <div className="flex flex-col gap-4 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 w-72"
          >
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl select-none">
              👨‍🌾
            </div>
            <div>
              <div className="flex items-center text-yellow-400 gap-0.5 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                4.9 / 5 Google Rating
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 w-72"
          >
            <p className="text-sm font-semibold text-gray-700 leading-snug">
              Our experienced team ensures efficient waste management services
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}