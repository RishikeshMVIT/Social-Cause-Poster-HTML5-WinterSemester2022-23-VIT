//#region Spinning lines
let canvas;
let ctx;
let w, h;

function setup() {
  canvas = document.querySelector("#spinninglines");
  ctx = canvas.getContext("2d");
  resize();
  window.addEventListener("resize", resize);
}

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function draw(now) {
  requestAnimationFrame(draw);
  ctx.fillRect(0, 0, w, h);
  
  ctx.strokeStyle = "white";
  const r = Math.min(w, h) * 0.35;
  const angleOffset = now * 0.0018;  
  circle(r, angleOffset);
  circle(r*0.8, angleOffset);
  circle(r*0.6, angleOffset);
  circle(r*0.4, angleOffset);
  circle(r*0.2, angleOffset);
}

function circle(r, angleOffset) {
  const nrOfLines = 64;
  const l = 2 * r * Math.PI / nrOfLines;
  for(let i = 0; i < nrOfLines; i++) {
    const angle1 = Math.PI * 2 * i / nrOfLines;
    const x1 = Math.cos(angle1) * r + w / 2;
    const y1 = Math.sin(angle1) * r + h / 2;
    line(x1, y1, l, angle1 * 8 + angleOffset);
  }
}

function line(x, y, l, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(-l/2, 0);
  ctx.lineTo(l/2, 0);
  ctx.stroke();
  ctx.restore();
}

setup();
draw(performance.now());
//#endregion

