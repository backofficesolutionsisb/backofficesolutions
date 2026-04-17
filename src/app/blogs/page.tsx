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
        title="Read on to discover how cleaner REVA support looks in practice."
        description="These articles answer the questions real estate professionals commonly ask before deciding what kind of REVA support they actually need."
        visual={
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -left-6 top-20 hidden h-[280px] w-[220px] rounded-[2rem] border border-white/28 lg:block" />
            <div className="overflow-hidden rounded-[2rem] bg-[#dff0fb] p-3">
              <div className="h-full overflow-hidden rounded-[1.45rem]">
                <Image
                  src="/realtor-va.jpg"
                  alt="Blog insights for realtor support"
                  width={1000}
                  height={1200}
                  className="h-[430px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <section className="page-wrap">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.map((article, index) => (
            <article key={article.title} className="overflow-hidden rounded-[1.7rem] bg-white shadow-[0_18px_48px_rgba(13,40,73,0.08)]">
              <div className="overflow-hidden bg-[#e6f2fd] p-3">
                <Image
                  src={articleImages[index % articleImages.length]}
                  alt={article.title}
                  width={1280}
                  height={720}
                  className="h-[230px] w-full rounded-[1.15rem] object-cover"
                />
              </div>

              <div className="p-6">
                <span className="ink-icon-wrap">
                  <BookOpen />
                </span>
                <p className="mono-kicker mt-5 text-[#1697c8]">Guide 0{index + 1}</p>
                <h2
                  className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#0d2849]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {article.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#5f7590]">{article.excerpt}</p>
                <div className="mt-5 grid gap-3">
                  {article.paragraphs.slice(0, 2).map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[#34587a]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link href="/contact-us" className="action-link mt-6">
                  Talk through your support needs
                  <ArrowRight className="ink-icon-sm" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap">
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,#e8f5ff,#d9effe)] px-6 py-12 text-center shadow-[0_18px_44px_rgba(13,40,73,0.08)] sm:px-8">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Want more time to do what only your team can do?
          </h2>
          <Link href="/contact-us" className="action-primary mt-7 inline-flex">
            Sign up
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
