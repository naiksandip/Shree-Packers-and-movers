import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <a 
        href="tel:+919930233748"
        className="w-14 h-14 bg-gradient-to-tr from-[#0B5ED7] to-blue-400 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-bounce"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/919930233748"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-green-500 to-green-400 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
