import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle size={26} />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
