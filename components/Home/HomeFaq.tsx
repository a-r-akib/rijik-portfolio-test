'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services does RIJIK Int. Co. Ltd. provide for students who want to study in Japan?",
    answer:
      "This covers consultancy, application support, document guidance, and admission steps.",
  },
  {
    question: "How can customers safely and easily send remittance through RIIJIK International?",
    answer:
      "This explains your remittance process, safety, and requirements",
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
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  } as const
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  } as const
};

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-900 text-slate-100 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Frequently Asked <br /> Questions
            </h2>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div 
            variants={fadeInUp}
            className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl shadow-black/40 flex flex-col items-center text-center max-w-md"
          >
            {/* Avatar with Rose Glow */}
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-rose-500/30 rounded-full blur-xl scale-150"></div>
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                  alt="Consultant Avatar"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Book a 15 min call
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              If you have any questions, just book a 15-minute call with us before subscribing.
            </p>

            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-lg shadow-rose-500/20 active:scale-[0.98]">
              Book a Free Call
            </button>
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
                className="bg-slate-900/60 rounded-2xl border border-slate-800/80 shadow-sm transition-all duration-200 overflow-hidden hover:border-slate-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-semibold text-slate-100 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-slate-400">
                    {isOpen ? (
                      <X className="w-5 h-5 text-rose-400 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 transition-transform duration-200" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3"
                    >
                      {faq.answer}
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