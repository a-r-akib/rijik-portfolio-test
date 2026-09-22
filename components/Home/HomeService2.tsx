"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    image: "/images/language-visa.jpg",
    logo: "/images/jejc-logo.png",
  },
  {
    id: "vehicle",
    title: "Reconditioned Vehicle Sales",
    headline: "Rijik Auto Trading",
    description:
      "Reliable importer of high-quality reconditioned vehicles straight from Japan with complete documentation, inspection verification, and full registration support.",
    image: "/images/reconditioned-cars.jpg",
    logo: "/images/rijik-auto-logo.png",
  },
  {
    id: "welfare",
    title: "Social Welfare Organization",
    headline: "Rijik Foundation",
    description:
      "Empowering underprivileged communities through sustainable charity initiatives, youth education drives, and rapid emergency relief services across Bangladesh.",
    image: "/images/social-welfare.jpg",
    logo: "/images/rijik-foundation-logo.png",
  },
  {
    id: "student",
    title: "Student Relocation Support",
    headline: "Rijik Student Care",
    description:
      "Complete end-to-end relocation assistance, accommodation setup, local orientation, and continuous life support for international students studying in Japan.",
    image: "/images/student-relocation.jpg",
    logo: "/images/rijik-care-logo.png",
  },
  {
    id: "halal-food",
    title: "Halal Bangladeshi Food",
    headline: "Ghorer Shad",
    description:
      "A unique Bangladeshi restaurant in Tokyo, offering traditional home-style dishes that bring the taste of Bangladesh to Japan. As a sister concern of Rijik International Co. Ltd. We focus on quality, authenticity, and Halal-certified ingredients. Our mission is to create a welcoming space for both expatriates and locals, where every meal reflects the warmth, flavors, and heritage of Bangladeshi cuisine.",
    image: "/images/ghorer-shad-dining.jpg",
    logo: "/images/ghorer-shad-logo.png",
  },
  {
    id: "halal-grocery",
    title: "Halal Asian Grocery",
    headline: "Rijik Halal Market",
    description:
      "Your trusted neighborhood and online store offering fresh Halal Asian spices, authentic Bangladeshi groceries, fresh produce, and essential household items.",
    image: "/images/halal-grocery.jpg",
    logo: "/images/rijik-market-logo.png",
  },
  {
    id: "islamic-culture",
    title: "Islamic Culture Education",
    headline: "Rijik Academy",
    description:
      "Promoting moral and academic excellence through structured Quranic studies, Islamic value education, and comprehensive cultural guidance programs.",
    image: "/images/islamic-education.jpg",
    logo: "/images/rijik-academy-logo.png",
  },
  {
    id: "remittance",
    title: "Global Remittance Services",
    headline: "Rijik Express Transfer",
    description:
      "Fast, compliant, and low-fee money transfer solutions helping expats send funds safely back home to their loved ones with total legal peace of mind.",
    image: "/images/global-remittance.jpg",
    logo: "/images/rijik-express-logo.png",
  },
];

export default function HomeService2() {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[4]);

  return (
    <section className="bg-[#fafafa] pt-24">
      {/* Outer Main Box Container */}
      <div className="relative w-full max-w-7xl text-slate-900 mx-auto">
        
        {/* Light Background Shell with soft overlay */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <Image
            src="/images/bg-office-people.jpg"
            alt="Background Office"
            fill
            className="object-cover opacity-[0.04]"
            priority
          />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-28"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            One Platform, <span className="text-[#FF0033]">All Service</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
            Find all Rijik services in one place connected, trusted, and ready to support your journey.
          </p>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col space-y-4"
          >
            {servicesData.map((service, index) => {
              const isActive = activeService.id === service.id;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  onClick={() => setActiveService(service)}
                  className={`group flex items-center text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-[#FF0033] font-bold"
                      : "text-slate-600 hover:text-slate-900 font-semibold"
                  }`}
                >
                  {/* Active Indicator with Layout Spring Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="flex items-center mr-3"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <span className="w-8 h-[2px] bg-[#FF0033] inline-block mr-1"></span>
                      <Play className="w-3 h-3 text-[#FF0033] fill-[#FF0033]" />
                    </motion.div>
                  )}

                  <span className={`text-base sm:text-lg tracking-wide ${!isActive && "ml-0"}`}>
                    {service.title}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Middle: Pop-out Center Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:-my-20 my-6 z-20"
          >
            <div className="relative w-full max-w-[380px] h-[480px] sm:h-[580px] rounded-[30px] border-2 border-white overflow-hidden shadow-2xl bg-slate-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-28 h-12 flex items-center justify-center"
                  >
                    <Image
                      src={activeService.logo}
                      alt={`${activeService.headline} logo`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:pl-4 min-h-[280px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
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
                    className="inline-flex items-center gap-2 bg-[#FF0033] hover:bg-[#D9002C] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-300 shadow-lg shadow-[#FF0033]/25 cursor-pointer"
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
    </section>
  );
}