import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-950">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
             
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-600 transition hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </nav>

         
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
