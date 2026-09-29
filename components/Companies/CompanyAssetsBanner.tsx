"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const sliderData = [
  {
    badge: "Global Infrastructure",
    title: "Bridging Dhaka & Tokyo with Trusted Assets & Facilities",
    description:
      "From our dedicated Japanese language training and visa consultancy center in Bangladesh to student accommodations, vehicle showrooms, and halal retail outlets in Tokyo—our assets reflect our commitment to excellence.",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    stat1Number: "08+",
    stat1Label: "Business Ventures",
    stat2Number: "24/7",
    stat2Label: "Support Hubs",
  },
  {
    badge: "Education & Career",
    title: "JEJC Language Training & Visa Processing Centers",
    description:
      "State-of-the-art classrooms and simulated Japanese environments in Bangladesh equipped to provide immersive language training, cultural orientation, and seamless visa processing.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    stat1Number: "100%",
    stat1Label: "Visa Guidance",
    stat2Number: "1500+",
    stat2Label: "Students Placed",
  },
  {
    badge: "Automotive & Trade",
    title: "Muhammad Cars Trading Showrooms & Logistics",
    description:
      "Extensive vehicle storage yards and showroom facilities featuring top-grade Japanese reconditioned vehicles inspected, cleared, and ready for customers across Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    stat1Number: "100%",
    stat1Label: "Verified Imports",
    stat2Number: "Top",
    stat2Label: "Inspection Grade",
  },
  {
    badge: "Food & Community",
    title: "Ghorer Shad & Ghorer Bazar Outlets in Tokyo",
    description:
      "Authentic Halal dining spaces and grocery stores located centrally in Tokyo, providing expatriates and locals with genuine Bangladeshi home-style meals and fresh ingredients.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    stat1Number: "100%",
    stat1Label: "Halal Certified",
    stat2Number: "Authentic",
    stat2Label: "Taste of Home",
  },
];

export default function CompanyAssetsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const currentSlide = sliderData[currentIndex];

  return (
    <section className="pt-24 bg-slate-900">
      <WebPageWrapper>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
          {/* Slider Images with Smooth Crossfade */}
          <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden bg-black">
            {sliderData.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-1000"
                />
              </div>
            ))}

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-rose-600 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 hover:bg-rose-600 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
              {sliderData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all rounded-full ${
                    idx === currentIndex
                      ? "w-8 bg-rose-500"
                      : "w-2 bg-white/40 hover:bg-white"
                  }`}
                ></button>
              ))}
            </div>

            {/* Floating Info Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 z-30">
              <div className="space-y-3 max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-widest animate-fadeIn">
                  {currentSlide.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {currentSlide.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

              {/* Statistics Cards */}
              <div className="flex gap-4 flex-shrink-0">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-rose-500">
                    {currentSlide.stat1Number}
                  </span>
                  <span className="block text-[10px] uppercase font-mono text-slate-300 tracking-wider">
                    {currentSlide.stat1Label}
                  </span>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-white">
                    {currentSlide.stat2Number}
                  </span>
                  <span className="block text-[10px] uppercase font-mono text-slate-300 tracking-wider">
                    {currentSlide.stat2Label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
