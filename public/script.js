var canvas = document.getElementById("c"),
    c = canvas.getContext("2d"),
    width = 600,
    height = 600;
canvas.width = width; canvas.height = height;

var atom = 'ATOM,LEAF,TREE,BIRD,FISH,ROCK,OCEAN,CLOUD,RUIN,PLANET,STAR,SUN,GALAXY'.split(',')

var grid = function(){
  c.strokeStyle = "rgba(255,255,255, 0.2)"
  c.beginPath()
  for(var i = 30; i < width; i+=30){
    c.moveTo(i,0)
    c.lineTo(i, height)
    c.moveTo(0,i)
    c.lineTo(width, i)
  }
  c.closePath()
  c.stroke()
}

//return atom[~~(Math.random()*atom.length)]

var t = 0, i = 0

var text  = function (s){
  c.font = '25px Lucida Console'
  c.fillStyle = '#B60C48'
  c.fillText('EVERY '+s+' PROCEDURAL',140,40)
  //every + s
}
var tri = function(x1,y1,x2,y2,x3,y3,color){
  c.fillStyle = color
  c.strokeStyle = 'white'
  c.beginPath()
  c.moveTo(x1, y1)
  c.lineTo(x2, y2)
  c.lineTo(x3, y3)
  c.closePath()
  c.fill()
  c.stroke()
}

//300.100 - top
//300.450 - bot
// http://jsfiddle.net/loktar/vFV3F/
// http://scienceprimer.com/draw-oval-html5-canvas
// http://stackoverflow.com/questions/14863188/moving-a-point-along-ellipse
// cxt.beginPath();
// for (var i = 0 * Math.PI; i < 2 * Math.PI; i += 0.01 ) {
//     xPos = centerX - (30 * Math.sin(i)) * Math.sin(0 * Math.PI) + (70 * Math.cos(i)) * Math.cos(0 * Math.PI);
//     yPos = centerY + (70 * Math.cos(i)) * Math.sin(0 * Math.PI) + (30 * Math.sin(i)) * Math.cos(0 * Math.PI);

//     if (i == 0) {
//         cxt.moveTo(xPos, yPos);
//     } else {
//         cxt.lineTo(xPos, yPos);
//     }
// }
// cxt.lineWidth = 2;
// cxt.strokeStyle = "#232323";
// cxt.stroke();
// cxt.closePath();

var dot = function(x,y){
  c.fillStyle = '#B60C48'
  c.beginPath()
  c.arc(x,y,10,0,2*Math.PI);
  c.fill()
}

// function urmom(){
//   c.fillStyle = 'yellow'
//   c.beginPath()
//   c.arc(300,225,70,0,2*Math.PI);
//   c.fill()
//   c.fillStyle = 'black'
//   c.fillText('ur mom',255,230)
// }
var centerX = 300, centerY = 225
// function eli(){
//   c.beginPath();
//   for (var i = 0 * Math.PI; i < 2 * Math.PI; i += 0.01 ) {
//       xPos = centerX - (27 * Math.sin(i)) * Math.sin(0 * Math.PI) + (97 * Math.cos(i)) * Math.cos(0 * Math.PI);
//       yPos = centerY + (97 * Math.cos(i)) * Math.sin(0 * Math.PI) + (27 * Math.sin(i)) * Math.cos(0 * Math.PI);

//       if (i == 0) {
//           c.moveTo(xPos, yPos);
//       } else {
//           c.lineTo(xPos, yPos);
//       }
//   }
//   c.lineWidth = 1;
//   c.strokeStyle = "red";
//   c.stroke();
//   c.closePath();
// }
var an = 0
//var i = 0 * Math.PI; i < 2 * Math.PI; i += 0.01
var run = function(i,x){
  if (an >= 2 * Math.PI) an = 0
  xPos = centerX - (27 * Math.sin(i + x*Math.PI/2)) * Math.sin(0 * Math.PI) + (97 * Math.cos(i + x*Math.PI/2)) * Math.cos(0 * Math.PI);
  yPos = centerY + (97 * Math.cos(i + x*Math.PI/2)) * Math.sin(0 * Math.PI) + (27 * Math.sin(i + x*Math.PI/2)) * Math.cos(0 * Math.PI);
  //dot(xPos, yPos)
  an += 0.01
  return [xPos, yPos]
  //должно возвращать четыре точки или запускать четыре раза?
  //может просто к ан добавить пи/2?
}

var thing = function(i){
  var f1 = run(i,0) // f1[0],f1[1],
  var f2 = run(i,1)
  var f3 = run(i,2)
  var f4 = run(i,3)
  tri(300,100, f1[0],f1[1], f2[0],f2[1],'rgba(55,45,46, 0.7)')
  tri(300,100, f2[0],f2[1], f3[0],f3[1],'rgba(55,45,46, 0.7)')
  //   tri(300,100, 400,220, 300,250,'rgba(55,45,46, 0.7)')
  //   tri(300,100, 300,250, 200,220,'rgba(55,45,46, 0.7)')
  
  tri(300,100, f1[0],f1[1], f4[0],f4[1],'rgba(176,71,65, 0.5)')
  tri(300,100, f4[0],f4[1], f3[0],f3[1],'rgba(176,71,65, 0.5)')
  //   tri(300,100, 400,220, 300,200,'rgba(176,71,65, 0.1)')
  //   tri(300,100, 300,200, 200,220,'rgba(176,71,65, 0.1)')
  
  tri(300,450, f1[0],f1[1], f2[0],f2[1],'rgba(55,45,46, 0.7)')
  tri(300,450, f2[0],f2[1], f3[0],f3[1],'rgba(55,45,46, 0.7)')
  //   tri(300,450, 400,220, 300,250,'rgba(55,45,46, 0.7)')
  //   tri(300,450, 300,250, 200,220,'rgba(55,45,46, 0.7)')

  tri(300,450, f1[0],f1[1], f4[0],f4[1],'rgba(176,71,65, 0.5)')
  tri(300,450, f4[0],f4[1], f3[0],f3[1],'rgba(176,71,65, 0.5)')
  //   tri(300,450, 400,220, 300,200,'rgba(176,71,65, 0.1)')
  //   tri(300,450, 300,200, 200,220,'rgba(176,71,65, 0.1)')
}

//choose top and bottom points (fixed), find 4 rotating points on ellipse
//draw the thing
//rotate

var update = function() {
  //c.clearRect(0, 0, width, height);
  c.fillStyle = '#5D887F'
  c.fillRect(0,0,600,600)
  grid()
  t++
  if (t > 25) {
    i = i >= atom.length-1 ? 0 : i+1
    t = 0
  }
  text(atom[i])
  //tri(300,100, 400,220, run(an).x,run(an).y,'rgba(55,45,46, 0.7)')
  thing(an)
//   run(an, 0)
//   run(an, 1)
//   run(an, 2)
//   run(an, 3)
//   if (an > 2.5 && an < 5.7){
//     run(an)
//     urmom()
//   } else {
//     urmom()
//     run(an)
//   }
  requestAnimationFrame(update);
}
update();