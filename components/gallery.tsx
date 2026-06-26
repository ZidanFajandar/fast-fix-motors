import Image from "next/image";
import { gallery } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  return (
    <section id="gallery" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A responsive gallery ready for real workshop images."
          description="Use these placeholders to showcase completed jobs, workshop quality, and the types of vehicles you support."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1280px) 100vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="border-t border-slate-200 p-4 text-sm font-medium text-slate-700">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
