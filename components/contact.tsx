import Link from "next/link";
import { site } from "@/lib/site";
import { ChatIcon, MapPinIcon, PhoneIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Make it easy for drivers to call, message, or visit."
          description="Replace the placeholders with real contact details and embed a live map when the business location is finalized."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="glass-panel p-6">
              <PhoneIcon className="h-6 w-6 text-brand-700" />
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">Phone Number</p>
              <p className="mt-2 text-base font-semibold text-slate-950">{site.phone}</p>
              <Link href={site.phoneHref} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Call now
              </Link>
            </article>

            <article className="glass-panel p-6">
              <ChatIcon className="h-6 w-6 text-brand-700" />
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">WhatsApp</p>
              <p className="mt-2 text-base font-semibold text-slate-950">Quick messaging support</p>
              <Link href={site.whatsappHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Open chat
              </Link>
            </article>

            <article className="glass-panel p-6 sm:col-span-2">
              <MapPinIcon className="h-6 w-6 text-brand-700" />
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">Address</p>
              <p className="mt-2 text-base font-semibold text-slate-950">{site.address}</p>
            </article>
          </div>

          <div className="glass-panel overflow-hidden">
            <div className="border-b border-slate-200 px-6 py-4">
              <p className="text-sm font-semibold text-slate-950">Google Maps placeholder</p>
              <p className="mt-1 text-sm text-slate-600">Replace this frame with the live embed code for the workshop location.</p>
            </div>
            <div className="aspect-[4/3] bg-slate-100">
              <iframe
                title="Google Maps placeholder"
                src="about:blank"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-slate-200 p-6 sm:flex-row">
              <Link href={site.phoneHref} className="button-primary">
                <PhoneIcon className="h-5 w-5" />
                Call
              </Link>
              <Link href={site.whatsappHref} target="_blank" rel="noreferrer" className="button-secondary">
                <ChatIcon className="h-5 w-5" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
