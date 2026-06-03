export function getRarityStyles(tier: number, obtainable: boolean) {
  /* Exclusive */
  if (!obtainable) {
    /* Tier 1-2 Exclusive */
    if (tier <= 2) {
      return {
        border: "border-orange-400/50",
        glow: "shadow-[0_0_60px_rgba(249,115,22,0.45)]",
        badge: "bg-orange-500 text-black",
        gradient: "from-orange-500/30 via-yellow-500/20 to-red-500/20",
      };
    }

    /* Tier 3-8 Exclusive */
    if (tier <= 8) {
      return {
        border: "border-purple-400/40",
        glow: "shadow-[0_0_50px_rgba(168,85,247,0.45)]",
        badge: "bg-purple-500 text-white",
        gradient: "from-purple-500/30 to-orange-500/10",
      };
    }
  }

  /* Tier 1-5 */
  if (tier <= 5) {
    return {
      border: "border-orange-500/40",
      glow: "shadow-[0_0_45px_rgba(249,115,22,0.35)]",
      badge: "bg-orange-500 text-black",
      gradient: "from-orange-500/20 to-red-500/10",
    };
  }

  /* Tier 6-15 */
  if (tier <= 15) {
    return {
      border: "border-red-500/40",
      glow: "shadow-[0_0_40px_rgba(239,68,68,0.35)]",
      badge: "bg-red-500 text-white",
      gradient: "from-red-500/20 to-orange-500/10",
    };
  }

  /* Tier 16-35 */
  if (tier <= 35) {
    return {
      border: "border-purple-500/40",
      glow: "shadow-[0_0_40px_rgba(168,85,247,0.35)]",
      badge: "bg-purple-500 text-white",
      gradient: "from-purple-500/20 to-pink-500/10",
    };
  }

  /* Tier 36-60 */
  if (tier <= 60) {
    return {
      border: "border-blue-500/40",
      glow: "shadow-[0_0_40px_rgba(59,130,246,0.35)]",
      badge: "bg-blue-500 text-white",
      gradient: "from-blue-500/20 to-cyan-500/10",
    };
  }

  /* Tier 61-100 */
  return {
    border: "border-zinc-500/40",
    glow: "shadow-[0_0_35px_rgba(161,161,170,0.25)]",
    badge: "bg-zinc-700 text-white",
    gradient: "from-zinc-700/20 to-zinc-500/10",
  };
}
