import CollectionDatabase from "@/components/CollectionDatabase";
import FeaturedCollections from "@/components/FeaturedCollections";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ParticlesBackground from "@/components/ParticlesBackground";
import { DISCORD_URL } from "@/lib/constants";

export default function HomePage() {
  const scrollToCollections = () => {
    const section = document.getElementById("collections");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-black text-white">
        <Navbar />

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
          <ParticlesBackground />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_40%)]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
            <div className="mb-8 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-orange-300 backdrop-blur-xl">
              The Ultimate Football Collection Platform
            </div>

            <h1 className="font-bebas text-7xl uppercase leading-none tracking-wide md:text-9xl">
              <span className="text-white">Build Your</span>

              <span className="mt-2 block bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                Ultimate Football
              </span>

              <span className="mt-2 block text-white">Collection</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Discover legendary clubs, iconic football eras, exclusive
              collectibles, and football history inside FCDex.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={scrollToCollections}
                className="group relative overflow-hidden rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-black shadow-[0_0_50px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
              >
                <span className="relative z-10">Explore Collections</span>

                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              </button>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-orange-500/20 hover:bg-white/10"
              >
                Join Discord
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-10 border-t border-white/10 pt-10 text-center">
              <div>
                <h3 className="font-bebas text-5xl text-orange-400">100+</h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                  Clubs
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-5xl text-orange-400">2000+</h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                  Collections
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-5xl text-orange-400">20+</h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                  Legendary Eras
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="collections">
          <FeaturedCollections />
        </div>

        <CollectionDatabase />

        <Footer />
      </main>
    </PageTransition>
  );
}
