import { Link } from "react-router-dom";

import { BrandLockup } from "@/components/Logo";
import { DISCORD_URL } from "@/lib/constants";

const navLinkClass =
  "text-sm font-medium text-zinc-300 transition hover:text-orange-400";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <BrandLockup />

        <nav className="hidden items-center gap-10 md:flex">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <a href="/#collections" className={navLinkClass}>
            Collections
          </a>
          <Link to="/tos" className={navLinkClass}>
            ToS
          </Link>
          <Link to="/privacy" className={navLinkClass}>
            Privacy
          </Link>
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
        >
          Join Discord
        </a>
      </div>
    </header>
  );
}
