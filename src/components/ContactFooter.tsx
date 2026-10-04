import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#1F2937] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">SHREE <span className="text-[#0B5ED7]">Packers & Movers</span></h3>
            <p className="text-gray-400">Your Trusted Partner for Safe & Secure Transportation across India. Experience hassle-free shifting today.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0B5ED7] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077B5] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#FF8C00] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Pricing</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B5ED7]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1">Address</h5>
                  <p className="text-gray-400 text-sm">Tempo Stand, Sector 15, Opposite of Bank of Baroda, Vashi, Navi Mumbai, Maharashtra, India - 400703</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B5ED7]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1">Phone</h5>
                  <p className="text-gray-400 text-sm">
                    <a href="tel:+919930233748" className="hover:text-white block">+91 9930233748</a>
                    <a href="tel:+919870467354" className="hover:text-white block">+91 9870467354</a>
                    <a href="tel:+918169562720" className="hover:text-white block">+91 8169562720</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B5ED7]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1">Email</h5>
                  <p className="text-gray-400 text-sm"><a href="mailto:shreetemposervice@outlook" className="hover:text-white">shreetemposervice@outlook</a></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B5ED7]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-1">Working Hours</h5>
                  <p className="text-gray-400 text-sm">24×7 Available</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
