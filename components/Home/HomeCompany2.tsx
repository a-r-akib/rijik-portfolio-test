"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const TESTIMONIALS_DATA = [
  {
    id: "ri",
    name: "Rijik International",
    avatar: "/logo/logo.png",
    quote:
      "Rijik International connects people and opportunities across borders by offering trusted support at every stage of the journey.",
  },
  {
    id: "jejc",
    name: "Japan Education and Job Center - JEJC",
    avatar: "/company/jejc.png",
    quote:
      "A leading education and career institute in Bangladesh providing Japanese language training, visa support, and job placement for study and work in Japan",
  },
  {
    id: "mct",
    name: "Muhammad Cars Trading",
    avatar: "/company/mct.png",
    quote:
      "A trusted automobile company specializing in high-quality Japanese reconditioned vehicle import and sales across Bangladesh.",
  },
  {
    id: "rf",
    name: "Rijik Foundation",
    avatar: "/company/rf.png",
    quote:
      "Rijik Foundation is the charitable wing of Rijik International Co. Ltd., dedicated to social welfare, humanitarian aid, and community development across Bangladesh.",
  },
  {
    id: "mt",
    name: "Muhammad Trading",
    avatar: "/company/mt.png",
    quote:
      "Comprehensive support services for international students in Japan including accommodation, guidance, and cultural integration.",
  },
  {
    id: "gs",
    name: "Ghorer Shad",
    avatar: "/company/gs.png",
    quote:
      "Experience authentic Bangladeshi home-style cuisine, 100% Halal, crafted with love and tradition, right here in Tokyo.",
  },
  {
    id: "gb",
    name: "Ghorer Bazar",
    avatar: "/company/gb.png",
    quote:
      "Experience the true taste of home with high-quality Bangladeshi and South Asian ingredients, 100% Halal and carefully selected for freshness and authenticity.",
  },
  {
    id: "mjh",
    name: "Madrasa Jalwa E Hera",
    avatar: "/company/mjh.png",
    quote:
      "Madrasa Jalwa E Hera nurtures students with authentic Islamic education, moral development, and academic excellence, guiding them to serve society with integrity and faith.",
  },
  {
    id: "sbi",
    name: "SBI Remit",
    avatar: "/company/sbi.png",
    quote:
      "SBI Remit makes international money transfer simple, safe, and reliable—connecting families and businesses across borders with confidence.",
  },
];

// Map orbital coordinates and variable small scale factors for inactive avatars
const INACTIVE_SCALES = [0.65, 0.8, 0.55, 0.75, 0.6, 0.85, 0.5, 0.7];

const getAvatarPosition = (
  index: number,
  activeIndex: number,
  total: number,
) => {
  // Selected avatar is positioned prominent center top with large scale
  if (index === activeIndex) {
    return { top: "18%", left: "50%", scale: 1.35, zIndex: 40 };
  }

  const offset = (index - activeIndex + total) % total;

  const positions = [
    { top: "25%", left: "18%", zIndex: 20 },
    { top: "16%", left: "81%", zIndex: 20 },
    { top: "52%", left: "84%", zIndex: 15 },
    { top: "52%", left: "68%", zIndex: 10 },
    { top: "53%", left: "30%", zIndex: 10 },
    { top: "18%", left: "62%", zIndex: 10 },
    { top: "18%", left: "8%", zIndex: 15 },
    { top: "54%", left: "12%", zIndex: 15 },
  ];

  const pos = positions[(offset - 1) % positions.length];
  const dynamicSmallScale = INACTIVE_SCALES[index % INACTIVE_SCALES.length];

  return { ...pos, scale: dynamicSmallScale };
};

const initialFlyInDirections = [
  { x: -120, y: -80 },
  { x: 120, y: -80 },
  { x: 140, y: 60 },
  { x: 80, y: 120 },
  { x: -80, y: 120 },
  { x: 0, y: -140 },
  { x: -140, y: 0 },
  { x: 140, y: 0 },
  { x: 0, y: 140 },
];

export default function HomeCompany2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length,
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full bg-[#fafafa] flex flex-col justify-between relative overflow-hidden pb-8 pt-40 -mt-34">
      <WebPageWrapper>
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center pt-4 pb-8 z-10 px-4"
        >
          <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            • Companies •
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our <span className="text-rose-600">Sister </span>Concerns
          </h1>
        </motion.header>

        <div
          className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between my-2"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Floating Desktop Avatars */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {TESTIMONIALS_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              const pos = getAvatarPosition(
                index,
                activeIndex,
                TESTIMONIALS_DATA.length,
              );
              const flyIn =
                initialFlyInDirections[index % initialFlyInDirections.length];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: flyIn.x, y: flyIn.y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    zIndex: pos.zIndex,
                  }}
                  className="pointer-events-auto"
                >
                  <motion.button
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    title={`${item.name}`}
                    animate={{
                      x: "-50%",
                      y: "-50%",
                      scale: pos.scale,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      mass: 0.8,
                    }}
                    className={`rounded-full focus:outline-none transition-shadow duration-300 group ${
                      isActive
                        ? "ring-4 ring-white drop-shadow-xl drop-shadow-slate-400"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "w-24 h-24 md:w-28 md:h-28 border-4 border-rose-600"
                          : "w-20 h-20 md:w-24 md:h-24 border-2 border-white drop-shadow-xl drop-shadow-slate-400"
                      }`}
                    >
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className={`w-full h-full object-cover transition-all duration-300 bg-[#fafafa]`}
                      />
                      {isActive && (
                        <span className="absolute inset-0 bg-rose-500/10 animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Avatar Selector Strip */}
          <div className="md:hidden flex items-center justify-start gap-3 overflow-x-auto py-3 px-2 no-scrollbar mb-4 z-20">
            {TESTIMONIALS_DATA.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`shrink-0 transition-all duration-300 rounded-full p-0.5 ${
                    isActive
                      ? "ring-2 ring-rose-500 ring-offset-2 ring-offset-[#fafafa] scale-110"
                      : "opacity-60 hover:opacity-100 scale-90"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={`rounded-full object-cover shadow-xs border border-slate-200 ${
                      isActive ? "w-14 h-14" : "w-10 h-10"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Main Testimonial Card Wrapper with Navigation Buttons */}
          <div className="w-full max-w-xl mx-auto my-auto relative z-10 pt-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/70 rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl shadow-slate-300/50 border border-slate-200/80 relative backdrop-blur-md"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-4 sm:mt-4 text-center"
                >
                  <p className="text-slate-800 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-medium line-clamp-3">
                    "{activeTestimonial.quote}"
                  </p>

                  <div className="mt-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-rose-600 tracking-tight">
                      {activeTestimonial.name}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation Buttons Row */}
            <div className="flex items-center justify-center gap-5 mt-8">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="group relative w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/50 flex items-center justify-center text-slate-800 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-transparent opacity-50 pointer-events-none" />
                <ChevronLeft className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <div className="px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs">
                <span className="text-xs font-bold text-slate-500 tracking-widest">
                  <span className="text-rose-600">{activeIndex + 1}</span> /{" "}
                  {TESTIMONIALS_DATA.length}
                </span>
              </div>

              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="group relative w-11 h-11 rounded-full bg-rose-500 border border-rose-500 shadow-md shadow-rose-500/25 flex items-center justify-center text-white hover:bg-rose-600 hover:border-rose-600 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
