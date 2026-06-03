"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-6 py-14">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        {/* Left */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-4">
            {/* Animated Logo */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-2xl transition-all duration-500 group-hover:bg-orange-500/60" />

              {/* Rotating Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-6px] rounded-full border border-orange-500/30"
              />

              {/* Hover Spin */}
              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Shine */}
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)] bg-[length:250%_250%] animate-[shine_4s_linear_infinite]" />

                <Image
                  src="/logo.webp"
                  alt="FCDex"
                  width={54}
                  height={54}
                  className="relative z-10 drop-shadow-[0_0_25px_rgba(249,115,22,0.55)]"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <h2 className="font-bebas text-4xl uppercase tracking-wide">
              <span className="text-white">FC</span>

              <span className="text-orange-500">Dex</span>
            </h2>
          </Link>

          {/* Description */}
          <p className="max-w-md text-center text-sm leading-relaxed text-zinc-500 md:text-left">
            The ultimate football collection platform featuring legendary eras,
            iconic clubs, rare collectibles, and football history.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-6 md:items-end">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="/" className="transition hover:text-orange-400">
              Home
            </Link>

            <Link href="/tos" className="transition hover:text-orange-400">
              ToS
            </Link>

            <Link href="/privacy" className="transition hover:text-orange-400">
              Privacy
            </Link>

            <a
              href="https://discord.gg/fcdex"
              target="_blank"
              className="transition hover:text-orange-400"
            >
              Discord
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            © 2026 FCDex — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
