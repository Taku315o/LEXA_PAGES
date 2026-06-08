import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://lexa-learn.com").replace(/\/$/, "");

  const routes = ["", "terms", "privacy", "support"];
  const locales = ["ja", "en"];

  const sitemaps: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  for (const locale of locales) {
    for (const route of routes) {
      sitemaps.push({
        url: `${siteUrl}/${locale}${route ? `/${route}` : ""}/`,
        lastModified: new Date(),
        changeFrequency: route ? "yearly" : "monthly",
        priority: route ? 0.5 : 0.9,
      });
    }
  }

  return sitemaps;
}
