import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
};

export default function BlogCard({ title, description, slug }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition"
    >
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>

      <span className="text-blue-400 font-semibold">
        Read More →
      </span>
    </Link>
  );
}