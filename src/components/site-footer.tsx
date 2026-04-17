import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";
import { contactLinks, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(16,77,129,0.12)] bg-white/72">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,.72fr)_minmax(0,.98fr)] lg:px-8">
        <div className="footer-column max-w-md gap-3">
          <p className="mono-kicker text-[#1698c9]">Back Office Solutions</p>
          <Link href="/" className="brand-mark w-fit">
            <Image
              src="/back-office-logo.webp"
              alt="Back Office Solutions"
              width={280}
              height={91}
              className="h-auto w-[142px] sm:w-[170px]"
            />
          </Link>
          <p className="max-w-md text-sm leading-6 text-[#5f748d]">
            REVA services for realtors focused on cleaner follow-up, better admin
            flow, and more consistent client-facing support.
          </p>
          <p className="text-sm leading-6 text-[#355c82]">
            Head office in Edmonton, Alberta, serving real estate teams that need
            cleaner operating support.
          </p>
        </div>

        <div className="footer-column gap-3">
          <p className="mono-kicker text-[#1698c9]">Navigation</p>
          <div className="grid gap-2 text-sm text-[#5f748d]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="footer-link-item py-0.5 leading-6"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column gap-3">
          <p className="mono-kicker text-[#1698c9]">Contact</p>
          <div className="grid gap-2 text-sm text-[#5f748d]">
            <a
              href={contactLinks.emailHref}
              className="footer-slot-contact py-0.5"
            >
              <span className="ink-icon-wrap">
                <Mail />
              </span>
              <span className="text-wrap-anywhere">{contactLinks.email}</span>
            </a>
            <a
              href={contactLinks.phoneHref}
              className="footer-slot-contact py-0.5"
            >
              <span className="ink-icon-wrap">
                <Phone />
              </span>
              <span className="text-wrap-anywhere">{contactLinks.phone}</span>
            </a>
            <Link href={contactLinks.scheduleHref} className="footer-slot-contact py-0.5">
              <span className="ink-icon-wrap">
                <PhoneCall />
              </span>
              <span className="text-wrap-anywhere">Book a call</span>
            </Link>
            <a
              href={contactLinks.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="footer-slot-contact py-0.5"
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
              className="footer-slot-contact py-0.5"
            >
              <span className="ink-icon-wrap">
                <MapPin />
              </span>
              <span className="text-wrap-anywhere">
                <span className="block font-medium text-[#102845]">
                  {contactLinks.addressLabel}
                </span>
                <span>{contactLinks.address}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
