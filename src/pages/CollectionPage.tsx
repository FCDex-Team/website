import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ParticlesBackground from "@/components/ParticlesBackground";
import { collections } from "@/data/collections";
import { DISCORD_URL } from "@/lib/constants";
import { getRarityStyles } from "@/lib/rarity";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = collections.find((item) => item.slug === slug);

  useEffect(() => {
    if (collection) {
      document.title = `${collection.title} | FCDex`;
    }
  }, [collection]);

  if (!collection) {
    return <Navigate to="/404" replace />;
  }

  const rarity = getRarityStyles(collection.tier, collection.obtainable);

  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-black text-white">
        <Navbar />

        <section className="relative overflow-hidden border-b border-white/5 px-6 pb-24 pt-40">
          <ParticlesBackground />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_45%)]" />

          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
            <div>
              <div className="mb-8 flex flex-wrap gap-3">
                <div
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] ${rarity.badge}`}
                >
                  T{collection.tier}
                </div>

                <div
                  className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] ${
                    collection.obtainable
                      ? "border-white/10 bg-white/5 text-zinc-300"
                      : "border-orange-400/30 bg-orange-500/10 text-orange-300"
                  }`}
                >
                  {collection.obtainable ? "Obtainable" : "Exclusive"}
                </div>
              </div>

              <h1 className="font-bebas text-7xl uppercase leading-none tracking-wide md:text-9xl">
                {collection.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                {collection.description}
              </p>

              <div className="mt-12 grid grid-cols-2 gap-5">
                <div
                  className={`rounded-3xl border bg-white/5 p-6 backdrop-blur-xl ${rarity.border}`}
                >
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Club
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">{collection.club}</h3>
                </div>

                <div
                  className={`rounded-3xl border bg-white/5 p-6 backdrop-blur-xl ${rarity.border}`}
                >
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    League
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {collection.league}
                  </h3>
                </div>

                <div
                  className={`rounded-3xl border bg-white/5 p-6 backdrop-blur-xl ${rarity.border}`}
                >
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Founded
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {collection.founded}
                  </h3>
                </div>

                <div
                  className={`rounded-3xl border bg-white/5 p-6 backdrop-blur-xl ${rarity.border} ${rarity.glow}`}
                >
                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Trophies
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-orange-400">
                    {collection.trophies}
                  </h3>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="rounded-2xl bg-orange-500 px-8 py-4 text-center text-lg font-semibold text-black shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
                >
                  Back Home
                </Link>

                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
                >
                  Join Discord
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className={`absolute h-[450px] w-[450px] rounded-full blur-3xl ${rarity.glow}`}
              />

              {!collection.obtainable && (
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.12)_50%,transparent_80%)] bg-[length:250%_250%] animate-shine" />
              )}

              <img
                src={collection.image}
                alt={collection.title}
                width={550}
                height={550}
                className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-400">
                Squad
              </p>

              <h2 className="font-bebas text-6xl uppercase tracking-wide">
                Legendary Players
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {collection.players.map((player) => (
                <div
                  key={player}
                  className={`group rounded-3xl border bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] ${rarity.border}`}
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-3xl">
                    ⚽
                  </div>

                  <h3 className="text-xl font-semibold text-white">{player}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-400">
              Era
            </p>

            <h2 className="font-bebas text-7xl uppercase tracking-wide">
              {collection.era}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              This era defined football history and created one of the most
              iconic squads ever assembled in the modern game.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
