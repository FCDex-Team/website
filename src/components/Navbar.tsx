"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-4">
          {/* Animated Logo Container */}
          <motion.div
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.12,
            }}
            className="relative"
          >
            {/* Outer Glow */}
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

              {/* Logo */}
              <Image
                src="/logo.webp"
                alt="FCDex"
                width={58}
                height={58}
                className="relative z-10 drop-shadow-[0_0_25px_rgba(249,115,22,0.55)]"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <h1 className="font-bebas text-4xl uppercase tracking-wide">
              <span className="text-white">FC</span>

              <span className="text-orange-500">Dex</span>
            </h1>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
          >
            Home
          </Link>

          <a
            href="#collections"
            className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
          >
            Collections
          </a>

          <Link
            href="/tos"
            className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
          >
            ToS
          </Link>

          <Link
            href="/privacy"
            className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
          >
            Privacy
          </Link>
        </nav>

        {/* Discord Button */}
        <a
          href="https://discord.gg/fcdex"
          target="_blank"
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
        >
          Join Discord
        </a>
      </div>
    </header>
  );
}
