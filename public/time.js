var canvas = document.getElementById("c"),
    c = canvas.getContext("2d");
canvas.width = 600; canvas.height = 600;

var s = new Date(Date.UTC(2015, 2, 1, -1, 0, 0))

var time = function(n){
  c.font = '50px Verdana'
  c.fillStyle = '#B60C48'
  var a = (s-n).toString().split('')
  var m = 0
  a.forEach(function(x){
      c.fillText(x,150+m,250+ +x)
      m+=27
      if(m>300) m=0
  })
}

var grid = function(){
  c.strokeStyle = "rgba(55,55,55, 0.2)"
  c.beginPath()
  for(var i = 0; i <= 600; i+=30){
    c.moveTo(i,0)
    c.lineTo(i, 600)
    c.moveTo(0,i)
    c.lineTo(600, i)
  }
  c.closePath()
  c.stroke()
}

var update = function() {
  c.clearRect(0, 0, 600, 600);
  grid()
  time(new Date())
  requestAnimationFrame(update);
}
update();