export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="max-w-4xl">
      <span className="eyebrow">{eyebrow}</span>
      <h1
        className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#102845] sm:text-5xl"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f748d] sm:text-lg">
        {description}
      </p>
    </section>
  );
}
