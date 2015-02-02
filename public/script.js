var canvas = document.getElementById("c"),
    ctx = canvas.getContext("2d"),
    width = 600,
    height = 600;
canvas.width = width; canvas.height = height;

ctx.translate(300,300);

function update() {
  //ctx.clearRect(-200, -200, width, height);
  ctx.beginPath();
  ctx.strokeStyle = '#B60C48';
  ctx.moveTo(-90,100);
  ctx.lineTo(90,100);
  ctx.lineTo(150,10);
  ctx.lineTo(0,-75);
  ctx.lineTo(-150,10);
  ctx.lineTo(-90,100);
  ctx.stroke();
  ctx.closePath();
  ctx.rotate(6*Math.PI/180);
  requestAnimationFrame(update);
}

update();