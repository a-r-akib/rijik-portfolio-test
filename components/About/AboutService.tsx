'use client'

import { useState } from "react";
import WebPageWrapper from "../Wrapper/WebPageWrapper";

const businesses = [
  {
    title: "Japan Education and Job Center - JEJC",
    category: "EDUCATION & CAREER",
    tagline: "Study & Work in Japan",
    description: "A leading education and career institute in Bangladesh providing Japanese language training, visa support, and job placement for study and work in Japan.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
    linkText: "Read More"
  },
  {
    title: "Muhammad Cars Trading",
    category: "AUTOMOTIVE",
    tagline: "Japanese Reconditioned Vehicles",
    description: "A trusted automobile company specializing in high-quality Japanese reconditioned vehicle import and sales across Bangladesh.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    badge: "Import & Sales",
    linkText: "Read More"
  },
  {
    title: "Rijik Foundation",
    category: "CHARITY & WELFARE",
    tagline: "Social Welfare & Humanitarian Aid",
    description: "Rijik Foundation is the charitable wing of Rijik International Co. Ltd., dedicated to social welfare, humanitarian aid, and community development across Bangladesh.",
    image: "/company/img/rf.jpg",
    badge: "Social Impact",
    linkText: "Read More"
  },
  {
    title: "Muhammad Trading",
    category: "STUDENT SUPPORT",
    tagline: "Global Student Services",
    description: "Comprehensive support services for international students in Japan including accommodation, guidance, and cultural integration.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    badge: "Global Support",
    linkText: "Read More"
  },
  {
    title: "Ghorer Shad",
    category: "FOOD & HOSPITALITY",
    tagline: "Authentic Bangladeshi Cuisine",
    description: "Experience authentic Bangladeshi home-style cuisine, 100% Halal, crafted with love and tradition, right here in Tokyo.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    badge: "Tokyo, Japan",
    linkText: "Read More"
  },
  {
    title: "Ghorer Bazar",
    category: "RETAIL & GROCERY",
    tagline: "Taste of Home Ingredients",
    description: "Experience the true taste of home with high-quality Bangladeshi and South Asian ingredients, 100% Halal and carefully selected for freshness and authenticity.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    badge: "100% Halal",
    linkText: "Read More"
  },
  {
    title: "Madrasa Jalwa E Hera",
    category: "EDUCATION & FAITH",
    tagline: "Islamic Education & Moral Growth",
    description: "Madrasa Jalwa E Hera nurtures students with authentic Islamic education, moral development, and academic excellence, guiding them to serve society with integrity and faith.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    badge: "Academic Excellence",
    linkText: "Read More"
  },
  {
    title: "SBI Remit",
    category: "FINTECH & REMITTANCE",
    tagline: "Secure Global Money Transfers",
    description: "SBI Remit makes international money transfer simple, safe, and reliable—connecting families and businesses across borders with confidence.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    badge: "Secure Transfer",
    linkText: "Read More"
  }
];

const categories = [
  "ALL BUSINESSES",
  "EDUCATION & CAREER",
  "AUTOMOTIVE",
  "CHARITY & WELFARE",
  "STUDENT SUPPORT",
  "FOOD & HOSPITALITY",
  "RETAIL & GROCERY",
  "FINTECH & REMITTANCE"
];

export default function RijikGroupPortfolio() {
  const [activeTab, setActiveTab] = useState("ALL BUSINESSES");
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const filteredBusinesses = activeTab === "ALL BUSINESSES"
    ? businesses
    : businesses.filter((b) => b.category === activeTab);

  return (
    <section id="works" className="py-24 bg-[#fafafa] text-slate-900">
     <WebPageWrapper>
        
        {/* Header & Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
              Rijik International Co. Ltd.
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
              Our Businesses & Ventures
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Bridging Bangladesh and Japan through education, automotive excellence, humanitarian aid, authentic cuisine, retail, spiritual growth, and financial services.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase font-semibold tracking-wider">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl transition-all duration-300 border cursor-pointer ${
                  activeTab === tab
                    ? "bg-linear-to-r from-red-600 via-rose-500 to-red-600 border-rose-600 text-white shadow-lg shadow-rose-600/20 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((biz, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-rose-500/40 transition-all duration-500 group flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Image & Badges */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-black/30 z-10 opacity-60"></div>
                  <img
                    src={biz.image}
                    alt={biz.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-[90%] group-hover:saturate-100"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest text-rose-600 border border-rose-200 uppercase shadow-sm">
                      {biz.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-800 bg-white/80 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-sm">
                      {biz.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-rose-600 mb-1">{biz.tagline}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-rose-600 transition-colors">
                    {biz.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {biz.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedCard(biz)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-rose-600 text-slate-800 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-between group/btn border border-slate-200 hover:border-rose-600"
                >
                  <span>{biz.linkText}</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-scaleUp">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors shadow-sm"
              >
                ✕
              </button>
              <div className="h-56 relative">
                <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <span className="text-xs font-mono text-rose-600 uppercase tracking-widest">{selectedCard.category}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">{selectedCard.title}</h3>
                <p className="text-rose-600 text-sm font-semibold mb-4">{selectedCard.tagline}</p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">{selectedCard.description}</p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      alert(`Thank you for your interest in ${selectedCard.title}! Please contact our headquarters for inquiries.`);
                      setSelectedCard(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold shadow-lg shadow-rose-600/20 transition-all"
                  >
                    Contact Venture
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </WebPageWrapper>
    </section>
  );
}