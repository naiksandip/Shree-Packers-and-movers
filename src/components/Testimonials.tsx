import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquarePlus, X } from "lucide-react";

const initialReviews = [
  { text: "Excellent packing quality and on-time delivery. Highly recommended.", name: "Rahul S.", location: "Navi Mumbai", rating: 5 },
  { text: "Very professional workers and affordable pricing.", name: "Priya M.", location: "Pune", rating: 5 },
  { text: "Our office relocation was completed safely without any damage.", name: "Vikas K.", location: "Thane", rating: 5 },
  { text: "Best packers and movers service in Navi Mumbai.", name: "Amit D.", location: "Mumbai", rating: 5 },
  { text: "Quick response and excellent customer support.", name: "Neha J.", location: "Andheri", rating: 5 },
];

export function Testimonials() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    review: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReview = {
      text: formData.review,
      name: formData.name,
      location: formData.location,
      rating: rating
    };

    setReviewsList([newReview, ...reviewsList]);
    
    setIsModalOpen(false);
    setFormData({ name: "", location: "", review: "" });
    setRating(5);
  };

  return (
    <section id="testimonials" className="bg-transparent relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#1F2937] mb-3 font-display">What Our Customers Say</h2>
            <p className="text-slate-600 font-medium">Trusted by thousands of families and businesses across India.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0B5ED7] text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white px-6 py-3 rounded-full font-bold transition-colors"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full relative"
            >
              <div className="flex text-[#FF8C00] mb-4">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-1">"{review.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#1F2937]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-lg text-slate-800">Share Your Experience</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`transition-colors ${star <= rating ? 'text-[#FF8C00]' : 'text-slate-300'}`}
                      >
                        <Star className={`w-8 h-8 ${star <= rating ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0B5ED7] focus:ring-1 focus:ring-[#0B5ED7] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Location</label>
                    <input 
                      required 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0B5ED7] focus:ring-1 focus:ring-[#0B5ED7] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Review</label>
                  <textarea 
                    required 
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#0B5ED7] focus:ring-1 focus:ring-[#0B5ED7] outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#0B5ED7] hover:bg-blue-700 text-white font-bold rounded-xl py-4 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
