import Link from "next/link";
/*
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6">
        <Link href="/" className="text-white font-semibold hover:underline">
          Home
        </Link>

        <Link href="/blog" className="text-white font-semibold hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  );
}
*/
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-600 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6">
        <Link href="/" className="text-white font-semibold hover:underline">
          Home
        </Link>
        <Link href="/blog" className="text-white font-semibold hover:underline">
          Blog
        </Link>
        <Link href="/" className="text-white font-semibold hover:underline">
          NEXT.JS Guide
        </Link>
        <Link href="/" className="text-white font-semibold hover:underline">
          
        </Link>
      </div>
    </nav>
  );
}
