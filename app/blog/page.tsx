import { posts } from "@/lib/blogData";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-gray-700 rounded-lg p-6 hover:border-blue-500"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}