import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const deviceInfo = useDeviceDetection();

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
              {t.footer.description}
            </p>
            <div className={cn(
              "flex",
              deviceInfo.isMobile ? "space-x-mobile-md" : "space-x-4"
            )}>
              <a
                href="#"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Facebook size={deviceInfo.isMobile ? 24 : 20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Instagram size={deviceInfo.isMobile ? 24 : 20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className={cn(
                  "text-muted-foreground transition-colors touch-feedback",
                  deviceInfo.isMobile
                    ? "touch-target"
                    : "hover:text-primary"
                )}
              >
                <Twitter size={deviceInfo.isMobile ? 24 : 20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:200ms]"
          )}>
            <h4 className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {t.footer.quickLinks}
            </h4>
            <ul className={cn(
              deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-2"
            )}>
              {[
                { name: t.nav.home, path: "/" },
                { name: t.nav.expertise, path: "/expertise" },
                { name: t.patientResources.title, path: "/patient-resources" },
                { name: t.nav.appointments, path: "/appointments" },
                { name: t.nav.gpResources, path: "/gp-resources" },
                { name: t.nav.locations, path: "/locations" },
                { name: t.nav.contact, path: "/contact" },
              ].map((link) => (
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
          </div>

          <div className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:300ms]"
          )}>
            <h4 className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {t.footer.contact}
            </h4>
            <ul className={cn(
              deviceInfo.isMobile ? "space-y-mobile-md" : "space-y-3"
            )}>
              <li className="flex items-start">
                <MapPin className={cn(
                  "text-primary mr-mobile-sm mt-0.5",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} />
                <span className={cn(
                  "text-muted-foreground",
                  deviceInfo.isMobile ? "mobile-text" : ""
                )}>
                  Suite 4, 619 Canterbury Road<br />
                  Surrey Hills VIC 3127<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className={cn(
                  "text-primary mr-mobile-sm",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} />
                <a
                  href="tel:+61390084200"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text"
                      : "hover:text-primary"
                  )}
                >
                  (03) 9008 4200
                </a>
              </li>
              <li className="flex items-center">
                <Mail className={cn(
                  "text-primary mr-mobile-sm",
                  deviceInfo.isMobile ? "w-5 h-5" : "w-5 h-5 mr-2"
                )} />
                <a
                  href="mailto:info@mineuro.com.au"
                  className={cn(
                    "text-muted-foreground transition-colors touch-feedback",
                    deviceInfo.isMobile
                      ? "mobile-text"
                      : "hover:text-primary"
                  )}
                >
                  info@mineuro.com.au
                </a>
              </li>
            </ul>
          </div>

          <div className={cn(
            deviceInfo.isMobile ? "mobile-fade-in" : "animate-fade-in [animation-delay:400ms]"
          )}>
            <h4 className={cn(
              "font-bold mb-mobile-md",
              deviceInfo.isMobile ? "mobile-subheading" : "text-xl mb-4"
            )}>
              {t.nav.locations}
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
                  {t.nav.locationsSubmenu.surreyHills}
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
                  {t.nav.locationsSubmenu.mornington}
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
                  {t.nav.locationsSubmenu.frankston}
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
                  {t.nav.locationsSubmenu.mooneePonds}
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
          </div>
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
            &copy; {currentYear} Dr. Ales Aliashkevich | miNEURO Brain and Spine Surgery. {t.footer.allRights}
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
}
