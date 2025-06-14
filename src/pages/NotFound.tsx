import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { generatePageSEO } from "@/lib/seo";
import { useDeviceDetection } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const { t } = useLanguage();
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notFoundSeoData = generatePageSEO('notFound');

  return (
    <Layout pageType="not-found" seoData={notFoundSeoData}>
      <main className="flex-1">
        <section className={cn(
          "bg-secondary/10 dark:bg-secondary/20 py-24 text-center relative overflow-hidden",
          deviceInfo.isMobile ? "mobile-safe-area" : ""
        )}>
          <div className={deviceInfo.isMobile ? "mobile-container" : "container"}>
            <div className="max-w-3xl mx-auto">
              <h1 className={cn(
                "text-4xl font-bold mb-6",
                deviceInfo.isMobile ? "mobile-3xl" : ""
              )}>
                {t.hero.notFound.title}
              </h1>
              <p className={cn(
                "text-muted-foreground text-lg mb-8",
                deviceInfo.isMobile ? "mobile-text" : ""
              )}>
                {t.hero.notFound.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link to="/" className="flex items-center gap-2 touch-feedback">
                    <Home className="h-5 w-5" aria-hidden="true" />
                    {t.hero.notFound.backHome}
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/" className="flex items-center gap-2 touch-feedback">
                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                    {t.common.back}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
