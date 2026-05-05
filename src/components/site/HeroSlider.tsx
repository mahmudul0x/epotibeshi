import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import delivery from "@/assets/hero-delivery.jpg";
import technician from "@/assets/hero-technician.jpg";
import car from "@/assets/hero-car.jpg";
import tutor from "@/assets/hero-tutor.jpg";

import shifting from "@/assets/hero-shifting.jpg";

const slides = [
  { img: delivery, eyebrow: "Home Delivery", title: "One-Stop Solution for Your Daily Needs!", sub: "Parcels, groceries and shopping delivered across Dinajpur." },
  { img: technician, eyebrow: "Technician Services", title: "Trusted Help, Right at Your Door", sub: "Electricians, plumbers, AC & appliance pros — verified & on time." },
  { img: car, eyebrow: "Rent-A-Car", title: "Travel Comfortably, Anywhere You Go", sub: "Sedans, microbuses & noahs for tours, events and daily rides." },
  { img: tutor, eyebrow: "Home Tutors", title: "Quality Tutors for Every Student", sub: "Verified home tutors from primary to HSC and admission prep." },
  { img: shifting, eyebrow: "Shifting & Moving", title: "Move Smart, Move Safe", sub: "End-to-end packing, loading and shifting by trained crews." },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img
            src={s.img}
            alt={s.eyebrow}
            className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div key={i} className="max-w-2xl text-brand-foreground">
            <span className="animate-fade-up inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              ✦ {slides[i].eyebrow}
            </span>
            <h1 className="animate-fade-up delay-100 mt-5 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              {slides[i].title}
            </h1>
            <p className="animate-fade-up delay-200 mt-4 max-w-xl text-base text-white/90 md:text-lg">{slides[i].sub}</p>
            <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-foreground shadow-elegant transition-transform hover:scale-105"
              >
                Book Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+8801722960490"
                className="relative inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="animate-fade-up delay-500 mt-10 flex items-center gap-6 text-xs text-white/80">
              <div><span className="block text-2xl font-bold text-white">5k+</span>Happy customers</div>
              <div className="h-8 w-px bg-white/30" />
              <div><span className="block text-2xl font-bold text-white">7</span>Service categories</div>
              <div className="hidden h-8 w-px bg-white/30 sm:block" />
              <div className="hidden sm:block"><span className="block text-2xl font-bold text-white">24/7</span>On call</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-10 bg-white" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
