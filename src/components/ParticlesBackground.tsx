import { useEffect, useId } from "react";

import { loadParticles } from "@/lib/particles";

export default function ParticlesBackground() {
  const reactId = useId();
  const containerId = `tsparticles-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    let instance: Awaited<ReturnType<typeof loadParticles>> | undefined;

    loadParticles(containerId)
      .then((loaded) => {
        instance = loaded;
      })
      .catch((error) => {
        console.error("Failed to load particles:", error);
      });

    return () => {
      void instance?.destroy();
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
