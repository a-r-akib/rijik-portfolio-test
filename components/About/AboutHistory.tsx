"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timelineData = [
  {
    id: 1,
    year: "1998",
    title: "Company Started",
    description:
      "Expound the actual teachings of the great explorer the truth the masters builder of human happiness one rejects.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    year: "2000",
    title: "New Milestone",
    description:
      "No one rejects dislikes or avoids pleasures itself because it is pleasures, but because those who pursue pleasure rationally.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
    active: true,
  },
  {
    id: 3,
    year: "2001",
    title: "First Award",
    description:
      "Undertakes laborious physical exercise except to obtain some advantage from it pursue pleasure rationally.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    year: "2004",
    title: "100 Employees",
    description:
      "Expound the actual teachings of the great explorer the truth the masters builder of human happiness one rejects.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    year: "2008",
    title: "Global Expansion",
    description:
      "Expanding our footprint across international markets, building robust partnerships and driving technological innovation.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    year: "2015",
    title: "Innovation Hub",
    description:
      "Launched our state-of-the-art R&D facility empowering future generations of tech pioneers and sustainable ventures.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
  },
];

export default function AboutHistory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleScroll = (direction: string) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 350 : 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftState(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section className="py-24 bg-[#fafafa] flex flex-col justify-center select-none overflow-hidden">
      <div className="w-full">
        {/* Header Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-rose-600">Journey</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={() => handleScroll("left")}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition shadow-sm cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition shadow-sm cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Scrollable Track container with Fade Effect Edges */}
        <div className="relative w-full">
          {/* Left and Right Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none z-30"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none z-30"></div>

          {/* Central Horizontal Line */}
          <div className="absolute top-53 left-0 right-0 h-[1px] bg-slate-200 z-0"></div>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-8 overflow-x-auto scrollbar-none scroll-smooth items-center relative z-10 px-8 py-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {timelineData.map((item) => {
              const isRose = item.active || item.year === "2000";
              return (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[300px] md:w-[350px] flex flex-col group border-dashed border-r border-slate-200 pr-8"
                >
                  {/* Top content block */}
                  <div className="h-[160px] flex flex-col justify-end pb-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Timeline Node & Year Node */}
                  <div className="relative flex items-center my-2">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold shadow-md transition-transform duration-300 group-hover:scale-110 z-20 ${
                        isRose
                          ? "bg-rose-500 text-white shadow-rose-500/30"
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Bottom Image Circular block */}
                  <div className="flex pt-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                        onError={(e: any) => {
                          e.currentTarget.src =
                            "https://placehold.co/200x200/e2e8f0/64748b?text=Image";
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
