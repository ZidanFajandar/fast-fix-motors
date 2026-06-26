"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#hero" className="flex items-center gap-3 focus-ring" aria-label={`${site.name} home`}>
            <span
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/80"
              aria-hidden="true"
            />
            <span className="block leading-tight">
              <span className="block text-sm font-semibold text-slate-950">{site.name}</span>
              <span className="block text-xs text-slate-500">Automotive service</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="button-secondary md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
