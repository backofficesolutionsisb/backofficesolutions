import type { Metadata } from "next";
import { ArrowRight, Clock3, Quote, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Testimonials",
  path: "/testimonials",
  description:
    "Read feedback on Back Office Solutions REVA services for realtors, from lead follow-up support to back office coordination.",
});

const themeItems = [
  { label: "More consistent lead follow-up", icon: Clock3 },
  { label: "Better organization behind the scenes", icon: ShieldCheck },
  { label: "Less admin overload for agents", icon: Quote },
];

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Testimonials"
        title="What clients value most is steadier follow-up, cleaner admin flow, and less pressure on the core sales team."
        description="These quotes reflect the kind of REVA support outcomes real estate businesses usually care about most: responsiveness, organization, and a more manageable day-to-day workload."
        centered
      />

      <section className="page-wrap">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <article
              key={item.quote}
              className={`cut-panel panel-section flex h-full flex-col ${
                index % 2 === 0 ? "bg-[linear-gradient(180deg,#ffffff,#f4f9ff)]" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="ink-icon-wrap">
                  <Quote />
                </span>
                <p className="mono-kicker text-[#1697c8]">0{index + 1}</p>
              </div>
              <p
                className="mt-6 text-[1.65rem] font-semibold leading-tight tracking-[-0.035em] text-[#0d2849]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                &quot;{item.quote}&quot;
              </p>
              <div className="mt-6 border-t border-[rgba(13,40,73,0.08)] pt-4">
                <p className="text-sm font-semibold text-[#0d2849]">{item.author}</p>
                <p className="mt-1 text-sm text-[#5f7590]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0a2748,#0c5f93)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(13,40,73,0.14)] sm:px-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <span className="eyebrow">Common themes</span>
              <h2
                className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                The results should feel practical, not vague.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {themeItems.map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-[1.3rem] bg-white/10 p-5 backdrop-blur">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mt-5 text-sm font-medium leading-7 text-white/84">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="rounded-[2rem] bg-[#eef6ff] px-6 py-10 text-center shadow-[0_18px_44px_rgba(13,40,73,0.06)] sm:px-8">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            If this sounds close to what your real estate team needs, the next
            move is a quick call.
          </h2>
          <Link href="/contact-us" className="action-primary mt-7 inline-flex">
            Contact us
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
