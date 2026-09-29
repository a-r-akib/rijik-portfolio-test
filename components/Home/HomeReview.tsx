"use client";

import React, { useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const reviewsData = [
  {
    id: 1,
    name: "Rayhan Ahmed",
    role: "Senior Software Engineer",
    location: "Dhaka, Bangladesh",
    rating: 5,
    review:
      "Rijik completely transformed my job search. The AI-driven matching connected me with top tech companies that aligned with my skills and salary expectations within just two weeks.",
  },
  {
    id: 2,
    name: "Jennifer Winston",
    role: "Head of Talent Acquisition",
    location: "London, UK",
    rating: 5,
    review:
      "Finding verified, qualified candidates used to take us months. Rijik’s streamlined employer portal cut our hiring cycle by half with transparent, high-quality candidate profiles.",
  },
  {
    id: 3,
    name: "David Tanaka",
    role: "Product Designer",
    location: "Tokyo, Japan",
    rating: 5,
    review:
      "The application tracking and direct messaging features made interviewing effortless. Rijik helped me make a seamless career transition into a fully remote international role.",
  },
];

export default function HomeReview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Track scroll position for continuous real-time physics
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center 0.4"],
  });

  // Base progress mappings
  const rawHeaderScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rawImageScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const rawCarouselX = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Bouncy spring physics for pop effect on image & smooth slide for carousel
  const headerScale = useSpring(rawHeaderScale, {
    stiffness: 100,
    damping: 20,
  });
  const imagePopScale = useSpring(rawImageScale, {
    stiffness: 160,
    damping: 14,
  });
  const carouselX = useSpring(rawCarouselX, { stiffness: 90, damping: 18 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#fafafa] relative overflow-hidden"
    >
      <WebPageWrapper>
        <div className="relative z-10">
          {/* Section Header: Appears from deep background (Zooming in) */}
          <motion.div
            style={{ scale: headerScale, opacity }}
            className="text-center mb-16"
          >
            <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
              • TESTIMONIALS •
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Real Experiences from Clients <br />
              Who Trust <span className="text-rose-600">Rijik</span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Static Left Image Column: Pops on Scroll */}
            <motion.div
              style={{ scale: imagePopScale, opacity }}
              className="lg:w-1/3 w-full shrink-0 relative"
            >
              {/* Offset Card Accent */}
              <div className="absolute inset-0 bg-rose-100 rounded-[2.5rem] transform translate-x-3 translate-y-3 -z-10 border border-rose-200/50" />

              <div className="relative rounded-[2.5rem] overflow-hidden h-[420px] shadow-xl border border-slate-200/60 bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Happy Clients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Embla Carousel Column: Slides in from the Right */}
            <motion.div
              style={{ x: carouselX, opacity }}
              className="lg:w-2/3 w-full min-w-0 relative"
            >
              {/* Embla Viewport */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6">
                  {reviewsData.map((item) => (
                    <div
                      key={item.id}
                      className="flex-[0_0_100%] md:flex-[0_0_50%] pl-6 min-w-0"
                    >
                      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative flex flex-col justify-between h-full">
                        {/* Floating Quote Badge */}
                        <div className="absolute top-4 right-6 bg-rose-50 text-rose-500 w-10 h-10 rounded-2xl flex items-center justify-center border border-rose-100 shadow-sm shrink-0">
                          <Quote size={20} className="fill-rose-500 text-rose-500" />
                        </div>

                        <div>
                          {/* Rating Stars */}
                          <div className="flex items-center gap-1 text-amber-400 mb-6">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="fill-amber-400"
                              />
                            ))}
                          </div>

                          <p className="text-slate-100 text-sm leading-relaxed mb-8">
                            "{item.review}"
                          </p>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-slate-50 text-base">
                            {item.name}
                          </h4>
                          <p className="text-xs text-rose-600 font-semibold mt-0.5">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Navigation Controls */}
              <div className="flex items-center justify-end gap-2 pt-6">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous Review"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center shadow-sm hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Next Review"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center shadow-sm hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}