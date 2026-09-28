"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

interface ServiceItem {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  logo: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "language",
    title: "Language, Visa & Jobs",
    headline: "Japan Education & Job Center",
    description:
      "A leading education and career institute in Bangladesh providing Japanese language training, visa support, and direct job placement for aspiring students and professionals.",
    image: "/company/img/jejc.jpg",
    logo: "/company/jejc.png",
  },
  {
    id: "vehicle",
    title: "Reconditioned Vehicle Sales",
    headline: "Muhammad Cars Trading",
    description:
      "Reliable importer of high-quality reconditioned vehicles straight from Japan with complete documentation, inspection verification, and full registration support.",
    image: "/company/img/mct.jpg",
    logo: "/company/mct.png",
  },
  {
    id: "welfare",
    title: "Social Welfare Organization",
    headline: "Rijik Foundation",
    description:
      "Empowering underprivileged communities through sustainable charity initiatives, youth education drives, and rapid emergency relief services across Bangladesh.",
    image: "/company/img/rf.jpg",
    logo: "/company/rf.png",
  },
  {
    id: "student",
    title: "Import and export services",
    headline: "Muhammad Trading",
    description:
      "Bridges nations through reliable global import and export services, delivering quality products and fostering long-term partnerships across Asia, the Middle East, and beyond.",
    image: "/company/img/mt.jpg",
    logo: "/company/mt.png",
  },
  {
    id: "halal-food",
    title: "Halal Bangladeshi Food",
    headline: "Ghorer Shad",
    description:
      "A unique Bangladeshi restaurant in Tokyo, offering traditional home-style dishes that bring the taste of Bangladesh to Japan. As a sister concern of Rijik International Co. Ltd. We focus on quality, authenticity, and Halal-certified ingredients. Our mission is to create a welcoming space for both expatriates and locals, where every meal reflects the warmth, flavors, and heritage of Bangladeshi cuisine.",
    image: "/company/img/gs.jpg",
    logo: "/company/gs.png",
  },
  {
    id: "halal-grocery",
    title: "Halal Asian Grocery",
    headline: "Ghorer Bazar",
    description:
      "Your trusted neighborhood and online store offering fresh Halal Asian spices, authentic Bangladeshi groceries, fresh produce, and essential household items.",
    image: "/company/img/gb.jpeg",
    logo: "/company/gb.png",
  },
  {
    id: "islamic-culture",
    title: "Islamic Culture Education",
    headline: "Madrasa Jalwa E Hera",
    description:
      "Promoting moral and academic excellence through structured Quranic studies, Islamic value education, and comprehensive cultural guidance programs.",
    image: "/company/img/mjh.jpeg",
    logo: "/company/mjh.png",
  },
  {
    id: "remittance",
    title: "Global Remittance Services",
    headline: "SBI Remit",
    description:
      "Fast, compliant, and low-fee money transfer solutions helping expats send funds safely back home to their loved ones with total legal peace of mind.",
    image: "/company/img/sbi.jpg",
    logo: "/company/sbi.png",
  },
];

export default function HomeService2() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(4);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activeService = servicesData[activeServiceIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveServiceIndex(
        (prevIndex) => (prevIndex + 1) % servicesData.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-[#fafafa] pt-24">
      <WebPageWrapper>
        <div
          className="relative text-slate-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-28 will-change-[transform,opacity]"
          >
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest block mb-2">
              • Our Services •
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
              One Platform, <span className="text-rose-600">All Service</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              Find all Rijik services in one place connected, trusted, and ready
              to support your journey.
            </p>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Side: Navigation Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 22,
                delay: 0.1,
              }}
              className="flex flex-col space-y-4 will-change-[transform,opacity]"
            >
              {servicesData.map((service, index) => {
                const isActive = activeServiceIndex === index;
                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 20,
                      delay: 0.03 * index,
                    }}
                    onClick={() => setActiveServiceIndex(index)}
                    className={`group flex items-center text-left transition-colors duration-300 cursor-pointer will-change-transform ${
                      isActive
                        ? "text-rose-600 font-bold"
                        : "text-slate-600 hover:text-slate-900 font-semibold"
                    }`}
                  >
                    {/* Active Indicator with Spring Layout Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="flex items-center mr-3"
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 25,
                        }}
                      >
                        <span className="w-8 h-[2px] bg-rose-600 inline-block mr-1"></span>
                        <Play className="w-3 h-3 text-rose-600 fill-rose-600" />
                      </motion.div>
                    )}

                    <span
                      className={`text-base sm:text-lg tracking-wide ${!isActive ? "ml-0" : ""}`}
                    >
                      {service.title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Middle: Pop-out Center Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.15,
              }}
              className="flex justify-center lg:-my-20 my-6 z-20 will-change-[transform,opacity]"
            >
              <div className="relative w-full max-w-[380px] h-[480px] sm:h-[580px] rounded-[30px] border-2 border-white overflow-hidden shadow-2xl bg-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="absolute inset-0 will-change-[transform,opacity]"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Right Logo Container */}
                <div className="absolute bottom-0 right-0 bg-white rounded-tl-[28px] p-4 sm:p-5 flex items-center justify-center shadow-md border-t border-l border-slate-100 min-w-[140px] min-h-[90px] z-30">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 22,
                      }}
                      className="relative w-28 h-12 flex items-center justify-center will-change-[transform,opacity]"
                    >
                      <Image
                        src={activeService.logo}
                        alt={`${activeService.headline} logo`}
                        width={800}
                        height={800}
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Detailed Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 22,
                delay: 0.2,
              }}
              className="flex flex-col justify-center space-y-6 lg:pl-4 min-h-[280px] will-change-[transform,opacity]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ type: "spring", stiffness: 130, damping: 22 }}
                  className="space-y-6 will-change-[transform,opacity]"
                >
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {activeService.headline}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activeService.description}
                  </p>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-300 shadow-lg shadow-[#FF0033]/25 cursor-pointer will-change-transform"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
