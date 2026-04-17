import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { contactLinks } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  path: "/contact-us",
  description:
    "Contact Back Office Solutions to discuss REVA services for realtors, including lead follow-up, CRM management, listing support, and back office help.",
});

const startSteps = [
  {
    title: "Tell us where the workload is stacking up",
    text:
      "We start by understanding whether the main pressure is on lead response, CRM cleanup, listing support, or daily admin flow.",
  },
  {
    title: "Define the right support focus",
    text:
      "The best starting point is the one that removes the biggest daily bottleneck instead of trying to hand off everything at once.",
  },
  {
    title: "Set up a practical working rhythm",
    text:
      "Once priorities are clear, the working relationship becomes much easier to manage and measure.",
  },
];

const methodItems = [
  {
    label: "Book a call",
    value: "Choose a time",
    description: "Pick a time directly on our calendar.",
    href: "#schedule-session",
    icon: PhoneCall,
  },
  {
    label: "Email",
    value: contactLinks.email,
    description: "Best for written inquiries, service discussions, and follow-up.",
    href: contactLinks.emailHref,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contactLinks.phone,
    description: "Best if you want to speak directly and move faster.",
    href: contactLinks.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Quick conversation",
    description: "Best for fast questions and direct contact with our team.",
    href: contactLinks.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: contactLinks.addressLabel,
    value: contactLinks.address,
    description: "Edmonton, Alberta, Canada.",
    href: contactLinks.addressHref,
    icon: MapPin,
    external: true,
  },
];

const stepIcons = [Search, SlidersHorizontal, Workflow];

export default function ContactUsPage() {
  return (
    <SiteShell>
      <section className="hero-surface">
        <div className="hero-inner text-center">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow justify-center">Contact Us</span>
            <h1
              className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.65rem]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Let&apos;s transform your back office flow.
            </h1>
            <p className="mt-5 text-lg text-white/78">
              Schedule your strategy call below and we can talk through your
              admin load, lead handling, and the kind of REVA support that would
              actually make your day easier.
            </p>
          </div>

          <div
            id="schedule-session"
            className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.6rem] bg-white shadow-[0_28px_70px_rgba(13,40,73,0.18)]"
          >
            <iframe
              src={contactLinks.calendlyHref}
              title="Book a call with Back Office Solutions"
              className="h-[760px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {methodItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="panel-soft panel-compact flex h-full min-h-[12rem] min-w-0 flex-col"
              >
                <span className="ink-icon-wrap">
                  <Icon />
                </span>
                <p className="mono-kicker mt-5 text-[#1697c8]">{item.label}</p>
                <p
                  className="text-wrap-anywhere mt-3 text-xl font-semibold tracking-[-0.03em] text-[#0d2849]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {item.value}
                </p>
                <p className="text-wrap-anywhere mt-3 text-sm leading-7 text-[#5f7590]">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="page-wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <h2
              className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              How the conversation usually starts
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5f7590]">
              The goal is not to hand off everything at once. It is to identify
              the most useful first layer of support and make that transition
              clean.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {startSteps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <article key={step.title} className="cut-panel panel-section flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="ink-icon-wrap">
                      <Icon />
                    </span>
                    <p className="mono-kicker text-[#1697c8]">0{index + 1}</p>
                  </div>
                  <h2
                    className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#0d2849]"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                  >
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#5f7590]">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
