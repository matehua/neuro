import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Car, Accessibility } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generatePageSEO } from "@/lib/seo";

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      name: "Melbourne Private Surgical Centre",
      address: "Level 4/100 Victoria Parade, East Melbourne VIC 3002",
      phone: "+61 3 9415 9999",
      email: "info@melbourneprivatesurgical.com.au",
      website: "https://melbourneprivatesurgical.com.au/",
      openingHours: "Mon-Fri: 9am - 5pm",
      parking: "Street parking available",
      accessibility: "Wheelchair accessible",
      mapLink: "https://maps.app.goo.gl/9gF2CwEqQy2P1W4J7",
    },
    {
      name: "Melbourne Neurosurgery",
      address: "Level 8/100 Victoria Parade, East Melbourne VIC 3002",
      phone: "+61 3 9999 1111",
      email: "info@melbourneneurosurgery.com.au",
      website: "https://melbourneneurosurgery.com.au/",
      openingHours: "Mon-Fri: 9am - 5pm",
      parking: "Street parking available",
      accessibility: "Wheelchair accessible",
      mapLink: "https://maps.app.goo.gl/i7o5WwJQuFq9jH4A7",
    },
  ];

  // Generate SEO data for locations page
  const locationsSeoData = generatePageSEO('locations', {
    title: 'Locations - miNeuro',
    description: 'Find our consulting locations in Melbourne. Contact us for appointments and consultations.',
  });

  return (
    <Layout pageType="locations" seoData={locationsSeoData}>
      <PageHeader
        title="Our Locations"
        subtitle="Find our consulting locations in Melbourne"
        backgroundImage="/images/melbourne-city-skyline.jpg"
      />

      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="card p-6 rounded-lg shadow-md bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{location.name}</h3>
                  <p className="text-muted-foreground mb-2">
                    <MapPin className="inline-block h-4 w-4 mr-1 align-middle" />
                    {location.address}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <Phone className="inline-block h-4 w-4 mr-1 align-middle" />
                    <a href={`tel:${location.phone}`} className="hover:underline">
                      {location.phone}
                    </a>
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <Mail className="inline-block h-4 w-4 mr-1 align-middle" />
                    <a href={`mailto:${location.email}`} className="hover:underline">
                      {location.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <Clock className="inline-block h-4 w-4 mr-1 align-middle" />
                    {location.openingHours}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <Car className="inline-block h-4 w-4 mr-1 align-middle" />
                    {location.parking}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <Accessibility className="inline-block h-4 w-4 mr-1 align-middle" />
                    {location.accessibility}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline">
                      <Link to={location.mapLink} target="_blank" rel="noopener noreferrer">
                        View on Map
                      </Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link to={location.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
