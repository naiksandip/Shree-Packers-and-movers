import { motion } from "motion/react";
import { Clock, ShieldCheck, Award, Star } from "lucide-react";

const stats = [
  { icon: Award, label: "Established", value: "2016" },
  { icon: Clock, label: "Working Hours", value: "24/7" },
  { icon: ShieldCheck, label: "Experience", value: "10+ Years" },
  { icon: Star, label: "Rating", value: "4.9/5" },
];

export function About() {
  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B5ED7] to-[#FF8C00] rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img 
                src="/shree-hero.png" 
                alt="Transport and House Shifting Logistics" 
                className="relative rounded-2xl shadow-xl w-full aspect-square object-contain bg-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
              About <span className="text-[#0B5ED7]">SHREE Packers & Movers</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              SHREE Packers & Movers is one of India's trusted transportation, logistics, and relocation organisation providing professional shifting services for households, offices, industries, commercial goods, and vehicles. Our experienced team ensures safe packing, secure transportation, timely delivery, and complete customer satisfaction.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                    <div className="bg-blue-50 p-3 rounded-full mb-3 text-[#0B5ED7]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xl text-[#1F2937] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
