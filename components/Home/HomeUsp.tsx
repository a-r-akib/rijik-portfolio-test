"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star } from "lucide-react";

export default function HomeUSP() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal translation
  const rawX = useTransform(scrollYProgress, [0, 1], ["75%", "-35%"]);

  // Apply spring physics to smooth out the movement
  const x = useSpring(rawX, {
    stiffness: 100, // Lower = smoother/looser, Higher = tighter/snappier
    damping: 30,    // Controls how quickly it settles
    mass: 0.5,      // Lower = lighter/faster response
  });

  return (
    <div
      ref={targetRef}
      className="relative mb-5 -mt-39 z-10 w-full overflow-hidden py-6"
    >
      {/* Scroll-driven horizontal track */}
      <motion.div
        style={{ x }}
        className="flex gap-6 items-end w-max will-change-transform"
      >
        {/* Col 1 */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="bg-slate-800 text-white rounded-2xl p-8 w-80 h-48 relative overflow-hidden flex flex-col justify-center shrink-0 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-2 relative z-10">100%</h2>
          <p className="text-sm font-medium relative z-10 w-2/3">
            Dedicated support for student visas, employment, and career growth in Japan
          </p>
          <Image
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=200&auto=format&fit=crop"
            width={128}
            height={128}
            className="absolute bottom-0 -right-4 size-32 rounded-full opacity-50 object-cover"
            alt="Japan landscape"
          />
        </motion.div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 w-72 shadow-md"
          >
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl select-none">
              🎓
            </div>
            <div>
              <div className="flex items-center text-yellow-400 gap-0.5 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1">
                Trusted Global Agency & Education Partner
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 w-72 shadow-md"
          >
            <p className="text-sm font-semibold text-gray-700 leading-snug">
              Bridging Bangladesh and Japan with reliable services in education, employment, and authentic food distribution
            </p>
          </motion.div>
        </div>

        {/* Col 3 */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white rounded-2xl p-6 w-64 h-48 flex flex-col justify-between overflow-hidden relative shrink-0 shadow-lg"
        >
          <h3 className="font-bold text-lg leading-tight relative z-10">
            Trusted Guidance
            <br />
            For Your Dream Career
            <br />
            &amp; Secure Future
          </h3>
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=400&auto=format&fit=crop"
            width={96}
            height={96}
            className="absolute bottom-0 right-0 w-24 object-cover opacity-80"
            alt="Tokyo street"
          />
        </motion.div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4 h-48 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#f39c12] text-white rounded-2xl p-6 w-64 h-32 flex flex-col justify-center relative overflow-hidden shadow-md"
          >
            <h2 className="text-3xl font-bold mb-1 relative z-10">Multi-Sector</h2>
            <p className="text-xs relative z-10">
              Excellence across education,
              <br />
              remittance, and pure products
            </p>
            <Image
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=400&auto=format&fit=crop"
              width={96}
              height={128}
              className="absolute top-0 right-0 h-full w-24 object-cover opacity-50"
              alt="City view"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-3 w-64 h-12 shadow-md"
          >
            <span className="text-2xl font-bold text-blue-500">🇯🇵</span>
            <span className="text-sm font-bold">Rijik Group</span>
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
          className="bg-indigo-900 text-white rounded-2xl p-8 w-80 h-48 relative overflow-hidden flex flex-col justify-center shrink-0 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-2 relative z-10">Language &amp; Skills</h2>
          <p className="text-sm font-medium relative z-10 w-2/3">
            Comprehensive Japanese language training &amp; cultural orientation programs
          </p>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop"
            width={128}
            height={128}
            className="absolute bottom-0 -right-4 size-32 rounded-full opacity-50 object-cover"
            alt="Students learning"
          />
        </motion.div>

        {/* Col 6 */}
        <div className="flex flex-col gap-4 shrink-0">
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 w-72 shadow-md"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl select-none">
              🌾
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Ghorer Shaad
              </div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">
                Authentic &amp; Pure Food Products
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 w-72 shadow-md"
          >
            <p className="text-sm font-semibold text-gray-700 leading-snug">
              Delivering uncompromised quality, organic goods, and trusted consumer items to your doorstep
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}