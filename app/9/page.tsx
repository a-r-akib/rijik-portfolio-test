'use client'

import React, { useState } from 'react';
import { 
    Phone, Mail, MapPin, ChevronDown, ArrowRight, Play, Star, 
    Shield, TrendingUp, Landmark, Users, Award, CheckCircle,  ArrowLeft, Menu, X, 
    Search, ArrowUp, Send, Download, Clock, Wrench, Building2, 
    HardHat, Quote, ChevronLeft, ChevronRight, Compass
} from 'lucide-react';

export default function ContioApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Pages');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Adam Chuhan",
            role: "Sasha D Johnson",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            text: "Lorem ipsum available, but the majority have to sufferrer tobe alterati on in som. It is a long to be established."
        },
        {
            name: "Debra L Smith",
            role: "Web designer",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
            text: "Lorem ipsum available, but the majority have to sufferrer tobe alterati on in som. It is a long to be established."
        },
        {
            name: "Michael Chang",
            role: "Project Manager",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            text: "Lorem ipsum available, but the majority have to sufferrer tobe alterati on in som. It is a long to be established."
        }
    ];

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setNewsletterSubscribed(true);
        setTimeout(() => setNewsletterSubscribed(false), 5000);
        setNewsletterEmail('');
    };

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-white text-slate-800 antialiased font-sans selection:bg-[#FF6600] selection:text-white">
            
            {/* Top Bar */}
            <div className="bg-[#1a1a1a] text-slate-300 text-xs py-2.5 px-4 md:px-12 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-neutral-400">
                            <Clock className="w-3.5 h-3.5 text-[#FF6600]" /> Time : Monday - Friday (10am - 6pm)
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-400">
                        <a href="#" className="hover:text-[#FF6600] transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#FF6600] transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#FF6600] transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-[#FF6600] transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            {/* Secondary Header Details & Logo */}
            <div className="bg-white py-4 px-4 md:px-12 border-b border-slate-100 hidden lg:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3">
                        <div className="bg-[#FF6600] text-white p-2 rounded font-black text-2xl flex items-center justify-center w-12 h-12 shadow-lg">
                            C
                        </div>
                        <span className="font-extrabold text-3xl tracking-tight text-neutral-900 font-serif">contio</span>
                    </a>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] uppercase text-slate-500 font-bold block">Call Us: (210) 123-451</span>
                                <span className="text-xs font-bold text-neutral-900 tracking-wider">(Sat - Thursday)</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] uppercase text-slate-500 font-bold block">380 St Kilda Road,</span>
                                <span className="text-xs font-bold text-neutral-900 tracking-wider">Melbourne, Australia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#121212] text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20">
                    
                    {/* Mobile Logo */}
                    <a href="#" className="flex items-center gap-3 lg:hidden">
                        <div className="bg-[#FF6600] text-white p-1.5 rounded font-black text-xl flex items-center justify-center w-9 h-9">
                            C
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight text-white font-serif">contio</span>
                    </a>

                    {/* Navigation Items */}
                    <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
                        {[
                            { label: 'Home' },
                            { label: 'Services' },
                            { label: 'Pages' },
                            { label: 'Portfolio' },
                            { label: 'Blog' },
                            { label: 'Shop' }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href="#" 
                                onClick={() => setActiveNav(item.label)}
                                className={`flex items-center gap-1.5 py-4 transition ${activeNav === item.label ? 'text-[#FF6600]' : 'text-neutral-300 hover:text-[#FF6600]'}`}
                            >
                                <span>{item.label}</span>
                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                            </a>
                        ))}
                    </nav>

                    {/* Right Action Icons & Quote Button */}
                    <div className="flex items-center gap-5">
                        <button className="text-neutral-300 hover:text-[#FF6600] transition">
                            <Search className="w-4 h-4" />
                        </button>
                        <button className="text-neutral-300 hover:text-[#FF6600] transition relative">
                            <Building2 className="w-4 h-4" />
                            <span className="absolute -top-1.5 -right-1.5 bg-[#FF6600] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                        </button>

                        <a href="#" className="hidden sm:inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#e05a00] text-white font-black px-6 py-3.5 rounded text-xs uppercase tracking-widest transition shadow-lg">
                            Get a quote
                        </a>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-6 space-y-4">
                        {['Home', 'Services', 'Pages', 'Portfolio', 'Blog', 'Shop'].map((item, idx) => (
                            <a key={idx} href="#" className="block text-sm font-bold text-neutral-300 hover:text-[#FF6600]">
                                {item}
                            </a>
                        ))}
                        <a href="#" className="block text-center bg-[#FF6600] text-white py-3 rounded text-xs font-bold uppercase">
                            Get a Quote
                        </a>
                    </div>
                )}
            </header>

            {/* Hero Banner with Big "About us" & Background Image */}
            <section className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden border-b border-neutral-900 text-center">
                <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18f8f96?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-4">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider text-white uppercase font-serif">
                        About us
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-bold">
                        <a href="#" className="hover:text-white">Home</a>
                        <span>-</span>
                        <span className="text-[#FF6600]">About</span>
                    </div>
                </div>
            </section>

            {/* Main "We will satisfy you by our work ideas" Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FF6600] font-bold">About us</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight font-serif leading-tight">
                        We will satisfy you by our work ideas
                    </h2>
                    <p className="text-neutral-600 text-sm leading-relaxed italic">
                        At vero eos et accusamus et iusto odio digni goikussimos ducimus qui to bonfoeblanditiis praese. Ntium voluum deleniti.
                    </p>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                        Tpage a reload when looking at its layout. The point of using Lorem Ipsum is that it has pi motivere-or-less normal distribution of letters, as opposed.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-neutral-900 text-sm">Time manage</h4>
                                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">Lorem Ipsum available, but the majority have suffered alterati.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#FF6600]/10 text-[#FF6600] flex items-center justify-center shrink-0">
                                <Compass className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-neutral-900 text-sm">Fullfill target</h4>
                                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">Lorem Ipsum available, but the majority have suffered alterati.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image with Gold Border Frame & Founder Signature */}
                <div className="lg:col-span-6 flex flex-col items-center">
                    <div className="relative p-4 border-2 border-[#FF6600] rounded-2xl shadow-2xl max-w-md w-full bg-slate-900">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Hanley Robin" className="w-full h-[420px] object-cover rounded-xl" />
                    </div>
                    <div className="mt-6 text-center space-y-1">
                        <div className="font-serif italic font-bold text-2xl text-neutral-800 tracking-wider">Hanley Robin</div>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block">(Chairman and founder)</span>
                    </div>
                </div>
            </section>

            {/* Download Brochure Banner */}
            <section className="bg-neutral-950 py-12 border-y border-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                        <h3 className="font-serif text-2xl font-bold">Want to know more about us?</h3>
                        <p className="text-xs text-neutral-400">Just download brochure...</p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-neutral-950 font-black px-8 py-4 rounded text-xs uppercase tracking-wider transition shadow-xl">
                        <Download className="w-4 h-4 text-[#FF6600]" /> Download Brochure
                    </a>
                </div>
            </section>

            {/* "We have areas of service" Grid Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FF6600] font-bold">Services</span>
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">We have areas of service</h2>
                    <p className="text-neutral-500 text-xs sm:text-sm">At vero eos et accusamus et iusto odio digni goikussimos ducimus qui blanditiis praese. Ntium voluum deleniti atque corrupti quos.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Surface Demolition", icon: <Wrench className="w-6 h-6" /> },
                        { title: "Laminate Flooring", icon: <Building2 className="w-6 h-6" /> },
                        { title: "House Renovation", icon: <HardHat className="w-6 h-6" /> },
                        { title: "General Contracting", icon: <Compass className="w-6 h-6" /> }
                    ].map((srv, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-[#FF6600] hover:shadow-xl transition duration-300 group flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-2xl bg-white text-[#FF6600] flex items-center justify-center shadow-md shrink-0 group-hover:bg-[#FF6600] group-hover:text-white transition">
                                {srv.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-serif text-xl font-bold text-neutral-900">{srv.title}</h3>
                                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                                    Lorem ipsum available, but the majority have to suffered alterati on in som. It is a long to be hoy established fact that a reader.
                                </p>
                                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6600] hover:underline pt-2">
                                    Read more <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#e05a00] text-white font-black px-8 py-4 rounded text-xs uppercase tracking-wider transition shadow-lg">
                        More services
                    </a>
                </div>
            </section>

            {/* Interactive Timeline Section ("Constrio is a professional builder company") */}
            <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18f8f96?auto=format&fit=crop&q=80&w=1600')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 mb-16 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FF6600] font-bold">Company history</span>
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">Constrio is a professional builder company</h2>
                    <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">At vero eos et accusamus et iusto odio digni goikussimos ducimus qui blanditiis praese. Ntium voluum deleniti atque corrupti quos.</p>
                </div>

                {/* Timeline Center Node & Events */}
                <div className="max-w-5xl mx-auto relative px-4">
                    {/* Center Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2 hidden sm:block"></div>

                    <div className="space-y-12 relative">
                        {/* Start Marker */}
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 rounded-full bg-[#FF6600] text-white font-black text-sm flex items-center justify-center shadow-2xl tracking-widest uppercase border-4 border-neutral-900 z-10 animate-pulse">
                                Start
                            </div>
                        </div>

                        {[
                            { date: "2nd Feb, 2018", title: "Exhibition Planning & Exhibition Management", side: "left" },
                            { date: "12th Jan, 2018", title: "Establishment of Constrio", side: "right" },
                            { date: "8th Jul, 2018", title: "Registered as a construction company", side: "right" },
                            { date: "21st Jul, 2018", title: "Growth internationallyfirst half of the 2018s", side: "left" },
                            { date: "18th Aug, 2018", title: "Construction bought the Greek company Delta", side: "right" },
                            { date: "19th Aug, 2018", title: "The purpose of the business plan", side: "left" },
                            { date: "27th Sep, 2018", title: "For lean business plans, operational plans, and strategic plans", side: "right" },
                            { date: "2nd Jan, 2019", title: "Focus business history on what matters to planning", side: "left" },
                            { date: "8th Jul, 2019", title: "Award winner", side: "right" },
                            { date: "22nd Sep, 2019", title: "History to Unite and Inspire People", side: "left" }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col sm:flex-row items-center justify-between gap-6 ${item.side === 'left' ? 'sm:flex-row-reverse' : ''}`}>
                                <div className="sm:w-1/2 w-full text-center sm:text-left px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl hover:border-[#FF6600] transition">
                                    <span className="text-[#FF6600] text-xs font-bold uppercase tracking-wider block mb-1">{item.date}</span>
                                    <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-[#FF6600] border-4 border-neutral-950 shrink-0 hidden sm:block z-10 shadow"></div>
                                <div className="sm:w-1/2 w-full hidden sm:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-16 space-y-3">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                        <span className="text-xs uppercase tracking-widest text-[#FF6600] font-bold">Testimonials</span>
                        <div className="w-8 h-1 bg-[#FF6600] rounded-sm"></div>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">We will satisfy you by our work ideas</h2>
                    <p className="text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto">At vero eos et accusamus et iusto odio digni goikussimos ducimus qui blanditiis praese. Ntium voluum deleniti atque corrupti quos.</p>
                </div>

                <div className="max-w-4xl mx-auto px-4 relative">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl text-center relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center shadow-lg">
                            <Quote className="w-6 h-6 fill-white" />
                        </div>
                        
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-[#FF6600] shadow-md mt-4">
                            <img src={testimonials[activeTestimonial].img} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                        </div>

                        <p className="font-serif text-lg sm:text-xl text-neutral-800 italic leading-relaxed max-w-2xl mx-auto mb-6">
                            "{testimonials[activeTestimonial].text}"
                        </p>

                        <h4 className="font-serif text-xl font-bold text-neutral-900">{testimonials[activeTestimonial].name}</h4>
                        <span className="text-xs text-neutral-500 uppercase tracking-widest block mt-1">{testimonials[activeTestimonial].role}</span>

                        {/* Arrows */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white border border-slate-300 text-neutral-800 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition flex items-center justify-center shadow">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white border border-slate-300 text-neutral-800 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition flex items-center justify-center shadow">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dark Footer with Newsletter Signup */}
            <footer className="bg-neutral-950 text-neutral-400 pt-20 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#FF6600] text-white p-2 rounded font-black text-2xl flex items-center justify-center w-10 h-10 shadow">
                                C
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight text-white font-serif">contio</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" /> 30 Commercial Road<br />Fratton, Australia</p>
                            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#FF6600] shrink-0" /> 1-888-452-1505</p>
                        </div>
                        <div>
                            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Open Hours:</h5>
                            <p className="text-xs">Mon – Sat: 8 am – 5 pm,<br />Sunday: CLOSED</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-5 grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">Links</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Home</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Services</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; About us</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Testimonials</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; News</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">&nbsp;</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Team</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; FAQ</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Gallery</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Contact</a></li>
                                <li><a href="#" className="hover:text-[#FF6600] transition">&gt; Portfolio</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">Newsletter</h4>
                        <p className="text-xs text-neutral-400">Send us a newsletter to get update</p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    required 
                                    value={newsletterEmail} 
                                    onChange={(e)=>setNewsletterEmail(e.target.value)} 
                                    placeholder="Your mail address" 
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF6600]" 
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF6600] text-white p-2 rounded hover:bg-[#e05a00] transition">
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            {newsletterSubscribed && (
                                <p className="text-[10px] text-emerald-400 font-medium">Successfully subscribed!</p>
                            )}
                        </form>
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="w-8 h-8 rounded bg-neutral-900 hover:bg-[#FF6600] hover:text-white text-neutral-300 flex items-center justify-center transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                            <a href="#" className="w-8 h-8 rounded bg-neutral-900 hover:bg-[#FF6600] hover:text-white text-neutral-300 flex items-center justify-center transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                            <a href="#" className="w-8 h-8 rounded bg-neutral-900 hover:bg-[#FF6600] hover:text-white text-neutral-300 flex items-center justify-center transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                            <a href="#" className="w-8 h-8 rounded bg-neutral-900 hover:bg-[#FF6600] hover:text-white text-neutral-300 flex items-center justify-center transition"><ArrowLeft className="w-3.5 h-3.5" /></a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <p>2026 © All rights reserved by <span className="text-white">CaseThemes</span></p>
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-10 h-10 rounded bg-neutral-900 hover:bg-[#FF6600] hover:text-white transition flex items-center justify-center text-neutral-300">
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </footer>
        </div>
    );
}
