import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/27799963842"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
}
