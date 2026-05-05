import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, categories } from "@/data/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "All Services — E-Protibeshi" },
      { name: "description", content: "Explore all daily life services from E-Protibeshi: delivery, technicians, transport, tutors, shifting, renting and more." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const filtered = useMemo(
    () =>
      services.filter(
        (s) =>
          (cat === "All" || s.category === cat) &&
          (s.title.toLowerCase().includes(q.toLowerCase()) ||
            s.short.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Services</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Everything you need, in one place</h1>
        <p className="mt-3 text-muted-foreground">Browse, search or filter by category to find the right service.</p>
      </div>

      <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-card">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search services..."
          className="w-full bg-transparent py-2 text-sm outline-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              cat === c
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No services match your search.</p>
      )}
    </div>
  );
}
