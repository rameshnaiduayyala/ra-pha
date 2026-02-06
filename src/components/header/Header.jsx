import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Activity,
  LayoutGrid,
  AppWindow,
  HelpCircle,
  Mail,
  Home,
  Zap,
  CircleDollarSign,
  Handshake,
} from "lucide-react";

import React from "react";
import { createPortal } from "react-dom";
import Logo from "../../assets/RA-PHA-LOGO1.png";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { useScroll } from "../../hooks/use-scroll";
import { cn } from "../lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
          : "bg-white border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-16">
          <a className="flex items-center" href="/">
            <img
              src={Logo}
              alt="RA-PHA"
              className="h-10 w-auto transition-all"
            />
          </a>

          {/* Desktop Navigation - Minimalist Font Styling */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-4">
              <NavItem href="/" label="Platform" />

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-6 border border-slate-200 shadow-xl rounded-sm">
                  <ul className="grid w-[500px] grid-cols-2 gap-x-8 gap-y-4">
                    {featureLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavItem href="#how-it-works" label="How It Works" />
              <NavItem href="#partners" label="Partnering" />
              <NavItem href="#team" label="Team" />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons - Sharp Corners */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#contact"
            className="text-[10px] font-bold text-slate-500 hover:text-black uppercase tracking-[0.2em]"
          >
            Contact
          </a>
          <button className="border-2 border-slate-900 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all rounded-sm">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <Button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="ghost"
        >
          <MenuToggleIcon className="size-6" duration={300} open={open} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open}>
        <div className="flex flex-col gap-8 pb-12 pt-10">
          {featureLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-xl font-medium tracking-tight text-slate-900"
            >
              {link.title}
            </a>
          ))}
          <hr className="border-slate-100" />
          <a
            href="#team"
            className="text-xl font-medium tracking-tight text-slate-900"
          >
            Team
          </a>
          <a
            href="#careers"
            className="text-xl font-medium tracking-tight text-slate-900"
          >
            Careers
          </a>
          <button className="mt-4 w-full border-2 border-slate-900 py-4 font-bold uppercase tracking-[0.2em]">
            Join Waitlist
          </button>
        </div>
      </MobileMenu>
    </header>
  );
}

// --- Sub-Components ---

function NavItem({ href, label }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-black transition-colors px-4 py-2"
        href={href}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function ListItem({ title, description, href }) {
  return (
    <NavigationMenuLink asChild>
      <a href={href} className="group block space-y-1 py-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-600">
          {title}
        </div>
        <p className="text-[10px] leading-relaxed text-slate-500 line-clamp-2">
          {description}
        </p>
      </a>
    </NavigationMenuLink>
  );
}

function MobileMenu({ open, children }) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 top-24 z-40 bg-white lg:hidden px-8 overflow-y-auto animate-in fade-in duration-300">
      {children}
    </div>,
    document.body,
  );
}

const featureLinks = [
  {
    title: "Disease Prediction",
    href: "#",
    description: "Deep-learning models for early risk detection.",
  },
  {
    title: "Continuous Monitoring",
    href: "#",
    description: "24/7 tracking through seamless wearables.",
  },
  {
    title: "Wellness Ecosystem",
    href: "#",
    description: "Personalized diet and mental health support.",
  },
  {
    title: "Telemedicine",
    href: "#",
    description: "Instant access to medical consultations.",
  },
];
