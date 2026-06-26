import { services } from "@/lib/site";
import { BrakeIcon, ClutchIcon, ScanIcon, ServiceIcon, SuspensionIcon, WrenchIcon } from "./icons";
import { SectionHeading } from "./section-heading";

const serviceIcons = [WrenchIcon, BrakeIcon, ScanIcon, SuspensionIcon, ClutchIcon, ServiceIcon, ServiceIcon, WrenchIcon];

export function Services() {
  return (
    <section id="services" className="section-shell bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Core repair and maintenance services presented clearly."
          description="The cards below are ready for replacement with live service detail, booking notes, or package pricing."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? ServiceIcon;
            return (
              <article key={service} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="icon-badge">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Replace this text with a short explanation of the service, common symptoms, and typical outcome.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
