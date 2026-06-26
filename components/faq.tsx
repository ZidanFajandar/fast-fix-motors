"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions answered up front."
          description="These accordions are accessible, mobile-friendly, and simple to extend with more workshop-specific questions."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-slate-950">{item.question}</span>
                  <span className="text-xl leading-none text-slate-500">{open ? "−" : "+"}</span>
                </button>
                {open ? <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
