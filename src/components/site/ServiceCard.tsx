import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {service.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold">
        {service.emoji} {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
