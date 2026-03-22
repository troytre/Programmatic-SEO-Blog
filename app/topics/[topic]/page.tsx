import { blogs } from "@/lib/blogs";
import Link from "next/link";

export default function TopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const topicPosts = blogs.filter(
    (post) => post.topic === params.topic
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Topic: {params.topic}
      </h1>

      {topicPosts.map((post) => (
        <div key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-500 underline"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}