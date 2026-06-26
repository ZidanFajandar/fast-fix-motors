import { testimonials } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell bg-slate-950 text-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Social proof from customers who trust the workshop."
          description="Replace these cards with real customer reviews once they are available."
          tone="dark"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-7 text-slate-100">"{testimonial.quote}"</p>
              <p className="mt-5 text-sm font-semibold text-white">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
