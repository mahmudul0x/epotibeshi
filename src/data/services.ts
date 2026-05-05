import { Package, Wrench, Car, GraduationCap, Truck, Home, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  emoji: string;
  category: string;
  icon: LucideIcon;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "home-delivery",
    title: "Home Delivery",
    emoji: "📦",
    category: "Delivery",
    icon: Package,
    short: "Parcel & shopping delivered to your door across Dinajpur.",
    description:
      "Need groceries, medicine, documents or any product picked up from a local shop? Our trusted riders handle parcel and shopping delivery quickly and safely — straight to your doorstep.",
    features: [
      "Same-day local delivery in Dinajpur",
      "Shop from any market on your behalf",
      "Live order coordination via phone",
      "Cash on delivery supported",
    ],
  },
  {
    slug: "technician-services",
    title: "Technician Services",
    emoji: "🛠️",
    category: "Home Service",
    icon: Wrench,
    short: "Verified electricians, plumbers, AC & appliance technicians.",
    description:
      "Book trained technicians for electrical work, plumbing, AC servicing, fridge & TV repair, and other household fixes. Honest pricing, on-time visits, neighborhood-trusted professionals.",
    features: [
      "Electrical, plumbing, AC, fridge, TV & more",
      "Background-checked technicians",
      "Transparent service charges",
      "Warranty on workmanship",
    ],
  },
  {
    slug: "rent-a-car",
    title: "Rent-A-Car",
    emoji: "🚗",
    category: "Transport",
    icon: Car,
    short: "Comfortable cars & microbuses for trips, events and daily use.",
    description:
      "Reserve a car, microbus or noah for tours, weddings, airport rides or business travel. Experienced drivers, well-maintained vehicles, and flexible hourly or daily packages.",
    features: [
      "Sedan, microbus and noah options",
      "Hourly, daily and tour packages",
      "Experienced local drivers",
      "AC vehicles, fully serviced",
    ],
  },
  {
    slug: "home-tutors",
    title: "Home Tutors",
    emoji: "🎓",
    category: "Education",
    icon: GraduationCap,
    short: "Qualified home tutors for school, college and admission prep.",
    description:
      "Find dedicated home tutors for class 1 to HSC, English medium, admission coaching and skill-based subjects. We match you with verified tutors near your area.",
    features: [
      "Bangla & English medium",
      "Subject-wise expert tutors",
      "Flexible schedules",
      "Demo class available",
    ],
  },
  {
    slug: "shifting-moving",
    title: "Shifting & Moving",
    emoji: "🚚",
    category: "Transport",
    icon: Truck,
    short: "House & office shifting with careful packing and loading.",
    description:
      "Stress-free shifting with trained labor, packing material and the right vehicle for your load. From single-room moves to full office relocation, we handle it end-to-end.",
    features: [
      "Pickup, mini-truck & covered van",
      "Trained loading & unloading crew",
      "Optional packing service",
      "Damage-safe handling",
    ],
  },
  {
    slug: "house-renting",
    title: "House Renting",
    emoji: "🏠",
    category: "Real Estate",
    icon: Home,
    short: "Find verified rental houses, flats and bachelor accommodations.",
    description:
      "Looking for a house, flat, mess or commercial space in Dinajpur? Share your requirements and we'll connect you with verified options that match your budget and area.",
    features: [
      "Family flats & bachelor mess",
      "Verified landlord listings",
      "Area-based matching",
      "No hidden brokerage tricks",
    ],
  },
  {
    slug: "general-assistance",
    title: "General Assistance",
    emoji: "🚀",
    category: "Other",
    icon: Sparkles,
    short: "Anything else you need help with — just call us.",
    description:
      "From bill payments and government office help to event support and personal errands — if it makes your daily life easier, E-Protibeshi is here to help.",
    features: [
      "Bill payment & errands",
      "Office & paperwork support",
      "Event-day assistance",
      "Custom requests welcome",
    ],
  },
];

export const categories = Array.from(new Set(services.map((s) => s.category)));
