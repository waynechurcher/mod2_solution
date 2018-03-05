var Zero = function( p ) {

  var diamonds = [];// object array
  var numX =6;  //enter an integer!!for grid along X-axis
  var space; //spacing between
  var winRatio;
  var numY;//width/height
  var i, j; //loop variables
  var dimens;
  var clickX; //vars for mousepressed or touch, to speed up vel
  var clickY;
  var windowX;
  var windowY;
  var name;
  var h2;// if i want to intro an element
  var menu;
  var init;

  var yoff; // noise variables for element movement
  var yoff1;
  var yoff2;
  var yincrement;
  var n;
  var n1;
  var n2;
  var h3;
  var fav1;
  var fav2; // for favicon image variables



p.setup = function() {
    var canvas = p.createCanvas(p.windowWidth,p.windowHeight);
     canvas.parent('sketchHolder');
     windowY = p.windowHeight;
     windowX = p.windowWidth;


     space = Math.ceil(p.windowWidth/numX);
     winRatio = p.windowHeight/p.windowWidth;
     numY = Math.ceil(numX*winRatio);
     dimens = Math.ceil(space/4); //width of side of diamonds




     yoff = 0;
     yoff1 = 0.2;
     yoff2 = 0.8;
     yincrement = 0.007;

     //initialising position and velocity of each oblect
  for(i=1;i<numX;i++){
    diamonds[i]  = []; //setting up 2d array
      for(j=1;j<numY+1;j++){
        diamonds[i][j] = {
          x:i*space,  //push/pop position in window
          y:j*space,
          posX:0,     //position in absolute box space
          posY:0,
          vx:(Math.random()*2),
          vy:(Math.random()*2)
        };

      }


    }

  }
  p.draw = function() {  //if window changes size
    if(windowX !=p.windowWidth || windowY !=p.windowHeight){
      p.setup();
      p.windowResized();
      }


    //to adjust position of sketch in relation to navbar
    navObj = document.getElementById("custom-bootstrap-menu");
    navBtm = navObj.getBoundingClientRect();
    //console.log(navBtm.bottom);//bottom coords of nav bar(when false = 52)


    //noise on headers
    n = p.noise(yoff)*p.windowHeight/8;
    n1 = p.noise(yoff1)*p.windowHeight/6;
    n2 = p.noise(yoff2);  //extra nise for say...colour??
    yoff += yincrement;
    yoff1 += yincrement;
    yoff2 += yincrement;
    //noisy position of headers realised
    //console.log(n2);
    p.background(250,230, 150+Math.floor(n2*100));
    //var image = p.imageMode(LEFT);




    p.noTint();

    p.noStroke();
    p.fill(50,50,50,100); //orange of sorts
    p.rectMode(p.CENTER); //centering coords of diamonds

if(diamonds !== null){
        for(i=1;i<numX;i++){

            for(j=1;j<numY+1;j++){
              p.push();
              p.translate(diamonds[i][j].x+diamonds[i][j].posX,diamonds[i][j].y+diamonds[i][j].posY);
              //console.log(diamonds[i][j].x,diamonds[i][j].y)
              p.rotate(p.QUARTER_PI);


              p.rect(0,0,dimens,dimens);

              p.pop();
              diamonds[i][j].posX += diamonds[i][j].vx;
              diamonds[i][j].posY += diamonds[i][j].vy;
                if(diamonds[i][j].posX<-space/4 || diamonds[i][j].posX>space/4){
                  diamonds[i][j].vx = -diamonds[i][j].vx
              }
              if(diamonds[i][j].posY<-space/4 || diamonds[i][j].posY>space/4){
                diamonds[i][j].vy = -diamonds[i][j].vy
            }
          }

      }

}

  }
p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

}
var myp5 = new p5(Zero);
