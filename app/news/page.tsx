"use client";

import { useState } from "react";
import { Search, ArrowRight, ChevronRight, Mail } from "lucide-react";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  const posts = [
    {
      id: 1,
      title: "Navigating Study & Work Opportunities in Japan via JEJC",
      snippet:
        "Japan Education and Job Center (JEJC) provides comprehensive Japanese language training, visa support, and career guidance to help Bangladeshi students succeed in Tokyo...",
      dateNum: "15",
      dateMonth: "Jan",
      image:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
      category: "Education & Career",
    },
    {
      id: 2,
      title: "Muhammad Cars Trading: Importing Quality Japanese Vehicles",
      snippet:
        "Specializing in high-quality Japanese reconditioned vehicles, we ensure transparent import processes, superior inspection standards, and trusted sales across Bangladesh...",
      dateNum: "10",
      dateMonth: "Jan",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      category: "Automotive",
    },
    {
      id: 3,
      title: "Rijik Foundation's Humanitarian Impact and Community Development",
      snippet:
        "Dedicated to social welfare and humanitarian aid, the Rijik Foundation continues to support underprivileged communities and drive positive social impact across Bangladesh...",
      dateNum: "04",
      dateMonth: "Jan",
      image:
        "/company/img/rf.jpg",
      category: "Charity & Welfare",
    },
    {
      id: 4,
      title: "Supporting International Students in Japan: Muhammad Trading",
      snippet:
        "From seamless accommodation arrangements to cultural integration guidance, Muhammad Trading offers dedicated support services for students transitioning to life in Japan...",
      dateNum: "28",
      dateMonth: "Dec",
      image:
        "/company/img/jejc.jpg",
      category: "Student Support",
    },
    {
      id: 5,
      title:
        "Ghorer Shad & Ghorer Bazar: Authentic Halal Taste of Home in Tokyo",
      snippet:
        "Bringing 100% Halal Bangladeshi home-style cuisine and authentic South Asian grocery ingredients right to the heart of Tokyo for expatriates and locals alike...",
      dateNum: "22",
      dateMonth: "Dec",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
      category: "Food & Grocery",
    },
    {
      id: 6,
      title: "Secure Cross-Border Remittances with SBI Remit Partnerships",
      snippet:
        "Simplifying international money transfers between Japan and Bangladesh with safe, reliable, and swift financial solutions that connect families and businesses...",
      dateNum: "13",
      dateMonth: "Dec",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
      category: "Fintech",
    },
  ];

  const recentPosts = posts.slice(0, 3);

  return (
    <div className="bg-[#fafafa] text-slate-900">
      <section className="pt-40 pb-24 bg-slate-900 text-slate-100 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Updates Info */}
          <div className="lg:col-span-5 relative">
            <div className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
              Latest News & Insights
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white capitalize">
              Our News
            </h2>
            <h3 className="text-slate-400 text-sm leading-relaxed">
              Rijik International Bridging Nations, Expanding Horizons, Sharing
              Success Stories.
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Stay updated with the latest announcements, scholarship intakes
              for Japan Education and Job Center (JEJC), automotive shipments,
              community welfare events by Rijik Foundation, and new branch
              updates across Bangladesh and Japan.
            </p>
          </div>

          {/* Right Column: Dynamic Image Showcase Grid */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden h-[400px] shadow-xl border border-slate-800">
              <img
                src="/img/student4.jpg"
                alt="Student training and education"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[400px] mt-8 shadow-xl border border-slate-800">
              <img
                src="/company/img/gb.jpeg"
                alt="Automotive trading and sales"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[400px] shadow-xl border border-slate-800">
              <img
                src="/company/img/gs.jpg"
                alt="Community welfare and foundation work"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar (Widgets) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
              <input
                type="text"
                placeholder="Search articles & updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent focus:outline-none text-slate-800 placeholder-slate-400"
              />
              <button className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0 hover:bg-slate-700 transition-colors">
                <Search className="w-4 h-4 text-rose-500" />
              </button>
            </div>

            {/* About Author Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                About Editorial Team
              </h3>
              <div className="rounded-xl overflow-hidden h-48">
                <img
                  src="/img/student3.jpg"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bringing you official news, business highlights, and cultural
                stories connecting Rijik International Co. Ltd. branches in
                Dhaka and Tokyo.
              </p>
              <div className="flex items-center gap-3 text-slate-600 pt-2">
                {["#fb", "#tw", "#ig", "#yt"].map((href, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        JANUARY 2026
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Categories
              </h3>
              <ul className="space-y-2.5 text-sm font-medium text-slate-600">
                {[
                  "Education & Career",
                  "Automotive & Trade",
                  "Food & Grocery",
                  "Charity & Welfare",
                  "Fintech & Remittance",
                ].map((cat) => (
                  <li
                    key={cat}
                    className="flex justify-between items-center hover:text-rose-600 cursor-pointer transition-colors"
                  >
                    <span>{cat}</span> <ChevronRight className="w-3.5 h-3.5" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tag Cloud Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Tag Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JAPAN",
                  "BANGLADESH",
                  "EDUCATION",
                  "AUTOMOTIVE",
                  "HALAL",
                  "REMITTANCE",
                  "CHARITY",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 hover:bg-rose-500 hover:text-white transition-colors px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Main Blog Grid (6 Cards) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between group hover:shadow-xl hover:border-rose-500/40 transition-all duration-300"
                >
                  <div>
                    {/* Featured Image with Date Badge */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-rose-50 text-rose-600 p-2.5 rounded-xl text-center shadow-md border border-rose-200">
                        <span className="block font-black text-base leading-none">
                          {post.dateNum}
                        </span>
                        <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">
                          {post.dateMonth}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#read"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-rose-600 transition-colors"
                    >
                      <span>Continue Reading</span>
                      <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-8">
              <button
                onClick={() => setActivePage(1)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                  activePage === 1
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setActivePage(2)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                  activePage === 2
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setActivePage((prev) => Math.min(prev + 1, 2))}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
