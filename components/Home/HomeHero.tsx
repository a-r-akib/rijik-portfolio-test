"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const slides = [
  { personImage: "/img/1.png" },
  { personImage: "/img/3.png" },
  { personImage: "/img/4.png" },
  { personImage: "/img/5.png" },
];

export default function HomeHero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress to visual transform properties
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]); // Parallax zoom on images
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // Subtle downward drift for text
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]); // Smooth fade-out as user scrolls past

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] overflow-hidden"
              >
                <div className="relative size-full h-screen overflow-hidden">
                  {/* Scroll-animated Image with Parallax Zoom */}
                  <motion.div
                    style={{ scale: imageScale }}
                    className="relative size-full"
                  >
                    <Image
                      src={slide.personImage}
                      alt="hero image"
                      fill
                      priority={index === 0}
                      className="object-cover object-top grayscale-50"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll-animated Bottom Overlay */}
        <motion.div
          style={{ y: overlayY, opacity: overlayOpacity }}
          className="absolute left-0 w-full bottom-0 gap-10 px-15 pb-30 pt-20 bg-linear-to-t from-black to-transparent pointer-events-auto"
        >
          <WebPageWrapper>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* Header Title */}
              <h1 className="text-2xl sm:text-5xl font-black text-white">
                RIJIK INTERNATIONAL CO. LTD.
              </h1>

              {/* Tagline & Country Pills */}
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-100">
                <span>One Platform, Multiple Services in</span>
                <span className="">
                  🇯🇵 Japan
                </span>
                <span>&</span>
                <span className="">
                  🇧🇩 Bangladesh
                </span>
              </div>
            </motion.div>

            {/* Slide Navigation Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-end justify-between gap-6 mt-5"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-white">
                  0{selectedIndex + 1} / 0{slides.length}
                </span>
                <div className="w-32 h-1 bg-zinc-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-red-500 to-rose-500 transition-all duration-500"
                    style={{
                      width: `${((selectedIndex + 1) / slides.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous slide"
                  className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-300 border border-zinc-800 hover:text-zinc-800 text-white transition cursor-pointer"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Next slide"
                  className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-300 border border-zinc-800 hover:text-zinc-800 text-white transition cursor-pointer"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </motion.div>
          </WebPageWrapper>
        </motion.div>
      </div>
    </section>
  );
}
