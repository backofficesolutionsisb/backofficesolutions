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

const processSteps = [
  "Review where your workload is slipping",
  "Identify the most repetitive support tasks",
  "Build a practical handoff and communication rhythm",
  "Run with steadier execution behind the scenes",
];

const statItems = [
  { value: "Focused", label: "on realtor support workflows" },
  { value: "Practical", label: "handoff and admin structure" },
  { value: "Consistent", label: "execution across recurring tasks" },
];

export default function AboutUsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Back Office Solutions"
        title="REVA support for realtors should feel organized, dependable, and practical."
        description="Back Office Solutions exists to help real estate professionals build a cleaner REVA support system without losing visibility, quality, or follow-through."
        visual={
          <div className="grid min-h-[420px] grid-cols-[.34fr_.3fr_.72fr] gap-3">
            <div className="overflow-hidden rounded-[1.5rem] bg-white/10 pt-10 backdrop-blur">
              <Image
                src="/support-desk.jpg"
                alt="Support operations"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-white/10 pt-14 backdrop-blur">
              <Image
                src="/boss-hero.jpg"
                alt="Back Office Solutions team support"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-[#dff0fb] p-3">
              <div className="h-full overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/realtor-va.jpg"
                  alt="REVA support for realtors"
                  width={1100}
                  height={1400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        }
      >
        <p className="max-w-xl text-sm leading-7 text-white/74">
          We help realtors protect time, improve response discipline, and keep
          admin from taking over the day.
        </p>
      </PageIntro>

      <section className="page-wrap">
        <div className="section-glow py-4 text-center">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Ready to focus on the work that actually moves the business?
          </h2>
          <Link href="/contact-us" className="action-primary mt-6 inline-flex">
            You know who to call
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>

      <section className="page-wrap">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0c5f93,#1497c8)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(13,40,73,0.14)] sm:px-8 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,.88fr)] lg:items-start">
            <div>
              <h2
                className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                About Back Office Solutions
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                Real estate businesses often feel pressure from too many small but
                important tasks happening at once. Leads need responses, records
                need updates, appointments need coordination, and client
                communication needs consistency.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                Our work is built around taking exactly that support burden off the
                team so agents can stay closer to sales, relationships, and deal
                flow.
              </p>
            </div>

            <div className="rounded-[1.6rem] bg-[#09233d]/40 p-6 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#dff0fb]">
                Our name reflects our mission
              </p>
              <p
                className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Back Office
              </p>
              <p className="mt-4 text-xl leading-8 text-white/82">
                support that keeps the realtor-facing side of the business moving
                without the admin side becoming chaos.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {statItems.map((item) => (
              <div key={item.label}>
                <p
                  className="text-4xl font-semibold tracking-[-0.05em] text-[#dff0fb]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {item.value}
                </p>
                <p className="mt-3 text-base text-white/76">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,.55fr)_minmax(0,1fr)] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] bg-[#eef6ff] p-4 shadow-[0_18px_44px_rgba(13,40,73,0.08)]">
            <Image
              src="/boss-hero.jpg"
              alt="Back Office Solutions support system"
              width={1280}
              height={900}
              className="h-[420px] w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div className="grid gap-8">
            <div>
              <p className="mono-kicker text-[#1697c8]">The challenge</p>
              <h2
                className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Realtors lose time when follow-up and admin work compete with
                selling time.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f7590]">
                Employers are often overwhelmed with operational tasks, leaving
                little room to focus on growth and client relationships. The need
                for reliable, high-quality support is clear, but it has to be
                structured well to actually help.
              </p>
            </div>

            <div>
              <p className="mono-kicker text-[#1697c8]">The solution</p>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[#34587a]">
                We launched Back Office Solutions to address this challenge. By
                supporting realtors with dedicated follow-up, CRM discipline, and
                back office coordination, we help teams streamline operations,
                reduce admin overhead, and refocus on what truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(340px,.7fr)] lg:items-start">
          <div>
            <h2
              className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Our process
            </h2>
            <div className="mt-8 grid gap-0">
              {processSteps.map((step) => (
                <div
                  key={step}
                  className="border-b border-[rgba(13,40,73,0.1)] py-5 text-2xl font-semibold text-[#0c5f93]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((item, index) => {
              const Icon = aboutIcons[index];

              return (
                <article
                  key={item.title}
                  className={`panel-soft panel-compact ${index === 1 ? "sm:translate-y-8" : ""}`}
                >
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <h3
                    className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#0d2849]"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5f7590]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="rounded-[2rem] bg-[#eef6ff] px-6 py-10 text-center shadow-[0_18px_44px_rgba(13,40,73,0.06)] sm:px-8">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            If you know the workload is there, the next step is deciding what
            should be delegated first.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5f7590]">
            We can help you decide where REVA support will create the clearest
            relief and what a practical handoff should look like.
          </p>
          <Link href="/contact-us" className="action-primary mt-7 inline-flex">
            Contact our team
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
