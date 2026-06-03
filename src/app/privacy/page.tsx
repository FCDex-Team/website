import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 px-6 pb-20 pt-40">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-orange-300 backdrop-blur-xl">
            Legal
          </div>

          <h1 className="font-bebas text-7xl uppercase tracking-wide md:text-8xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            This page explains what data FCDex collects, how it is used, and how
            your information is protected.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Data Collection
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              FCDex collects limited data required for the platform to function
              properly. This includes Discord user IDs, server IDs, channel IDs,
              collectibles, trade history, and user-specific gameplay settings.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">User IDs</h3>

              <p className="mt-3 leading-relaxed text-zinc-400">
                Used to identify players and store gameplay progress.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Server Settings
              </h3>

              <p className="mt-3 leading-relaxed text-zinc-400">
                Used to manage collectible spawns and server preferences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Trade History
              </h3>

              <p className="mt-3 leading-relaxed text-zinc-400">
                Used to maintain collectible ownership and prevent abuse.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Message Analysis
              </h3>

              <p className="mt-3 leading-relaxed text-zinc-400">
                Message content may be temporarily analyzed for anti-cheat
                purposes, but is never permanently stored.
              </p>
            </div>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Data Storage
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Persistent data is securely stored using PostgreSQL databases.
              Access is restricted exclusively to authorized FCDex application
              owners.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Access To Data
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Only official FCDex application owners may access platform data.
              Moderators and public users do not have direct access to stored
              data.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Your Rights
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              You may request access to or deletion of your stored data by
              contacting the FCDex Team through official support channels.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Contact
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              For privacy-related concerns or requests, please contact the FCDex
              Team through Discord.
            </p>

            <a
              href="https://discord.gg/fcdex"
              target="_blank"
              className="mt-8 inline-flex rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-orange-400"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
