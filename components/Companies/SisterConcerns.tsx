"use client";

import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const sisterConcerns = [
  {
    num: "01.",
    title: "Japan Education and Job Center - JEJC",
    desc: "A leading education and career institute in Bangladesh providing specialized Japanese language training, comprehensive visa support, and secure job placement for study and work in Japan.",
    links: [
      "Japanese Language Classes",
      "Student Visa Support",
      "Work Visa Guidance",
      "Career Counseling",
      "Pre-Departure Briefing",
      "Alumni Network",
    ],
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02.",
    title: "Muhammad Cars Trading",
    desc: "A trusted and authorized automobile company specializing in high-quality Japanese reconditioned vehicle import, customs clearance, and sales with complete reliability across Bangladesh.",
    links: [
      "Reconditioned Sedans",
      "SUV Imports",
      "Vehicle Inspection",
      "Customs Assistance",
      "After-Sales Service",
      "Direct Shipping",
    ],
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03.",
    title: "Rijik Foundation",
    desc: "The humanitarian and charitable wing of Rijik International Co. Ltd., dedicated entirely to social welfare programs, emergency humanitarian aid, education support, and sustainable community development.",
    links: [
      "Humanitarian Relief",
      "Education Sponsorship",
      "Healthcare Support",
      "Community Development",
      "Food Distribution",
      "Volunteer Network",
    ],
    image:
      "/company/img/rf.jpg",
  },
  {
    num: "04.",
    title: "Muhammad Trading",
    desc: "Providing comprehensive arrival and settlement support services for international students in Japan, ensuring seamless accommodation, guidance, and cultural integration assistance.",
    links: [
      "Student Accommodation",
      "Airport Pickup",
      "Part-time Job Guidance",
      "Cultural Integration",
      "Local Registration Support",
      "24/7 Student Care",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "05.",
    title: "Ghorer Shad & Ghorer Bazar",
    desc: "Experience authentic 100% Halal Bangladeshi home-style cuisine crafted with tradition at Ghorer Shad, alongside fresh South Asian ingredients and groceries supplied via Ghorer Bazar in Tokyo.",
    links: [
      "Authentic Halal Dining",
      "Traditional Home Recipes",
      "Fresh Groceries & Spices",
      "Wholesale & Retail",
      "Tokyo Restaurant",
      "Online Grocery Delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "06.",
    title: "Madrasa Jalwa E Hera & SBI Remit Partner",
    desc: "Nurturing students with authentic Islamic education and moral excellence, alongside partnering with SBI Remit for simple, safe, and reliable cross-border money transfers between families.",
    links: [
      "Islamic Education",
      "Moral Development",
      "Academic Excellence",
      "Secure Remittances",
      "Cross-Border Transfers",
      "Family Financial Support",
    ],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SisterConcerns() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <WebPageWrapper>
        <div className="text-center mb-20">
          <span className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-widest block mb-2">
            Our Group of Companies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Sister Concerns & Ventures
          </h2>
        </div>

        <div className="space-y-24">
          {sisterConcerns.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center sticky top-10 p-6 bg-slate-50/90 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg shadow-slate-100 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Details */}
              <div
                className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <span className="text-rose-600 font-mono text-lg font-bold">
                  {item.num}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-rose-600 transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                      <span>{link}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#read"
                    className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-slate-900 hover:text-rose-600 transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 text-rose-600 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
                className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-[400px] relative group bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WebPageWrapper>
    </section>
  );
}