import { Link } from "react-router-dom";

type LogoProps = {
  size?: number;
  heading?: "h1" | "h2";
};

export function BrandLockup({ size = 58, heading = "h1" }: LogoProps) {
  const titleClassName = "font-bebas text-4xl uppercase tracking-wide";

  return (
    <Link to="/" className="group flex items-center gap-4">
      <div className="relative animate-float transition-transform duration-300 group-hover:scale-110">
        <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-2xl transition-all duration-500 group-hover:bg-orange-500/60" />

        <div className="absolute inset-[-6px] animate-spin rounded-full border border-orange-500/30" />

        <div className="relative transition-transform duration-700 group-hover:rotate-[360deg]">
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.45)_50%,transparent_80%)] bg-[length:250%_250%] animate-shine-fast" />

          <img
            src="/logo.webp"
            alt="FCDex"
            width={size}
            height={size}
            className="relative z-10 drop-shadow-[0_0_25px_rgba(249,115,22,0.55)]"
          />
        </div>
      </div>

      {heading === "h1" ? (
        <h1 className={titleClassName}>
          <span className="text-white">FC</span>
          <span className="text-orange-500">Dex</span>
        </h1>
      ) : (
        <h2 className={titleClassName}>
          <span className="text-white">FC</span>
          <span className="text-orange-500">Dex</span>
        </h2>
      )}
    </Link>
  );
}
