var inter = function( p ) {


var diamonds = [];// object array
var numX =4;
var numBars = 20;  //enter an integer!!for grid along X-axis
var space; //spacing between
var winRatio;
var numY;//width/height
var i, j; //loop variables
var dimens;

var windowX;
var windowY;
var name;

var navObj;
var navBtm;
var init;
var yoff = 0;
var yoff2= 0;
var yoff3= 0;
var yoff4= 0;
var noiseInt;
var yincrement;
var n;//coords of ypos for text
var n1;
var h3;

//for interference program
var barsL=[];
var barsR=[];
barsL.push(NewBarL());
barsR.push(NewBarR());

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

   space = Math.floor(p.windowWidth/numX);
   winRatio = p.windowHeight/p.windowWidth;
   numY = Math.floor(numX*winRatio);
   dimens = Math.floor(space/4); //width of side of diamonds

//initialise and define arrays


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



  //changing initwidthL and right according to mouse/touch
  initWidthL= Math.pow(p.noise(yoff3),2)+5;
  initWidthR= Math.pow(p.noise(yoff4),2.4)+5;


  //noisy position of headers realised
  //color(100,100,100);


//spawn arrays - newBarL
if(p.frameCount%interval==0.000){
  yoff = yoff+0.01;
  yoff2 =yoff2+0.006;
  yoff3 = yoff3+0.034;
  yoff4 = yoff3+0.058;
  barsL.push(NewBarL());
  barsR.push(NewBarR());
}

//spawn arrays - newBarR
if(p.frameCount%interval==0){



}
// loop drawing of elements newBarL

          for (var i=0; i<barsL.length;i++){
            showBar = barsL[i];
            p.noStroke();
            p.fill(0,0,0,200);

            p.push();
            p.translate(0, 0);
            p.rotate(0.8*showBar.rot*p.PI+30);
            console.log("noise= " + showBar.rot);
            p.rect(showBar.pos, -p.windowHeight/4, showBar.width*3, p.windowHeight*3);
            p.pop();
            barsL[i].pos += vel1;
            //console.log(vel1, barsL.length-1);
            if (barsL[i].pos>p.windowWidth*2.5){
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
            if (barsR[i].pos<-100){
              barsR.splice(i,1);//taking out element if out of screen

            }
    }

}
p.windowResized = function() {
p.resizeCanvas(p.windowWidth, p.windowHeight);
}


function noiseWidthL(){
  initWidthL = Math.pow(p.noise(yoff3)*5,2);
  return initWidthL;
}
  function noiseWidthR(){
    initWidthL = Math.pow(p.noise(yoff4)*5,2);
    return initWidthL;
}

function NewBarL() {
  newBar = {
    pos : -0.6*p.windowWidth,
    width : noiseWidthL(),
    vel : vel1,
    rot : p.noise(yoff)
  }
return newBar;
}

function NewBarR() {
  newBar = {
     pos : p.windowWidth,
     width : noiseWidthR(),
     vel : vel1
  }
return newBar;
}

}
var myp5 = new p5(inter);
