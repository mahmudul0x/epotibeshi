import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const posts = [
  { t: "5 things to check before booking a home technician", c: "Tips", d: "A quick checklist to make sure your service visit goes smoothly the first time." },
  { t: "How to find a great home tutor in Dinajpur", c: "Guides", d: "What to look for, what to ask, and how to set expectations from day one." },
  { t: "Renting a car for family trips: a simple guide", c: "Guides", d: "Choosing the right vehicle, planning routes and packing essentials." },
  { t: "Shifting house? Plan it like a pro", c: "How-to", d: "From packing materials to loading order, save time and avoid damage." },
  { t: "Why local matters — supporting your neighborhood economy", c: "Awareness", d: "How using local services strengthens our community in the long run." },
  { t: "Safe contactless delivery: best practices", c: "Tips", d: "Simple habits that keep both customers and riders safe." },
];

function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Blog</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Tips, guides & community stories</h1>
        <p className="mt-3 text-muted-foreground">Sample placeholder posts — real articles coming soon.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <article key={p.t} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-brand/40">
            <div className="aspect-video bg-gradient-brand opacity-90" aria-hidden />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium">{p.c}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> 2026</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {3 + i} min</span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug">{p.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
              <span className="mt-4 text-sm font-semibold text-brand">Sample UI · Coming soon</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
