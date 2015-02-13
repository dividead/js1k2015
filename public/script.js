var canvas = document.getElementById("c"),
    c = canvas.getContext("2d"),
    width = 600,
    height = 600;
canvas.width = width; canvas.height = height;

var pi = Math.PI, si = Math.sin, co = Math.cos
var atom = 'ATOM,LEAF,TREE,BIRD,FISH,ROCK,OCEAN,CLOUD,RUIN,PLANET,STAR,SUN,GALAXY'.split(',')
var t = 0, m = 0, an = 0

var grid = function(){
  c.strokeStyle = "rgba(208,222,199, 0.2)"
  c.beginPath()
  for(var i = 30; i < 600; i+=30){
    c.moveTo(i,0)
    c.lineTo(i, 600)
    c.moveTo(0,i)
    c.lineTo(600, i)
  }
  c.closePath()
  c.stroke()
}

var sph = function(){
  c.strokeStyle = "rgba(208,222,199, 0.2)"
  c.beginPath()
  for(var i = 5; i < 600; i+=15){
    c.moveTo(300, -200)
    c.quadraticCurveTo(5*i, 300, 300, 650)
    c.moveTo(300, -200)
    c.quadraticCurveTo(-5*i, 300, 300, 650)
    c.moveTo(-200, 300)
    c.quadraticCurveTo(300, 5*i, 650, 300)
    c.moveTo(-200, 300)
    c.quadraticCurveTo(300, -5*i, 650, 300)
  }
  c.stroke()
}

var text  = function (s){
  c.font = '25px Helvetica'
  c.fillStyle = 'white'
  c.fillText('EVERY '+s+' PROCEDURAL',140,40)
}
var th = function(a,color){
  c.fillStyle = 'rgba(194,75,67, 0.7)'
  c.strokeStyle = '#fff'
  c.beginPath()
  c.arc(300,225,40+a[0]/20,0,2*pi)
  c.moveTo(300, 100)
  c.lineTo(a[4],a[5])
  c.lineTo(a[2],a[3])
  c.lineTo(a[0],a[1])
  c.lineTo(300,100)
  c.lineTo(a[6],a[7])
  c.lineTo(300,450)
  c.lineTo(a[0],a[1])
  c.lineTo(a[6],a[7])
  c.lineTo(a[4],a[5])
  c.lineTo(300,450)
  c.lineTo(a[2],a[3])
  c.closePath()
  c.fill()
  c.stroke()
}
var run = function(i){
  if (an >= 2 * pi) an = 0
  var a = []
  for(var x = 0;x<4;x++){
    var z = 300 + (97*co(i+x*pi/2))
    var v = 225 + (27*si(i+x*pi/2))
    a.push(z,v)
  }
  an += 0.01
  th(a)
}
var update = function() {
  c.fillStyle = 'rgb(136,159,139)'
  c.fillRect(0,0,600,600)
  //grid()
  sph()
  if (++t > 25) {
    m = m >= atom.length-1 ? 0 : m+1
    t = 0
  }
  text(atom[m])
  run(an)
  requestAnimationFrame(update);
}
update();