"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "What services does RIJIK Int. Co. Ltd. provide for students who want to study in Japan?",
    answer:
      "This covers consultancy, application support, document guidance, and admission steps.",
  },
  {
    question:
      "How can customers safely and easily send remittance through RIIJIK International?",
    answer: "This explains your remittance process, safety, and requirements.",
  },
  {
    question: "Is Rijik available internationally?",
    answer:
      "Yes, Rijik operates internationally with services tailored for cross-border needs. We support individuals and businesses across multiple countries.",
  },
  {
    question: "Can I talk to someone before enrolling?",
    answer:
      "Absolutely. Schedule a consultation anytime and our counselors will walk you through the requirements.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  } as const,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  } as const,
};

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] text-slate-800 py-24 flex items-center justify-center overflow-hidden border-y border-slate-200/80">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <motion.div
          className="lg:col-span-5 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp}>
            <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
              • FAQ •
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Frequently Asked <br /> Questions
            </h2>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center max-w-md"
          >
            {/* Avatar with Soft Rose Glow */}
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-rose-500/15 rounded-full blur-xl scale-150"></div>
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                  alt="Consultant Avatar"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Message us on WhatsApp
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              If you have any questions, just message us before subscribing.
            </p>

            <a
              href="https://wa.me/8801700000000?text=Hello%2C%20I%20have%20a%20question%20before%20subscribing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-500 shadow-md shadow-rose-500/20 active:scale-[0.98] hover:scale-105 cursor-pointer flex items-center justify-center gap-2.5"
            >
              {/* WhatsApp SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Message us</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (Accordion List) */}
        <motion.div
          className="lg:col-span-7 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs transition-colors duration-200 overflow-hidden hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-slate-400">
                    {isOpen ? (
                      <X className="w-5 h-5 text-rose-500 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 transition-transform duration-200" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}