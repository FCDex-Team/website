import Navbar from "@/components/Navbar";

export default function TosPage() {
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
            Terms of Service
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Please read these terms carefully before using FCDex. By using the
            platform, you agree to follow all rules, guidelines, and policies
            listed below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Usage Agreement
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              By using FCDex, you agree to follow all platform rules, community
              standards, and moderation decisions. Access may be revoked at any
              time if violations occur.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              User Conduct
            </h2>

            <div className="mt-8 grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Cheating & Exploits
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Using macros, automation, exploits, third-party tools, or
                  manipulating game mechanics for unfair advantage is strictly
                  prohibited.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Account Sharing
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Sharing accounts or using alternate accounts to gain
                  advantages, farm collectibles, or bypass moderation is not
                  allowed.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Community Behaviour
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-400">
                  Harassment, bullying, impersonation of staff, discrimination,
                  or abusive behavior toward users is prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Trading Rules
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              All trades and donations are final once confirmed. Cross-trading
              for real money, external items, or services outside the FCDex
              ecosystem is forbidden.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Privacy & Data
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              FCDex only collects minimal data necessary for platform
              functionality. Personal information should never be shared through
              the bot or community systems.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Moderation
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              The FCDex Team reserves the right to issue warnings, restrictions,
              temporary bans, or permanent bans depending on the severity of
              rule violations.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-wide text-orange-400">
              Contact
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Need help or want to appeal a moderation action? Contact the FCDex
              Team through the Discord server or official support channels.
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
