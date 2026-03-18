"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 border-b border-gray-700 text-white">
      
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Growth Blog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center whitespace-nowrap">

          <Link href="/blog">Blog</Link>

          {/* Topics Dropdown */}
          <div className="relative">
            <button onClick={() => setTopicOpen(!topicOpen)}>
              Topics ⌄
            </button>

            {topicOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg w-48 z-50">

                <Link href="/topics/nextjs" className="block px-4 py-2 hover:bg-gray-100">
                  Next.js
                </Link>

                <Link href="/topics/seo" className="block px-4 py-2 hover:bg-gray-100">
                  SEO
                </Link>

                <Link href="/topics/ai" className="block px-4 py-2 hover:bg-gray-100">
                  AI
                </Link>

                <Link href="/topics/programmatic-seo" className="block px-4 py-2 hover:bg-gray-100">
                  Programmatic SEO
                </Link>

              </div>
            )}
          </div>

          <Link href="/tools">Tools</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/hire-me">Hire Me</Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

          <Link href="/blog">Blog</Link>

          {/* Mobile Topics Dropdown */}
          <div>
            <button onClick={() => setTopicOpen(!topicOpen)}>
              Topics ⌄
            </button>

            {topicOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/topics/nextjs">Next.js</Link>
                <Link href="/topics/seo">SEO</Link>
                <Link href="/topics/ai">AI</Link>
                <Link href="/topics/programmatic-seo">
                  Programmatic SEO
                </Link>
              </div>
            )}
          </div>

          <Link href="/tools">Tools</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/hire-me">Hire Me</Link>

        </div>
      )}

    </nav>
  );
}