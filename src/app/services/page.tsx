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
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
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

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Services"
        title="REVA services for realtors that focus on follow-up, admin flow, and day-to-day consistency."
        description="The best REVA support plan depends on where your workload is actually breaking down. These are the service areas most real estate teams ask us to help with first."
      />

      <section className="grid gap-4">
        {serviceItems.map((service, index) => {
          const Icon = serviceIcons[index];

          return (
            <article
              key={service.title}
              className="cut-panel panel-section grid gap-6 lg:grid-cols-[minmax(0,.84fr)_minmax(0,1.16fr)]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <div className="text-4xl font-semibold tracking-[-0.06em] text-[#1698c9]">
                    0{index + 1}
                  </div>
                </div>
                <p className="mono-kicker mt-5 text-[#5f748d]">Service focus</p>
                <h2 className="mt-4 text-2xl font-semibold text-[#102845]">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-[#5f748d]">
                  {service.short}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span key={bullet} className="pill">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="cut-panel panel-section">
        <div className="info-row">
          <span className="ink-icon-wrap">
            <PhoneCall />
          </span>
          <p className="mono-kicker pt-2 text-[#1698c9]">How to choose</p>
        </div>
        <h2
          className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          Start with the support function that affects your team every day.
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="panel-soft rounded-[1.6rem] panel-compact">
            <p className="text-base leading-8 text-[#5f748d]">
              If the biggest issue is response speed, start with lead handling and
              appointment setting. If the real pain is disorganized records and
              admin spillover, start with CRM and back office support. If client
              communication is slipping, build the support layer around that.
            </p>
          </div>
          <div className="panel-soft rounded-[1.6rem] panel-compact">
            <p className="text-base leading-8 text-[#5f748d]">
              The right starting point is not the longest list of tasks. It is the
              one that creates the clearest relief and better day-to-day
              consistency for your real estate business.
            </p>
          </div>
        </div>
      </section>

      <section className="cut-panel panel-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Need help deciding</span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              We can help you define the right support plan based on where your
              current bottleneck really is.
            </h2>
          </div>

          <Link href="/contact-us" className="action-primary">
            Talk to our team
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
