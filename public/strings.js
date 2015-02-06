var canvas = document.getElementById("c"),
    c = canvas.getContext("2d");
canvas.width = 600; canvas.height = 600;

var a = new Array(2500)
for(var i=0;i<2500;a[i++] = '.'){}

var grid = function(){
  c.strokeStyle = "rgba(55,55,55, 0.2)"
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

var field = function(){
  c.font = '10px Lucida Console'
  c.fillStyle = '#B60C48'
  var count = 0
  for(var v = 10; v < 590; v+=12){
    for(var h = 10; h < 590; h+=12){
      c.fillText(a[count++],h,v)
    }
  }
}
//http://csunplugged.org/sites/default/files/activity_pdfs_full/Lines.pdf
// function bline(x0, y0, x1, y1) {
 
//   var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
//   var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
//   var err = (dx>dy ? dx : -dy)/2;
 
//   while (true) {
//     setPixel(x0,y0);
//     if (x0 === x1 && y0 === y1) break;
//     var e2 = err;
//     if (e2 > -dx) { err -= dy; x0 += sx; }
//     if (e2 < dy) { err += dx; y0 += sy; }
//   }
// }
// Bresenham's line algorithm
// var getRay = function(x0,y0,x1,y1){
//         var dx = Math.abs(x1-x0);
//         var dy = Math.abs(y1-y0);
//         var sx = x0 < x1 ? 1 : -1;
//         var sy = y0 < y1 ? 1 : -1;
//         var err = dx-dy;
        
//         var ray = [];
//         while(x0!=x1 || y0!=y1){
//                 ray.push([x0,y0]);
//                 var e2 = 2*err;
//                 if(e2>-dy){
//                         err = err - dy;
//                         x0 += sx;
//                 }
//                 if(e2<dx){
//                         err = err + dx;
//                         y0 += sy;
//                 }
//         }
//         return ray;
// }
function line(xS,yS,xE,yE){
  var start = yS*48 + xS
  var end = yE*48 + xE
  a[yS*48 + xS] = 'x'
  a[yE*48 + xE] = 'x'
  if(xS < xE) {
    for(var i = xS; i < end; i+= 49){
      a[i++] = 'x'
    }
  }
  if(xS > xE){
    for(var i = xS; i < end; i+=49){
      a[i--] = 'x'
    }
  }

}


var update = function() {
  c.clearRect(0, 0, 600, 600);
  //grid()
  field()
  line(0,0,48,49)
  line(48,0,0,49)
  requestAnimationFrame(update);
}
update();