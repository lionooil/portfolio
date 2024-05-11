if (process.browser) {
  const canvas = document.getElementById("canvas-bubble");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.weblitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (cb) {
      setTimeout(cb, 17);
    };

  const NUM = 100;
  const particles = [];

  class Particle {
    constructor(x, y, radius, directionX, directionY,index) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.directionX = directionX;
      this.directionY = directionY;
      this.index = index;
    }
    render() {
      if (this.index % 7 === 0) {
        ctx.fillStyle = '#fff';
        ctx.fill();
      } else if (this.index % 7 === 1) {
        ctx.strokeStyle = '#006F73';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      else if (this.index % 7 === 2){
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#5CE1E6';
      ctx.fill();
    }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    }

    update() {
      this.y -= this.directionY;
      if (this.y < 0 - this.radius) {
        this.y = canvas.height + this.radius;
      }
      this.render();
    }
  }

  init();
  render();

  function init() {
    for (let i = 0; i < NUM; i++) {
      const x = Math.random() * canvas.width / 2 + canvas.width / 4 ;
      const y = Math.floor(Math.random() * canvas.height);
      const radius = Math.floor(Math.random() * 40);
      const directionX = Math.random() * 2 - 1;
      const directionY = Math.random() * 2;
      const particle = new Particle(x, y, radius, directionX, directionY,i);
      particles.push(particle);
    }
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    requestAnimationFrame(render);
  }
}
