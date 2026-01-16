import type { Metadata } from "next";
import Image from "next/image"; 

export const metadata: Metadata = {
  title: "SEO + Next.js Growth Engineering | Programmatic SEO Journey",
  description:
    "A public journey into modern SEO using Next.js App Router, Server Rendering, Programmatic SEO, and performance-first architecture.",
  openGraph: {
    title: "SEO + Next.js Growth Engineering",
    description:
      "Learn modern SEO with Next.js, Programmatic SEO and scalable content systems.",
    url: "https://programmatic-seo-blog.vercel.app/",
    siteName: "Punisher SEO",
    images: [
      {
        url: "/images/seo-nextjs-growth.png",
        width: 1200,
        height: 630,
        alt: "SEO + Next.js Growth Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO + Next.js Growth Engineering",
    description:
      "Building scalable SEO content systems with Next.js and programmatic SEO.",
    images: ["/images/seo-nextjs-growth.png"],
  },
};

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          SEO + Next.js Growth Engineering 🚀  
          <br />
          Building Scalable Content Systems That Rank
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl">
          This is a public journey into modern SEO using Next.js App Router,
          Server Rendering, Programmatic SEO, and performance-first architecture.
          Not theory. Real systems. Real experiments.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section>
        <Image
          src="/images/seo-nextjs-growth12.png"
          alt="SEO and Next.js Growth Engineering Architecture"
          width={1200}
          height={630}
          priority
          className="rounded-xl border border-gray-700"
        />
      </section>

      {/* WHAT THIS SITE IS ABOUT */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">
          What This Website Is About
        </h2>

        <p className="text-gray-300 max-w-4xl">
          Most people treat SEO as a content or keyword problem.
          This project treats SEO as an <strong>engineering and systems problem</strong>.
          Using Next.js, we explore how rendering strategies, metadata, performance,
          and automation can create unfair ranking advantages.
        </p>
      </section>

      {/* FEATURE GRID */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="border border-gray-700 rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">SEO Engineering</h3>
          <p className="text-gray-400">
            Server-side rendering, metadata control, sitemaps, crawl optimization,
            and search-friendly architecture.
          </p>
        </div>

        <div className="border border-gray-700 rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">Next.js App Router</h3>
          <p className="text-gray-400">
            Deep exploration of Server Components, Static Generation, ISR,
            and rendering tradeoffs for real-world SEO.
          </p>
        </div>

        <div className="border border-gray-700 rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">Programmatic SEO</h3>
          <p className="text-gray-400">
            Building scalable page-generation systems that target thousands
            of keywords without sacrificing performance or quality.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Who This Journey Is For
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Developers who want to understand SEO deeply</li>
          <li>Content creators who want scalable growth systems</li>
          <li>Freelancers targeting high-value SEO + dev contracts</li>
          <li>Engineers aiming for growth, marketing, or platform roles</li>
        </ul>
      </section>

      {/* CTA SECTION */}
      <section className="border border-gray-700 rounded-xl p-8 space-y-4">
        <h2 className="text-3xl font-semibold">
          Follow the Journey
        </h2>

        <p className="text-gray-300 max-w-3xl">
          Every experiment, failure, and insight is documented publicly —
          from basic rendering concepts to advanced programmatic SEO systems.
        </p>

        <a
          href="/blog"
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:opacity-90"
        >
          Read the Blog →
        </a>
      </section>

    </main>
  );
}
