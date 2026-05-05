import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Eye, ShieldCheck, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const timeline = [
  { y: "2020", t: "Started during COVID", d: "E-Protibeshi was born to help families access daily essentials and services safely during the pandemic." },
  { y: "2021", t: "Service expansion", d: "Added technicians, home tutors and rent-a-car alongside delivery." },
  { y: "2023", t: "Community network", d: "Built a trusted local network of riders, technicians and partners across Dinajpur." },
  { y: "Today", t: "Your daily neighbor", d: "Thousands of requests served — and growing every day with our community." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">About us</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Built for our neighborhood, by our neighborhood</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            E-Protibeshi is an online platform for daily life services in Bangladesh. Our mission is
            simple — make everyday tasks easier through a community-driven service network.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-16 md:grid-cols-3">
        {[
          { icon: Target, t: "Our Mission", d: "Simplify daily life in Bangladesh by connecting people to trusted local services." },
          { icon: Eye, t: "Our Vision", d: "Become the most loved daily-services platform in every neighborhood we serve." },
          { icon: Heart, t: "Our Values", d: "Trust, community, fairness and showing up when our neighbors need us." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <c.icon className="h-8 w-8 text-brand" />
            <h3 className="mt-4 text-xl font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Our journey</h2>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2" />
          {timeline.map((item, i) => (
            <div key={item.y} className={`relative mb-10 md:flex ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 md:px-8">
                <div className="ml-12 rounded-2xl border border-border bg-card p-5 shadow-card md:ml-0">
                  <span className="text-sm font-bold text-brand">{item.y}</span>
                  <h4 className="mt-1 font-semibold">{item.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
                </div>
              </div>
              <div className="absolute left-4 top-4 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-brand md:left-1/2" />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl bg-gradient-brand p-10 text-center text-brand-foreground shadow-elegant">
          <h2 className="text-3xl font-bold">Thank you ❤️</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            A heartfelt appreciation to every user, rider, technician, tutor and supporter who
            has been part of the E-Protibeshi journey. You are why we exist.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-5 px-4 pb-16 md:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Verified providers" },
          { icon: Users, t: "Community-driven" },
          { icon: Sparkles, t: "Trusted since 2020" },
        ].map((b) => (
          <div key={b.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
            <b.icon className="h-7 w-7 text-accent-green" />
            <span className="font-semibold">{b.t}</span>
          </div>
        ))}
      </section>
    </>
  );
}
