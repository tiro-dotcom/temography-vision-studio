import { Instagram } from "lucide-react";

export function InstagramWidget() {
  return (
    <a
      href="https://www.instagram.com/temography1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Follow on Instagram"
    >
      <Instagram className="h-7 w-7 text-white" />
    </a>
  );
}
