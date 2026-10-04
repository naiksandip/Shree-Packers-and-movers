import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does local shifting take?", a: "Local shifting within the city typically takes 4-8 hours depending on the volume of goods and distance." },
  { q: "Do you provide packing material?", a: "Yes, we provide high-quality packing materials including bubble wrap, carton boxes, corrugated sheets, and tapes to ensure the safety of your goods." },
  { q: "Can I transport my bike?", a: "Yes, we provide dedicated bike and car transportation services with safe loading, secure strapping, and scratch-free delivery." },
  { q: "Do you offer warehouse services?", a: "Yes, we offer secure storage and warehousing facilities for short-term and long-term needs." },
  { q: "Do you provide GST invoice?", a: "Yes, we provide proper GST invoices for all our commercial and residential shifting services." },
  { q: "Are there any hidden charges?", a: "No, we believe in transparent pricing. All charges are discussed and agreed upon before the shifting process begins." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#1F2937] mb-3 font-display">Frequently Asked Questions</h2>
          <p className="text-slate-600 font-medium">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg text-[#1F2937] pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
