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
      />

      <section className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.quote} className="cut-panel panel-compact flex h-full flex-col">
            <span className="ink-icon-wrap">
              <Quote />
            </span>
            <p className="mt-5 text-lg leading-8 text-[#173a66]">&quot;{item.quote}&quot;</p>
            <div className="mt-6 border-t border-[rgba(16,77,129,0.12)] pt-4">
              <p className="text-sm font-semibold text-[#102845]">{item.author}</p>
              <p className="mt-1 text-sm text-[#5f748d]">{item.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="cut-panel panel-section">
        <span className="eyebrow">Common themes</span>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {themeItems.map(({ label, icon: Icon }) => (
            <div key={label} className="panel-soft rounded-[1.6rem] panel-compact flex h-full flex-col">
              <span className="ink-icon-wrap">
                <Icon />
              </span>
              <p className="mt-5 text-sm font-medium leading-7 text-[#173a66]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cut-panel panel-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">See if the fit is right</span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              If this sounds close to what your real estate team needs, the next
              move is a quick call.
            </h2>
          </div>

          <Link href="/contact-us" className="action-primary">
            Contact us
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
