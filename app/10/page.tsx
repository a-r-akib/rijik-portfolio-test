'use client'

import React, { useState } from 'react';
import { 
    Phone, Mail, MapPin, Clock,
    ChevronDown, ArrowRight, Play, CheckCircle, Star, Quote, ChevronLeft, ChevronRight,
    HelpCircle, CheckSquare, Search, Menu, X, ArrowUp
} from 'lucide-react';

export default function MindSetApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            text: "This is due to their excellent service, competitive pricing and customer support. It's throughly refresing to get such a personal touch.",
            author: "Kevin Martin",
            role: "CEO & FOUNDER"
        },
        {
            text: "The guidance and patience shown by the counseling team helped me overcome my anxiety and find clarity in my career.",
            author: "Sarah Jenkins",
            role: "CLIENT"
        },
        {
            text: "Family therapy sessions completely transformed our home dynamic. Truly grateful for the professional and compassionate approach.",
            author: "David & Emily Ross",
            role: "CLIENTS"
        }
    ];

    return (
        <div className="bg-white text-slate-800 antialiased font-sans selection:bg-[#C5A880] selection:text-white">
            
            {/* Top Bar */}
            <div className="bg-[#121820] text-slate-300 text-xs py-2.5 px-4 md:px-12 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> H2, Angelsgarden, North California, US
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> Mon – Fri: 09:00 – 17:00
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-[#C5A880] transition"><CheckSquare className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#C5A880] transition"><CheckSquare className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#C5A880] transition" title="Pinterest">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.271-.399.165-1.493-.695-2.425-2.875-2.425-4.625 0-3.769 2.738-7.234 7.892-7.234 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.209 0-2.345-.628-2.735-1.369l-.746 2.845c-.27 1.04-1.002 2.342-1.493 3.146C10.057 23.86 11.009 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="#" className="hover:text-[#C5A880] transition"><CheckSquare className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            {/* Sticky Header & Navigation */}
            <header className="sticky top-0 z-50 bg-[#1A222C] text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20">
                    
                    {/* Brand Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <div className="bg-[#C5A880] text-slate-900 p-2 rounded-xl font-bold text-xl flex items-center justify-center w-10 h-10 shadow">
                            M
                        </div>
                        <div>
                            <span className="font-serif text-2xl font-bold tracking-tight block leading-none">Mind-Set</span>
                            <span className="text-[9px] uppercase tracking-widest text-[#C5A880]">Psychology into Counseling</span>
                        </div>
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider uppercase">
                        {['Home', 'Pages', 'Services', 'Blog', 'Shop'].map((item, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-1.5 py-4 text-slate-200 hover:text-[#C5A880] transition">
                                <span>{item}</span>
                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                            </a>
                        ))}
                    </nav>

                    {/* Appointments Button */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hidden sm:inline-flex items-center bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 font-bold px-6 py-3 rounded text-xs uppercase tracking-widest transition shadow-lg">
                            Appointments
                        </a>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-[#121820] border-t border-neutral-800 px-6 py-6 space-y-4">
                        {['Home', 'Pages', 'Services', 'Blog', 'Shop'].map((item, idx) => (
                            <a key={idx} href="#" className="block text-sm font-bold text-slate-300 hover:text-[#C5A880]">
                                {item}
                            </a>
                        ))}
                        <a href="#" className="block text-center bg-[#C5A880] text-slate-950 py-3 rounded text-xs font-bold uppercase">
                            Appointments
                        </a>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden text-center">
                <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
                    <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
                        About Us
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-bold">
                        <a href="#" className="hover:text-white">Home</a>
                        <span>-</span>
                        <span className="text-[#C5A880]">About</span>
                    </div>
                </div>
            </section>

            {/* Stats Row */}
            <section className="bg-[#FAF8F5] py-12 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "100", label: "CERTIFICATES & AWARDS", icon: <CheckCircle className="w-6 h-6 text-[#C5A880]" /> },
                        { num: "48K", label: "SOLVE ISSUES", icon: <HelpCircle className="w-6 h-6 text-[#C5A880]" /> },
                        { num: "62K", label: "FAMILY PSYCHOLOGY", icon: <CheckSquare className="w-6 h-6 text-[#C5A880]" /> },
                        { num: "977K", label: "HAPPY CUSTOMERS", icon: <Star className="w-6 h-6 text-[#C5A880]" /> }
                    ].map((stat, idx) => (
                        <div key={idx} className="space-y-2 p-4 flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 flex items-center justify-center mb-2">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">{stat.num}</h3>
                            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Us Detailed Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Counseling session" className="w-full h-[450px] object-cover" />
                    </div>
                    {/* Video Play Overlay Box */}
                    <div className="absolute -bottom-10 right-4 sm:right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-slate-100">
                        <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200" alt="Video preview" className="w-full h-full object-cover" />
                            <button className="absolute inset-0 bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition">
                                <Play className="w-6 h-6 fill-white" />
                            </button>
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-sm text-slate-900">Dalian Machen</h4>
                            <span className="text-[10px] uppercase text-[#C5A880] font-bold">CEO, Sycho</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block">ABOUT US</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
                        We Have Over 30 Years of Psychological
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        At the Good Samaritan Society, you aren't just a costomer. We believe you're someone who deserves to be treated with respect, dignity and compassion.
                    </p>

                    {/* Bullet Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {['Personal Meeting', 'Family Counseling', 'Anxiety Disorder', 'Dating & Relation'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                                <span className="font-bold text-xs sm:text-sm text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <a href="#" className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 font-bold px-8 py-4 rounded text-xs uppercase tracking-widest transition shadow-lg">
                            Read More <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Psychological Services Section */}
            <section className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-16 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">WELCOME TO COUNSELLING</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">Psychological Services</h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Stress Management", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600", desc: "Everyone feels low from time to time, so it's..." },
                        { title: "Couple Counselling", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600", desc: "Everyone feels low from time to time, so it's..." },
                        { title: "Depression Treatment", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", desc: "Everyone feels low from time to time, so it's..." }
                    ].map((srv, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl text-center space-y-6 border border-slate-100 group hover:-translate-y-2 transition duration-300">
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto shadow-md border-4 border-[#C5A880]/20">
                                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-xl font-bold text-slate-900">{srv.title}</h3>
                                <p className="text-slate-500 text-xs sm:text-sm">{srv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block mb-2">Why Choose Us</span>
                        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
                            We are always Ready<br />for every challenge.
                        </h2>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 font-bold px-8 py-4 rounded text-xs uppercase tracking-widest transition shadow-lg shrink-0">
                        Contact Us
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Quality & Cheap Price", desc: "We assure our customers that our company has a very much reasonable price, keeping to customers is our." },
                        { title: "Professional Team", desc: "We assure our customers that our company has a very much reasonable price, keeping to customers is our." },
                        { title: "Year's Experience", desc: "We assure our customers that our company has a very much reasonable price, keeping to customers is our." },
                        { title: "24/7 Support Team", desc: "We assure our customers that our company has a very much reasonable price, keeping to customers is our." }
                    ].map((card, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-md hover:border-[#C5A880] transition space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center font-bold">
                                {idx + 1}
                            </div>
                            <h3 className="font-serif text-lg font-bold text-slate-900">{card.title}</h3>
                            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Case Section */}
            <section className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-end mb-16">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold block mb-2">Our Case</span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Checkout Our Successfully<br />Completed Cases</h2>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-[#C5A880] hover:text-white transition shadow">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-[#C5A880] hover:text-white transition shadow">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
                        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=500",
                        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
                    ].map((img, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden shadow-lg group relative">
                            <img src={img} alt="Case study" className="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                                <span className="text-white font-serif font-bold text-lg">Case Study #{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-16 space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">CLIENT'S REVIEW</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">Testimonials</h2>
                </div>

                <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-[#C5A880] shadow-md">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Kevin Martin" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-serif text-lg sm:text-2xl text-slate-800 italic leading-relaxed">
                        "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                        <h4 className="font-serif text-xl font-bold text-slate-900">{testimonials[activeTestimonial].author}</h4>
                        <span className="text-xs text-slate-400 uppercase tracking-widest block mt-1">{testimonials[activeTestimonial].role}</span>
                    </div>

                    <div className="flex justify-center gap-2 pt-4">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => setActiveTestimonial(idx)}
                                className={`w-3 h-3 rounded-full transition ${activeTestimonial === idx ? 'bg-[#C5A880] w-6' : 'bg-slate-300'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer with Two Interactive CTA Banners */}
            <footer className="bg-[#121820] text-slate-400 pt-20 border-t border-neutral-800 relative">
                
                {/* Two Interactive CTA Banners */}
                <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-36 mb-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#1A222C] border border-neutral-800 p-8 rounded-3xl shadow-2xl flex items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h4 className="font-serif text-xl font-bold text-white">Have a Doubt We Can Help</h4>
                            <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#C5A880] hover:underline flex items-center gap-1.5">
                                BOOK FOR CONSULTAION <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="bg-[#1A222C] border border-neutral-800 p-8 rounded-3xl shadow-2xl flex items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h4 className="font-serif text-xl font-bold text-white">Do You Deserve it Check Now</h4>
                            <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#C5A880] hover:underline flex items-center gap-1.5">
                                CHECK ELIGIBILITY <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                            <CheckSquare className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#C5A880] text-slate-900 p-2 rounded-xl font-bold text-xl flex items-center justify-center w-10 h-10 shadow">
                                M
                            </div>
                            <div>
                                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">Mind-Set</span>
                                <span className="text-[9px] uppercase tracking-widest text-[#C5A880]">Psychology into Counseling</span>
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed">
                            We are an independent practice providing a range of specialist clinical, educational and forensic psychology services.
                        </p>
                        <div className="flex items-center gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                            <div className="w-8 h-8 rounded bg-[#C5A880] text-slate-950 flex items-center justify-center font-bold">
                                <CheckSquare className="w-4 h-4" />
                            </div>
                            <div>
                                <h5 className="font-bold text-white text-xs">Mark Richarson</h5>
                                <span className="text-[10px] text-[#C5A880]">@admin</span>
                            </div>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase">Our Services</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Evaluation</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Migrate</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Study</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Counselling</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Online Payment</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase">Useful Links</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; USA Immigration</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Australia Immigration</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Visit Visa</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Dependent Visa</a></li>
                            <li><a href="#" className="hover:text-[#C5A880] transition">&gt;&gt; Visa Consultants</a></li>
                        </ul>
                    </div>

                    {/* Trending Post */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase">Trending Post</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=100" alt="Post" className="w-12 h-12 rounded object-cover" />
                                <div>
                                    <h5 className="text-xs font-bold text-white hover:text-[#C5A880] transition cursor-pointer">Maybe you should talk to someone</h5>
                                    <span className="text-[10px] text-neutral-500">23 Feb, 2022</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Post" className="w-12 h-12 rounded object-cover" />
                                <div>
                                    <h5 className="text-xs font-bold text-white hover:text-[#C5A880] transition cursor-pointer">The Most Fascinating Experience To..</h5>
                                    <span className="text-[10px] text-neutral-500">21 Feb, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <p>© 2026 MINDSET. All rights reserved by <span className="text-white">CASETHEMES</span></p>
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-10 h-10 rounded bg-neutral-900 hover:bg-[#C5A880] hover:text-slate-950 transition flex items-center justify-center text-slate-300">
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </footer>
        </div>
    );
}