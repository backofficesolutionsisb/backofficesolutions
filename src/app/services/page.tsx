import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Database,
  FileText,
  Megaphone,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { serviceItems } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore REVA services for realtors including lead response, CRM management, listing support, client communication, and back office administration.",
});

const serviceIcons = [
  PhoneCall,
  Database,
  FileText,
  MessageSquareText,
  CalendarDays,
  Megaphone,
];

const serviceTools = [
  "CRM systems",
  "Listing coordination",
  "Inbox management",
  "Calendar scheduling",
  "Follow-up workflows",
  "Reporting and updates",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="hero-surface">
        <div className="hero-inner">
          <div className="mx-auto max-w-5xl text-center">
            <span className="eyebrow justify-center">Services</span>
            <h1
              className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.65rem]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              REVA services for realtors built around follow-up, admin flow, and
              day-to-day consistency.
            </h1>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,.74fr)_minmax(380px,1fr)_minmax(0,.74fr)] lg:items-center">
            <div className="space-y-7 text-white">
              <div>
                <p className="text-base leading-8 text-white/76">
                  Start with the service line that removes the most daily friction
                  first.
                </p>
                <p
                  className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-[#dff0fb]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  Cleaner handoffs.
                </p>
              </div>

              <div className="max-w-sm rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                <p className="text-base leading-8 text-white/78">
                  Whether the pressure is response time, CRM cleanup, listing
                  administration, or recurring back office work, the first handoff
                  should create relief quickly.
                </p>
              </div>

              <Link href="/contact-us" className="action-secondary-inverse inline-flex">
                Talk through services
                <ArrowRight className="ink-icon-sm" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-x-[14%] top-8 h-[78%] rotate-[8deg] rounded-[2.4rem] bg-[#dff0fb]" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#eef6ff] p-3 shadow-[0_24px_64px_rgba(13,40,73,0.14)]">
                <div className="overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/realtor-va.jpg"
                    alt="REVA services for realtors"
                    width={1100}
                    height={1400}
                    className="h-[460px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] bg-white/8 p-6 backdrop-blur">
              <p
                className="text-4xl font-semibold tracking-[-0.035em] text-[#dff0fb]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Core workflows
              </p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-white/82">
                {serviceTools.map((tool) => (
                  <li
                    key={tool}
                    className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="max-w-3xl">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Designed for the support tasks that realtors feel every single day.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5f7590]">
            The right starting point is not the longest list of tasks. It is the
            one that creates the clearest relief and better day-to-day consistency
            for your real estate business.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article key={service.title} className="cut-panel panel-section flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mono-kicker text-[#1697c8]">0{index + 1}</p>
                </div>
                <h2
                  className="mt-6 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-[#0d2849]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#5f7590]">
                  {service.short}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-[0.85rem] bg-[#eef6ff] px-3 py-2 text-sm font-medium text-[#34587a]"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#eef6ff] p-3 shadow-[0_18px_44px_rgba(13,40,73,0.08)]">
            <Image
              src="/support-desk.jpg"
              alt="REVA support operations"
              width={1280}
              height={900}
              className="h-[360px] w-full rounded-[1.4rem] object-cover sm:h-[420px]"
            />
          </div>

          <div className="cut-panel panel-section">
            <p className="mono-kicker text-[#1697c8]">How to choose</p>
            <h2
              className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Start with the support function that affects your team every day.
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="panel-soft panel-compact">
                <p className="text-base leading-8 text-[#5f7590]">
                  If the biggest issue is response speed, start with lead handling
                  and appointment setting. If the real pain is disorganized
                  records and admin spillover, start with CRM and back office
                  support.
                </p>
              </div>
              <div className="panel-soft panel-compact">
                <p className="text-base leading-8 text-[#5f7590]">
                  If client communication is slipping, build the support layer
                  around that first. The best setup is the one that removes the
                  most friction immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="section-glow rounded-[2rem] bg-[linear-gradient(135deg,#0a2748,#0c5f93)] px-6 py-10 text-center text-white shadow-[0_24px_60px_rgba(13,40,73,0.14)] sm:px-8 sm:py-12">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Need help deciding what the first handoff should be?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
            We can help define the right support plan based on where your current
            bottleneck really is.
          </p>
          <Link href="/contact-us" className="action-primary mt-7 inline-flex">
            Talk to our team
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
