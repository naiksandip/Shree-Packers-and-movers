import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pickupAddress: "",
    dropAddress: "",
    pickupCity: "",
    destinationCity: "",
    date: "",
    materialType: "",
    vehicleType: "",
    floorNumber: "",
    liftAvailable: "No",
    weight: "",
    instructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Booking Enquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Pickup:* ${formData.pickupAddress}, ${formData.pickupCity}%0A` +
      `*Drop:* ${formData.dropAddress}, ${formData.destinationCity}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Material:* ${formData.materialType}%0A` +
      `*Vehicle:* ${formData.vehicleType}%0A` +
      `*Floor:* ${formData.floorNumber} (Lift: ${formData.liftAvailable})%0A` +
      `*Est. Weight:* ${formData.weight}%0A` +
      `*Instructions:* ${formData.instructions}`;

    const whatsappUrl = `https://wa.me/919930233748?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="booking" className="relative text-white w-full h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B5ED7] blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="relative flex-1">
        <h3 className="text-2xl font-bold mb-2 font-display">Get a <span className="text-[#FF8C00]">Free Quote</span></h3>
        <p className="text-sm text-slate-400 mb-6">Average response time: 5 minutes</p>

        <form onSubmit={handleSubmit} className="space-y-4 pb-10">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Name</label>
              <input required type="text" name="name" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Mobile</label>
              <input required type="tel" name="mobile" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="+91" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Pickup City</label>
              <input required type="text" name="pickupCity" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="Mumbai" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Drop City</label>
              <input required type="text" name="destinationCity" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="Pune" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-slate-400 block">Pickup Address</label>
            <input required type="text" name="pickupAddress" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="Flat, Building, Area" />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-slate-400 block">Material Type</label>
            <select name="materialType" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all text-white">
              <option value="">Select Material</option>
              <option value="All Household Items">All Household Items</option>
              <option value="Furniture">Furniture</option>
              <option value="Office Equipment">Office Equipment</option>
              <option value="Commercial Goods">Commercial Goods</option>
              <option value="Vehicle Only">Vehicle Only</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Work Date</label>
              <input required type="date" name="date" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all text-white [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Vehicle Size</label>
              <select name="vehicleType" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all text-white">
                <option value="">Not Sure</option>
                <option value="Tata Ace">Tata Ace</option>
                <option value="Mahindra Jeeto">Mahindra Jeeto</option>
                <option value="Ashok Leyland Dost">Ashok Leyland Dost</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Bolero Pickup">Bolero Pickup</option>
                <option value="Tata 407">Tata 407</option>
                <option value="Eicher 14 Feet">Eicher 14 Feet</option>
                <option value="Eicher 17 Feet">Eicher 17 Feet</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Floor Number</label>
              <input type="text" name="floorNumber" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all placeholder:text-slate-500" placeholder="e.g. 2nd & 4th" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-slate-400 block">Lift Available</label>
              <select name="liftAvailable" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:border-[#0B5ED7] outline-none transition-all text-white">
                <option value="No">No</option>
                <option value="Yes (Both)">Yes (Both)</option>
                <option value="Yes (Pickup)">Yes (Pickup)</option>
                <option value="Yes (Drop)">Yes (Drop)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-slate-400 block">Instructions</label>
            <textarea name="instructions" onChange={handleChange} rows={2} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-[#0B5ED7] outline-none transition-all resize-none placeholder:text-slate-500" placeholder="Any special requests?"></textarea>
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#FF8C00] to-[#f47b00] text-white rounded-xl font-black text-sm shadow-xl shadow-orange-900/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              GET QUOTE ON WHATSAPP
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-6 hidden lg:flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
          <div className="text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">1 RK</div>
            <div className="text-sm font-bold text-white">₹2499+</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">1 BHK</div>
            <div className="text-sm font-bold text-white">₹3299+</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <div className="text-[10px] uppercase font-bold text-slate-400">2 BHK</div>
            <div className="text-sm font-bold text-white">₹4999+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
