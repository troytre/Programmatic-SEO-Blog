import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://programmatic-seo-blog.vercel.app";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${base}/blog/day-1-seo-nextjs`,
      lastModified: new Date(),
    },
  ];
}
