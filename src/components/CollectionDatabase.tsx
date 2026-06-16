import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import FilterSelect from "@/components/FilterSelect";
import { collections } from "@/data/collections";
import { getRarityStyles } from "@/lib/rarity";

const filterOptions = [
  { value: "all", label: "All Collections" },
  { value: "obtainable", label: "Obtainable" },
  { value: "exclusive", label: "Exclusive" },
] as const;

const sortOptions = [
  { value: "rarity", label: "Highest Rarity" },
  { value: "alphabetical", label: "Alphabetical" },
] as const;

export default function CollectionDatabase() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sort, setSort] = useState("rarity");

  const filteredCollections = useMemo(() => {
    let data = [...collections];

    data = data.filter(
      (collection) =>
        collection.title.toLowerCase().includes(search.toLowerCase()) ||
        collection.club.toLowerCase().includes(search.toLowerCase()),
    );

    if (filter === "obtainable") {
      data = data.filter((c) => c.obtainable);
    }

    if (filter === "exclusive") {
      data = data.filter((c) => !c.obtainable);
    }

    if (sort === "rarity") {
      data.sort((a, b) => a.tier - b.tier);
    }

    if (sort === "alphabetical") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [search, filter, sort]);

  return (
    <section className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-400">
            Database
          </p>

          <h2 className="font-bebas text-6xl uppercase tracking-wide md:text-7xl">
            Browse Collections
          </h2>
        </div>

        {/* Controls */}
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-stretch">
          <div className="w-full lg:flex-[2]">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Search
            </span>
            <input
              type="text"
              placeholder="Search collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-h-[4.5rem] w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg text-white placeholder:text-zinc-500 outline-none backdrop-blur-xl transition focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <FilterSelect
            label="Filter"
            value={filter}
            options={[...filterOptions]}
            onChange={setFilter}
            className="w-full lg:min-w-[13rem] lg:flex-1"
          />

          <FilterSelect
            label="Sort by"
            value={sort}
            options={[...sortOptions]}
            onChange={setSort}
            className="w-full lg:min-w-[13rem] lg:flex-1"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredCollections.map((collection) => {
            const rarity = getRarityStyles(
              collection.tier,
              collection.obtainable,
            );

            return (
              <div
                key={collection.slug}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${rarity.border} ${rarity.glow} ${rarity.gradient}`}
              >
                {!collection.obtainable && (
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.12)_50%,transparent_80%)] bg-[length:250%_250%] animate-shine" />
                )}

                <div className="relative mb-6 flex h-56 items-center justify-center overflow-hidden rounded-2xl">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    width={220}
                    height={220}
                    className="object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Badges */}
                <div className="mb-5 flex gap-2">
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${rarity.badge}`}
                  >
                    T{collection.tier}
                  </div>

                  <div
                    className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                      collection.obtainable
                        ? "border-white/10 bg-white/5 text-zinc-300"
                        : "border-orange-400/30 bg-orange-500/10 text-orange-300"
                    }`}
                  >
                    {collection.obtainable ? "Obtainable" : "Exclusive"}
                  </div>
                </div>

                <h3 className="font-bebas text-4xl uppercase tracking-wide">
                  {collection.title}
                </h3>

                <p className="mt-2 text-zinc-300">{collection.club}</p>

                <Link
                  to={`/collections/${collection.slug}`}
                  className="mt-6 inline-flex rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  View Collection
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
