"use client";

import { useMemo } from "react";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 120,

      particles: {
        color: {
          value: ["#f97316", "#fb923c", "#fdba74"],
        },

        links: {
          enable: false,
        },

        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.4,
          straight: false,
        },

        number: {
          density: {
            enable: true,
          },
          value: 45,
        },

        opacity: {
          value: {
            min: 0.1,
            max: 0.4,
          },
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

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={options}
    />
  );
}
