import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Blog Articles",
  description: "All SEO experiments, tutorials and daily learnings.",
};

const posts = [
  {
    slug: "day-1-seo-nextjs",
    title: "Day 1: Why SEO + Next.js?",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Blogs</h1>

      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
