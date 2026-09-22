"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

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
    top: "38%",
    left: "45%",
    size: "lg",
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
    top: "25%",
    left: "18%",
    size: "md",
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
    top: "16%",
    left: "81%",
    size: "md",
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
    top: "50%",
    left: "83%",
    size: "md",
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
    top: "50%",
    left: "66%",
    size: "sm",
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
    top: "51%",
    left: "27%",
    size: "xs",
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
    top: "16%",
    left: "60%",
    size: "xs",
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
    top: "16%",
    left: "6%",
    size: "sm",
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
    top: "52%",
    left: "11%",
    size: "sm",
  },
];

const getSizeClasses = (size) => {
  switch (size) {
    case "lg":
      return "w-24 h-24 md:w-32 md:h-32 shadow-2xl border-2";
    case "md":
      return "w-16 h-16 md:w-20 md:h-20 shadow-xl border-2";
    case "sm":
      return "w-12 h-12 md:w-14 md:h-14 shadow-lg border-2";
    case "xs":
      return "w-8 h-8 md:w-10 md:h-10 shadow-md border-2";
    default:
      return "w-14 h-14 border-2";
  }
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  // Auto-rotate testimonials every 5 seconds if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen w-full bg-slate-900 font-sans text-slate-100 flex flex-col justify-between relative overflow-hidden py-24">

      {/* Header Section */}
      <header className="max-w-3xl mx-auto text-center pt-4 pb-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What Our <span className="text-rose-500">Clients Say</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Hear directly from students, professionals, and families who have
          successfully built their careers, education, and lives in Japan with
          our trusted guidance.
        </p>
      </header>

      {/* Main Content & Avatars Canvas */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between my-2">
        {/* Floating Desktop Avatar Positions */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {TESTIMONIALS_DATA.map((item, index) => {
            const isActive = index === activeIndex;
            const sizeClass = getSizeClasses(item.size);

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                title={`${item.name} - ${item.role}`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                className={`absolute pointer-events-auto transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden focus:outline-none group ${
                  isActive
                    ? "ring-4 ring-slate-500/50 ring-offset-4 ring-offset-slate-950 scale-110 z-30 shadow-[0_0_25px_rgba(244,63,94,0.4)]"
                    : "hover:scale-110 hover:z-20 opacity-70 hover:opacity-100 z-10"
                }`}
              >
                <div
                  className={`relative ${sizeClass} rounded-full overflow-hidden ${
                    isActive ? "border-slate-500/50" : "border-slate-700"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isActive
                        ? "brightness-100 contrast-105"
                        : "brightness-75 group-hover:brightness-100"
                    }`}
                  />
                  {isActive && (
                    <span className="absolute inset-0 bg-rose-500/10 animate-pulse pointer-events-none" />
                  )}
                </div>
              </button>
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
                className={`flex-shrink-0 transition-all duration-300 rounded-full p-0.5 ${
                  isActive
                    ? "ring-2 ring-rose-500 ring-offset-2 ring-offset-slate-950 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-700"
                />
              </button>
            );
          })}
        </div>

        {/* Main Testimonial Card */}
        <div className="w-full max-w-xl mx-auto my-auto relative z-20 px-2 sm:px-0">
          <div className="bg-white/10 rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl shadow-slate-950/80 border border-slate-800 relative backdrop-blur-md transition-all duration-500 ease-in-out">
            {/* Top Rose Double Quote Box */}
            <div className="absolute -top-5 left-6 sm:left-8 bg-rose-500 text-white p-2.5 sm:p-3 rounded-xl shadow-lg shadow-rose-500/25 flex items-center justify-center">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 fill-current transform rotate-180" />
            </div>

            {/* Testimonial Quote Text */}
            <div className="mt-4 sm:mt-2 text-center">
              <p className="text-slate-200 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-normal inline">
                {activeTestimonial.quote}
              </p>

              {/* Closing Quote Symbol */}
              <span className="inline-flex items-center ml-1 align-baseline text-rose-500">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current inline-block transform rotate-0" />
              </span>
            </div>

            {/* Author Information */}
            <div className="mt-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-rose-500 tracking-tight">
                {activeTestimonial.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
                {activeTestimonial.role}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center items-center gap-1 mt-3">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}