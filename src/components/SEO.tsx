import React from 'react';
import { Helmet } from 'react-helmet-async@2.0.5';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
}

export function SEO({
  title = 'Cursiva - Agence Web WordPress & Design Graphique au Québec',
  description = 'Agence web spécialisée en création de sites WordPress, WooCommerce et design graphique au Québec. Sites professionnels de 500$ à 6000$ CAD. Expertise SEO avec Yoast.',
  keywords = 'WordPress Québec, création site web, WooCommerce, design graphique, agence web Québec, SEO Yoast, site vitrine',
  canonicalUrl = 'https://cursiva.ca/',
  ogImage = 'https://cursiva.ca/og-image.jpg',
  type = 'website',
}: SEOProps) {
  // Schema.org données structurées pour l'organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cursiva",
    "url": "https://cursiva.ca",
    "logo": "https://cursiva.ca/favicon.svg",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Québec",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-581-446-7277",
      "contactType": "customer service",
      "email": "contact@cursiva.ca",
      "availableLanguage": ["French", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/cursiva",
      "https://www.instagram.com/cursiva",
      "https://www.linkedin.com/company/cursiva"
    ]
  };

  // Schema.org pour le service professionnel
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Cursiva - Agence Web WordPress",
    "image": ogImage,
    "url": "https://cursiva.ca",
    "telephone": "+1-581-446-7277",
    "email": "contact@cursiva.ca",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Québec",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.8139",
      "longitude": "-71.2080"
    },
    "priceRange": "300-6000 CAD",
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Québec"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    }
  };

  // Schema.org pour les offres de service
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Création de site WordPress",
    "description": "Services de création de sites web WordPress professionnels",
    "price": "300-6000",
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock",
    "url": "https://cursiva.ca/tarifs",
    "seller": {
      "@type": "Organization",
      "name": "Cursiva"
    }
  };

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://cursiva.ca/"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(offerSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}