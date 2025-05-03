import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section 
      className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className={`text-muted-foreground ${backgroundImage ? 'text-white' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
