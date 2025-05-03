import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

export default function IndependentReviewsSection() {
  const { t } = useLanguage();

  const reviewPlatforms = [
    {
      name: "Google",
      logo: "/images/review-platforms/google-logo.png",
      rating: 4.8,
      count: 107,
      url: "https://www.google.com/search?sca_esv=87f4b43c6e5f5118&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzYvfuNbJg4ZUg_4v0h_Su-1vfCdDZCK_Aiwjd7Hy8cMR4c9du-LsERQkNqreQo-okG7lcMPSp3Qo-l4kAqBTWaCEI_0PBLSXuZssveJV92SIDsc-9w%3D%3D&q=Dr+Ales+Aliashkevich+Reviews&sa=X&ved=2ahUKEwjKktSiwYaNAxWFcGwGHQnSFQoQ0bkNegQINBAE&biw=1739&bih=1089&dpr=1.88#"
    },
    {
      name: "BirdEye",
      logo: "/images/review-platforms/birdeye-logo.png",
      rating: 4.8,
      count: 107,
      url: "https://reviews.birdeye.com/ales-aliashkevich-170853294132129"
    },
    {
      name: "RateMDs",
      logo: "/images/review-platforms/ratemds-logo.png",
      rating: 5.0,
      count: 40,
      url: "https://www.ratemds.com/doctor-ratings/3604748/Dr-Ales-Aliashkevich-Melbourne-VIC.html/"
    },
    {
      name: "TrustIndex",
      logo: "/images/Trustindex-logo.jpeg",
      rating: 4.9,
      count: 96,
      url: "https://www.trustindex.io/reviews/mineuro.com.au"
    },
    {
      name: "ThreeBestRated",
      logo: "/images/TheBestRated-logo-reviews.jpg",
      rating: 5.0,
      count: 107,
      url: "https://threebestrated.com.au/neurosurgeons-in-melbourne-vic",
      subtitle: "The Best Neurosurgeon in Melbourne"
    }
  ];

  return (
    <section className="section py-20 bg-white dark:bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.independentReviews?.title || "Independent Patient Reviews"}
          </h2>
          <p className="text-muted-foreground">
            {t.independentReviews?.description || "Dr. Aliashkevich has received excellent feedback across multiple independent review platforms. See what patients are saying about their experiences."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {reviewPlatforms.map((platform) => (
            <div key={platform.name} className="card p-6 rounded-lg shadow-md bg-card hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4 h-12">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-logo.png";
                  }}
                />
              </div>
              <div className="flex items-center justify-center mb-2">
                <div className="text-2xl font-bold text-primary">{platform.rating}</div>
                <div className="text-sm text-muted-foreground ml-2">/ 5.0</div>
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 fill-primary text-primary`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">Based on {platform.count} reviews</p>
              {platform.subtitle && (
                <p className="text-xs font-medium text-primary mb-4 italic">"{platform.subtitle}"</p>
              )}
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  View on {platform.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            {t.independentReviews?.note || "These reviews reflect the experiences of real patients who have received treatment from Dr. Aliashkevich. We're proud of our reputation for excellence in neurosurgical care."}
          </p>
          <Button asChild>
            <a href="https://www.google.com/search?q=dr+ales+aliashkevich+reviews" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t.independentReviews?.readMore || "Read More Patient Reviews"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
