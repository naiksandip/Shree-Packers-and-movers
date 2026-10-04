import { motion } from "motion/react";
import { Check } from "lucide-react";

const pricingList = [
  { type: "1 RK", price: "₹2499" },
  { type: "1 BHK", price: "₹3299" },
  { type: "2 BHK", price: "₹4999" },
  { type: "3 BHK", price: "₹7999" },
  { type: "4 BHK", price: "₹10499" },
  { type: "Villa", price: "Custom Quote" },
  { type: "Bike Transport", price: "Location Based" },
];

const extraServices = [
  { name: "Packing Material", price: "₹500" },
  { name: "Bubble Wrapping", price: "₹800" },
  { name: "Professional Packing", price: "₹1200" },
  { name: "Rope Pulling", price: "Extra" },
  { name: "Washing Machine Install", price: "Extra" },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-black text-[#1F2937] mb-3 font-display">Transparent Pricing</h2>
          <p className="text-slate-600 font-medium">Affordable shifting rates with absolutely no hidden charges.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Main Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0B5ED7] mb-6 border-b pb-4">Standard Shifting Rates</h3>
            <div className="space-y-4">
              {pricingList.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium text-[#1F2937] text-lg">{item.type}</span>
                  <span className="font-bold text-gray-700 bg-gray-100 px-4 py-1 rounded-full">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-6 text-center">* Prices are starting rates and may vary based on distance and exact requirements.</p>
          </motion.div>

          {/* Extra Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-gradient-to-br from-[#1F2937] to-gray-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C00] rounded-full mix-blend-overlay filter blur-2xl opacity-50"></div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Extra Services</h3>
            <div className="space-y-4 relative z-10">
              {extraServices.map((service, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0B5ED7]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#60A5FA]" />
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <span className="font-bold text-[#FF8C00]">{service.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <a href="#booking" className="inline-block w-full py-3 px-6 bg-gradient-to-r from-[#FF8C00] to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 text-white">
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
