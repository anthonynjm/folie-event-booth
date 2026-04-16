import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
  keywords?: string;
  breadcrumbs?: BreadcrumbItem[];
  ogType?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://www.lafolieentertainment.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'La Folie Entertainment',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'Premium photobooth rentals for weddings, corporate events, and parties across Lebanon and the UAE.',
  telephone: '+961-71-582-222',
  email: 'info@lafolieentertainment.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beirut',
    addressCountry: 'LB',
  },
  areaServed: [
    { '@type': 'Country', name: 'Lebanon' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  sameAs: [
    'https://www.instagram.com/lafolieentertainment',
    'https://www.facebook.com/lafolieentertainment',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+961-71-582-222',
    contactType: 'customer service',
    areaServed: ['LB', 'AE'],
    availableLanguage: ['English', 'Arabic'],
  },
};

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
  keywords,
  breadcrumbs,
  ogType = 'website',
  articlePublishedTime,
  articleAuthor,
  noindex,
}: SEOHeadProps) => {
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image = ogImage || `${BASE_URL}/og-default.jpg`;

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: `${BASE_URL}${b.href}`,
          })),
        ],
      }
    : null;

  const allSchemas: object[] = [organizationSchema];
  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      allSchemas.push(...jsonLd);
    } else {
      allSchemas.push(jsonLd);
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Geo targeting */}
      <meta name="geo.region" content="LB" />
      <meta name="geo.placename" content="Beirut" />
      <meta name="geo.position" content="33.8938;35.5018" />
      <meta name="ICBM" content="33.8938, 35.5018" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="La Folie Entertainment" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG */}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
