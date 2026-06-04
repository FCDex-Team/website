import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
          404
        </p>

        <h1 className="mt-4 font-bebas text-7xl uppercase tracking-wide md:text-8xl">
          Page Not Found
        </h1>

        <p className="mt-6 max-w-md text-lg text-zinc-400">
          The collection or page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-10 rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-orange-400"
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}
