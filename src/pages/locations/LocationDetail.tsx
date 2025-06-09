import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Calendar, Car, Train, Bus, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LocationDetail() {
  const { t } = useLanguage();
  const { location } = useParams<{ location: string }>();
  interface LocationData {
    id: string;
    name: string;
    address: string;
    phone: string;
    fax?: string;
    email?: string;
    hours: string;
    isPrimary: boolean;
    image?: string;
    description: string;
    parking: string;
    publicTransport: string;
    nearbyFacilities?: string[];
    mapUrl?: string;
  }

  const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // In a real application, this would fetch data from an API
    // For this example, we'll use hardcoded data
    const locations = {
      "surrey-hills": {
        id: "surrey-hills",
        name: "Surrey Hills",
        address: "miNEURO Consulting Suites, Suite 4, Ground Floor, 619 Canterbury Road, SURREY HILLS VIC 3127",
        phone: "(03) 90084200",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM",
        isPrimary: true,
        image: "/images/miNEURO-brain-spine-advanced-technology-precision-miniamlly-invasive-neurosurgery-Melbourne-Surrey-Hills-entrance.jpg",
        description: "Are you struggling with neck or back problems? Do you need expert consultation and treatment for neurosurgical or spinal conditions? Dr Ales Aliashkevich, a neurosurgeon and spine surgeon, has cared for patients in Melbourne since 2012. He offers consultations at his main office in Surrey Hills and operates at major Melbourne Hospitals. With expertise in advanced minimally-invasive treatments for various neurosurgical and spinal conditions, radiculopathy, myelopathy, brain, spine and nerve tumours or intervertebral disc problems, Dr. Aliashkevich provides comprehensive care at this primary consulting suite and administrative headquarters. The Surrey Hills location is equipped with state-of-the-art facilities to ensure the highest quality of care for all patients.",
        parking: "Free on-site parking is available for patients at the rear of the building.",
        publicTransport: "The practice is accessible via public transport, with bus stops nearby and Surrey Hills train station within walking distance.",
        nearbyFacilities: ["Epworth Eastern Hospital", "Box Hill Hospital", "Cabrini Hospital Malvern", "St Vincent's Private Hospital", "The Avenue Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288576424!2d145.1015663!3d-37.8204709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2s619%20Canterbury%20Rd%2C%20Surrey%20Hills%20VIC%203127!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "mornington": {
        id: "mornington",
        name: "Mornington",
        address: "Nepean Specialist Centre, 1050 Nepean Highway, MORNINGTON 3931",
        phone: "(03) 5975 4583",
        fax: "(03) 5975 4584",
        email: "reception@mineuro.com.au",
        hours: "Tuesday & Thursday: 9:00 AM - 5:00 PM",
        isPrimary: false,
        image: "/images/neurosurgery-mornington-specialist-centre-reception-consulting.jpg",
        description: "Dr. Aliashkevich provides neurosurgical consultations at the Nepean Specialist Centre in Mornington, offering convenient access to specialist care for patients on the Mornington Peninsula. This modern facility allows patients to receive expert neurosurgical assessment and follow-up care without needing to travel to Melbourne. The Mornington location is part of Dr. Aliashkevich's commitment to making advanced neurosurgical care accessible to patients across Victoria.",
        parking: "Free on-site parking is available for patients.",
        publicTransport: "The practice is accessible via bus services that stop on Nepean Highway.",
        nearbyFacilities: ["The Bays Hospital", "Frankston Hospital", "Peninsula Private Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9!2d145.0358!3d-38.2298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d7e8935c0f%3A0x5045675218ccd90!2s1050%20Nepean%20Hwy%2C%20Mornington%20VIC%203931!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "bundoora": {
        id: "bundoora",
        name: "Bundoora",
        address: "UniHill Specialist Consulting Suites, Suite 32, Level 4, 240 Plenty Road, BUNDOORA 3083",
        phone: "(03) 9467 3344",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Thursday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/bundoora-unihill-specialist-consulting-neurosurgery-reception-desk.jpg",
        description: "The Bundoora consulting location at UniHill Consulting Suites provides neurosurgical services to patients in Melbourne's northern suburbs. Dr. Aliashkevich offers consultations on a fortnightly basis, providing expert assessment and management of brain, spine, and nerve conditions in a convenient location for local residents.",
        parking: "Parking is available in the UniHill shopping centre car park.",
        publicTransport: "The location is accessible via tram and bus services that stop on Plenty Road.",
        nearbyFacilities: ["Northern Hospital", "Austin Hospital", "Mercy Hospital for Women"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d145.0667!3d-37.7016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64f5c8b5c5c5b%3A0x5045675218ccd90!2s240%20Plenty%20Rd%2C%20Bundoora%20VIC%203083!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "frankston": {
        id: "frankston",
        name: "Frankston",
        address: "Peninsula Private Hospital, Mezzanine Consulting Suites, 525 McClelland Drive, FRANKSTON 3199",
        phone: "(03) 9781 4133",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Monday & Wednesday: 9:00 AM - 5:00 PM",
        isPrimary: false,
        image: "/images/peninsula-private-hospital-entrance-consulting-ales-aliashkevich-neurosurgeon-spine.jpg",
        description: "Dr. Aliashkevich consults at Peninsula Private Hospital in Frankston, providing neurosurgical services to patients in Melbourne's southeastern suburbs and the Mornington Peninsula. The consulting suites are located within the hospital, offering convenient access to diagnostic services and surgical facilities if needed.",
        parking: "Free on-site parking is available at Peninsula Private Hospital.",
        publicTransport: "The hospital is accessible via bus services that stop nearby.",
        nearbyFacilities: ["Peninsula Private Hospital", "Frankston Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9!2d145.1823!3d-38.1452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d7e8935c0f%3A0x5045675218ccd90!2s525%20McClelland%20Dr%2C%20Frankston%20VIC%203199!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "werribee": {
        id: "werribee",
        name: "Werribee",
        address: "Consulting Rooms, 297 Princes Highway, WERRIBEE 3030",
        phone: "(03) 9741 9200",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Tuesday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/werribee-consulting-rooms-neurosurgery-entrance.jpg",
        description: "Dr. Aliashkevich provides neurosurgical consultations in Werribee on a fortnightly basis, serving patients in Melbourne's western suburbs. This location offers convenient access to specialist neurosurgical care for residents of Werribee, Point Cook, Hoppers Crossing, and surrounding areas.",
        parking: "Free on-site parking is available for patients.",
        publicTransport: "The practice is accessible via bus services that stop on Princes Highway.",
        nearbyFacilities: ["Werribee Mercy Hospital", "Wyndham Private Medical Centre"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.7!2d144.6613!3d-37.8991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68953e7a7a4a9%3A0x4b8d5f5d5a1c5c5c!2s297%20Princes%20Hwy%2C%20Werribee%20VIC%203030!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "heidelberg": {
        id: "heidelberg",
        name: "Heidelberg",
        address: "Warringal Private Hospital Consulting Rooms, Level 5, 10 Martin Street, HEIDELBERG 3084",
        phone: "(03) 9457 5566",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Friday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/heidelberg-consulting-rooms-neurosurgeon-spine-surgeon-10-martin-medical.jpg",
        description: "Dr. Aliashkevich consults at Warringal Private Hospital in Heidelberg, providing neurosurgical services to patients in Melbourne's northeastern suburbs. The consulting rooms are located within the hospital, offering convenient access to diagnostic services and surgical facilities if needed.",
        parking: "Parking is available in the hospital car park (fees apply).",
        publicTransport: "The hospital is accessible via train (Heidelberg Station) and bus services.",
        nearbyFacilities: ["Warringal Private Hospital", "Austin Hospital", "Mercy Hospital for Women", "Olivia Newton-John Cancer and Wellness Centre"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d145.0707!3d-37.7561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba85ed%3A0x4045675218ccd90!2s10%20Martin%20St%2C%20Heidelberg%20VIC%203084!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "moonee-ponds": {
        id: "moonee-ponds",
        name: "Moonee Ponds",
        address: "Moonee Ponds Specialist Centre, 827 Mt Alexander Road, MOONEE PONDS 3039",
        phone: "(03) 9370 4333",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Friday: 9:00 AM - 5:00 PM",
        isPrimary: false,
        image: "/images/moonee-ponds-specialist-consulting-rooms.jpg",
        description: "Dr. Aliashkevich provides neurosurgical consultations in Moonee Ponds, serving patients in Melbourne's northwestern suburbs. This location offers convenient access to specialist neurosurgical care for residents of Moonee Ponds, Essendon, Brunswick, and surrounding areas.",
        parking: "Street parking is available, as well as public car parks nearby.",
        publicTransport: "The practice is accessible via tram and bus services, and is a short walk from Moonee Ponds train station.",
        nearbyFacilities: ["John Fawkner Private Hospital", "Royal Melbourne Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d144.9192!3d-37.7657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5c5c5c5c5c%3A0x5045675218ccd90!2s827%20Mt%20Alexander%20Rd%2C%20Moonee%20Ponds%20VIC%203039!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "sunbury": {
        id: "sunbury",
        name: "Sunbury",
        address: "Lake Imaging, 17-19 Horne Street, SUNBURY 3429",
        phone: "(03) 9744 5566",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Wednesday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/sunbury-lake-imaging-consulting-neurosurgery.jpg",
        description: "Dr. Aliashkevich provides neurosurgical consultations in Sunbury on a fortnightly basis, serving patients in Melbourne's outer northwestern suburbs. This location offers convenient access to specialist neurosurgical care for residents of Sunbury, Gisborne, Macedon Ranges, and surrounding areas.",
        parking: "Free on-site parking is available for patients.",
        publicTransport: "The practice is accessible via train (Sunbury Station) and bus services.",
        nearbyFacilities: ["Sunbury Day Hospital", "Northern Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d144.7286!3d-37.5807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6885c5c5c5c5c%3A0x5045675218ccd90!2s17-19%20Horne%20St%2C%20Sunbury%20VIC%203429!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "dandenong": {
        id: "dandenong",
        name: "Dandenong",
        address: "Dandenong Neurology & Specialists Group, 136 David Street, DANDENONG 3175",
        phone: "(03) 9792 4321",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Monday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/dandenong-neurology-specialist-consulting-entrance-neurosurgeon-spine-surgeon.jpg",
        description: "Dr. Aliashkevich provides neurosurgical consultations in Dandenong on a fortnightly basis, serving patients in Melbourne's southeastern suburbs. This location offers convenient access to specialist neurosurgical care for residents of Dandenong, Noble Park, Springvale, and surrounding areas.",
        parking: "Street parking is available, as well as public car parks nearby.",
        publicTransport: "The practice is accessible via train (Dandenong Station) and bus services.",
        nearbyFacilities: ["Dandenong Hospital", "Casey Hospital", "Jessie McPherson Private Hospital"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.0724789036584!2d145.21300491532043!3d-38.1748899796869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b2f7c1e8c9f%3A0x5045675218ccd90!2s136%20David%20St%2C%20Dandenong%20VIC%203175!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      },
      "wantirna": {
        id: "wantirna",
        name: "Wantirna",
        address: "Knox Audiology Specialist Medical Suites, 230 Mountain Highway, WANTIRNA 3152",
        phone: "(03) 9800 0000",
        fax: "(03) 99236688",
        email: "reception@mineuro.com.au",
        hours: "Wednesday: 9:00 AM - 5:00 PM (fortnightly)",
        isPrimary: false,
        image: "/images/wantirna-consulting-rooms-knox-audiology-neurosurgeon-spine-surgeon.jpg",
        description: "Dr. Aliashkevich consults at Knox Private Hospital in Wantirna, providing neurosurgical services to patients in Melbourne's eastern suburbs. The consulting suites are located within the hospital, offering convenient access to diagnostic services and surgical facilities if needed.",
        parking: "Free on-site parking is available at Knox Private Hospital.",
        publicTransport: "The hospital is accessible via bus services that stop nearby.",
        nearbyFacilities: ["Knox Private Hospital", "Wantirna Health", "The Victorian Rehabilitation Centre"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d145.2336!3d-37.8522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63c0a5c5c5c5c%3A0x5045675218ccd90!2s230%20Mountain%20Hwy%2C%20Wantirna%20VIC%203152!5e0!3m2!1sen!2sau!4v1650000000000!5m2!1sen!2sau"
      }
    };

    if (location && locations[location]) {
      setLocationData(locations[location]);
    } else {
      // Handle location not found - will show the "Location Not Found" UI
    }
  }, [location]);

  if (!locationData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <div className="container py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-8">The location you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/locations">View All Locations</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {locationData.name}
              </h1>
              <p className="text-muted-foreground">
                {locationData.isPrimary ? "Primary Practice Location" : "Consulting Location"}
              </p>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl mb-8">
                  <SafeImage
                    src={locationData.image || "/images/medical-consulting.jpg"}
                    alt={locationData.name}
                    className="w-full h-full object-cover"
                    fallbackSrc="/images/medical-consulting.jpg"
                  />
                </div>

                <div className="prose max-w-none dark:prose-invert mb-8">
                  <p>{locationData.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Parking</h3>
                        <p className="text-muted-foreground">{locationData.parking}</p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6 rounded-lg shadow-md bg-card">
                    <div className="flex items-start gap-3">
                      <Bus className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Public Transport</h3>
                        <p className="text-muted-foreground">{locationData.publicTransport}</p>
                      </div>
                    </div>
                  </div>

                  {locationData.nearbyFacilities && locationData.nearbyFacilities.length > 0 && (
                    <div className="card p-6 rounded-lg shadow-md bg-card">
                      <h3 className="font-semibold mb-2">Nearby Hospitals & Facilities</h3>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {locationData.nearbyFacilities.map((facility, index) => (
                          <li key={index}>{facility}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="card p-6 rounded-lg shadow-md bg-card mb-8">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{locationData.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground">Phone: {locationData.phone}</p>
                        {locationData.fax && <p className="text-muted-foreground">Fax: {locationData.fax}</p>}
                      </div>
                    </div>
                    {locationData.email && (
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{locationData.email}</p>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{locationData.hours}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <Button asChild className="w-full">
                      <Link to="/appointments">Book an Appointment</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationData.address)}`} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Map */}
                {locationData.mapUrl && (
                  <div className="rounded-lg overflow-hidden shadow-xl h-80">
                    <iframe
                      src={locationData.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${locationData.name} location`}
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Other Locations</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dr. Aliashkevich consults at multiple locations across Melbourne and Victoria for your convenience.
            </p>
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/locations">View All Locations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
