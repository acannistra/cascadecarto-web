import ogImageSrc from "@images/cc_draft.webp";

export const SITE = {
  title: "Cascade Cartographics",
  tagline: "Fast and Accurate GIS and Mapping Design Services",
  description: "Cascade Cartographics offers GIS and map design services for projects big and small, using modern techniques for high-quality and efficient delivery.",
  description_short: "Cascade Cartographics offers top-quality GIS and map design services for small and medium sized projects.",
  url: "http://cascadecarto.org",
  author: "Tony Cannistra",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} : : GIS and Map Design Services`,
  description: "Cascade Cartographics provides accurate and affordable GIS and map design services for small and medium sized projects.",
  image: ogImageSrc,
};
