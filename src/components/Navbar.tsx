
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
// Removed unused Lucide icons
// import { Menu, X, ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const siteConfig = {
  name: "miNEURO",
  url: "https://mineuro.com.au",
  ogImage: "https://mineuro.com.au/og.jpg",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/getnextui",
    github: "https://github.com/nextui-org/nextui",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Expertise",
      href: "/expertise",
    },
    {
      title: "Locations",
      href: "/locations",
    },
    {
      title: "Patient Resources",
      href: "/patient-resources",
    },
    {
      title: "Appointments",
      href: "/appointments",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: [
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
  ],
};

export default function Navbar() {
  const { t } = useLanguage();
  // Removed unused: location, isMounted, theme, deviceInfo, isSubmenuOpen
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        // Normally would set isSubmenuOpen, but this is not used, so safely remove
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="border-b">
      <header className="container z-40 bg-background">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center font-semibold">
              <img
                src="/images/mineuro-logo.svg"
                alt="miNeuro Logo"
                className="mr-2 h-8"
              />
              {siteConfig.name}
            </Link>
            <div className="hidden gap-4 lg:flex">
              {siteConfig.mainNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary",
                      isActive ? "text-primary" : ""
                    )
                  }
                >
                  {t.navbar && t.navbar[item.title.toLowerCase()]
                    ? t.navbar[item.title.toLowerCase()]
                    : item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="pr-0 bg-secondary text-secondary-foreground"
              >
                <Link
                  to="/"
                  className="flex items-center justify-center font-semibold"
                >
                  <img
                    src="/images/mineuro-logo.svg"
                    alt="miNeuro Logo"
                    className="mr-2 h-8"
                  />
                  {siteConfig.name}
                </Link>
                <div className="grid gap-4 py-4">
                  {siteConfig.mainNav.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary",
                          isActive ? "text-primary" : ""
                        )
                      }
                    >
                      {t.navbar && t.navbar[item.title.toLowerCase()]
                        ? t.navbar[item.title.toLowerCase()]
                        : item.title}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}

