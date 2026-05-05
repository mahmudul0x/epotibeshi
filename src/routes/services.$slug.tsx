import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowLeft, Phone } from "lucide-react";
import { services, type Service } from "@/data/services";
import { toast } from "sonner";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-brand">Back to services</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service: Service = Route.useLoaderData();
  const [form, setForm] = useState({ name: "", phone: "", address: "", datetime: "", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      toast.error("Please fill name, phone and address.");
      return;
    }
    toast.success("Request submitted! We'll call you shortly.");
    setForm({ name: "", phone: "", address: "", datetime: "", notes: "" });
  };

  const Icon = service.icon;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All services
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-elegant">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">{service.category}</span>
              <h1 className="text-3xl font-bold md:text-4xl">{service.emoji} {service.title}</h1>
            </div>
          </div>

          <p className="mt-6 text-lg text-muted-foreground">{service.description}</p>

          <h2 className="mt-10 text-xl font-bold">What's included</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.features.map((f: string) => (
              <li key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 text-accent-green" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-secondary/60 p-6">
            <p className="text-sm text-muted-foreground">Prefer to talk first?</p>
            <a href="tel:+8801722960490" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 font-semibold text-brand-foreground shadow-elegant">
              <Phone className="h-4 w-4" /> Call 01722-960490
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
          <h3 className="text-xl font-bold">Book this service</h3>
          <p className="mt-1 text-sm text-muted-foreground">Fill in your details and we'll arrange it.</p>

          <div className="mt-5 space-y-4">
            {[
              { k: "name", l: "Full name", t: "text" },
              { k: "phone", l: "Phone", t: "tel" },
              { k: "address", l: "Address", t: "text" },
              { k: "datetime", l: "Preferred date & time", t: "datetime-local" },
            ].map((f) => (
              <label key={f.k} className="block text-sm">
                <span className="mb-1 block font-medium">{f.l}</span>
                <input
                  type={f.t}
                  value={(form as Record<string, string>)[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  maxLength={200}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-brand"
                />
              </label>
            ))}
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Notes</span>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                maxLength={1000}
                rows={3}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-brand"
              />
            </label>
            <button className="w-full rounded-full bg-gradient-brand py-3 font-semibold text-brand-foreground shadow-elegant transition-transform hover:scale-[1.02]">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
