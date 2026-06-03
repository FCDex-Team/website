"use client";

import { useEffect, useMemo, useState } from "react";

import Particles from "@tsparticles/react";

import type { Engine, ISourceOptions } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const engine = {} as Engine;

      await loadSlim(engine);

      setInit(true);
    };

    initParticles();
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
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
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
