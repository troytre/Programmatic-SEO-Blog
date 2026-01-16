import type { Metadata } from "next";

type Props = {
  params: { slug?: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug ?? "blogs";

  const title = slug.replace(/-/g, " ");

  return {
    title,
    description: `SEO learning article about ${title}`,
  };
}

export default function BlogPost({ params }: Props) {
  const slug = params.slug ?? "blog";

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="mt-4">
        This is my real-time SEO + Next.js learning log.
      </p>
    </article>
  );
}
