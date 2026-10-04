import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="space-y-4 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF8C00] rounded-full text-xs font-bold mb-4">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
          #1 RATED MOVERS IN NAVI MUMBAI & MUMBAI
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] leading-[1.1] font-display">
          Safe & Reliable <span className="text-[#0B5ED7]">Packers & Movers</span> <br/> Across India
        </h2>
        <p className="text-lg text-slate-600 max-w-xl font-medium mt-4">
          Professional House Shifting, Office Relocation, Vehicle Transport & Logistics Services with Affordable Pricing.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 md:gap-8 py-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1F2937] font-display">10+</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Years Exp.</span>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1F2937] font-display">4.9/5</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">User Rating</span>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1F2937] font-display">24×7</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Live Support</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a 
            href="#booking"
            className="lg:hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#f47b00] hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/30"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="tel:+919930233748"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-[#0B5ED7] hover:text-[#0B5ED7] text-slate-700 font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a 
            href="https://wa.me/919930233748"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold px-8 py-3.5 rounded-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
