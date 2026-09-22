"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  } as const,
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,
};

const blogPosts = [
  {
    id: 1,
    date: "Sep 15, 2026",
    category: "Career Growth",
    title:
      "Navigating the 2026 Job Market: Skills That Matter Most to Employers",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "Sep 10, 2026",
    category: "Interview Prep",
    title: "How to Ace Tech & Remote Interviews with Confidence and Clarity",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "Sep 04, 2026",
    category: "Workplace Culture",
    title: "Building Sustainable Work-Life Balance in Modern Remote Teams",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  },
];

export default function HomeBlog() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
              • Career Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight">
              Latest Insights &<br /> Career Advice from Rijik
            </h2>
            <p className="text-slate-600 max-w-lg">
              Explore expert tips, hiring trends, and actionable strategies
              designed to help you land your dream role and build a thriving
              career.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-sm hover:shadow-md">
            Read All Articles
          </button>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 h-64 shadow-sm">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={post.title}
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {post.date}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-rose-500 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-rose-500 transition-colors group/link"
              >
                Read Article
                <div className="w-5 h-5 bg-rose-500 group-hover/link:bg-rose-600 rounded-full flex items-center justify-center text-white transition-colors">
                  <ArrowRight size={12} />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}