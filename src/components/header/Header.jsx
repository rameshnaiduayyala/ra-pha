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
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <a className="flex items-center transition-opacity hover:opacity-80" href="/">
            <img src={Logo} alt="RA-PHA" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Features Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-blue-600 font-medium">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 border border-gray-100 shadow-xl rounded-xl">
                  <ul className="grid w-[550px] grid-cols-2 gap-4">
                    {featureLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                  href="#how-it-works"
                >
                  How It Works
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                  href="#pricing"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                  href="#contact"
                >
                  Partners
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-blue-600 font-medium">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 border border-gray-100 shadow-xl rounded-xl">
                  <ul className="grid w-[400px] gap-2">
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
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md shadow-blue-200 transition-all hover:scale-105 active:scale-95">
            Join Waitlist
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
            className="size-6 text-gray-900"
            duration={300}
            open={open}
          />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open}>
        <div className="flex flex-col gap-8 pb-10">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="/" icon={Home} label="Home" />
            <div className="py-2 border-b border-gray-50 mb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4">Features</span>
            </div>
            {featureLinks.map((link) => (
              <MobileNavLink key={link.title} href={link.href} icon={link.icon} label={link.title} />
            ))}
          </div>

          <div className="flex flex-col gap-2">
             <div className="py-2 border-b border-gray-50 mb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4">Company</span>
            </div>
            <MobileNavLink href="#how-it-works" icon={Zap} label="How It Works" />
            <MobileNavLink href="#pricing" icon={CircleDollarSign} label="Pricing" />
            <MobileNavLink href="#partners" icon={Handshake} label="Partners" />
            <MobileNavLink href="#faq" icon={HelpCircle} label="FAQ" />
            <MobileNavLink href="#contact" icon={Mail} label="Contact" />
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <Button className="w-full bg-blue-600 py-6 text-lg rounded-xl shadow-lg shadow-blue-100">
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
      className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all font-medium"
    >
      <Icon className="size-5" />
      {label}
    </a>
  );
}

function MobileMenu({ open, children }) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden overflow-y-auto px-6 pt-4 animate-in slide-in-from-right duration-300">
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
        className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 transition-all group"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          <p className="text-xs text-gray-500 leading-relaxed mt-1">{description}</p>
        </div>
      </a>
    </NavigationMenuLink>
  );
}

// --- Data ---

const featureLinks = [
  {
    title: "AI Diagnostics",
    href: "#features",
    description: "Deep-learning models for rapid pathogen identification.",
    icon: Cpu,
  },
  {
    title: "Real-time Tracking",
    href: "#features",
    description: "Monitor health trends with localized data insights.",
    icon: Activity,
  },
  {
    title: "Biotech Cloud",
    href: "#features",
    description: "Secure, encrypted storage for sensitive clinical data.",
    icon: LayoutGrid,
  },
  {
    title: "Patient Interface",
    href: "#features",
    description: "Seamless mobile experience for end-user engagement.",
    icon: AppWindow,
  },
];

const resourceLinks = [
  {
    title: "Partners",
    href: "#partners",
    description: "The global network of labs and clinics using RA-PHA.",
    icon: Handshake,
  },
  {
    title: "FAQ & Support",
    href: "#faq",
    description: "Common questions about our AI and implementation.",
    icon: HelpCircle,
  },
];