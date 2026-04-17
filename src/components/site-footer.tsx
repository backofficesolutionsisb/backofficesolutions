import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { contactLinks, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(13,40,73,0.08)] bg-white">
      <div className="page-wrap py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,.7fr)_minmax(0,1fr)]">
          <div className="footer-column gap-5">
            <Link href="/" className="brand-mark w-fit">
              <Image
                src="/back-office-logo.webp"
                alt="Back Office Solutions"
                width={280}
                height={91}
                className="h-auto w-[182px]"
              />
            </Link>
            <p className="max-w-lg text-sm leading-7 text-[#5f7590]">
              Back Office Solutions delivers REVA support for realtors who need
              faster follow-up, steadier CRM upkeep, and cleaner back office flow.
            </p>
            <Link href="/contact-us" className="action-link w-fit">
              Schedule a strategy call
            </Link>
          </div>

          <div className="footer-column gap-5">
            <p
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1697c8]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Navigation
            </p>
            <div className="footer-link-list text-sm">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link-item">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-column gap-5">
            <p
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1697c8]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Contact
            </p>
            <div className="footer-rail text-sm text-[#5f7590]">
              <a href={contactLinks.emailHref} className="footer-slot-contact">
                <span className="ink-icon-wrap">
                  <Mail />
                </span>
                <span className="text-wrap-anywhere">{contactLinks.email}</span>
              </a>
              <a href={contactLinks.phoneHref} className="footer-slot-contact">
                <span className="ink-icon-wrap">
                  <Phone />
                </span>
                <span className="text-wrap-anywhere">{contactLinks.phone}</span>
              </a>
              <a
                href={contactLinks.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="footer-slot-contact"
              >
                <span className="ink-icon-wrap">
                  <MessageCircle />
                </span>
                <span className="text-wrap-anywhere">WhatsApp chat</span>
              </a>
              <a
                href={contactLinks.addressHref}
                target="_blank"
                rel="noreferrer"
                className="footer-slot-contact"
              >
                <span className="ink-icon-wrap">
                  <MapPin />
                </span>
                <span className="text-wrap-anywhere">
                  <span className="block font-medium text-[#0d2849]">
                    {contactLinks.addressLabel}
                  </span>
                  <span>{contactLinks.address}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(13,40,73,0.08)] pt-8 text-sm text-[#5f7590] sm:flex-row sm:items-center sm:justify-between">
          <p>Back Office Solutions (c) {currentYear}. All rights reserved.</p>
          <p>REVA support for realtors across Canada and North America.</p>
        </div>
      </div>
    </footer>
  );
}
