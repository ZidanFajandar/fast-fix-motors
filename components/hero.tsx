import Image from "next/image";
import Link from "next/link";
import { aboutImage, heroImage, site } from "@/lib/site";
import { ChatIcon, PhoneIcon } from "./icons";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Automotive workshop background placeholder"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/72 to-brand-700/35" />
      </div>

      <div className="relative container-shell flex min-h-[86svh] items-center py-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl animate-fadeUp">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
              Trusted automotive repair
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              {site.tagline} From engine diagnostics to brake repairs and routine maintenance, we deliver reliable automotive services with quality workmanship you can count on. Our goal is simple: keep your vehicle safe, reliable, and performing at its best.

Trusted Service. Fair Prices. Reliable Repairs.

Book your service today or chat with us on WhatsApp for a quick quote.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.phoneHref} className="button-primary">
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </Link>
              <Link href={site.whatsappHref} target="_blank" rel="noreferrer" className="button-secondary border-white/20 bg-white text-slate-950 hover:bg-brand-50">
                <ChatIcon className="h-5 w-5" />
                WhatsApp Us
              </Link>
            </div>

           <div className="mt-10 grid gap-4 sm:grid-cols-3">
  {[
    ["Years of Experience", "10+"],
    ["Phone", site.phone],
    ["Business Hours", "Mon–Fri: 07:45–17:00 | Sat: 08:00–12:00 | Sun: Closed"],
  ].map(([label, value]) => (
    <div
      key={label}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  ))}
</div>
          </div>

          <div className="lg:justify-self-end">
            <div className="glass-panel overflow-hidden border-white/10 bg-white/95 text-slate-950">
              <div className="relative aspect-[4/5]">
                <Image
                  src={aboutImage}
                  alt="Automotive workshop hero placeholder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-slate-200 p-5">
                <p className="text-sm font-semibold">Fast service. Clear communication. Reliable repairs.</p>
                <p className="mt-1 text-sm text-slate-600">
  With a focus on quality, reliability, and customer satisfaction, we deliver
  professional vehicle servicing and repairs using trusted techniques and
  quality parts to ensure every job is completed to the highest standard.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
