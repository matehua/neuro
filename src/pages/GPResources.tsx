import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageHeader from "@/components/PageHeader";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SafeImage from "@/components/SafeImage";
export default function GPResources() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHeader
        title={t.gpResources.title}
        subtitle={t.gpResources.subtitle}
        backgroundImage="/images/gp-resources/gp-resources-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.gpResources.overview.title}</h2>
            <p className="text-muted-foreground text-lg">
              {t.gpResources.overview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{t.gpResources.referralProtocols.title}</CardTitle>
                <CardDescription>{t.gpResources.referralProtocols.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t.gpResources.referralProtocols.description}</p>
                <SafeImage
                  src="/images/gp-resources/referral-protocols-1.jpg"
                  alt="Referral Protocols"
                  className="w-full h-48 rounded-md mt-4 object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/gp-resources/referral-protocols">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{t.gpResources.diagnostics.title}</CardTitle>
                <CardDescription>{t.gpResources.diagnostics.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t.gpResources.diagnostics.description}</p>
                <SafeImage
                  src="/images/gp-resources/diagnostics-1.jpg"
                  alt="Neurosurgical Diagnostics"
                  className="w-full h-48 rounded-md mt-4 object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/gp-resources/diagnostics">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{t.gpResources.careCoordination.title}</CardTitle>
                <CardDescription>{t.gpResources.careCoordination.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t.gpResources.careCoordination.description}</p>
                <SafeImage
                  src="/images/gp-resources/care-coordination-1.jpg"
                  alt="Multidisciplinary Care Coordination"
                  className="w-full h-48 rounded-md mt-4 object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/gp-resources/care-coordination">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{t.gpResources.emergencies.title}</CardTitle>
                <CardDescription>{t.gpResources.emergencies.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t.gpResources.emergencies.description}</p>
                <SafeImage
                  src="/images/gp-resources/emergencies-1.jpg"
                  alt="Emergencies and Red Flags"
                  className="w-full h-48 rounded-md mt-4 object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/gp-resources/emergencies">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Our Neurosurgical Team</h2>
            <p className="text-muted-foreground text-lg mb-8">
              If you have specific questions about a patient or need to discuss a case with our neurosurgical team, please don't hesitate to contact us.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
