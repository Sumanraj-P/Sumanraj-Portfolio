import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

/**
 * Animated particles background
 * Creates floating particles that respond to mouse movement
 * Uses tsParticles for lightweight performance
 */
const ParticlesBackground = ({ id }) => {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id || "tsparticles"}
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#38bdf8", "#818cf8", "#2dd4bf", "#4ade80"],
          },
          links: {
            color: "#60a5fa",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 20,
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default ParticlesBackground;