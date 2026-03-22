export const posts = [
  {
    slug: "nextjs-seo-setup",
    title: "Complete Next.js SEO Setup (App Router + Metadata + Sitemap)",
    description: "Learn how to fully optimize your Next.js app for SEO.",
    topic: "nextjs",
   content: `
# Complete Next.js SEO Setup (App Router + Metadata + Sitemap)

If you're building with Next.js and ignoring SEO, you're leaving traffic on the table.

In this guide, I’ll walk you through how I set up SEO for my Next.js project using App Router.

---

## Why SEO in Next.js Matters

Next.js gives you powerful rendering options like SSR, SSG, and ISR.

This means:
- Faster load times
- Better crawlability
- Higher ranking potential

But only if configured properly.

---

## Step 1: Metadata Setup

In Next.js App Router, metadata is defined in layout.tsx.

Example:

export const metadata = {
  title: "My SEO Blog",
  description: "Learning SEO with Next.js",
};

This helps Google understand your page.

---

## Step 2: Dynamic Metadata

For dynamic routes like blog pages:

Use generateMetadata:

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  };
}

This ensures every page has unique SEO tags.

---

## Step 3: Sitemap Setup

Create:

app/sitemap.ts

Example:

export default function sitemap() {
  return [
    { url: "https://yourdomain.com" },
    { url: "https://yourdomain.com/blog" },
  ];
}

Sitemap helps Google discover pages faster.

---

## Step 4: Robots.txt

Create:

app/robots.ts

Example:

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}

This tells search engines how to crawl your site.

---

## Step 5: Internal Linking

Every blog post should link to:
- Other posts
- Topic pages

This improves:
- Crawl depth
- SEO ranking

---

## Step 6: Rendering Strategy (SSR vs SSG vs ISR)

- SSR → dynamic content
- SSG → static fast pages
- ISR → best of both worlds

For blogs:
ISR is powerful.

---

## My Results (Real Case)

Within a few days:
- Website indexed
- Impressions started
- First clicks received

This proves the setup works.

---

## Final Thoughts

Next.js is not just a frontend framework.

It’s a full SEO engine if used correctly.

This is just Day 1 of my journey.

More experiments coming soon.

`},
    {
  slug: "nextjs-metadata-guide",
  title: "Next.js Metadata Guide (generateMetadata Explained)",
  description: "Learn how to use metadata and generateMetadata in Next.js for SEO.",
  topic: "seo",
    content: `
# Next.js Metadata Guide (generateMetadata Explained)

If you're using Next.js and not leveraging metadata properly, you're missing out on a huge SEO opportunity.

In this guide, I’ll break down how metadata works in Next.js App Router and how to use generateMetadata effectively.

---

## What is Metadata in Next.js?

Metadata helps search engines understand your page content.

It includes:
- Title
- Description
- Open Graph tags
- SEO signals

In Next.js, metadata is handled at the layout and page level.

---

## Static Metadata Example

You can define metadata like this:

export const metadata = {
  title: "My Blog",
  description: "Learning Next.js SEO",
};

This works well for static pages like homepage.

---

## Dynamic Metadata (generateMetadata)

For dynamic pages like blogs:

Use generateMetadata:

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  };
}

This ensures each page gets unique SEO tags.

---

## Why Dynamic Metadata Matters

Without dynamic metadata:
- All pages have same title ❌
- Google gets confused ❌
- Ranking drops ❌

With dynamic metadata:
- Unique titles ✅
- Better indexing ✅
- Higher ranking potential ✅

---

## Best Practices

Always:
- Use meaningful titles
- Add descriptions with keywords
- Keep titles under 60 characters
- Keep descriptions under 160 characters

---

## Real Example (This Blog)

For this blog:

Slug:
nextjs-metadata-guide

Title becomes:
Next.js Metadata Guide

Description:
SEO learning article about Next.js Metadata Guide

---

## Common Mistakes

Avoid:
- Duplicate titles
- Missing descriptions
- Keyword stuffing

---

## Final Thoughts

Metadata is one of the simplest yet most powerful SEO tools in Next.js.

If you get this right, you're already ahead of most developers.

This is Day 2 of my SEO journey.

More deep dives coming next.

`,
  },
  {
    slug: "nextjs-sitemap-robots",
  title: "Next.js Sitemap & Robots.txt Setup (Step-by-Step)",
  description: "Learn how to create sitemap and robots.txt in Next.js for better SEO.",
  topic: "seo",
    content: `
# Next.js Sitemap & Robots.txt Setup (Step-by-Step Guide)

If your website is not properly crawled, it will not rank.

Two essential files help search engines understand your site:
- sitemap.xml
- robots.txt

In this guide, I’ll show how to set them up in Next.js.

---

## What is a Sitemap?

A sitemap is a file that lists all important URLs of your website.

It helps Google:
- Discover new pages faster
- Understand site structure
- Crawl efficiently

---

## Creating Sitemap in Next.js

In App Router, create:

app/sitemap.ts

Example:

export default function sitemap() {
  return [
    { url: "https://yourdomain.com" },
    { url: "https://yourdomain.com/blog" },
  ];
}

---

## Dynamic Sitemap (Recommended)

Instead of hardcoding, use your data:

import { posts } from "@/lib/blogData";

export default function sitemap() {
  return posts.map((post) => ({
    url: \`https://yourdomain.com/blog/\${post.slug}\`,
  }));
}

This ensures every blog is included automatically.

---

## What is Robots.txt?

robots.txt tells search engines:
- Which pages to crawl
- Which pages to ignore

---

## Creating Robots.txt in Next.js

Create:

app/robots.ts

Example:

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}

---

## Why This Matters for SEO

Without sitemap:
- Pages may not be discovered ❌

Without robots.txt:
- Crawling issues ❌

With both:
- Faster indexing ✅
- Better visibility ✅

---

## Real Implementation (This Blog)

In this blog:
- Sitemap auto-updates from blogData
- Robots.txt points to sitemap

This ensures all posts are discoverable.

---

## Common Mistakes

Avoid:
- Missing sitemap link in robots.txt
- Blocking important pages
- Not updating sitemap

---

## Final Thoughts

Sitemap and robots.txt are foundational SEO tools.

Set them up once, and they keep working for you.

This is Day 3 of my SEO journey.

More advanced topics coming next.

`,
  },
  {
    slug: "ssg-ssr-isr-nextjs",
  title: "SSR vs SSG vs ISR in Next.js (SEO Guide)",
  description: "Understand SSR, SSG and ISR in Next.js and their SEO impact.",
  topic: "nextjs",
    content: `
# SSR vs SSG vs ISR in Next.js (SEO Explained)

If you're serious about SEO in Next.js, you must understand rendering strategies.

Because how your page is rendered directly impacts:
- Page speed
- Crawlability
- Ranking

In this guide, we’ll break down SSR, SSG, and ISR in simple terms.

---

## What is SSR (Server Side Rendering)?

SSR means the page is generated on every request.

Example use case:
- Dashboards
- Real-time data

Pros:
- Always fresh data
- Good for dynamic content

Cons:
- Slower than static pages
- Higher server load

SEO Impact:
Good, but slower speed can hurt rankings.

---

## What is SSG (Static Site Generation)?

SSG generates pages at build time.

Example use case:
- Blog posts
- Landing pages

Pros:
- Extremely fast
- Best performance
- SEO friendly

Cons:
- Content not updated automatically

SEO Impact:
Excellent, because speed = ranking boost.

---

## What is ISR (Incremental Static Regeneration)?

ISR is a hybrid approach.

Pages are generated statically but can update after a time interval.

Example:

export const revalidate = 60;

This means:
Page updates every 60 seconds.

Pros:
- Fast like SSG
- Updated like SSR

Cons:
- Slight complexity

SEO Impact:
Best of both worlds.

---

## Which One Should You Use?

For blogs:

SSG or ISR is best.

Why?
- Fast load times
- Better indexing
- Lower server cost

---

## Real Example (This Blog)

This blog uses static generation.

Pages are:
- Fast
- SEO optimized
- Easy to scale

---

## Common Mistakes

Avoid:
- Using SSR everywhere
- Ignoring caching
- Not understanding revalidation

---

## Final Thoughts

Rendering strategy is not just a technical decision.

It’s an SEO decision.

If you choose wrong:
- You lose rankings

If you choose right:
- You gain speed + traffic

This is Day 4 of my SEO journey.

More advanced insights coming next.

`,
  },
  {
   slug: "google-indexing-case-study",
  title: "How Google Indexed My New Website (Case Study)",
  description: "Real case study of how Google indexed a new website with zero backlinks.",
  topic: "seo",
    content: `
# How Google Indexed My New Website (Real Case Study)

When I launched my website, it had zero traffic, zero authority, and zero backlinks.

But within a few days, Google started:
- Crawling my pages
- Showing impressions
- Giving initial rankings

This is the exact journey.

---

## Day 0: Website Launch

I deployed my site using Vercel.

Setup included:
- Next.js App Router
- Blog system
- Basic SEO structure

At this point:
- No indexing
- No traffic

---

## Day 1: SEO Setup

I implemented:
- Metadata
- Sitemap
- Robots.txt

Then submitted the site to Google Search Console.

---

## Day 2–3: First Crawls

Google started visiting:
- Homepage
- Blog pages

I checked:
Search Console → URL Inspection

Status:
"Discovered – currently not indexed"

This is normal.

---

## Day 4–5: First Impressions

Suddenly, impressions started appearing.

Even without backlinks.

Why?

Because:
- Proper structure
- Internal linking
- Sitemap submitted

---

## What Helped the Most

1. Clean URL structure
2. Fast loading pages
3. Sitemap submission
4. Consistent content publishing

---

## What I Did NOT Do

- No backlinks
- No paid traffic
- No promotion

Still, Google picked up the site.

---

## Lessons Learned

1. Google finds good structure fast
2. SEO basics matter more than hacks
3. Content consistency is key

---

## Current Status

Within a short time:
- Indexed pages increasing
- Impressions growing
- Clicks starting

This proves:
SEO works when done correctly.

---

## Final Thoughts

You don’t need tricks.

You need:
- Structure
- Consistency
- Clarity

This is Day 5 of my SEO journey.

Next, I’ll explore scaling content with programmatic SEO.

`,
  },
  {
    slug: "programmatic-seo-nextjs",
  title: "Programmatic SEO with Next.js (Beginner Guide)",
  description: "Learn how to scale SEO using programmatic content in Next.js.",
  topic: "programmatic-seo",
    content: `
# Programmatic SEO with Next.js (Beginner Guide)

If you want to scale your website from 10 pages to 1000+ pages, programmatic SEO is the way.

In this guide, I’ll explain how programmatic SEO works and how you can implement it using Next.js.

---

## What is Programmatic SEO?

Programmatic SEO means creating multiple pages using data and templates.

Instead of writing each page manually:
- You create a system
- Data generates pages automatically

Example:
- 1000 city pages
- 1000 product pages
- 1000 keyword variations

---

## Why Programmatic SEO Works

Google ranks pages based on:
- Relevance
- Structure
- Content

If you can generate:
- Structured pages
- Unique intent-based content

You can scale traffic massively.

---

## How Next.js Helps

Next.js is perfect for programmatic SEO because of:

- Dynamic routing
- Static generation
- Fast performance

Example route:

/blog/[slug]

You already created a system where:
- Data → Page
- Slug → URL

This is the base of programmatic SEO.

---

## Simple Example

Your current blog system:

posts = [
  { slug: "nextjs-seo-setup" },
  { slug: "metadata-guide" }
]

Each object creates a page.

Now imagine:

1000 objects → 1000 pages

---

## Real World Examples

- Job listing websites
- Travel websites
- Directory websites
- SaaS landing pages

All use programmatic SEO.

---

## Key Components

To build programmatic SEO system:

1. Data source
2. Page template
3. Internal linking
4. Sitemap automation

You already built:
- Data → blogData.ts
- Template → [slug] page
- Sitemap → auto

---

## Common Mistakes

Avoid:
- Duplicate content
- Thin pages
- No internal linking

Google can penalize bad programmatic SEO.

---

## Next Step (Advanced)

To scale further:

- Use APIs
- Use databases
- Generate dynamic content

---

## Final Thoughts

Programmatic SEO is not about shortcuts.

It’s about building systems.

If done right:
- Traffic scales
- Authority grows
- Income follows

This is Day 6 of my SEO journey.

Tomorrow: fixing common Next.js SEO issues.

`,
  },
  {
      slug: "nextjs-hydration-errors",
  title: "Fixing Hydration Errors in Next.js (SEO Impact)",
  description: "Learn what hydration errors are and how they affect SEO in Next.js.",
  topic: "nextjs",
    content: `
# Fixing Hydration Errors in Next.js (SEO Impact Explained)

If you’ve worked with Next.js, you’ve probably seen hydration errors.

They look scary, but more importantly:
They can affect your SEO and user experience.

In this guide, I’ll explain what hydration errors are and how to fix them.

---

## What is a Hydration Error?

Hydration happens when React attaches event listeners to server-rendered HTML.

If the server output and client output don’t match:
You get a hydration error.

---

## Common Causes

1. Using browser-only APIs
Example:
window, localStorage

2. Random values
Example:
Math.random(), Date.now()

3. Conditional rendering mismatch

---

## Example Problem

Server renders:
"Hello"

Client renders:
"Hello World"

Result:
Hydration mismatch error

---

## Why This Matters for SEO

Hydration errors can cause:
- Layout shifts
- Broken UI
- Poor user experience

And Google considers:
- Page stability
- User interaction
- Core Web Vitals

So indirectly:
Hydration errors can hurt rankings.

---

## Fix 1: Use useEffect

Wrap browser-only logic:

useEffect(() => {
  console.log(window.innerWidth);
}, []);

---

## Fix 2: Conditional Rendering

Check if component is mounted:

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

---

## Fix 3: Avoid Random Values in Render

Instead of:

Math.random()

Use:
- static values
- or generate on server

---

## Fix 4: Use Dynamic Imports

For client-only components:

import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("./Comp"), {
  ssr: false,
});

---

## Real Example (This Project)

While building this blog:
I encountered hydration issues with browser-based logic.

Fixing them improved:
- stability
- rendering consistency
- overall performance

---

## Final Thoughts

Hydration errors are not just bugs.

They are signals:
Your rendering logic needs improvement.

Fix them early to avoid:
- SEO issues
- bad user experience

This is Day 7 of my SEO + Next.js journey.

More advanced experiments coming next.

`,
  },
];