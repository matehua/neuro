
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <h4 className="text-xl font-bold mb-4">Dr. Ales Aliashkevich</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-xl font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Suite 4, 619 Canterbury Road<br />
                  Surrey Hills VIC 3127<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">(03) 90084200</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">reception@mineuro.com.au</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in [animation-delay:400ms]">
            <h4 className="text-xl font-bold mb-4">{t.nav.locations}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/surrey-hills" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.locationsSubmenu.surreyHills}</Link>
              </li>
              <li>
                <Link to="/locations/mornington" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.locationsSubmenu.mornington}</Link>
              </li>
              <li>
                <Link to="/locations/frankston" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.locationsSubmenu.frankston}</Link>
              </li>
              <li>
                <Link to="/locations/moonee-ponds" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.locationsSubmenu.mooneePonds}</Link>
              </li>
              <li>
                <Link to="/locations" className="text-primary hover:underline">{t.appointments?.locations?.viewAllLocations || "View All Locations"}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Dr. Ales Aliashkevich | miNEURO Brain and Spine Surgery. {t.footer.allRights}</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">{t.appointment?.confirmation?.privacyPolicy || "Privacy Policy"}</Link>
            <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">{t.appointment?.confirmation?.termsConditions || "Terms & Conditions"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
