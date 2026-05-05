import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-soft py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Let's talk</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Call, message or drop by — we'd love to help with your next request.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <a href="tel:01722960490" className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
          <Phone className="h-7 w-7 text-brand" />
          <h3 className="mt-3 font-semibold">Call (Local)</h3>
          <p className="mt-1 text-sm text-muted-foreground">01722-960490</p>
        </a>
        <a href="tel:+8801722960490" className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
          <Phone className="h-7 w-7 text-brand" />
          <h3 className="mt-3 font-semibold">Call (International)</h3>
          <p className="mt-1 text-sm text-muted-foreground">+880 1722-960490</p>
        </a>
        <a href="mailto:eprotibeshi@gmail.com" className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
          <Mail className="h-7 w-7 text-brand" />
          <h3 className="mt-3 font-semibold">Email</h3>
          <p className="mt-1 break-all text-sm text-muted-foreground">eprotibeshi@gmail.com</p>
        </a>
        <a href="https://wa.me/8801722960490" target="_blank" rel="noopener" className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
          <MessageCircle className="h-7 w-7 text-accent-green" />
          <h3 className="mt-3 font-semibold">WhatsApp</h3>
          <p className="mt-1 text-sm text-muted-foreground">Chat instantly</p>
        </a>
      </section>

      <section className="container mx-auto grid gap-8 px-4 pb-16 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-2xl font-bold">Send a message</h2>
          <div className="mt-5 space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input value={form.name} maxLength={100} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input type="email" value={form.email} maxLength={255} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Message</span>
              <textarea value={form.message} maxLength={1000} rows={5} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
            </label>
            <button className="w-full rounded-full bg-gradient-brand py-3 font-semibold text-brand-foreground shadow-elegant">
              Send message
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="flex items-center gap-2 text-lg font-bold"><MapPin className="h-5 w-5 text-brand" /> Visit us</h3>
            <p className="mt-2 text-sm text-muted-foreground">99 Market Goli, Modern Mor, Dinajpur, Bangladesh, 5200</p>
            <p className="text-sm text-muted-foreground">Dinajpur, Rangpur Division, Bangladesh</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="E-Protibeshi location"
              src="https://www.google.com/maps?q=Modern%20Mor%2C%20Dinajpur%2C%20Bangladesh&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
