import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import SafeImage from '@/components/SafeImage';
import StandardPageLayout from '@/components/StandardPageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en';


const GPResources: React.FC = () => {
  const { t } = useLanguage();

  // Safe fallback for translations
  const safeT = t || en;
  const finalT = (safeT && safeT.gpResources) ? safeT : {
    gpResources: {
      title: "GP Resources",
      subtitle: "Comprehensive resources for general practitioners and referring physicians",
      overview: {
        title: "Supporting General Practitioners",
        description: "Comprehensive resources and guidelines to support optimal patient care and referral processes."
      },
      referralProtocols: {
        title: "Referral & Triage Protocols",
        subtitle: "Guidelines for referring patients to neurosurgical services",
        description: "Comprehensive guidelines to help general practitioners make appropriate referrals."
      },
      diagnostics: {
        title: "Neurosurgical Diagnostics",
        subtitle: "Diagnostic guidelines for neurosurgical conditions",
        description: "Evidence-based diagnostic approaches for common neurosurgical conditions."
      },
      careCoordination: {
        title: "Multidisciplinary Care",
        subtitle: "Coordinated care approaches",
        description: "Guidelines for coordinated multidisciplinary care in neurosurgical patients."
      },
      emergencies: {
        title: "Emergencies & Red Flags",
        subtitle: "Emergency protocols and warning signs",
        description: "Critical information for identifying and managing neurosurgical emergencies."
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StandardPageLayout showHeader={false}>
      <PageHeader
        title={finalT.gpResources.title}
        subtitle={finalT.gpResources.subtitle}
        backgroundImage="/images/gp-resources/gp-resources-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{finalT.gpResources.overview.title}</h2>
            <p className="text-muted-foreground text-lg">
              {finalT.gpResources.overview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{finalT.gpResources.referralProtocols.title}</CardTitle>
                <CardDescription>{finalT.gpResources.referralProtocols.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{finalT.gpResources.referralProtocols.description}</p>
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
                <CardTitle>{finalT.gpResources.diagnostics.title}</CardTitle>
                <CardDescription>{finalT.gpResources.diagnostics.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{finalT.gpResources.diagnostics.description}</p>
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
                <CardTitle>{finalT.gpResources.careCoordination.title}</CardTitle>
                <CardDescription>{finalT.gpResources.careCoordination.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{finalT.gpResources.careCoordination.description}</p>
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
                <CardTitle>{finalT.gpResources.emergencies.title}</CardTitle>
                <CardDescription>{finalT.gpResources.emergencies.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{finalT.gpResources.emergencies.description}</p>
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
    </StandardPageLayout>
  );
};

GPResources.displayName = 'GPResources';

export default GPResources;
