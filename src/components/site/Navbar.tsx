import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/features", label: "Features" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-elegant">
            eP
          </span>
          <span className="text-gradient-brand">E-Protibeshi</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+8801722960490"
          className="hidden items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-elegant transition-transform hover:scale-105 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 transition-[max-height] md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+8801722960490"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
      {/* spacer for hero overlap on home */}
      {isHome ? null : null}
    </header>
  );
}
