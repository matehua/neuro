
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    {
      name: t.nav.expertise,
      path: "/expertise",
      submenu: [
        { name: t.nav.expertiseSubmenu.cervicalDisc, path: "/expertise/cervical-disc-replacement" },
        { name: t.nav.expertiseSubmenu.lumbarDisc, path: "/expertise/lumbar-disc-replacement" },
        { name: t.nav.expertiseSubmenu.imageGuided, path: "/expertise/image-guided-surgery" },
        { name: t.nav.expertiseSubmenu.roboticSpine, path: "/expertise/robotic-spine-surgery" },
      ]
    },
    {
      name: t.patientResources.title,
      path: "/patient-resources",
      submenu: [
        { name: t.patientResources.submenu.comprehensiveSolution, path: "/patient-resources/individual-spine-health-program" },
        { name: t.patientResources.submenu.conditionInfo, path: "/patient-resources/condition-information" },
        { name: t.patientResources.submenu.exerciseLibrary, path: "/patient-resources/exercise-library" },
        { name: t.nav.faq, path: "/faq" },
      ]
    },
    { name: t.nav.appointments, path: "/appointments" },
    { name: t.nav.medicolegal, path: "/medicolegal" },
    {
      name: t.nav.locations,
      path: "/locations",
      submenu: [
        { name: t.nav.locationsSubmenu.mornington, path: "/locations/mornington" },
        { name: t.nav.locationsSubmenu.frankston, path: "/locations/frankston" },
        { name: t.nav.locationsSubmenu.mooneePonds, path: "/locations/moonee-ponds" },
        { name: t.nav.locationsSubmenu.sunbury, path: "/locations/sunbury" },
        { name: t.nav.locationsSubmenu.werribee, path: "/locations/werribee" },
        { name: t.nav.locationsSubmenu.bundoora, path: "/locations/bundoora" },
        { name: t.nav.locationsSubmenu.dandenong, path: "/locations/dandenong" },
        { name: t.nav.locationsSubmenu.heidelberg, path: "/locations/heidelberg" },
        { name: t.nav.locationsSubmenu.wantirna, path: "/locations/wantirna" },
        { name: t.nav.locationsSubmenu.surreyHills, path: "/locations/surrey-hills" },
      ]
    },
    { name: t.nav.contact, path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-5")}>
      <nav className="container flex justify-between items-center">
        <div className="flex items-center">
          <LanguageSelector />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className="font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                aria-expanded={link.submenu ? 'false' : undefined}
                aria-haspopup={link.submenu ? 'true' : undefined}
              >
                {link.name}
              </Link>

              {/* Dropdown for items with submenu */}
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="btn-primary">
            <Link to="/appointments">{t.nav.bookNow}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full ml-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => !link.submenu && setMobileMenuOpen(false)}
                      aria-expanded={link.submenu ? 'true' : 'false'}
                      aria-haspopup={link.submenu ? 'true' : undefined}
                    >
                      {link.name}
                    </Link>

                    {/* Mobile submenu */}
                    {link.submenu && (
                      <div className="pl-6 mt-2 space-y-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild className="w-full btn-primary mt-6">
              <Link to="/appointments" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.bookNow}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>;
}
