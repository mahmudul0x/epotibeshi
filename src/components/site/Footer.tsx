import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
              eP
            </span>
            <span className="text-gradient-brand">E-Protibeshi</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            One-stop solution for your daily needs in Dinajpur — delivery, technicians, transport,
            tutors and more.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand" /> 01722-960490</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand" /> +880 1722-960490</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand" /> eprotibeshi@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Address</h4>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-brand" />
            99 Market Goli, Modern Mor, Dinajpur, Bangladesh, 5200
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} E-Protibeshi. All rights reserved.
      </div>
    </footer>
  );
}
