"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

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
      "Empowering Communities, Transforming Lives",
    image:
      "/company/img/rf.jpg",
  },
  {
    id: 2,
    date: "Sep 10, 2026",
    category: "Interview Prep",
    title: "Bringing Bangladesh to Tokyo, One Plate at a Time",
    image:
      "/company/img/gb.jpeg",
  },
  {
    id: 3,
    date: "Sep 04, 2026",
    category: "Workplace Culture",
    title: "Your Path to Japanese Language Mastery",
    image:
      "/company/img/jejc.jpg",
  },
];

export default function HomeBlog() {
  return (
    <section className="py-24 bg-slate-900 text-slate-100 overflow-hidden">
      <WebPageWrapper>
        <div>
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Latest Insights &<br /> <span className="text-rose-600">Career </span> Advice from Rijik
              </h2>
              <p className="text-slate-400 max-w-lg">
                Explore expert tips, hiring trends, and actionable strategies
                designed to help you land your dream role and build a thriving
                career.
              </p>
            </div>
            <button className="mt-6 md:mt-0 bg-linear-to-r from-red-600 via-rose-500 to-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-rose-950/40 cursor-pointer scale-3d hover:scale-110 duration-500">
              Read All Articles
            </button>
          </motion.div>

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
                <div className="relative rounded-3xl overflow-hidden mb-6 h-64 shadow-xl border border-slate-800 bg-slate-900">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    alt={post.title}
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-800">
                      {post.category}
                    </span>
                    <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md shadow-rose-950/40">
                      {post.date}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-rose-600 transition-colors group/link"
                >
                  Read Article
                  <div className="w-5 h-5 bg-rose-600 group-hover/link:bg-rose-500 rounded-full flex items-center justify-center text-white transition-colors shadow-sm">
                    <ArrowRight size={12} />
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
