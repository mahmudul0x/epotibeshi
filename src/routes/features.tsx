import { createFileRoute } from "@tanstack/react-router";
import {
  Users, ShoppingBag, Store, CalendarCheck, Car, Laptop, MousePointerClick,
  Trees, Utensils, ShoppingBasket, ShieldCheck, Truck,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Service Modes & Features — E-Protibeshi" },
      { name: "description", content: "All the ways E-Protibeshi serves you: in-person, online booking, delivery, takeout, curbside pickup and more." },
    ],
  }),
  component: FeaturesPage,
});

const items = [
  { icon: Users, label: "In-person classes" },
  { icon: ShoppingBag, label: "In-store shopping" },
  { icon: Store, label: "In-store pickup" },
  { icon: CalendarCheck, label: "Reservations" },
  { icon: Car, label: "Curbside pickup" },
  { icon: Laptop, label: "Online classes" },
  { icon: MousePointerClick, label: "Online booking" },
  { icon: Trees, label: "Outdoor seating" },
  { icon: Utensils, label: "Dine-in" },
  { icon: ShoppingBasket, label: "Takeout" },
  { icon: ShieldCheck, label: "Contactless delivery" },
  { icon: Truck, label: "Delivery" },
];

function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Service modes</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">However you want it — we've got you</h1>
        <p className="mt-3 text-muted-foreground">
          From in-person visits to fully online bookings, E-Protibeshi supports every way of getting things done.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
              <it.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
