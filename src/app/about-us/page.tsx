import type { Metadata } from "next";
import { ArrowRight, Building2, Gauge, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { aboutPoints } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  path: "/about-us",
  description:
    "Learn how Back Office Solutions supports realtors with REVA services focused on follow-up, admin, and back office consistency.",
});

const aboutIcons = [Building2, Gauge, Target];

export default function AboutUsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Back Office Solutions"
        title="REVA support for realtors should feel organized, dependable, and practical."
        description="Back Office Solutions exists to help real estate professionals build a cleaner REVA support system without losing quality, visibility, or follow-through."
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="cut-panel media-frame overflow-hidden">
          <Image
            src="/boss-hero.jpg"
            alt="Back Office Solutions team support"
            width={1600}
            height={1000}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="cut-panel panel-section">
          <div className="info-row">
            <span className="ink-icon-wrap">
              <Building2 />
            </span>
            <p className="mono-kicker pt-2 text-[#1698c9]">Our approach</p>
          </div>
          <h2
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            We help realtors protect time, improve response discipline, and keep
            admin from taking over the day.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5f748d]">
            Real estate businesses often feel the pressure of too many small but
            important tasks happening at once. Leads need responses, records need
            updates, appointments need coordination, and client communication
            needs consistency. Our work is built around helping with exactly that
            type of support burden.
          </p>
          <p className="mt-4 text-base leading-8 text-[#5f748d]">
            The objective is not to add noise. It is to create more reliable
            execution behind the scenes so agents and teams can stay closer to
            sales, relationships, and deal flow.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutPoints.map((item, index) => {
          const Icon = aboutIcons[index];

          return (
            <article key={item.title} className="cut-panel panel-compact flex h-full flex-col">
              <span className="ink-icon-wrap">
                <Icon />
              </span>
              <p className="mono-kicker mt-5 text-[#5f748d]">Why it matters</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#102845]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[#5f748d]">
                {item.text}
              </p>
            </article>
          );
        })}
      </section>

      <section className="cut-panel panel-section">
        <span className="eyebrow">Who we support</span>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div>
            <h2
              className="text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Built for independent realtors, growing teams, and real estate
              businesses that need more structure behind the scenes.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-[#5f748d]">
            <p>
              Some clients need help keeping lead follow-up consistent. Others
              need better control over CRM tasks, inbox flow, calendar support, or
              listing administration. The right support model depends on where the
              recurring friction is happening.
            </p>
            <p>
              What stays constant is the goal: take repetitive support work off
              the agent&apos;s shoulders while keeping communication, accuracy, and
              responsiveness strong.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Independent realtors",
            "Small sales teams",
            "Growing brokerages",
            "Lead-driven real estate businesses",
          ].map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="cut-panel panel-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Next step</span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              If you know the workload is there, the next step is deciding what
              should be delegated first.
            </h2>
          </div>

          <Link href="/contact-us" className="action-primary">
            Contact our team
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
