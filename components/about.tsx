import Image from "next/image";
import { aboutImage } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const points = [
  "Modern diagnostics and repair workflow",
  "Transparent estimates and practical advice",
  "Service tailored to daily drivers and fleet vehicles"
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <div className="relative aspect-[4/3]">
              <Image
                src={aboutImage}
                alt="Automotive service placeholder image"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A workshop built around dependable work and straightforward service."
              description="This section gives drivers a clear sense of what the business does, how long it has been operating, and why the team is worth trusting."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel p-5">
                <p className="text-sm font-semibold text-slate-950">Experience</p>
                <p className="mt-2 text-sm text-slate-600">10+ years of automotive experience </p>
              </div>
              <div className="glass-panel p-5">
                <p className="text-sm font-semibold text-slate-950">Why choose us</p>
                <p className="mt-2 text-sm text-slate-600">Clear communication, careful workmanship, and a customer-first process.</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
