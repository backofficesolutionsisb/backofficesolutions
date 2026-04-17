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
import { PageIntro } from "@/components/page-intro";
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
      "Once the priorities are clear, the working relationship becomes much easier to manage and measure.",
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
      <PageIntro
        eyebrow="Contact Us"
        title="If you need REVA support for your real estate business, start the conversation here."
        description="We can talk through your current admin load, lead handling needs, and the kind of real estate virtual assistant support that would actually make your day easier."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {methodItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="cut-panel panel-compact flex h-full min-h-[11.25rem] min-w-0 flex-col transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="ink-icon-wrap">
                <Icon />
              </span>
              <p className="mono-kicker mt-5 text-[#5f748d]">{item.label}</p>
              <p className="text-wrap-anywhere mt-4 text-xl font-semibold text-[#102845]">
                {item.value}
              </p>
              <p className="text-wrap-anywhere mt-4 text-sm leading-7 text-[#5f748d]">
                {item.description}
              </p>
            </a>
          );
        })}
      </section>

      <section id="schedule-session" className="cut-panel panel-section scroll-mt-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Book a Call</span>
          <h2
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#102845] sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Pick a time that works and book your call right here on the site.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f748d]">
            Choose a slot on our calendar and we can talk through your admin
            load, lead follow-up, and the kind of REVA support you need.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.2rem] border border-[rgba(16,77,129,0.12)] bg-white">
          <iframe
            src={contactLinks.calendlyHref}
            title="Book a call with Back Office Solutions"
            className="h-[760px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="cut-panel panel-section">
        <span className="eyebrow">How the conversation usually starts</span>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {startSteps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <article
                key={step.title}
                className="panel-soft rounded-[1.6rem] panel-compact flex h-full flex-col"
              >
                <div className="flex items-center gap-4">
                  <span className="ink-icon-wrap">
                    <Icon />
                  </span>
                  <p className="mono-kicker text-[#1698c9]">0{index + 1}</p>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[#102845]">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5f748d]">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
