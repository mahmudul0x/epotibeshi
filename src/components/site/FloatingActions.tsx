import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801722960490"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-accent-green text-accent-green-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+8801722960490"
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
