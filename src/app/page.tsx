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
    value: "Fast lead response",
    text: "Keep inquiries moving even when showings and calls stack up.",
    icon: PhoneCall,
  },
  {
    value: "Cleaner CRM upkeep",
    text: "Stay current on notes, statuses, and next-step follow-through.",
    icon: Database,
  },
  {
    value: "Steadier back office",
    text: "Protect selling time by keeping recurring admin handled daily.",
    icon: FileText,
  },
];

const statItems = [
  { value: "Daily", label: "lead follow-up coverage" },
  { value: "Consistent", label: "CRM and admin execution" },
  { value: "More room", label: "for client-facing work" },
];

const supportAreas = [
  "Lead follow-up",
  "Appointment setting",
  "CRM management",
  "Listing coordination",
  "Inbox organization",
  "Back office support",
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
      <section className="hero-surface">
        <div className="hero-inner">
          <div className="grid gap-14 lg:min-h-[44rem] lg:grid-cols-[minmax(0,.94fr)_minmax(0,1.06fr)] lg:items-center lg:gap-18">
            <div className="max-w-3xl pt-4 lg:pt-8">
              <span className="eyebrow">REVA Support for Realtors</span>
              <h1
                className="mt-24 text-5xl font-semibold leading-[0.92] tracking-[-0.035em] text-white sm:text-6xl lg:mt-24 lg:text-[4.65rem]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                REVA support that gives realtors faster follow-up and less admin
                drag.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Back Office Solutions helps realtors stay client-facing while
                recurring follow-up, CRM hygiene, scheduling, and back office
                work stay organized behind the scenes.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={contactLinks.scheduleHref}
                  className="action-primary min-h-[3.55rem] rounded-[0.44rem] px-6 text-[0.98rem] sm:min-w-[12rem]"
                >
                  <PhoneCall className="ink-icon-sm !text-white" />
                  Book a call
                  <ArrowRight className="ink-icon-sm !text-white" />
                </Link>
                <Link
                  href="/services"
                  className="action-secondary-inverse min-h-[3.55rem] rounded-[0.44rem] px-6 text-[0.98rem] sm:min-w-[12rem]"
                >
                  Explore services
                  <ArrowRight className="ink-icon-sm" />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {supportAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-[0.9rem] bg-white/10 px-4 py-3 text-sm font-medium text-white/88 backdrop-blur"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 max-w-[34rem] rounded-[1.5rem] bg-white/10 p-6 backdrop-blur">
                <p className="text-sm leading-7 text-white/84">
                  The goal is simple: cleaner response discipline, stronger CRM
                  habits, and less admin spillover so your team has more energy
                  for leads, listings, and clients.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="overflow-hidden rounded-[1rem] bg-white/18 p-1">
                    <Image
                      src="/support-desk.jpg"
                      alt="Back Office Solutions support"
                      width={48}
                      height={48}
                      className="h-10 w-10 rounded-[0.8rem] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Back Office Solutions</p>
                    <p className="text-sm text-white/72">REVA support for realtor workflows</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-14 top-10 h-56 rounded-[2rem] bg-white/10 blur-3xl" />
              <div className="grid min-h-[540px] grid-cols-[.38fr_.98fr_.38fr] gap-3">
                <div className="overflow-hidden rounded-[1.6rem] bg-white/10 pt-14 backdrop-blur">
                  <Image
                    src="/boss-hero.jpg"
                    alt="Operations support"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.8rem] bg-[#6ab8e0] p-3">
                  <div className="relative h-full overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/realtor-va.jpg"
                      alt="REVA support for realtors"
                      width={1100}
                      height={1400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-[1.6rem] bg-white/10 pt-10 backdrop-blur">
                  <Image
                    src="/support-desk.jpg"
                    alt="Back office support"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-10 left-6 right-6 grid gap-4 sm:grid-cols-3">
                {heroHighlights.map(({ value, text, icon: Icon }) => (
                  <article
                    key={value}
                    className="rounded-[1.35rem] bg-white px-5 py-5 text-[#0d2849] shadow-[0_20px_48px_rgba(13,40,73,0.14)]"
                  >
                    <span className="ink-icon-wrap">
                      <Icon />
                    </span>
                    <h2
                      className="mt-4 text-lg font-semibold"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {value}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#5f7590]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap -mt-2 pt-24 sm:pt-32">
        <div className="grid gap-10 border-y border-[rgba(13,40,73,0.08)] py-11 md:grid-cols-3 md:gap-8">
          {statItems.map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="text-4xl font-semibold tracking-[-0.05em] text-[#0c5f93]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                {item.value}
              </p>
              <p className="mt-3 text-base font-medium text-[#0d2849]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap">
        <div className="section-glow rounded-[2rem] bg-[linear-gradient(180deg,#e8f5ff,#d9effe)] px-6 py-14 text-center shadow-[0_18px_48px_rgba(13,40,73,0.08)] sm:px-8 sm:py-16">
          <p className="mono-kicker text-[#1697c8]">Core REVA support</p>
          <h2
            className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            The right REVA setup keeps realtors responsive, organized, and out of
            admin overload.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#34587a]">
            Start where the business feels friction every day. For most teams,
            that means response time, CRM upkeep, recurring listing tasks, and
            inbox or calendar coordination.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {delegatedTasks.map(({ label, icon: Icon }) => (
              <article
                key={label}
                className="rounded-[1.25rem] bg-white/78 px-5 py-5 text-left shadow-[0_12px_24px_rgba(13,40,73,0.05)]"
              >
                <span className="ink-icon-wrap">
                  <Icon />
                </span>
                <p className="mt-4 text-sm font-medium leading-7 text-[#34587a]">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h2
              className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceItems.slice(0, 3).map((service, index) => {
            const Icon = homeServiceIcons[index];

            return (
              <article key={service.title} className="cut-panel panel-section flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mono-kicker text-[#1697c8]">0{index + 1}</p>
                </div>
                <h3
                  className="mt-6 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#0d2849]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#5f7590]">{service.short}</p>
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
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0a2748,#0c5f93)] px-6 py-12 text-white shadow-[0_28px_72px_rgba(13,40,73,0.16)] sm:px-8 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <span className="eyebrow">Client feedback</span>
              <h2
                className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Strong REVA support shows up in consistency and calmer day-to-day
                operations.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                Better operating rhythm behind the scenes gives agents more room
                for conversations, listings, and client service in front of it.
              </p>
              <Link href="/testimonials" className="action-secondary mt-7 inline-flex">
                Read more testimonials
                <ArrowRight className="ink-icon-sm" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.slice(0, 2).map((item) => (
                <article
                  key={item.quote}
                  className="rounded-[1.45rem] bg-white/10 p-6 backdrop-blur"
                >
                  <span className="ink-icon-wrap">
                    <Quote />
                  </span>
                  <p className="mt-5 text-base leading-8 text-white/88">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="mt-6 border-t border-white/12 pt-4">
                    <p className="text-sm font-semibold text-white">{item.author}</p>
                    <p className="mt-1 text-sm text-white/68">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#dff0fb] p-3 shadow-[0_18px_48px_rgba(13,40,73,0.08)]">
            <Image
              src="/support-desk.jpg"
              alt="REVA support operations"
              width={1280}
              height={900}
              className="h-[380px] w-full rounded-[1.45rem] object-cover sm:h-[450px]"
            />
          </div>

          <div className="cut-panel panel-section">
            <span className="eyebrow">Ready to talk</span>
            <h2
              className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              If your team needs cleaner lead handling and steadier back office
              support, let&apos;s plan the right REVA setup.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "New inquiries answered quickly",
                "CRM records updated consistently",
                "Listing admin kept moving",
                "Calendar and inbox flow organized",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#1697c8]" />
                  <span className="text-base leading-7 text-[#34587a]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </div>
      </section>
    </SiteShell>
  );
}
