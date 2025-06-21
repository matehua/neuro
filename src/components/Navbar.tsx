import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import LanguageSelector from '@/components/LanguageSelector';
import SafeImage from '@/components/SafeImage';
import SkipLink from '@/components/SkipLink';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

// Define types for navigation structure
interface NavSubmenuItem {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  submenu?: NavSubmenuItem[];
}

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.nav && safeT.patientResources) ? safeT : {
    nav: {
      home: "Home",
      expertise: "Expertise",
      appointments: "Appointments",
      gpResources: "GP Resources",
      medicolegal: "Medico-Legal",
      locations: "Locations",
      contact: "Contact",
      faq: "FAQ",
      bookNow: "Book Now",
      expertiseSubmenu: {
        cervicalDisc: "Cervical Disc Replacement",
        lumbarDisc: "Lumbar Disc Replacement",
        imageGuided: "Image-Guided Surgery",
        roboticSpine: "Robotic Spine Surgery"
      },
      gpResourcesSubmenu: {
        referralProtocols: "Referral & Triage Protocols",
        diagnostics: "Neurosurgical Diagnostics",
        careCoordination: "Multidisciplinary Care",
        emergencies: "Emergencies & Red Flags"
      },
      locationsSubmenu: {
        mornington: "Mornington",
        frankston: "Frankston",
        langwarrin: "Langwarrin",
        mooneePonds: "Moonee Ponds",
        sunbury: "Sunbury",
        werribee: "Werribee",
        bundoora: "Bundoora",
        dandenong: "Dandenong",
        heidelberg: "Heidelberg",
        wantirna: "Wantirna",
        surreyHills: "Surrey Hills"
      }
    },
    patientResources: {
      title: "Patient Resources",
      submenu: {
        comprehensiveSolution: "Individual Spine Health Programme",
        conditionInfo: "Condition Information",
        exerciseLibrary: "Exercise Library"
      }
    }
  };

  const navLinks = [
    { name: finalT.nav.home, path: "/" },
    {
      name: finalT.nav.expertise,
      path: "/expertise",
      submenu: [
        { name: finalT.nav.expertiseSubmenu.cervicalDisc, path: "/expertise/cervical-disc-replacement" },
        { name: finalT.nav.expertiseSubmenu.lumbarDisc, path: "/expertise/lumbar-disc-replacement" },
        { name: finalT.nav.expertiseSubmenu.imageGuided, path: "/expertise/image-guided-surgery" },
        { name: finalT.nav.expertiseSubmenu.roboticSpine, path: "/expertise/robotic-spine-surgery" },
      ]
    },
    { name: finalT.nav.appointments, path: "/appointments" },
    {
      name: finalT.patientResources.title,
      path: "/patient-resources",
      submenu: [
        { name: finalT.patientResources.submenu.comprehensiveSolution, path: "/patient-resources/individual-spine-health-programme" },
        { name: finalT.patientResources.submenu.conditionInfo, path: "/patient-resources/condition-information" },
        { name: finalT.patientResources.submenu.exerciseLibrary, path: "/patient-resources/exercise-library" },
        { name: finalT.nav.faq, path: "/faq" },
      ]
    },
    {
      name: finalT.nav.gpResources,
      path: "/gp-resources",
      submenu: [
        { name: finalT.nav.gpResourcesSubmenu.referralProtocols, path: "/gp-resources/referral-protocols" },
        { name: finalT.nav.gpResourcesSubmenu.diagnostics, path: "/gp-resources/diagnostics" },
        { name: finalT.nav.gpResourcesSubmenu.careCoordination, path: "/gp-resources/care-coordination" },
        { name: finalT.nav.gpResourcesSubmenu.emergencies, path: "/gp-resources/emergencies" },
      ]
    },
    { name: finalT.nav.medicolegal, path: "/medicolegal" },
    {
      name: finalT.nav.locations,
      path: "/locations",
      submenu: [
        { name: finalT.nav.locationsSubmenu.mornington, path: "/locations/mornington" },
        { name: finalT.nav.locationsSubmenu.frankston, path: "/locations/frankston" },
        { name: finalT.nav.locationsSubmenu.langwarrin || "Langwarrin", path: "/locations/langwarrin" },
        { name: finalT.nav.locationsSubmenu.mooneePonds, path: "/locations/moonee-ponds" },
        { name: finalT.nav.locationsSubmenu.sunbury, path: "/locations/sunbury" },
        { name: finalT.nav.locationsSubmenu.werribee, path: "/locations/werribee" },
        { name: finalT.nav.locationsSubmenu.bundoora, path: "/locations/bundoora" },
        { name: finalT.nav.locationsSubmenu.dandenong, path: "/locations/dandenong" },
        { name: finalT.nav.locationsSubmenu.heidelberg, path: "/locations/heidelberg" },
        { name: finalT.nav.locationsSubmenu.wantirna, path: "/locations/wantirna" },
        { name: finalT.nav.locationsSubmenu.surreyHills, path: "/locations/surrey-hills" },
      ]
    },
    { name: finalT.nav.contact, path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Close submenu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (activeSubmenu && !(e.target as Element).closest('.nav-item-with-submenu')) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [scrolled, activeSubmenu, hoverTimeout, setScrolled, setActiveSubmenu, setHoverTimeout]);

  // Function to handle submenu hover with delay
  const handleSubmenuEnter = useCallback((name: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveSubmenu(name);
  }, [hoverTimeout, setHoverTimeout, setActiveSubmenu]);

  const handleSubmenuLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  }, [setActiveSubmenu, setHoverTimeout]);

  // Function to handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, name: string, hasSubmenu: boolean) => {
    if (hasSubmenu && e.key === 'ArrowDown') {
      // Arrow down always opens the submenu
      e.preventDefault();
      setActiveSubmenu(name);
    } else if (hasSubmenu && (e.key === 'Enter' || e.key === ' ')) {
      // Enter or Space navigates to the page if submenu is open, otherwise opens submenu
      if (activeSubmenu === name) {
        // Submenu is open, let the navigation happen
        return;
      } else {
        // Submenu is closed, open it
        e.preventDefault();
        setActiveSubmenu(name);
      }
    }
  }, [activeSubmenu, setActiveSubmenu]);

  // Create callback functions outside of JSX to avoid hook violations
  const createKeyDownHandler = useCallback((linkName: string) => {
    return (e: React.KeyboardEvent) => handleKeyDown(e, linkName, true);
  }, [handleKeyDown]);

  const createMobileClickHandler = useCallback((link: NavLink) => {
    return (e: React.MouseEvent) => {
      // Check if the click was on the dropdown arrow
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const isClickNearRightEdge = (e.clientX > rect.right - 40);

      if (link.submenu && isClickNearRightEdge) {
        // If clicking on the dropdown arrow, toggle submenu
        e.preventDefault();
        setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
      } else {
        // Otherwise navigate to the page
        setMobileMenuOpen(false);
      }
    };
  }, [activeSubmenu, setActiveSubmenu, setMobileMenuOpen]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0",
      scrolled ? "bg-white/95 dark:bg-card/95 backdrop-blur-lg py-3 shadow-md" : "bg-white/90 dark:bg-card/90 backdrop-blur-sm py-5")}>
      <SkipLink />
      <nav className="container flex justify-between items-center" aria-label="Main navigation">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <SafeImage
              src="/logo/logo.png"
              alt="miNEURO Logo"
              className="h-10 w-auto"
              fallbackSrc="/logo/logo-white.png"
            />
          </Link>
          <LanguageSelector />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6" role="menubar">
          {navLinks?.map(link => (
            <li key={link.name} className={`relative nav-item-with-submenu ${activeSubmenu === link.name ? 'active' : ''}`} role="none">
              {link.submenu ? (
                <>
                  <Link
                    to={link.path}
                    className="font-medium transition-colors hover:text-primary flex items-center text-base whitespace-nowrap"
                    onMouseEnter={() => handleSubmenuEnter(link.name)}
                    onMouseLeave={handleSubmenuLeave}
                    onKeyDown={createKeyDownHandler(link.name)}
                    aria-expanded={activeSubmenu === link.name}
                    aria-haspopup="true"
                    role="menuitem"
                    tabIndex={0}
                  >
                    {link.name}
                    <span className="ml-1 inline-block text-sm">▾</span>
                  </Link>

                  {/* Dropdown for items with submenu */}
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-border transition-opacity duration-200 z-50 ${
                      activeSubmenu === link.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${link.name.toLowerCase()}-menu`}
                    onMouseEnter={() => handleSubmenuEnter(link.name)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="py-1">
                      {link.submenu?.map((subItem: NavSubmenuItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                          role="menuitem"
                          tabIndex={activeSubmenu === link.name ? 0 : -1}
                          onClick={() => setActiveSubmenu(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="font-medium transition-colors hover:text-primary text-base whitespace-nowrap"
                  role="menuitem"
                  tabIndex={0}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="btn-primary">
            <Link to="/appointments">{finalT.nav.bookNow}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
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
      <div
        className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        id="mobile-menu"
      >
        <div
          className={cn("fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full")}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                    <SafeImage
                      src="/logo/logo.png"
                      alt="miNEURO Logo"
                      className="h-10 w-auto"
                      fallbackSrc="/logo/logo-white.png"
                    />
                  </Link>
                  <LanguageSelector />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full ml-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <nav aria-label="Mobile navigation">
                <ul className="space-y-6" role="menu">
                  {navLinks?.map(link => (
                    <li key={link.name} role="none">
                      <Link
                        to={link.path}
                        className="text-lg font-medium transition-colors hover:text-primary block"
                        onClick={createMobileClickHandler(link)}
                        aria-expanded={link.submenu ? activeSubmenu === link.name : undefined}
                        aria-haspopup={link.submenu ? 'true' : undefined}
                        role="menuitem"
                      >
                        {link.name}
                        {link.submenu && <span className="ml-1 inline-block float-right">▾</span>}
                      </Link>

                      {/* Mobile submenu */}
                      {link.submenu && (
                        <div
                          className={`pl-6 mt-2 space-y-2 ${activeSubmenu === link.name ? 'block' : 'hidden'}`}
                          role="menu"
                          aria-label={`${link.name} submenu`}
                        >
                          {link.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <Button asChild className="w-full btn-primary mt-6">
              <Link to="/appointments" onClick={() => setMobileMenuOpen(false)}>
                {finalT.nav.bookNow}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
