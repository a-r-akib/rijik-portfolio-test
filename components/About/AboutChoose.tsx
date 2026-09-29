"use client";

import React from "react";
import { Play } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function AboutChoose() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <WebPageWrapper>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
                There Are Many Reasons
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white capitalize">
              Why Choose Rijik International
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bridging Bangladesh and Japan with trust, dedication, and
              multi-sector expertise—empowering students, driving automotive
              trade, and nurturing communities.
            </p>

            {/* Image & Stamp Card */}
            <div className="relative mt-8 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src="/img/student3-edit.jpeg"
                alt="Team collaborating"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700 filter brightness-90"
              />
              <div className="absolute top-4 left-4 bg-rose-600 text-white font-black text-[10px] uppercase tracking-widest py-1.5 px-3.5 rounded shadow-lg rotate-[-3deg] border border-rose-500/30">
                GLOBAL BRIDGE • JAPAN & BD
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-8 bg-slate-950/50 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Committed to Quality & Trust
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                With years of dedicated service across diverse industries, we
                deliver comprehensive solutions—from education and visa support
                to premium automotive import, halal cuisine, and community
                welfare.
              </p>
            </div>

            {/* Sector Metrics / Progress Bars */}
            <div className="space-y-6 pt-4">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-slate-300">
                  <span>Education & Visa Support</span>
                  <span className="text-rose-600">95%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-slate-300">
                  <span>Automotive & Trade Excellence</span>
                  <span className="text-rose-600">90%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-slate-300">
                  <span>Community & Welfare Impact</span>
                  <span className="text-rose-600">100%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-500 hover:scale-110 transition shadow-lg shadow-rose-600/30">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </button>
              <span className="text-xs uppercase font-bold tracking-widest text-white hover:text-rose-500 cursor-pointer transition-colors">
                CONTACT OUR HEADQUARTERS
              </span>
            </div>
          </div>
        </section>
      </WebPageWrapper>
    </section>
  );
}
