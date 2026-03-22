import { posts } from "@/lib/blogData";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-6 text-red-500">
        Post not found: {slug}
      </div>
    );
  }

  const related = posts.filter(
    (p) => p.topic === post.topic && p.slug !== post.slug
  );

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="mt-4 whitespace-pre-line">
        {post.content}
      </p>

      <p className="mt-6">
        Topic:{" "}
        <Link
          href={`/topics/${post.topic}`}
          className="text-blue-500 underline"
        >
          {post.topic}
        </Link>
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Related Posts</h2>

        {related.map((r) => (
          <div key={r.slug}>
            <Link
              href={`/blog/${r.slug}`}
              className="text-blue-500 underline"
            >
              {r.title}
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}