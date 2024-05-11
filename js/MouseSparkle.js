if (process.browser) {
const canvas = document.getElementById("canvas-mouse-sparkle");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const canvasW = canvas.width;
const canvasH = canvas.height;
const particles = [];

//----------------------------------------------------------------
let t = 3 / 2 * Math.PI;
let elapsed ;
function scale() {
  if (t < 2 * Math.PI) {
    t = t + 0.01;//radianの増加速度調整して、カーテン下側の湾曲速度を調整
    elapsed = Math.round(-Math.sin(t)*10)/10;
  }
  if (elapsed === 0) {
    t = 3 / 2 * Math.PI;
  }
}
//elapsedは1→0に推移する変数(パーティクルサイズを徐々に小さくするのに活用。(したかった))
//----------------------------------------------------------------


class Particle {
  constructor(x, y, radius, vx, vy, index, life, color,scaleX,scaleY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.index = index;
    this.life = life;
    this.color = color;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }

  render() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.7;
    ctx.globalCompositeOperation = 'lighter';
    ctx.scale(this.scaleX,this.scaleY);
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.vy -= 0.1;//縦方向の重力
    this.vy *= 0.99;// 縦方向の摩擦係数
    this.vx += 0.001;//横方向の重力
    this.vx *= 0.99;//横方向の摩擦係数
    this.y += this.vy;
    this.x += this.vx;
    this.life -= 1;//1ループ毎に寿命を-1
    this.scaleX = elapsed;//反映できない
    this.scaleY = elapsed;
    //パーティクルy座標が下端より大きくなったら
//    if (this.y > canvasH - this.radius) {
//      this.y = canvasH - this.radius;//
//      this.vy *= -1;//縦方向の速度反転
//      this.vx = 0;
//    }
//    if (this.y < 0) {
//      this.y = 0 + this.radius;//
//      this.vy *= -1;//縦方向の速度反転
//      this.vx = 0;
//    }
    if(this.x < 0){
      this.x = 0 + this.radius;//
      this.vx *= -1;//横方向の速度反転
      this.vy = 0;
    }
    if(this.x > canvasW){
      this.x = canvasW - this.radius;//
      this.vx *= -1;//横方向の速度反転
      this.vy = 0;
    }

    //寿命が0以下の時
    if (this.life <= 0) {
      this.radius = 0;//半径消滅
      particles.splice(this.index - 1, 1);//配列の後側をひとつ削除
    }
    this.render();
  }
}

let vx = 0;
let vy = 0;
let x, y, color,radius;
let i = 5;
let maxLife = 100;


addEventListener("mousemove", function (e) {
  x = e.clientX;
  y = e.clientY;
  i++; //マウスカーソルを動かすたびにインクリメント
  radius = Math.floor(Math.random() * 30);　//オブジェクトの大きさ
  if (i % 4 === 1) { 　//オブジェクトの排出の実行頻度を調整
    emitParticles(i/2);
  }
});

//オブジェクトの勢い
function emitParticles() {
    life = maxLife;
    vx = 10 * (Math.random() - 0.5);
    vy = 10 * (Math.random() - 0.5);
    const hue = 360 * Math.random();
  color = "hsl(" + hue + ",95%,60%)";
    const particle = new Particle(x, y, radius, vx, vy, i, life, color,elapsed,elapsed);
    particles.unshift(particle);
}

function updateParticles() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  requestAnimationFrame(updateParticles);
}
updateParticles();
}

//配列の増え過ぎによるメモリ不足対策は、適宜配列から要素削除(unshift + splice)で対応したけど
//ガベージコレクション対策のオブジェクトプールで対応できれば、尚良いかもしれない
