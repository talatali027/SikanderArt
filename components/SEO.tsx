import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  schemaType?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  url = 'https://sikanderart.com',
  image = 'https://sikanderart.com/og-image.jpg',
}: SEOProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sikander Arts",
    "url": "https://sikanderart.com",
    "logo": "https://sikanderart.com/logo.png",
    "image": image,
    "description": description,
    "telephone": "+923022911088",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kharadar",
      "addressLocality": "Karachi",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0566"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "priceRange": "$$",
    "serviceType": [
      "Interior Painting",
      "Exterior Painting",
      "Texture Work",
      "Waterproofing",
      "Wood Painting",
      "Metal Painting",
      "Epoxy Flooring",
      "Commercial Painting"
    ],
    "areaServed": [
      "DHA Karachi",
      "Clifton Karachi",
      "Gulshan-e-Iqbal",
      "North Nazimabad",
      "PECHS",
      "Bahria Town Karachi",
      "Korangi",
      "Saddar"
    ],
    "sameAs": [
      "https://wa.me/923022911088"
    ]
  };

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Sikander Arts" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sikander Arts" />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;