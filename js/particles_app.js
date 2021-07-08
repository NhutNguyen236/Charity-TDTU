particlesJS("particles-js", {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: false,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 1, size: 64, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 200, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    lineLinked: {
      color: "#323031",
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      collisions: true,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 800
      },
      value: 100
    },
    opacity: {
      animation: { enable: false, minimumValue: 0.1, speed: 1, sync: false },
      random: false,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 32,
        replaceColor: true,
        src: "https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png",
        width: 32
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "image"
    },
    size: {
      anim: { enable: false, minimumValue: 8, speed: 20, sync: false },
      random: false,
      value: 18
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  detectRetina: true
});
