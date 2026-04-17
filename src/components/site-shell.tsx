import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell min-h-screen">
      <SiteHeader />
      <main className="flex w-full flex-col gap-24 pb-24 lg:gap-28 lg:pb-28">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
