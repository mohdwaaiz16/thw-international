import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  type?: string;
  image?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  type = 'website',
  image = 'https://www.thw-intl.co.in/og-image.jpg',
  schema,
}) => {
  const siteName = 'THW International';

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://www.thw-intl.co.in/',
    logo: 'https://www.thw-intl.co.in/logo.png',
    foundingDate: '2004',
    founder: {
      '@type': 'Person',
      name: 'PM Abdul Wajid',
      jobTitle: 'Founder & Managing Director'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vaniyambadi',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India'
    },
    description: 'Leather Manufacturer, Leather Processor and Leather Exporter specializing in Goat and Sheep Finished Leather.'
  };

  const finalSchema = schema ? (Array.isArray(schema) ? [defaultSchema, ...schema] : [defaultSchema, schema]) : defaultSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
