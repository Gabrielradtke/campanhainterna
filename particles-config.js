particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Número de partículas
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#0B5261" // Cor das partículas
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 2,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        }
      }
    },
    retina_detect: true
  });
  