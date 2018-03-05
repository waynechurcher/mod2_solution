new p5();

var  velx = -.5;
var  vely = -5;
var x = 100;
var y = 100;
var clrChange;
var windowX,windowY;


function setup() {
  windowY = windowHeight;
  windowX = windowWidth;

  noStroke();
//  var canvas = createCanvas(300,300, 300,300);
   var canvas = createCanvas(windowWidth,windowHeight);
   canvas.parent('sketchHolder');

}
function draw() {
  if(windowX !=windowWidth || windowY !=windowHeight){
    //h2.setContent("");

    setup();
    windowResized();
    }

  background(clrChange,100,255,2);
  fill(0,255,200,100);
  rectMode(CENTER);
  rect(x,y,30,30,4);
  x +=velx;
  y +=vely;
  if(x>windowWidth-15||x<15){velx= velx*-1};
  if(y>windowHeight-15||y<15){vely= vely*-1};
  clrChange = x%255;

}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
