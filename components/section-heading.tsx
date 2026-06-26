type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, tone = "light" }: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-brand-300" : "text-brand-700";
  const titleClass = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`section-title mt-3 ${titleClass}`}>{title}</h2>
      <p className={`section-lead ${descriptionClass}`}>{description}</p>
    </div>
  );
}
