import { posts } from "@/lib/blogData";
import Link from "next/link";

export default function TopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const topicPosts = posts.filter(
    (post) => post.topic === params.topic
  );

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {params.topic} Articles
      </h1>

      <ul className="space-y-4">
        {topicPosts.map((post) => (
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