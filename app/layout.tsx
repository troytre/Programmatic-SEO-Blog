import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://programmatic-seo-blog.vercel.app"),
  title: {
    default: "Punisher SEO Blog",
    template: "%s | Punisher SEO",
  },
  description: "SEO, Next.js, Programmatic SEO, and Growth Engineering experiments.",

  alternates: {
  canonical: "https://programmatic-seo-blog.vercel.app/",
},
robots: {
  index: true,
  follow: true,
},
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
