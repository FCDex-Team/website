import { Link } from "react-router-dom";

import { BrandLockup } from "@/components/Logo";
import { DISCORD_URL } from "@/lib/constants";

const footerLinkClass = "transition hover:text-orange-400";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-6 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <BrandLockup size={54} heading="h2" />

          <p className="max-w-md text-center text-sm leading-relaxed text-zinc-500 md:text-left">
            The ultimate football collection platform featuring legendary eras,
            iconic clubs, rare collectibles, and football history.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
            <Link to="/" className={footerLinkClass}>
              Home
            </Link>
            <Link to="/tos" className={footerLinkClass}>
              ToS
            </Link>
            <Link to="/privacy" className={footerLinkClass}>
              Privacy
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              Discord
            </a>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            © 2026 FCDex — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
