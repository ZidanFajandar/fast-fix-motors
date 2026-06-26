import Link from "next/link";
import { site } from "@/lib/site";
import { ChatIcon } from "./icons";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
      aria-label="Open WhatsApp chat"
    >
      <ChatIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
