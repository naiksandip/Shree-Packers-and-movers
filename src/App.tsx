/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactFooter } from './components/ContactFooter';
import { FloatingButtons } from './components/FloatingButtons';
import { Menu, X, Truck } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Header Navigation */}
      <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white border-b border-slate-200 z-50 shrink-0">
        <div className="flex items-center gap-2">
          <img src="/Icon.png" alt="Shree Packers Logo" className="w-10 h-10 object-contain rounded-lg bg-white" />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#1F2937]">SHREE <span className="text-[#FF8C00]">PACKERS</span></h1>
            <p className="text-[10px] uppercase font-semibold text-[#0B5ED7] tracking-[0.2em] -mt-1 hidden sm:block">Safe & Secure Logistics</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#0B5ED7] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919930233748" className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            +91 9930233748
          </a>
          <button className="px-5 py-2 bg-[#0B5ED7] text-white rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all hidden md:block">
            Call Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 h-screen">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-[#1F2937] hover:text-[#0B5ED7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#0B5ED7] text-white py-4 rounded-xl font-bold text-center mt-4"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Content Panel */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-br from-white to-blue-50">
          <div className="flex flex-col gap-8 lg:gap-12 pb-20">
            <Hero />
            <About />
            <Services />
            <Pricing />
            <div className="lg:hidden">
              <BookingForm />
            </div>
            <Testimonials />
            <FAQ />
            <ContactFooter />
          </div>
        </div>

        {/* Right Sidebar: Quote Form */}
        <div className="hidden lg:flex w-[400px] xl:w-[450px] bg-[#1F2937] flex-col overflow-y-auto relative shrink-0">
          <div className="p-6">
            <BookingForm />
          </div>
        </div>
      </main>

      <footer className="h-12 bg-[#111827] hidden md:flex items-center justify-between px-8 shrink-0 text-slate-500 text-[11px] uppercase tracking-widest">
        <div className="flex gap-6">
          <span>Local Shifting</span>
          <span>Intercity</span>
          <span>Warehousing</span>
          <span>Transit Insurance</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>© {new Date().getFullYear()} Shree Packers & Movers</span>
          <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
          <span>Navi Mumbai, India</span>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
}

