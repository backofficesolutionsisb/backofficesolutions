import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  visual,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  visual?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <section className="hero-surface">
      <div className="hero-inner">
        <div
          className={`grid gap-10 ${
            visual
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)] lg:items-center"
              : "max-w-4xl"
          } ${centered && !visual ? "mx-auto text-center" : ""}`}
        >
          <div className={centered && !visual ? "mx-auto max-w-4xl" : "max-w-4xl"}>
            <span className={`eyebrow ${centered && !visual ? "justify-center" : ""}`}>
              {eyebrow}
            </span>
            <h1
              className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.65rem]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              {title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg ${
                centered && !visual ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {visual ? <div className="relative">{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}
