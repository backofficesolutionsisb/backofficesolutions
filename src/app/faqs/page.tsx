import type { Metadata } from "next";
import { CircleHelp, Plus } from "lucide-react";
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
      />

      <section className="cut-panel panel-section">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className="group border-b border-[rgba(16,77,129,0.12)] py-5 last:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
              <span className="flex max-w-4xl items-start gap-4">
                <span className="ink-icon-wrap">
                  <CircleHelp />
                </span>
                <span className="pt-2 text-lg font-semibold text-[#102845]">
                  {item.question}
                </span>
              </span>
              <span className="flex items-center gap-4">
                <span className="mono-kicker text-[#1698c9]">0{index + 1}</span>
                <span className="ink-icon-wrap transition-transform duration-200 group-open:rotate-45">
                  <Plus />
                </span>
              </span>
            </summary>
            <p className="mt-4 max-w-4xl pl-[4.05rem] text-base leading-8 text-[#5f748d]">
              {item.answer}
            </p>
          </details>
        ))}
      </section>
    </SiteShell>
  );
}
