"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const TESTIMONIALS_DATA = [
  {
    id: "sophia",
    name: "Sophia Anderson",
    role: "Student at Tokyo International University",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote:
      "Rijik made my transition to Japan seamless from airport pickup to opening my bank account. Their team truly cares, and that made all the difference. The remittance desk helped my family stay financially connected without hidden fees.",
    rating: 5,
  },
  {
    id: "kenji",
    name: "Kenji Sato",
    role: "Software Engineer in Shibuya, Tokyo",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote:
      "Finding visa sponsorship and navigating rental agreements in Tokyo felt impossible before I found Rijik. They guided me step-by-step through every single bureaucratic hurdle with utmost professionalism.",
    rating: 5,
  },
  {
    id: "david",
    name: "David Miller",
    role: "Architect at Osaka Design Studio",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "The personalized consultation gave me the clarity I needed to pivot my architectural career into Japan’s thriving modern market. Exceptional service and heartwarming hospitality!",
    rating: 5,
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "English Instructor in Kyoto",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    quote:
      "Moving across the world is intimidating, but Rijik was there for me at every step. From settling into my apartment to language orientation, they treated me like family.",
    rating: 5,
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Research Fellow at Kyoto University",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote:
      "I could not have managed my research grant visa without their expert legal team. They turned what seemed like an overwhelming process into a breeze.",
    rating: 5,
  },
  {
    id: "aisha",
    name: "Aisha Rahman",
    role: "Graduate Researcher in Yokohama",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    quote:
      "Their continuous support long after my initial arrival in Japan has been invaluable. Whenever I run into paperwork or banking questions, Rijik is my go-to response team.",
    rating: 5,
  },
  {
    id: "chloe",
    name: "Chloe Bennett",
    role: "Exchange Student at Waseda University",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote:
      "Having someone meet me at Narita airport with a welcome pack and local SIM card was a game changer. I felt instantly safe and supported.",
    rating: 5,
  },
  {
    id: "lucas",
    name: "Lucas Silva",
    role: "Culinary Specialist in Kobe",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    quote:
      "Starting a culinary business in Japan requires intense compliance work. Rijik helped me acquire all necessary operational permits effortlessly.",
    rating: 5,
  },
  {
    id: "cameron",
    name: "Cameron Diaz",
    role: "Digital Nomad in Fukuoka",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote:
      "The peace of mind they offer is unmatched. Rijik is the gold standard for anyone relocating or extending their journey in Japan.",
    rating: 5,
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

export default function HomeReview() {
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
    <section className="w-full bg-[#fafafa] text-slate-800 flex flex-col justify-between relative overflow-hidden py-24">
      <WebPageWrapper>
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center pt-4 pb-8 z-10 px-4"
        >
          <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            • TESTIMONIALS •
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            What Our <span className="text-rose-600">Clients Say</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Hear directly from students, professionals, and families who have
            successfully built their careers, education, and lives in Japan with
            our trusted guidance.
          </p>
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
                    title={`${item.name} - ${item.role}`}
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
                        ? "ring-4 ring-rose-100/50 ring-offset-4 ring-offset-[#fafafa] shadow-[0_0_30px_rgba(244,63,94,0.4)]"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "w-24 h-24 md:w-28 md:h-28 border-4 border-rose-600"
                          : "w-16 h-16 md:w-20 md:h-20 border-2 border-slate-200"
                      }`}
                    >
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          isActive
                            ? "brightness-100 contrast-105 "
                            : "brightness-90 group-hover:brightness-100 grayscale-50"
                        }`}
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
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl shadow-slate-200/50 border border-slate-200/80 relative backdrop-blur-md"
            >
              {/* Quote Icon Badge */}
              <div className="absolute -top-5 left-6 sm:left-8 bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white p-2.5 sm:p-3 rounded-xl shadow-md shadow-rose-500/25 flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 fill-current transform rotate-180" />
              </div>

              {/* Testimonial Content Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-4 sm:mt-2 text-center"
                >
                  <p className="text-slate-700 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-medium line-clamp-3">
                    "{activeTestimonial.quote}"
                  </p>

                  <div className="mt-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-rose-600 mt-0.5 font-semibold">
                      {activeTestimonial.role}
                    </p>

                    <div className="flex justify-center items-center gap-1 mt-3">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 drop-shadow-xs"
                        />
                      ))}
                    </div>
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

              <div className="px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-xs">
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
