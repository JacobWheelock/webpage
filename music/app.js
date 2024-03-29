'use strict';
function homeFunc() {
	window.location.replace("https://jacobwheelock.com");
}
function aboutFunc() {
	window.location.replace("https://jacobwheelock.com/about");
}
function FOFunc() {
  window.location.replace("https://open.spotify.com/album/5LagvvE7Lf3MARsA0JFLeF?si=NHj3m5iCSyCh6gHcdjH13Q");
}

function pubFunc() {
	window.location.replace("https://jacobwheelock.com/publications");
}
function expFunc() {
	window.location.replace("https://jacobwheelock.com/experience");
}
function musicFunc() {
	window.location.replace("https://jacobwheelock.com/music");
}
function splitFunc() {
	window.open("https://open.spotify.com/album/3DUppF4OZe53MFr9jPmZKl?si=bbwxkTiDQjyoG6ajumT9eA");
}
function goldenFunc() {
	window.open("https://open.spotify.com/album/54lr7eRVonIMs2v6iJAcB7?si=bjHuF_WzTFS2dgqN6xylaw");
}
function facedFunc() {
	window.open("https://open.spotify.com/artist/2xA2XNU0Uxh2JMClKRaisr?si=TxXuqJQXQO-xJbywcLPMig");
}
function facedbcFunc() {
	window.open("https://facedout.bandcamp.com/");
}
particlesJS("particles-js", {
  particles: {
    number: { value: 85, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 284,
      color: "#ffffff",
      opacity: 0.6401569631618771,
      width: 0
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
