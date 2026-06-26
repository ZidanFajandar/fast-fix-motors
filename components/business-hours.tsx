import { site } from "@/lib/site";
import { ClockIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function BusinessHours() {
  const rows = [
    ["Monday - Friday", site.hours.weekday],
    ["Saturday", site.hours.saturday],
    ["Sunday", site.hours.sunday]
  ];

  return (
    <section id="hours" className="section-shell bg-slate-950 text-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Business Hours"
              title="Make operating hours visible before customers call."
              description="Update these placeholders with the workshop's exact schedule, including holiday notes or after-hours support."
              tone="dark"
            />
          </div>

          <div className="grid gap-3">
            {rows.map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-brand-300" />
                  <span className="font-semibold text-white">{day}</span>
                </div>
                <span className="text-sm text-slate-200">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
