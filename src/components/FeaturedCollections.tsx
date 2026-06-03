import Image from "next/image";
import Link from "next/link";

import { collections } from "@/data/collections";
import { getRarityStyles } from "@/lib/rarity";

export default function FeaturedCollections() {
  return (
    <section className="relative border-t border-white/5 px-6 py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Featured Collections
          </p>

          <h2 className="font-bebas text-6xl uppercase tracking-wide md:text-7xl">
            Legendary Football Eras
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => {
            const rarity = getRarityStyles(
              collection.tier,
              collection.obtainable,
            );

            return (
              <div
                key={collection.title}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] ${rarity.border} ${rarity.glow} ${rarity.gradient}`}
              >
                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-white/5 blur-3xl" />
                </div>

                {/* Exclusive Shine */}
                {!collection.obtainable && (
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.12)_50%,transparent_80%)] bg-[length:250%_250%] animate-[shine_5s_linear_infinite]" />
                )}

                {/* Image */}
                <div className="relative mb-10 flex h-72 items-center justify-center overflow-hidden rounded-2xl">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={260}
                    height={260}
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badges */}
                  <div className="mb-6 flex flex-wrap gap-3">
                    {/* Tier */}
                    <div
                      className={`rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${rarity.badge}`}
                    >
                      T{collection.tier}
                    </div>

                    {/* Status */}
                    <div
                      className={`rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-widest ${
                        collection.obtainable
                          ? "border-white/10 bg-white/5 text-zinc-300"
                          : "border-orange-400/30 bg-orange-500/10 text-orange-300"
                      }`}
                    >
                      {collection.obtainable ? "Obtainable" : "Exclusive"}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-5xl uppercase leading-none tracking-wide">
                    {collection.title}
                  </h3>

                  {/* Club */}
                  <p className="mt-3 text-zinc-300">{collection.club}</p>

                  {/* Stats */}
                  <div className="mt-8 flex items-center gap-10">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">
                        Founded
                      </p>

                      <p className="mt-1 text-2xl font-bold text-white">
                        {collection.founded}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">
                        Trophies
                      </p>

                      <p className="mt-1 text-2xl font-bold text-white">
                        {collection.trophies}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="mt-8 inline-flex rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
