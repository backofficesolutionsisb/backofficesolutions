"use client";

import { ArrowRight, Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactLinks, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(16,77,129,0.12)] bg-[rgba(246,251,255,0.9)] backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="brand-mark">
            <Image
              src="/back-office-logo.webp"
              alt="Back Office Solutions"
              width={280}
              height={91}
              className="h-auto w-[136px] sm:w-[168px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href={contactLinks.scheduleHref} className="action-primary hidden lg:inline-flex">
            <PhoneCall className="ink-icon-sm !text-white" />
            Book a call
            <ArrowRight className="ink-icon-sm !text-white" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-[rgba(16,77,129,0.12)] bg-white text-[#102845] shadow-[0_12px_24px_rgba(20,83,137,0.08)] transition-colors hover:bg-[#edf6ff] xl:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X className="ink-icon-sm" /> : <Menu className="ink-icon-sm" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 border-t border-[rgba(16,77,129,0.12)] bg-white/92 pt-2.5 xl:hidden">
            <nav className="grid gap-2">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href;
                const isLast = index === navLinks.length - 1;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""} ${
                      isLast ? "border-b-0" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="ink-icon-sm" />
                  </Link>
                );
              })}
            </nav>

            <Link href={contactLinks.scheduleHref} className="action-primary mt-3 w-full justify-center">
              <PhoneCall className="ink-icon-sm !text-white" />
              Book a call
              <ArrowRight className="ink-icon-sm !text-white" />
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
