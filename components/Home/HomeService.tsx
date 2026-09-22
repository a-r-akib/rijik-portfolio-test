"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const services = [
  {
    id: 1,
    tag: "Education & Career",
    title: "Japan Education and Job Center (JEJC)",
    description:
      "A leading education and career institute in Bangladesh providing Japanese language training, visa support, and job placement for study and work in Japan.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    tag: "Automotive",
    title: "Muhammad Cars Trading",
    description:
      "A trusted automobile company specializing in high-quality Japanese reconditioned vehicle import and sales across Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    tag: "Charity & Welfare",
    title: "Rijik Foundation",
    description:
      "Rijik Foundation is the charitable wing of Rijik International Co. Ltd., dedicated to social welfare, humanitarian aid, and community development across Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    tag: "Student Support",
    title: "Muhammad Trading",
    description:
      "Comprehensive support services for international students in Japan including accommodation, guidance, and cultural integration.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    tag: "Food & Dining",
    title: "Ghorer Shad",
    description:
      "Experience authentic Bangladeshi home-style cuisine, 100% Halal, crafted with love and tradition, right here in Tokyo.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 6,
    tag: "Grocery & Retail",
    title: "Ghorer Bazar",
    description:
      "Experience the true taste of home with high-quality Bangladeshi and South Asian ingredients, 100% Halal and carefully selected for freshness and authenticity.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 7,
    tag: "Education & Ethics",
    title: "Madrasa Jalwa E Hera",
    description:
      "Madrasa Jalwa E Hera nurtures students with authentic Islamic education, moral development, and academic excellence, guiding them to serve society with integrity and faith.",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 8,
    tag: "Financial Services",
    title: "SBI Remit",
    description:
      "SBI Remit makes international money transfer simple, safe, and reliable—connecting families and businesses across borders with confidence.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
];

// Motion Variants with explicit typing to avoid TypeScript tuple errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomeService() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 35,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-32 pb-24 bg-slate-900 overflow-hidden text-white relative">
      {/* Header */}
      <WebPageWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.2 }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2"
          >
            • One Platform. All Service •
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
          >
            Our Connected Ecosystem
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Find all Rijik services in one place—connected, trusted, and ready to
            support your journey across Japan and Bangladesh.
          </motion.p>
        </motion.div>
      </WebPageWrapper>

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-80px", amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="overflow-hidden py-8 cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="flex -ml-6 items-center">
            {services.map((service, index) => {
              const isActive = selectedIndex === index;

              return (
                <div
                  key={service.id}
                  className="pl-6 shrink-0 w-[85%] sm:w-[55%] md:w-[45%] lg:w-[38%]"
                >
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform ${
                      isActive
                        ? "scale-105 opacity-100 z-20"
                        : "scale-90 opacity-30 z-10 blur-[0.5px]"
                    }`}
                  >
                    {isActive ? (
                      /* Active Focused Card */
                      <div className="bg-slate-800 rounded-3xl border border-slate-700/60 overflow-hidden relative group h-[500px] shadow-2xl shadow-rose-950/20">
                        <Image
                          src={service.image}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={service.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20">
                          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-6 rounded-2xl flex justify-between items-center group-hover:border-rose-500/50 transition-colors duration-300">
                            <div className="w-5/6 pr-2">
                              <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                                {service.tag}
                              </span>
                              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white line-clamp-1">
                                {service.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                            <Link
                              href={service.link}
                              aria-label={`Read more about ${service.title}`}
                              className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-rose-600 transition-colors duration-300 shadow-lg shadow-rose-950/50"
                            >
                              <ArrowRight size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Inactive Side Card */
                      <div className="bg-slate-800/90 rounded-3xl border border-slate-700/40 overflow-hidden shadow-lg relative flex flex-col h-[500px]">
                        <div className="relative w-full h-1/2 overflow-hidden">
                          <Image
                            src={service.image}
                            fill
                            className="object-cover"
                            alt={service.title}
                          />
                          <div className="absolute inset-0 bg-slate-950/40" />
                        </div>
                        <div className="p-6 sm:p-8 h-1/2 bg-slate-800 flex flex-col justify-between items-start">
                          <div>
                            <span className="text-xs font-semibold text-rose-400 block mb-1">
                              {service.tag}
                            </span>
                            <h4 className="text-base font-bold text-white mb-2 line-clamp-1">
                              {service.title}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-3">
                              {service.description}
                            </p>
                          </div>
                          <Link
                            href={service.link}
                            className="bg-slate-700 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full font-semibold inline-flex items-center gap-3 transition-colors duration-300 text-xs"
                          >
                            <span>Read More</span>
                            <span className="w-5 h-5 rounded-full text-slate-900 bg-white flex items-center justify-center shrink-0">
                              <ArrowRight size={12} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mt-8"
        >
          <button
            onClick={scrollPrev}
            aria-label="Previous service"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800 text-slate-200 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next service"
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800 text-slate-200 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}