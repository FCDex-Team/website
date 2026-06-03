"use client";

import { useState } from "react";

const clubs = [
  {
    name: "Real Madrid",
    league: "La Liga",
    trophies: 97,
    rarity: "Legendary",
  },
  {
    name: "Barcelona",
    league: "La Liga",
    trophies: 92,
    rarity: "Legendary",
  },
  {
    name: "Manchester United",
    league: "Premier League",
    trophies: 68,
    rarity: "Legendary",
  },
  {
    name: "Liverpool",
    league: "Premier League",
    trophies: 69,
    rarity: "Legendary",
  },
  {
    name: "Arsenal",
    league: "Premier League",
    trophies: 48,
    rarity: "Epic",
  },
  {
    name: "Bayern Munich",
    league: "Bundesliga",
    trophies: 83,
    rarity: "Legendary",
  },
];

export default function ExploreDatabase() {
  const [search, setSearch] = useState("");

  const filtered = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="relative border-t border-white/5 px-6 py-32">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-400">
            Database
          </p>

          <h2 className="font-bebas text-6xl uppercase tracking-wide md:text-7xl">
            Explore The Database
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Search legendary football clubs, discover trophies, and browse
            collectible rarities inside FCDex.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-14 max-w-2xl">
          <input
            type="text"
            placeholder="Search clubs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-white/10"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((club) => (
            <div
              key={club.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/[0.07]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-orange-500/5 blur-2xl" />
              </div>

              <div className="relative z-10">
                {/* Rarity */}
                <div className="mb-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs uppercase tracking-widest text-orange-300">
                  {club.rarity}
                </div>

                {/* Club Name */}
                <h3 className="font-bebas text-5xl uppercase tracking-wide">
                  {club.name}
                </h3>

                {/* League */}
                <p className="mt-3 text-zinc-400">{club.league}</p>

                {/* Stats */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Trophies
                    </p>

                    <h4 className="mt-2 text-3xl font-bold text-orange-400">
                      {club.trophies}
                    </h4>
                  </div>

                  <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
                    View Club
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
