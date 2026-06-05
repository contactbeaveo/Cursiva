import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    // Schema.org - Organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Cursiva",
      "description": "Agence web spécialisée en création de sites web professionnels et design graphique au Québec",
      "url": "https://cursiva.ca",
      "logo": "https://cursiva.ca/favicon.svg",
      "image": "https://cursiva.ca/og-image.jpg",
      "telephone": "+1-581-446-7277",
      "email": "contact@cursiva.ca",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Québec",
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "46.8139",
        "longitude": "-71.2080"
      },
      "areaServed": {
        "@type": "State",
        "name": "Québec"
      },
      "priceRange": "300$ - 6000$ CAD",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Virement bancaire, carte de crédit",
      "openingHours": "Mo-Fr 09:00-17:00",
      "sameAs": [
        "https://cursiva.ca"
      ],
      "foundingDate": "2020",
      "slogan": "Parce que chaque entreprise mérite d'être vue",
      "brand": {
        "@type": "Brand",
        "name": "Cursiva"
      },
      "serviceType": [
        "Création de sites web",
        "Design graphique",
        "Développement WordPress",
        "SEO",
        "E-commerce"
      ]
    };

    // Schema.org - Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Création de sites web et design graphique",
      "provider": {
        "@type": "Organization",
        "name": "Cursiva",
        "telephone": "+1-581-446-7277",
        "email": "contact@cursiva.ca"
      },
      "areaServed": {
        "@type": "State",
        "name": "Québec"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Web et Design",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Site web 1 page",
              "description": "Site web vitrine d'une page (landing page)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "300-900",
              "priceCurrency": "CAD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Site web 1-3 pages",
              "description": "Site web vitrine de 1 à 3 pages"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "800-3000",
              "priceCurrency": "CAD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Site web 4-7 pages",
              "description": "Site web professionnel de 4 à 7 pages"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "3000-6000",
              "priceCurrency": "CAD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Logo professionnel",
              "description": "Création de logo unique et professionnel"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "400-1200",
              "priceCurrency": "CAD"
            }
          }
        ]
      }
    };

    // Schema.org - Local Business
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cursiva.ca",
      "name": "Cursiva",
      "image": "https://cursiva.ca/og-image.jpg",
      "description": "Agence web au Québec spécialisée en création de sites web et design graphique",
      "url": "https://cursiva.ca",
      "telephone": "+1-581-446-7277",
      "email": "contact@cursiva.ca",
      "priceRange": "300$ - 6000$ CAD",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Québec",
        "addressRegion": "QC",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "46.8139",
        "longitude": "-71.2080"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    };

    // Schema.org - Website
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cursiva",
      "url": "https://cursiva.ca",
      "description": "Agence web spécialisée en création de sites web professionnels et design graphique au Québec",
      "publisher": {
        "@type": "Organization",
        "name": "Cursiva"
      },
      "inLanguage": "fr-CA",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cursiva.ca/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Schema.org - BreadcrumbList (dynamique selon la page)
    const getBreadcrumbSchema = () => {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const breadcrumbList = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://cursiva.ca/"
        }
      ];

      const pathMap: Record<string, string> = {
        'services': 'Services',
        'tarifs': 'Tarifs',
        'a-propos': 'À propos',
        'contact': 'Contact',
        'confidentialite': 'Confidentialité',
        'cookies': 'Cookies',
        'plaintes': 'Plaintes'
      };

      pathSegments.forEach((segment, index) => {
        breadcrumbList.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": pathMap[segment] || segment,
          "item": `https://cursiva.ca/${pathSegments.slice(0, index + 1).join('/')}`
        });
      });

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbList
      };
    };

    // Injecter les schémas dans le head
    const addSchema = (id: string, schema: object) => {
      let scriptTag = document.getElementById(id) as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = id;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    };

    addSchema('schema-organization', organizationSchema);
    addSchema('schema-service', serviceSchema);
    addSchema('schema-local-business', localBusinessSchema);
    addSchema('schema-website', websiteSchema);
    addSchema('schema-breadcrumb', getBreadcrumbSchema());

  }, [location.pathname]);

  return null;
}
