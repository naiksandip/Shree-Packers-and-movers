import { motion } from "motion/react";
import { Home, Briefcase, Map, Truck, Package, Bike, Settings, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Home, title: "House Shifting" },
  { icon: Briefcase, title: "Office Relocation" },
  { icon: Map, title: "Local & Intercity Shifting" },
  { icon: Settings, title: "Industrial Relocation" },
  { icon: Package, title: "Storage & Warehousing" },
  { icon: Truck, title: "Commercial Goods Transport" },
  { icon: Bike, title: "Bike Transportation" },
  { icon: Package, title: "Packing & Unpacking" },
];

const features = [
  "24×7 Customer Support", "Affordable Pricing", "No Hidden Charges", 
  "Professional Packing", "Door-to-Door Service", "Damage-Free Transportation", 
  "GPS Tracking", "Transit Insurance", "Verified Drivers", 
  "Experienced Staff", "Same Day Shifting", "Fast Delivery"
];

export function Services() {
  return (
    <section id="services" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-black text-[#1F2937] mb-3 font-display">Our Premium Services</h2>
          <p className="text-slate-600 font-medium">Comprehensive relocation and logistics solutions tailored to your needs across Navi Mumbai, Mumbai, and India.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 text-[#0B5ED7] rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{service.title}</h3>
                <p className="text-xs text-slate-500 mt-1">Safe and reliable transport with complete care.</p>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#1F2937] to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B5ED7] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#FF8C00] shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
