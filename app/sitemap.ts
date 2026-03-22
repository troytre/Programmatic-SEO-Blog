import { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://programmatic-seo-blog.vercel.app";

  const blogUrls = blogs.map((blog) => ({
    url: `${base}/blog/${blog.slug}`,
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