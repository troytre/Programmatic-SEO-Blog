import { MetadataRoute } from "next";

const blogSlugs = [
  "day-1-seo-nextjs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://programmatic-seo-blog.vercel.app";

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}