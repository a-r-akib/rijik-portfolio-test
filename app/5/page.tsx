'use client'

import React, { useState } from 'react';
import { 
  Search, ArrowRight, ChevronRight, Mail, Phone, Clock, MapPin, 
  Send, Menu, X, ShoppingCart
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const posts = [
    {
      id: 1,
      title: "The style of management by zen Z CEO now a Days",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "13",
      dateMonth: "Dec",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      category: "Business"
    },
    {
      id: 2,
      title: "How consultation in business is affecting new ventures",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "13",
      dateMonth: "Dec",
      image: "https://images.unsplash.com/photo-1580894732475-8027111d4d03?auto=format&fit=crop&w=600&q=80",
      category: "Finance"
    },
    {
      id: 3,
      title: "Challenges of consultation new Business Firms",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "13",
      dateMonth: "Dec",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      category: "Business"
    },
    {
      id: 4,
      title: "AI and Global Economics: The Impact on Trade and Investment Strategies",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "22",
      dateMonth: "Nov",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      category: "Tech"
    },
    {
      id: 5,
      title: "The Role of AI Data in Shaping Global Trade and Investment Trends",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "22",
      dateMonth: "Jul",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
      category: "Tech"
    },
    {
      id: 6,
      title: "5 Mistakes to avoid in a marketing campaign",
      snippet: "Our business consulting programs helps to break the performance of your business down into customers...",
      dateNum: "13",
      dateMonth: "Mar",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      category: "Business"
    }
  ];

  const recentPosts = posts.slice(0, 3);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#ffb800] selection:text-black">
      
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-slate-900">
              IN<span className="text-[#ffb800] bg-slate-900 px-1.5 py-0.5 rounded">V</span>DEX
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-700">
            <a href="#home" className="hover:text-[#ffb800] transition-colors">Home.</a>
            <a href="#pages" className="hover:text-[#ffb800] transition-colors">Pages.</a>
            <a href="#services" className="hover:text-[#ffb800] transition-colors">Services.</a>
            <a href="#cases" className="hover:text-[#ffb800] transition-colors">Cases.</a>
            <a href="#blog" className="text-[#ffb800] transition-colors">Blog.</a>
            <a href="#contact" className="hover:text-[#ffb800] transition-colors">Contact.</a>
            <a href="#shop" className="hover:text-[#ffb800] transition-colors">Shop.</a>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#service" className="bg-[#112a2b] hover:bg-[#1a3e40] text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all text-sm flex items-center gap-2">
              <span>Get Service</span>
              <ArrowRight className="w-4 h-4 text-[#ffb800]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-slate-800">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Home.</a>
            <a href="#pages" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Pages.</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Services.</a>
            <a href="#cases" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Cases.</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-[#ffb800]">Blog.</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Contact.</a>
            <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-slate-800">Shop.</a>
            <div className="pt-2">
              <a href="#service" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#112a2b] text-white font-bold py-3 rounded-full">
                Get Service
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-slate-100 to-slate-200 py-16 px-4 lg:px-12 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block bg-[#ffb800] text-slate-900 font-bold px-4 py-1 rounded-md text-xs uppercase tracking-widest mb-3">
            Blog Grid
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 max-w-2xl leading-tight">
            Read our insightful research & news from our blog section
          </h1>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-16 px-4 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar (Widgets) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent focus:outline-none text-slate-800"
              />
              <button className="w-10 h-10 rounded-xl bg-[#112a2b] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#1a3e40] transition-colors">
                <Search className="w-4 h-4 text-[#ffb800]" />
              </button>
            </div>

            {/* About Author Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">About Author</h3>
              <div className="rounded-xl overflow-hidden h-48">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" alt="Author" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus err sit voluptatem accusantium dolore mo uelau dantium totam rem aperiam eaque ipsa quae ab illo inven. Lorem ipsum dolor sit amet
              </p>
              <div className="flex items-center gap-3 text-slate-600 pt-2">
                <a href="#fb" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#ffb800] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#tw" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#ffb800] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#ig" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#ffb800] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#yt" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#ffb800] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /></a>
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-4 group cursor-pointer">
                    <img src={post.image} alt={post.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#ffb800] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 mt-1 block">DECEMBER 13, 2024</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">Categories</h3>
              <ul className="space-y-2.5 text-sm font-medium text-slate-600">
                <li className="flex justify-between items-center hover:text-[#ffb800] cursor-pointer"><span>Business</span> <ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="flex justify-between items-center hover:text-[#ffb800] cursor-pointer"><span>Finance</span> <ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="flex justify-between items-center hover:text-[#ffb800] cursor-pointer"><span>Tech</span> <ChevronRight className="w-3.5 h-3.5" /></li>
              </ul>
            </div>

            {/* Tag Cloud Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['BUSINESS', 'FINANCE', 'MARKETING', 'TAX', 'VENTURE'].map((tag) => (
                  <span key={tag} className="bg-slate-100 hover:bg-[#ffb800] hover:text-white transition-colors px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 cursor-pointer">
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
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between group">
                  <div>
                    {/* Featured Image with Date Badge */}
                    <div className="relative h-56 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-[#e6f4f1] text-[#112a2b] p-2.5 rounded-xl text-center shadow-lg border border-[#112a2b]/10">
                        <span className="block font-black text-base leading-none">{post.dateNum}</span>
                        <span className="block text-[10px] font-bold uppercase tracking-wider mt-0.5">{post.dateMonth}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-[#112a2b] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <a href="#read" className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#ffb800] transition-colors">
                      <span>Continue Reading</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffb800]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-8">
              <button 
                onClick={() => setActivePage(1)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${activePage === 1 ? 'bg-[#ffb800] text-slate-900 shadow-md' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
              >
                1
              </button>
              <button 
                onClick={() => setActivePage(2)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${activePage === 2 ? 'bg-[#ffb800] text-slate-900 shadow-md' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
              >
                2
              </button>
              <button 
                onClick={() => setActivePage(prev => Math.min(prev + 1, 2))}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Dark Green Footer */}
      <footer className="bg-[#112a2b] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          
          {/* Top Newsletter Bar */}
          <div className="bg-[#18383a] p-8 rounded-3xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 shadow-xl">
            <p className="text-sm text-slate-300 font-medium">
              Please sign up to follow the latest news and events from us, we promise not to spam your inbox.
            </p>
            {newsletterSubscribed ? (
              <p className="text-sm text-[#ffb800] font-bold">Successfully subscribed! Thank you.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center bg-[#112a2b] rounded-xl border border-white/20 p-1.5 w-full lg:w-auto">
                <input 
                  type="email" 
                  required
                  placeholder="Don't miss any latest update" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent px-4 py-2 text-xs text-white focus:outline-none w-full lg:w-80"
                />
                <button type="submit" className="bg-[#ffb800] hover:bg-[#e0a200] text-slate-900 p-2.5 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-wider text-white">
                  IN<span className="text-[#ffb800] bg-white px-1.5 py-0.5 rounded text-slate-900">V</span>DEX
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                We understand that business can be chaotic. That's where we come in. We're focused on adding some much-needed balance to the mix.
              </p>
              <h4 className="font-bold text-sm text-white pt-2">Company Location</h4>
              <p className="text-slate-300 text-xs">Office: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305</p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#fb" className="w-8 h-8 rounded-full bg-[#18383a] flex items-center justify-center hover:bg-[#ffb800] hover:text-slate-900 transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#ig" className="w-8 h-8 rounded-full bg-[#18383a] flex items-center justify-center hover:bg-[#ffb800] hover:text-slate-900 transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#tw" className="w-8 h-8 rounded-full bg-[#18383a] flex items-center justify-center hover:bg-[#ffb800] hover:text-slate-900 transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                <a href="#yt" className="w-8 h-8 rounded-full bg-[#18383a] flex items-center justify-center hover:bg-[#ffb800] hover:text-slate-900 transition-colors"><Mail className="w-3.5 h-3.5" /></a>
              </div>
            </div>

            {/* Col 2: Services Quick Links */}
            <div>
              <h4 className="font-bold text-white text-base mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#ffb800]">
                Services Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-300 font-medium">
                <li><a href="#trade" className="hover:text-[#ffb800] transition-colors">Trade & Investment ideas</a></li>
                <li><a href="#portfolio" className="hover:text-[#ffb800] transition-colors">Portfolio Management</a></li>
                <li><a href="#seo" className="hover:text-[#ffb800] transition-colors">Search Engine Optimization</a></li>
                <li><a href="#managed" className="hover:text-[#ffb800] transition-colors">Managed IT Services</a></li>
                <li><a href="#conversion" className="hover:text-[#ffb800] transition-colors">Conversion Optimization</a></li>
              </ul>
            </div>

            {/* Col 3: Contact Us Anytime */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white text-base mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#ffb800]">
                Contact Us Anytime
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ffb800] flex-shrink-0" />
                  <span>Office phn No: +1192 345 7801<br />Appointment: +1192 346 9987</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ffb800] flex-shrink-0" />
                  <span>service.invadexfin@email.com<br />invadexservices@email.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ffb800] flex-shrink-0" />
                  <span>Mon – Sat: 8.00am – 18.00pm<br />Holiday : Closed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>Copyright © 2025 <strong className="text-white">Invadex</strong>. All Rights Reserved.</div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-xl bg-[#18383a] hover:bg-[#ffb800] hover:text-slate-900 transition-colors flex items-center justify-center text-white"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}