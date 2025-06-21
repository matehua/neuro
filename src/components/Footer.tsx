import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const deviceInfo = useDeviceDetection();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.footer && safeT.nav) ? safeT : {
    footer: {
      description: "Dr. Ales Aliashkevich is a specialist in minimally invasive neurosurgery and spine surgery, using the latest technology to provide the best outcomes for patients.",
      quickLinks: "Quick Links",
      contact: "Contact",
      allRights: "All rights reserved."
    },
    nav: {
      home: "Home",
      expertise: "Expertise",
      appointments: "Appointments",
      gpResources: "GP Resources",
      locations: "Locations",
      contact: "Contact",
      locationsSubmenu: {
        surreyHills: "Surrey Hills",
        mornington: "Mornington",
        frankston: "Frankston",
        mooneePonds: "Moonee Ponds"
      }
    },
    patientResources: {
      title: "Patient Resources"
    }
  };

  return (
    <footer className={cn(
      "bg-card text-card-foreground border-t mobile-safe-area",
      deviceInfo.isMobile ? "pt-mobile-xl pb-mobile-lg" : "pt-16 pb-8"
    )}>
      <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
        <div className={cn(
          "mb-mobile-xl",
          deviceInfo.isMobile
            ? "grid grid-cols-1 gap-mobile-lg"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        )}>
          <div className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:100ms]"
          )}>
            <h4 className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              Dr. Ales Aliashkevich
            </h4>
            <p className={cn(
              "text-muted-foreground mb-mobile-md",
              deviceInfo.isMobile ? "mobile-text" : "mb-4"
            )}>
              {finalT.footer.description}
            </p>
            <nav aria-label="Social media links" className={cn(
              "flex",
              deviceInfo.isMobile ? "space-x-mobile-md" : "space-x-4"
            )}>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Facebook size={deviceInfo.isMobile ? 24 : 20} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Instagram size={deviceInfo.isMobile ? 24 : 20} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Twitter"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Twitter size={deviceInfo.isMobile ? 24 : 20} aria-hidden="true" />
              </a>
            </nav>
          </div>

          <nav aria-labelledby="quick-links-heading" className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:200ms]"
          )}>
            <h4 id="quick-links-heading" className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {finalT.footer.quickLinks}
            </h4>
            <ul className={cn(
              deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
            )}>
              {[
                { name: finalT.nav.home, path: "/" },
                { name: finalT.nav.expertise, path: "/expertise" },
                { name: finalT.patientResources.title, path: "/patient-resources" },
                { name: finalT.nav.appointments, path: "/appointments" },
                { name: finalT.nav.gpResources, path: "/gp-resources" },
                { name: finalT.nav.locations, path: "/locations" },
                { name: finalT.nav.contact, path: "/contact" },
              ].map((link: unknown) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-muted-foreground transition-colors touch-feedback",
                      deviceInfo.isMobile
                        ? "mobile-text block py-mobile-xs"
                        : "hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="contact-heading" className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:300ms]"
          )}>
            <h4 id="contact-heading" className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {finalT.footer.contact}
            </h4>
            <address className={cn(
              deviceInfo.isMobile ? "space-y-mobile-md" : "space-y-3"
            )} style={{ fontStyle: 'normal' }}>
              <div className="flex items-start">
                <MapPin className={cn(
                  "text-primary mr-mobile-sm mt-0.5",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} aria-hidden="true" />
                <span className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  Suite 4, 619 Canterbury Road<br />
                  Surrey Hills VIC 3127<br />
                  Australia
                </span>
              </div>
              <div className="flex items-center">
                <Phone className={cn(
                  "text-primary mr-mobile-sm",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} aria-hidden="true" />
                <a
                  href="tel:+61390084200"
                  aria-label="Call us at (03) 9008 4200"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text"
                      : "hover:text-primary"
                  )}
                >
                  (03) 9008 4200
                </a>
              </div>
              <div className="flex items-center">
                <Mail className={cn(
                  "text-primary mr-mobile-sm",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} aria-hidden="true" />
                <a
                  href="mailto:info@mineuro.com.au"
                  aria-label="Email us at info@mineuro.com.au"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text"
                      : "hover:text-primary"
                  )}
                >
                  info@mineuro.com.au
                </a>
              </div>
            </address>
          </section>

          <nav aria-labelledby="locations-heading" className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:400ms]"
          )}>
            <h4 id="locations-heading" className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {finalT.nav.locations}
            </h4>
            <ul className={cn(
              deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
            )}>
              <li>
                <Link
                  to="/locations/surrey-hills"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text block py-mobile-xs"
                      : "hover:text-primary"
                  )}
                >
                  {finalT.nav.locationsSubmenu.surreyHills}
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/mornington"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text block py-mobile-xs"
                      : "hover:text-primary"
                  )}
                >
                  {finalT.nav.locationsSubmenu.mornington}
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/frankston"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text block py-mobile-xs"
                      : "hover:text-primary"
                  )}
                >
                  {finalT.nav.locationsSubmenu.frankston}
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/moonee-ponds"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text block py-mobile-xs"
                      : "hover:text-primary"
                  )}
                >
                  {finalT.nav.locationsSubmenu.mooneePonds}
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className={cn(
                    "text-primary transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text block py-mobile-xs"
                      : "hover:underline"
                  )}
                >
                  View All Locations
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={cn(
          "border-t border-border text-center text-muted-foreground",
          deviceInfo.isMobile
            ? "pt-mobile-lg mt-mobile-lg"
            : "pt-8 mt-8"
        )}>
          <p className={cn(
            deviceInfo.isMobile ? "mobile-text" : ""
          )}>
            &copy; {currentYear} Dr. Ales Aliashkevich | miNEURO Brain and Spine Surgery. {finalT.footer.allRights}
          </p>
          <div className={cn(
            deviceInfo.isMobile
              ? "mt-mobile-md flex flex-col space-y-mobile-sm"
              : "mt-2 space-x-4"
          )}>
            <Link
              to="/privacy-policy"
              className={cn(
                "text-muted-foreground transition-colors touch-feedback",
                deviceInfo.isMobile
                  ? "mobile-text py-mobile-xs"
                  : "hover:text-primary"
              )}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className={cn(
                "text-muted-foreground transition-colors touch-feedback",
                deviceInfo.isMobile
                  ? "mobile-text py-mobile-xs"
                  : "hover:text-primary"
              )}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
