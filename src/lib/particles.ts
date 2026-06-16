import type { ISourceOptions } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const particleOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#f97316",
    },
    links: {
      color: "#f97316",
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 45,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
    },
  },
  detectRetina: true,
};

let engineReady: Promise<void> | undefined;

export function ensureParticlesEngine() {
  engineReady ??= loadSlim(tsParticles).then(() => undefined);
  return engineReady;
}

export async function loadParticles(containerId: string) {
  await ensureParticlesEngine();
  return tsParticles.load({
    id: containerId,
    options: particleOptions,
  });
}
