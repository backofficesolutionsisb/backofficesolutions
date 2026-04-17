import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  MessageSquareText,
  PhoneCall,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { contactLinks, serviceItems, testimonials } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "REVA services for realtors focused on lead follow-up, CRM management, appointment setting, and back office support.",
});

const heroHighlights = [
  {
    title: "Lead response",
    text: "Stay quick on inbound inquiries even when the day is already full.",
    icon: PhoneCall,
  },
  {
    title: "CRM hygiene",
    text: "Keep records, notes, and pipelines current without admin spillover.",
    icon: Database,
  },
  {
    title: "Listing support",
    text: "Handle recurring listing and paperwork tasks with more consistency.",
    icon: FileText,
  },
];

const heroChecklist = [
  "New inquiries answered quickly",
  "CRM records updated daily",
  "Listing admin kept moving",
  "Calendar and inbox flow organized",
];

const delegatedTasks = [
  { label: "Lead response and appointment setting", icon: PhoneCall },
  { label: "CRM updates and data entry", icon: Database },
  { label: "Listing and back office administration", icon: FileText },
  { label: "Client communication and live chat support", icon: MessageSquareText },
];

const homeServiceIcons = [PhoneCall, Database, FileText];

export default function Home() {
  return (
    <SiteShell>
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)] lg:items-center">
        <div className="flex flex-col gap-5 lg:pr-3">
          <div className="max-w-4xl">
            <span className="eyebrow">REVA Support for Realtors</span>
            <h1
              className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#102845] sm:text-5xl lg:text-[4.35rem]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              REVA support for realtors who need faster follow-up and less admin
              drag.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f748d] sm:text-[1.02rem]">
              A REVA, or real estate virtual assistant, helps you stay
              client-facing while recurring follow-up, CRM, scheduling, and back
              office work stay organized behind the scenes.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={contactLinks.scheduleHref} className="action-primary">
              <PhoneCall className="ink-icon-sm !text-white" />
              Book a call
              <ArrowRight className="ink-icon-sm !text-white" />
            </Link>
            <Link href="/services" className="action-secondary">
              Explore services
              <ArrowRight className="ink-icon-sm" />
            </Link>
          </div>

          <div className="grid gap-3 border-t border-[rgba(16,77,129,0.12)] pt-4 sm:grid-cols-3">
            {heroHighlights.map(({ title, text, icon: Icon }, index) => (
              <article
                key={title}
                className={`${index > 0 ? "sm:border-l sm:border-[rgba(16,77,129,0.12)] sm:pl-4" : ""}`}
              >
                <div className="info-row">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mono-kicker pt-2 text-[#5f748d]">{title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#355c82]">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="halo-orb left-1/3 top-12 h-36 w-36 bg-[#1698c9]/18" />
          <div className="halo-orb bottom-8 right-8 h-40 w-40 bg-[#66b9df]/16" />

          <div className="cut-panel relative min-h-[420px] overflow-hidden">
            <Image
              src="/realtor-va.jpg"
              alt="REVA support for realtors"
              width={1280}
              height={853}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,40,69,0.12),rgba(234,246,255,0.14)_44%,rgba(246,251,255,0.96))]" />

            <div className="relative flex min-h-[420px] flex-col justify-between p-4">
              <p className="mono-kicker text-[#1698c9]">REVA support</p>

              <div className="max-w-[390px] rounded-[1.2rem] border border-[rgba(16,77,129,0.12)] bg-white/95 px-4 py-4 shadow-[0_18px_34px_rgba(20,83,137,0.1)]">
                <p className="mono-kicker text-[#5f748d]">
                  What a real estate virtual assistant handles
                </p>
                <h2
                  className="mt-3 text-[1.6rem] font-semibold leading-tight tracking-[-0.045em] text-[#102845]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  Lead response, CRM upkeep, and back office follow-through.
                </h2>
                <div className="mt-4 grid gap-2.5">
                  {heroChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-[rgba(16,77,129,0.1)] pt-2.5 first:border-t-0 first:pt-0"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#111111]" />
                      <span className="text-sm leading-6 text-[#173a66]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Core REVA Support</span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Three places a REVA usually creates the fastest relief.
            </h2>
          </div>
          <Link href="/services" className="action-link">
            See all services
            <ArrowRight className="ink-icon-sm" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {serviceItems.slice(0, 3).map((service, index) => {
            const Icon = homeServiceIcons[index];

            return (
              <article key={service.title} className="cut-panel panel-compact flex h-full flex-col">
                <div className="info-row">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mono-kicker pt-2 text-[#5f748d]">Service</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#102845]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f748d]">
                  {service.short}
                </p>
                <ul className="mt-5 grid gap-2 text-sm leading-7 text-[#355c82]">
                  {service.bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#102845]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,.96fr)_minmax(0,1.04fr)] lg:items-center">
        <div className="cut-panel media-frame overflow-hidden">
          <Image
            src="/support-desk.jpg"
            alt="REVA support operations"
            width={1280}
            height={853}
            className="h-[320px] w-full object-cover"
          />
        </div>

        <div className="cut-panel panel-section">
          <div className="info-row">
            <span className="ink-icon-wrap">
              <MessageSquareText />
            </span>
            <p className="mono-kicker pt-2 text-[#1698c9]">Where REVA support starts</p>
          </div>
          <h2
            className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Most realtors do not need more busywork. They need the recurring
            tasks handled more consistently.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f748d]">
            If follow-up, admin, and communication keep spilling into selling
            time, the right REVA setup should start there.
          </p>

          <div className="mt-7 divide-y divide-[rgba(16,77,129,0.12)]">
            {delegatedTasks.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <span className="ink-icon-wrap">
                  <Icon />
                </span>
                <span className="pt-1 text-sm font-medium leading-7 text-[#355c82]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="max-w-3xl">
          <span className="eyebrow">Client Feedback</span>
          <h2
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Strong REVA support shows up in consistency, responsiveness, and a
            lighter back office load.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f748d]">
            The value should feel practical and measurable, not vague. Better
            operating rhythm behind the scenes gives agents more room for client
            work in front of it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.slice(0, 2).map((item) => (
            <article key={item.quote} className="cut-panel panel-compact flex h-full flex-col">
              <span className="ink-icon-wrap">
                <Quote />
              </span>
              <p className="mt-5 text-base leading-8 text-[#173a66]">
                &quot;{item.quote}&quot;
              </p>
              <div className="mt-6 border-t border-[rgba(16,77,129,0.12)] pt-4">
                <p className="text-sm font-semibold text-[#102845]">{item.author}</p>
                <p className="mt-1 text-sm text-[#5f748d]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/testimonials" className="action-link">
          Read more testimonials
          <ArrowRight className="ink-icon-sm" />
        </Link>
      </section>

      <section className="cut-panel panel-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Ready to Talk</span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              If your team needs cleaner lead handling and steadier back office
              support, let&apos;s plan the right REVA support.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f748d]">
              We can talk through your current workload, the tasks you want off
              the agent&apos;s plate, and the kind of real estate virtual
              assistant support that fits your day-to-day.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={contactLinks.scheduleHref} className="action-primary">
              <PhoneCall className="ink-icon-sm !text-white" />
              Book a call
              <ArrowRight className="ink-icon-sm !text-white" />
            </Link>
            <Link href="/contact-us" className="action-secondary">
              Contact details
              <ArrowRight className="ink-icon-sm" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
