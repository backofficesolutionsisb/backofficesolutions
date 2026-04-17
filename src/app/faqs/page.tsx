import type { Metadata } from "next";
import { CircleHelp, Plus } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "FAQs",
  path: "/faqs",
  description:
    "Frequently asked questions about REVA services for realtors, including lead response, CRM support, admin help, listing coordination, and client communication.",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqsPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageIntro
        eyebrow="FAQs"
        title="Answers to common questions about REVA services for realtors."
        description="If you are evaluating real estate virtual assistant support for follow-up, CRM tasks, listing administration, or back office work, these are the questions that usually come up first."
        centered
      />

      <section className="page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,.56fr)_minmax(0,1.18fr)] lg:items-start">
          <div className="section-glow pt-3">
            <h2
              className="text-4xl font-semibold tracking-[-0.05em] text-[#0d2849] sm:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Frequently asked questions
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#5f7590]">
              These are the questions most teams ask before deciding which tasks
              should be handed off first and how the support structure should
              work.
            </p>
            <div className="mt-7 rounded-[1.5rem] bg-[#eef6ff] p-6 shadow-[0_18px_40px_rgba(13,40,73,0.06)]">
              <p
                className="text-2xl font-semibold tracking-[-0.03em] text-[#0d2849]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Don&apos;t see the answer you need?
              </p>
              <p className="mt-3 text-base leading-8 text-[#5f7590]">
                We can talk through the exact workflow, team structure, and
                support questions specific to your business.
              </p>
              <Link href="/contact-us" className="action-primary mt-6 inline-flex">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-[1.35rem] bg-white px-5 py-5 shadow-[0_16px_38px_rgba(13,40,73,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="flex max-w-4xl items-start gap-4">
                    <span className="ink-icon-wrap">
                      <CircleHelp />
                    </span>
                    <span
                      className="pt-1 text-xl font-semibold tracking-[-0.02em] text-[#0d2849]"
                      style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                      {item.question}
                    </span>
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="mono-kicker text-[#1697c8]">0{index + 1}</span>
                    <span className="ink-icon-wrap bg-[#eef6ff] transition-transform duration-200 group-open:rotate-45">
                      <Plus />
                    </span>
                  </span>
                </summary>
                <p className="mt-4 pl-[4.05rem] text-base leading-8 text-[#5f7590]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap">
        <div className="section-glow rounded-[2rem] bg-[linear-gradient(135deg,#0a2748,#0c5f93)] px-6 py-12 text-center text-white shadow-[0_24px_60px_rgba(13,40,73,0.14)] sm:px-8">
          <h2
            className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Need a clearer answer for your team?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
            If you are weighing handoff options, team fit, or how support should
            be structured, we can talk it through directly.
          </p>
          <Link href="/contact-us" className="action-primary mt-7 inline-flex">
            Contact Us
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
