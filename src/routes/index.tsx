import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/services";
import { ShieldCheck, Clock, HeartHandshake, Star, ArrowRight, Phone, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import aboutImg from "@/assets/about-family.jpg";
import ctaImg from "@/assets/cta-dinajpur.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <HeroSlider />

      {/* Marquee strip */}
      <div className="border-y border-border/60 bg-secondary/40 py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-12 whitespace-nowrap pr-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["📦 Home Delivery", "🛠️ Technicians", "🚗 Rent-A-Car", "🎓 Home Tutors", "🚚 Shifting", "🏠 House Renting", "🚀 Errands", "✨ Trusted since 2020"].map((t) => (
                <span key={`${i}-${t}`} className="inline-flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-brand" /> {t}</span>
              )),
            )}
          </div>
        </div>
      </div>

      {/* Quick categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 flex items-end justify-between gap-4 reveal">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">What we do</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Services for every <span className="text-gradient-brand">daily need</span></h2>
          </div>
          <Link to="/services" className="hidden items-center gap-1 text-sm font-semibold text-brand md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <div key={s.slug} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      {/* About short with image */}
      <section className="relative overflow-hidden bg-secondary/40 py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent-green/15 blur-3xl animate-blob" style={{ animationDelay: "3s" }} aria-hidden />

        <div className="container relative mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">About E-Protibeshi</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Your trusted neighborhood, <span className="text-gradient-brand">online</span></h2>
            <p className="mt-4 text-muted-foreground">
              E-Protibeshi is an online platform built to make daily life simpler in Bangladesh.
              Started during the COVID period in 2020, we now connect families across Dinajpur to
              riders, technicians, tutors and service providers they can trust.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: ShieldCheck, t: "Verified" },
                { icon: Clock, t: "On-time" },
                { icon: HeartHandshake, t: "Local" },
                { icon: Star, t: "Top-rated" },
              ].map((b) => (
                <div key={b.t} className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-3 text-center text-xs font-semibold shadow-card hover-lift">
                  <b.icon className="h-5 w-5 text-brand" /> {b.t}
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={aboutImg} alt="Happy family at home" width={1920} height={1080} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-elegant backdrop-blur md:block animate-float-slow">
              <p className="text-2xl font-bold text-gradient-brand">5,000+</p>
              <p className="text-xs text-muted-foreground">Requests served</p>
            </div>
            <div className="absolute -top-5 -right-5 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-elegant backdrop-blur md:block animate-float-slow" style={{ animationDelay: "1.5s" }}>
              <p className="text-2xl font-bold text-gradient-brand">4.9★</p>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">From request to done — in 3 simple steps</h2>
        </div>
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Pick a service", d: "Browse our categories or search what you need." },
            { n: "02", t: "Book or call", d: "Submit a quick request or just call 01722-960490." },
            { n: "03", t: "Sit back & relax", d: "Our verified team handles it from start to finish." },
          ].map((s, i) => (
            <div key={s.n} className="reveal relative rounded-2xl border border-border bg-card p-6 shadow-card hover-lift" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-5xl font-extrabold text-gradient-brand opacity-80">{s.n}</span>
              <h4 className="mt-3 text-lg font-bold">{s.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">What our neighbors say</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { n: "Rahim", r: "Got my AC fixed within hours. Polite technician, fair price." },
            { n: "Sadia", r: "The home tutor we found through E-Protibeshi is excellent." },
            { n: "Karim", r: "Used the rent-a-car for a family trip. Comfortable and reliable." },
          ].map((t, i) => (
            <div key={t.n} className="reveal rounded-2xl border border-border bg-card p-6 shadow-card hover-lift" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"{t.r}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-brand-foreground">{t.n[0]}</div>
                <p className="text-sm font-semibold">{t.n}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA with image */}
      <section className="container mx-auto px-4 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={ctaImg} alt="Dinajpur city" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-brand/40" />
          <div className="relative grid gap-6 p-10 text-brand-foreground md:grid-cols-2 md:items-center md:p-14">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Need help today? We're one call away.</h2>
              <p className="mt-3 text-white/90">Tell us what you need and our team will arrange it for you in Dinajpur.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="tel:+8801722960490" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-foreground hover-lift">
                <Phone className="h-4 w-4" /> Call 01722-960490
              </a>
              <Link to="/contact" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
