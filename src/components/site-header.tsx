"use client";

import { ArrowRight, Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contactLinks, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;

  const closeMenu = () => {
    setOpenPath(null);
  };

  const toggleMenu = () => {
    setOpenPath((value) => (value === pathname ? null : pathname));
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="page-wrap pt-5">
        <div className="flex w-full items-center justify-between gap-4">
          <Link href="/" className="brand-mark lg:mr-8 xl:mr-12" onClick={closeMenu}>
            <Image
              src="/back-office-logo.webp"
              alt="Back Office Solutions"
              width={280}
              height={91}
              className="h-auto w-[276px] brightness-0 invert sm:w-[321px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={contactLinks.phoneHref}
              className="inline-flex min-h-[3.15rem] items-center gap-2 rounded-[0.58rem] border border-white/20 px-[1.15rem] text-[0.98rem] font-semibold text-white"
            >
              <PhoneCall className="h-[1.08rem] w-[1.08rem] text-white" />
              <span className="text-white">{contactLinks.phone}</span>
            </a>
            <Link
              href="/contact-us"
              className="action-primary text-[0.98rem]"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[0.62rem] border border-white/18 bg-white/8 text-white backdrop-blur lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? (
              <X className="ink-icon-sm text-white" />
            ) : (
              <Menu className="ink-icon-sm text-white" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="page-wrap mt-4 lg:hidden">
          <div className="rounded-[1.4rem] bg-[#0b3157]/94 p-4 text-white shadow-[0_24px_60px_rgba(13,40,73,0.22)] backdrop-blur-xl">
            <nav className="grid gap-3">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="ink-icon-sm text-white" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-3">
              <a
                href={contactLinks.phoneHref}
                className="inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-[0.62rem] border border-white/18 text-[0.98rem] font-semibold text-white"
              >
                <PhoneCall className="h-[1.08rem] w-[1.08rem] text-white" />
                <span className="text-white">{contactLinks.phone}</span>
              </a>
              <Link
                href="/contact-us"
                className="action-primary w-full text-[0.98rem]"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
