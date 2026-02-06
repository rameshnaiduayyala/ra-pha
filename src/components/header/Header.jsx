import {
  Activity,
  AppWindow,
  ChevronDown,
  CircleDollarSign,
  Cpu,
  Handshake,
  HelpCircle,
  Home,
  LayoutGrid,
  Mail,
  Zap,
  ArrowRight,
  ShieldCheck
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

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 border-b",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-slate-200/60 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]"
          : "bg-white border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <a className="flex items-center transition-transform hover:scale-105 active:scale-95" href="/">
            <img src={Logo} alt="RA-PHA" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-blue-600"
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Features Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-600 hover:text-blue-600 font-semibold rounded-full">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md p-6 border border-slate-100 shadow-2xl rounded-[2rem]">
                  <ul className="grid w-[600px] grid-cols-2 gap-4">
                    {featureLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  {/* Trust indicator inside menu */}
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] px-2">
                    <span>Compliance-First Design</span>
                    <ShieldCheck className="size-3 text-emerald-500" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:text-blue-600"
                  href="#how-it-works"
                >
                  How It Works
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:text-blue-600"
                  href="#pricing"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:text-blue-600"
                  href="#partners"
                >
                  Partners
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Resources / FAQ */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-600 hover:text-blue-600 font-semibold rounded-full">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md p-4 border border-slate-100 shadow-xl rounded-2xl">
                  <ul className="grid w-[350px] gap-2">
                    {resourceLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#contact" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-[0.15em]">
            Contact
          </a>
          <Button className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-sm font-bold shadow-xl shadow-blue-500/10 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group">
            Join Waitlist
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="ghost"
        >
          <MenuToggleIcon
            className="size-6 text-slate-900"
            duration={300}
            open={open}
          />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open}>
        <div className="flex flex-col gap-10 pb-12">
          <div className="flex flex-col gap-3">
            <MobileNavLink href="/" icon={Home} label="Home" />
            
            <div className="mt-4 mb-2 px-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform & Tech</span>
              <div className="h-[1px] flex-1 ml-4 bg-slate-100" />
            </div>
            
            {featureLinks.map((link) => (
              <MobileNavLink key={link.title} href={link.href} icon={link.icon} label={link.title} />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="mb-2 px-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company</span>
              <div className="h-[1px] flex-1 ml-4 bg-slate-100" />
            </div>
            <MobileNavLink href="#how-it-works" icon={Zap} label="How It Works" />
            <MobileNavLink href="#pricing" icon={CircleDollarSign} label="Pricing" />
            <MobileNavLink href="#partners" icon={Handshake} label="Partners" />
            <MobileNavLink href="#faq" icon={HelpCircle} label="FAQ" />
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
             <Button className="w-full bg-blue-600 py-7 text-lg rounded-2xl shadow-2xl shadow-blue-200 font-bold">
               Join Waitlist
             </Button>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
}

// --- Helper Components ---

function MobileNavLink({ href, icon: Icon, label }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-5 px-5 py-4 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-blue-600 transition-all font-bold text-lg"
    >
      <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white transition-colors">
        <Icon className="size-6" />
      </div>
      {label}
    </a>
  );
}

function MobileMenu({ open, children }) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden overflow-y-auto px-6 pt-6 animate-in slide-in-from-right duration-500">
      {children}
    </div>,
    document.body,
  );
}

function ListItem({ title, description, icon: Icon, href }) {
  return (
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all"
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all">
          <Icon className="size-5" />
        </div>
        <div className="space-y-1">
          <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</div>
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium line-clamp-2">{description}</p>
        </div>
      </a>
    </NavigationMenuLink>
  );
}

// --- Navigation Data ---

const featureLinks = [
  {
    title: "AI Disease Prediction",
    href: "#features",
    description: "Deep-learning models for early risk detection and warnings",
    icon: Cpu,
  },
  {
    title: "Continuous Monitoring",
    href: "#features",
    description: "24/7 tracking of vitals through seamless wearable integration",
    icon: Activity,
  },
  {
    title: "Wellness Ecosystem",
    href: "#features",
    description: "Personalized diet, workout, and mental health support",
    icon: LayoutGrid,
  },
  {
    title: "Telemedicine",
    href: "#features",
    description: "Instant access to medical consultations and emergency SOS",
    icon: AppWindow,
  },
];

const resourceLinks = [
  {
    title: "FAQ & Support",
    href: "#faq",
    description: "Answers to common clinical and technical questions",
    icon: HelpCircle,
  },
  {
    title: "Contact Team",
    href: "#contact",
    description: "Inquire about partnerships or general support",
    icon: Mail,
  },
];