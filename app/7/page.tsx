'use client'

import React, { useState, useEffect } from 'react';
import { 
    Phone, Mail, MapPin, ChevronDown, ArrowRight, Play, Star, 
    Shield, TrendingUp, Landmark, Users, Award, CheckCircle, 
     ArrowLeft, Menu, X, Quote, 
    Smartphone, Download, ExternalLink, Send
} from 'lucide-react';

export default function FinanoApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [quoteSubmitted, setQuoteSubmitted] = useState(false);
    const [quoteForm, setQuoteForm] = useState({ consult: '', phone: '', name: '' });

    // Testimonials data
    const testimonials = [
        {
            quote: "The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating",
            author: "Robert Froast",
            title: "Founder & CEO"
        },
        {
            quote: "Finano Consulting provided exceptional insights that completely transformed our fiscal strategy. Their team is extremely professional and delivers results on time.",
            author: "Sarah Jenkins",
            title: "Managing Director, Apex Group"
        }
    ];

    // Carousel items for Business Advisor / Plan
    const advisorSlides = [
        {
            title: "Business Advisor",
            desc: "The argument in favor of using filler text goes something like this consecute tur adipis elit sed eiusmod.",
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Business Planning & Growth",
            desc: "Comprehensive financial restructuring and milestone mapping to accelerate international market penetration.",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % advisorSlides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + advisorSlides.length) % advisorSlides.length);
    };

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        setQuoteSubmitted(true);
        setTimeout(() => setQuoteSubmitted(false), 5000);
        setQuoteForm({ consult: '', phone: '', name: '' });
    };

    return (
        <div className="bg-white text-slate-800 antialiased font-sans overflow-x-hidden">
            
            {/* Top Bar */}
            <div className="bg-[#0b1329] text-slate-300 text-xs py-2.5 px-4 md:px-12 border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@finance.com" className="hover:text-blue-400 transition flex items-center gap-1.5 font-medium">
                            <Mail className="w-3.5 h-3.5 text-blue-500" /> info@finance.com
                        </a>
                        <a href="tel:1234567890" className="hover:text-blue-400 transition flex items-center gap-1.5 font-medium">
                            <Phone className="w-3.5 h-3.5 text-blue-500" /> +1 234 567 890
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <a href="#" className="hover:text-white transition"><CheckCircle className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-white transition"><CheckCircle className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-white transition"><CheckCircle className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-white transition"><CheckCircle className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            {/* Main Header / Navigation */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10 shadow-lg">
                            F
                        </div>
                        <div>
                            <span className="font-bold text-xl tracking-tight text-slate-900 block leading-tight">FINANO</span>
                            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold block">Consulting</span>
                        </div>
                    </a>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
                        {['Home', 'Pages', 'Services', 'Portfolio', 'Blog', 'Shop', 'Contact'].map((item, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-1 hover:text-blue-600 transition">
                                {item} {item !== 'Contact' && <ChevronDown className="w-3.5 h-3.5" />}
                            </a>
                        ))}
                    </nav>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-700 hover:text-blue-600">
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-xl">
                        {['Home', 'Pages', 'Services', 'Portfolio', 'Blog', 'Shop', 'Contact'].map((item, idx) => (
                            <a key={idx} href="#" className="block text-slate-700 font-medium hover:text-blue-600">{item}</a>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 space-y-6">
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                            Our finance can give more possibilities of <span className="text-blue-400 italic font-serif">business</span>
                        </h1>
                        <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                            The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach
                        </p>
                        <div>
                            <a href="#quote" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition shadow-lg shadow-blue-600/30">
                                Let's start now <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3 Core Service Floating Cards */}
                <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Finance Management', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...', icon: <TrendingUp className="w-8 h-8 text-blue-500" /> },
                            { title: 'Banking Investigation', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...', icon: <Landmark className="w-8 h-8 text-blue-500" /> },
                            { title: 'Business Insurance', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...', icon: <Shield className="w-8 h-8 text-blue-500" /> }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 relative group hover:-translate-y-2 transition duration-300 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest block">About Us</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                            We are here to manage your finance with <span className="text-blue-600 italic font-serif">experience</span>
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><CheckCircle className="w-4 h-4 text-blue-600" /> Proesent feugiat sem mattis.</div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><CheckCircle className="w-4 h-4 text-blue-600" /> A wonderful serenity.</div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><CheckCircle className="w-4 h-4 text-blue-600" /> Premium services beyond you.</div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><CheckCircle className="w-4 h-4 text-blue-600" /> Set a link back to this photo.</div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium">Call to ask any question</span>
                                <div className="text-lg font-bold text-slate-900 flex items-center gap-4 mt-1">
                                    <span className="text-blue-600">540-325-1523</span> - <span>540-328-1265</span>
                                </div>
                            </div>
                            <div className="font-serif italic text-lg text-slate-700 font-bold">
                                Natalia Duke
                                <span className="block text-xs not-italic font-sans text-slate-400 font-normal">(Chairman and founder)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image + Stats */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-700" />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <button className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
                                    <Play className="w-6 h-6 fill-white ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* Stats counters */}
                        <div className="grid grid-cols-3 gap-4 text-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">1235</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Satisfied Clients</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">+1402</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Completed Works</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">35</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Winning Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Carousel Section (Business Advisor / Plan) */}
            <section className="py-24 bg-[#0b1329] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest block mb-2">Our Expertise</span>
                        <h2 className="text-3xl sm:text-4xl font-bold">Guiding Your Corporate Vision</h2>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {advisorSlides.map((slide, idx) => (
                        <div key={idx} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-blue-500 transition duration-300">
                            <div className="h-64 overflow-hidden">
                                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-bold">{slide.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{slide.desc}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:underline">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                    <div className="bg-blue-600 rounded-2xl p-8 flex flex-col justify-between text-white">
                        <Quote className="w-12 h-12 text-blue-300 opacity-50" />
                        <p className="font-serif italic text-lg leading-relaxed">
                            "Finano Consulting helped us secure multi-million dollar investments with unmatched professional rigour and precision."
                        </p>
                        <div>
                            <h4 className="font-bold text-lg">Jonathan Sterling</h4>
                            <span className="text-xs text-blue-200 uppercase tracking-wider">CFO, Global Ventures</span>
                        </div>
                    </div>
                </div>

                {/* Testimonial Quote Slider */}
                <div className="max-w-4xl mx-auto px-4 text-center mt-20 pt-16 border-t border-slate-800">
                    <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-80" />
                    <p className="font-serif italic text-xl sm:text-2xl text-slate-200 leading-relaxed mb-6">
                        "{testimonials[testimonialIndex].quote}"
                    </p>
                    <h4 className="font-bold text-lg text-white">{testimonials[testimonialIndex].author}</h4>
                    <p className="text-xs text-blue-400 uppercase tracking-wider mt-1">{testimonials[testimonialIndex].title}</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest block mb-2">Services</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Most prominent side is our devoted <span className="text-blue-600 italic font-serif">services</span></h2>
                    <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-16">
                        The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Finance Management', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600' },
                            { title: 'Banking Investigation', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600' },
                            { title: 'Business Insurance', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600' }
                        ].map((srv, idx) => (
                            <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                                <div className="h-60 overflow-hidden">
                                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                                    <a href="#" className="text-blue-600 text-xs font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                                        Explore Service <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between mb-16">
                    <div>
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest block mb-2">Case Studies</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Strategies are imperative<br />to the <span className="text-blue-600 italic font-serif">success brand</span></h2>
                    </div>
                    <p className="text-slate-600 text-sm max-w-md mt-4 lg:mt-0">
                        The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Convention consulting Parliament on military action', category: 'Investing', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500' },
                        { title: 'Duis aute irure dolor reprehenderit in voluptate', category: 'Environment', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500' },
                        { title: 'Dolore eud fugiat nulla pariatur proven excepteur', category: 'Business Growth', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500' }
                    ].map((cs, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                            <div className="h-64 overflow-hidden">
                                <img src={cs.img} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6 space-y-3">
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{cs.category}</span>
                                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition">{cs.title}</h3>
                                <p className="text-slate-500 text-xs">This case study helps students understand the process of setting, reporting and eva uating...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Member Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest block mb-2">Team Member</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our team is very <span className="text-blue-600 italic font-serif">expert to help</span></h2>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto mb-16">
                        The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Aaron Ramsey', role: 'Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500' },
                            { name: 'Amber Lee', role: 'Co-founder', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500' },
                            { name: 'John Legend', role: 'Co-founder', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500' }
                        ].map((member, idx) => (
                            <div key={idx} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                                <div className="h-80 overflow-hidden">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                    <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download Banner */}
            <section className="relative py-24 bg-slate-950 text-white overflow-hidden text-center">
                <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Have a great opportunity to manage your <span className="text-blue-400 italic font-serif">finance</span></h2>
                    <div className="flex justify-center gap-4 pt-4">
                        <button className="bg-black border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-3 transition">
                            <Smartphone className="w-6 h-6 text-blue-400" />
                            <div className="text-left">
                                <span className="text-[10px] uppercase block text-slate-400">Available on the</span>
                                <span className="font-bold text-sm">App Store</span>
                            </div>
                        </button>
                        <button className="bg-black border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-3 transition">
                            <Download className="w-6 h-6 text-blue-400" />
                            <div className="text-left">
                                <span className="text-[10px] uppercase block text-slate-400">Download on the</span>
                                <span className="font-bold text-sm">Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Client Logo Ticker */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
                    {['Finance strategy and planning', 'CAPITAL', 'Accession', 'dynamic', 'Status Group', 'copixel'].map((logo, idx) => (
                        <div key={idx} className="font-bold text-lg text-slate-700 tracking-wider text-center p-4 border border-slate-100 rounded-xl">
                            {logo}
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest Blog Section */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest block mb-2">Latest Blog</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Learn some new info from our latest <span className="text-blue-600 italic font-serif">news</span></h2>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto mb-16">
                        The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { date: 'October 18, 2018', title: 'Main reasons to explana fast business builder', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500' },
                            { date: 'August 18, 2018', title: 'Blackpool polices hunt for David Schwimmer', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500' },
                            { date: 'July 18, 2018', title: 'Strategy for Norway\'s Pesion Fund Global', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500' }
                        ].map((blog, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                                <div className="h-56 overflow-hidden">
                                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-6 space-y-3">
                                    <span className="text-blue-600 text-xs font-semibold">{blog.date}</span>
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition">{blog.title}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">The man, who is in a stable condition in hospital, has potentially life-changing injuries after the overnight attack...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request a Quote & Map Section */}
            <section id="quote" className="relative bg-[#0b1329] text-white py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest block">Request for quote</span>
                        <h2 className="text-3xl sm:text-4xl font-bold">Let's build your fiscal future together.</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The argument in favor of using filler text goes something like this: If you use real content in the design process.
                        </p>
                        
                        <form onSubmit={handleQuoteSubmit} className="space-y-4 bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">I would like to consult:</label>
                                <input type="text" required value={quoteForm.consult} onChange={(e)=>setQuoteForm({...quoteForm, consult: e.target.value})} placeholder="How to assist you?" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Phone</label>
                                    <input type="tel" required value={quoteForm.phone} onChange={(e)=>setQuoteForm({...quoteForm, phone: e.target.value})} placeholder="Phone number" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Name</label>
                                    <input type="text" required value={quoteForm.name} onChange={(e)=>setQuoteForm({...quoteForm, name: e.target.value})} placeholder="Your name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Submit Request
                            </button>
                            {quoteSubmitted && (
                                <div className="p-3 bg-emerald-950 text-emerald-400 text-center rounded-xl text-xs font-medium">
                                    Thank you! Your quote request has been submitted.
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="lg:col-span-6 h-[480px] rounded-2xl overflow-hidden border border-slate-800 relative">
                        <iframe 
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81720974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ddef35f4ea6!2sFlinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1625681928374!5m2!1sen!2sus" 
                            className="w-full h-full border-0" 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#070c1b] text-slate-400 pt-16 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10 shadow">
                                F
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight text-white block leading-tight">FINANO</span>
                                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold block">Consulting</span>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <div className="space-y-2 text-xs">
                            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-blue-500" /> +1 (234) 4567 890</p>
                            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-blue-500" /> info@finance.com</p>
                            <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-500" /> 380 St Kilda Road, Melbourne VIC</p>
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">LINKS</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; Services</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; Testimonial</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; News</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">&gt; Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">SUPPORT</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Submit a Ticket</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Visit Knowledge Base</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Support System</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Professional Services</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-base border-b border-slate-800 pb-2">GALLERY</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {[1,2,3,4,5,6].map((imgNum) => (
                                <img key={imgNum} src={`https://images.unsplash.com/photo-${1500000000000 + imgNum * 12345}?auto=format&fit=crop&q=80&w=150`} alt="Gallery" className="w-full h-16 object-cover rounded-lg border border-slate-800 hover:opacity-75 transition" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© 2026 All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <CheckCircle className="w-4 h-4 hover:text-white cursor-pointer" />
                        <CheckCircle className="w-4 h-4 hover:text-white cursor-pointer" />
                        <CheckCircle className="w-4 h-4 hover:text-white cursor-pointer" />
                        <CheckCircle className="w-4 h-4 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
}