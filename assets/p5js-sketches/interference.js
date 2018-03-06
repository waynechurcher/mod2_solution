var s = function( p ) {

var diamonds = [];// object array
var numX =4;
var numBars = 20;  //enter an integer!!for grid along X-axis
var space; //spacing between
var winRatio;
var numY;//width/height
var i, j; //loop variables
var dimens;
var clickX; //vars for mousepressed or touch,
var clickY;
var windowX;
var windowY;
var name;
var h2;// if i want to intro an element
var navObj;
var navBtm;
var init;
var yoff;
var yoff1;
var noiseInt;
var yincrement;
var n;//coords of ypos for text
var n1;
var h3;

//for interference program
var barsL=[];
var barsR=[];


var initWidthL = 4;//thickness of bar
var initWidthR = 4;//thickness of bar

var vel1;
var vel2;
//var barsL = [];
var newBar;
var showBar;
var interval = 50;


p.setup = function() {
  p.pixelDensity(2);
  var canvas = p.createCanvas(p.windowWidth,p.windowHeight);
   canvas.parent('sketchHolder');
   windowY = p.windowHeight;
   windowX = p.windowWidth;



// setup for Noise

//setup for interference bars
//initWidth = 2;
vel1 = 1.4; //velocities of left and right bars
vel2 = 1.2;



}
p.draw = function() {  //if window changes size
  if(windowX != p.windowWidth || windowY != p.windowHeight){
    p.setup();
    p.windowResized();
    }



  p.background(255,255,255);

  //to adjust position of sketch in relation to navbar


  //noise on headers
  //changing initwidthL and right according to mouse/touch
  initWidthL= (p.mouseX/p.windowWidth*12);
  initWidthR= (p.mouseY/p.windowWidth*12);


  //noisy position of headers realised
  //color(100,100,100);


//spawn arrays - newBarL
if(p.frameCount%interval==0){
   newBar = {
    pos : -5-initWidthL,
    width : initWidthL,
    vel : vel1

  }
  barsL.push(newBar);

}

//spawn arrays - newBarR
if(p.frameCount%interval==0){
   newBar = {
    pos : p.windowWidth,
    width : initWidthR,
    vel : vel1

  }
  barsR.push(newBar);

}
// loop drawing of elements newBarL

  if(barsL[0] !== null || barsR[0] !== null){
        for (var i=0; i<barsL.length;i++){
          showBar = barsL[i];
          p.noStroke();
          p.fill(0,0,0,200);
          p.rect(showBar.pos, 0, showBar.width*3, p.windowHeight);
          barsL[i].pos += vel1;
          //console.log(vel1, barsL.length-1);
          if (barsL[i].pos>p.windowWidth+50){
            barsL.splice(i,1);//taking out element if out of screen

          }
        }

        for (var i=0; i<barsR.length;i++){
          showBar = barsR[i];
          p.noStroke();
          p.fill(0,0,0,200);
          p.rect(showBar.pos, 0, showBar.width*3, p.windowHeight);
          barsR[i].pos -= vel2;
          //console.log(vel1, barsR.length-1);
          if (barsR[i].pos<-50){
            barsR.splice(i,1);//taking out element if out of screen

          }
        }
  }
}
p.windowResized = function() {
p.resizeCanvas(p.windowWidth, p.windowHeight);
}

}
var myp5 = new p5(s);
