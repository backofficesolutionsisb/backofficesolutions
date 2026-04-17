import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { blogArticles } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Blogs",
  path: "/blogs",
  description:
    "Read practical guides on REVA services for realtors, including lead follow-up, CRM support, admin delegation, and better day-to-day real estate support.",
});

const articleImages = ["/realtor-va.jpg", "/support-desk.jpg", "/boss-hero.jpg"];

export default function BlogsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Blogs"
        title="SEO-friendly guidance for realtors thinking about REVA support, follow-up discipline, and back office operations."
        description="These articles are written to answer the questions real estate professionals commonly ask before deciding what kind of REVA or real estate virtual assistant support they actually need."
      />

      <div className="flex flex-col gap-6">
        {blogArticles.map((article, index) => (
          <article key={article.title} className="cut-panel panel-section">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <span className="ink-icon-wrap">
                  <BookOpen />
                </span>
                <p className="mono-kicker mt-5 text-[#1698c9]">Guide 0{index + 1}</p>
                <h2
                  className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {article.title}
                </h2>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.45rem] border border-[rgba(16,77,129,0.12)]">
              <Image
                src={articleImages[index % articleImages.length]}
                alt={article.title}
                width={1280}
                height={720}
                className="h-[220px] w-full object-cover"
              />
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-[#5f748d]">
              {article.excerpt}
            </p>

            <div className="mt-6 grid gap-4">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[#355c82]">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link href="/contact-us" className="action-link mt-6">
              Talk through your support needs
              <ArrowRight className="ink-icon-sm" />
            </Link>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
