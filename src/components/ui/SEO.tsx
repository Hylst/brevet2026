import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://hylst.fr/brevet2026';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = 'Hylst Brevet 2026';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  /** Full canonical URL for this page */
  url?: string;
  /** OG type — 'website' for most pages */
  type?: string;
  /** Override og:image — defaults to og-image.png */
  image?: string;
  /** JSON-LD structured data (optional, page-specific) */
  jsonLd?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Brevet 2026 - Révise ton Brevet des Collèges',
  description = "Fiches de révision, quiz interactifs et répétition espacée pour le Brevet des Collèges 2026. Une application 100% gratuite, sans publicité, qui fonctionne sans connexion. Conçue avec ❤️ pour les élèves de 3ème.",
  keywords = 'brevet 2026, révision brevet, quiz brevet, fiches de révision, maths, français, histoire, géographie, sciences, SVT, physique, collège, 3ème, DNB, hors-ligne, PWA',
  url = `${SITE_URL}/`,
  type = 'website',
  image = DEFAULT_IMAGE,
  jsonLd,
}) => {
  // Default JSON-LD: WebApplication schema
  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Espace Réussite Brevet 2026',
    description,
    url: `${SITE_URL}/`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    author: {
      '@type': 'Person',
      name: 'Geoffroy Streit',
      url: 'https://hylst.fr',
    },
    inLanguage: 'fr',
    isAccessibleForFree: true,
    keywords,
  };

  const structuredData = jsonLd ?? defaultJsonLd;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} — Espace Réussite Brevet 2026`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
