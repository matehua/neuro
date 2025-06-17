import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SafeImage from '@/components/SafeImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDeviceDetection } from '@/contexts/DeviceContext';

const Locations: React.FC = () => {
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Location data
  const locations = [
    {
      id: "surrey-hills",
      name: "SURREY HILLS",
      address: "miNEURO Consulting Suites, Suite 4, 619 Canterbury Road, SURREY HILLS VIC 3127",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: true,
      image: "/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg"
    },
    {
      id: "mornington",
      name: "MORNINGTON",
      address: "Nepean Specialist Centre, 1050 Nepean Highway, MORNINGTON 3931",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/neurosurgery-mornington-specialist-centre-reception-consulting.jpg"
    },
    {
      id: "bundoora",
      name: "BUNDOORA",
      address: "UniHill Consulting Suites, Level 4 Suite 32, 240 Plenty Road, BUNDOORA 3083",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/bundoora-unihill-specialist-consulting-building-240-plenty-road.jpg"
    },
    {
      id: "frankston",
      name: "FRANKSTON",
      address: "Peninsula Private Hospital, Mezzanine Consulting Suites, 525 McClelland Drive, FRANKSTON 3199",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/peninsula-private-hospital-entrance-consulting-ales-aliashkevich-neurosurgeon-spine.jpg"
    },
    {
      id: "langwarrin",
      name: "LANGWARRIN",
      address: "Peninsula Consulting Suites, Suite 3, 35-37 Cranbourne-Frankston Road, LANGWARRIN VIC 3910",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/langwarrin-consulting-peninsula-rheumatology-entrance-neurosurgery.jpg"
    },
    {
      id: "werribee",
      name: "WERRIBEE",
      address: "Consulting Rooms, 297 Princes Highway, WERRIBEE 3030",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/werribee-consulting-rooms-neurosurgery-entrance.jpg"
    },
    {
      id: "heidelberg",
      name: "HEIDELBERG",
      address: "Warringal Private Hospital Consulting Rooms, Level 5, 10 Martin Street, HEIDELBERG 3084",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon-10-martin-medical.jpg"
    },
    {
      id: "moonee-ponds",
      name: "MOONEE PONDS",
      address: "Moonee Ponds Specialist Centre, 827 Mt Alexander Road, MOONEE PONDS 3039",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/moonee-ponds-specialist-centre-entrance-scaled.jpg"
    },
    {
      id: "sunbury",
      name: "SUNBURY",
      address: "Lake Imaging, 17-19 Horne Street, SUNBURY 3429",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/sunbury-lake-imaging-consulting-neurosurgery.jpg"
    },
    {
      id: "dandenong",
      name: "DANDENONG",
      address: "Dandenong Neurology & Specialists Group, 136 David Street, DANDENONG 3175",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/dandenong-neurology-specialist-consulting-building-neurosurgeon-spine-surgeon.jpg"
    },
    {
      id: "wantirna",
      name: "WANTIRNA",
      address: "Knox Audiology Specialist Medical Suites, 230 Mountain Highway, WANTIRNA 3152",
      phone: "(03) 9008 4200",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      isPrimary: false,
      image: "/images/wantirna-consulting-rooms-knox-audiology-neurosurgeon-spine-surgeon-entrance.jpg"
    }
  ];

  // Find primary location
  const primaryLocation = locations.find(loc => loc.isPrimary);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className={cn(
          "relative bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background mobile-safe-area",
          deviceInfo.isMobile ? "py-mobile-xl" : "py-20"
        )}>
          <div className={cn(
            "relative z-10",
            deviceInfo.isMobile ? "mobile-container" : "container"
          )}>
            <div className={cn(
              "text-center mx-auto",
              deviceInfo.isMobile ? "max-w-full" : "max-w-3xl"
            )}>
              <h1 className={cn(
                "font-bold mt-2 mb-mobile-lg",
                deviceInfo.isMobile
                  ? "mobile-4xl"
                  : "text-4xl md:text-5xl mb-6"
              )}>
                Consulting Locations | Dr Ales Aliashkevich - Neurosurgeon & Spine Surgeon
              </h1>
              <p className={cn(
                "text-muted-foreground",
                deviceInfo.isMobile ? "mobile-text" : ""
              )}>
                Dr Ales Aliashkevich consults at multiple locations across Melbourne and Victoria, including Surrey Hills, Mornington, Langwarrin, Frankston, Bundoora, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Location */}
        {primaryLocation && (
          <section className={deviceInfo.isMobile ? "mobile-section" : "py-16"}>
            <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
              <h2 className={cn(
                "font-bold text-center mb-mobile-lg",
                deviceInfo.isMobile
                  ? "mobile-3xl"
                  : "text-3xl mb-8"
              )}>
                Primary Consulting Location
              </h2>
              <div className={cn(
                "items-center",
                deviceInfo.isMobile
                  ? "grid grid-cols-1 gap-mobile-lg"
                  : "grid grid-cols-1 lg:grid-cols-2 gap-12"
              )}>
                <div>
                  <div className={cn(
                    "relative w-full rounded-lg overflow-hidden shadow-xl",
                    deviceInfo.isMobile ? "h-64" : "h-80"
                  )}>
                    <SafeImage
                      src={primaryLocation.image || "/images/medical-consulting.jpg"}
                      alt={primaryLocation.name}
                      className="w-full h-full object-cover"
                      fallbackSrc="/images/medical-consulting.jpg"
                    />
                  </div>
                </div>
                <div>
                  <h3 className={cn(
                    "font-bold text-primary mb-mobile-md",
                    deviceInfo.isMobile
                      ? "mobile-2xl"
                      : "text-2xl mb-4"
                  )}>
                    {primaryLocation.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{primaryLocation.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{primaryLocation.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{primaryLocation.hours}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <Button asChild>
                      <Link to={`/locations/${primaryLocation.id}`}>View Details</Link>
                    </Button>
                    <div>
                      <Button asChild variant="outline" className="mt-4">
                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(primaryLocation.address)}`} target="_blank" rel="noopener noreferrer">
                          Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Locations */}
        <section className={cn(
          "bg-primary/5",
          deviceInfo.isMobile ? "mobile-section" : "py-16"
        )}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <h2 className={cn(
              "font-bold text-center mb-mobile-lg",
              deviceInfo.isMobile
                ? "mobile-3xl"
                : "text-3xl mb-8"
            )}>
              All Consulting Locations
            </h2>
            <p className={cn(
              "text-center text-muted-foreground mb-mobile-lg",
              deviceInfo.isMobile ? "mobile-text" : "mb-8"
            )}>
              Find the location most convenient for you
            </p>
            <div className={cn(
              deviceInfo.isMobile
                ? "grid grid-cols-1 gap-mobile-lg"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            )}>
              {locations?.map(location => (
                <div key={location.id} className={cn(
                  "card rounded-lg shadow-md bg-card",
                  deviceInfo.isMobile ? "p-mobile-lg" : "p-6"
                )}>
                  <h3 className={cn(
                    "font-semibold text-primary mb-mobile-sm",
                    deviceInfo.isMobile
                      ? "mobile-subheading"
                      : "text-xl mb-3"
                  )}>
                    {location.name}
                  </h3>
                  <div className={cn(
                    "mb-mobile-md",
                    deviceInfo.isMobile ? "space-y-mobile-sm" : "space-y-3 mb-4"
                  )}>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{location.phone}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/locations/${location.id}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment CTA */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Address Your Spine or Brain Issue?</h2>
              <p className="text-muted-foreground mb-8">
                Book a consultation today and learn how Dr. Aliashkevich can improve your quality of life using minimally-invasive techniques.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

Locations.displayName = 'Locations';

export default Locations;
