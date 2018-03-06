var figure = function( p ) {

    var windowX;
    var windowY;


    p.setup = function() {
      p.pixelDensity(2);
      p.frameRate(10);
      p.noStroke();
      var canvas = p.createCanvas(p.windowWidth,p.windowHeight);
      canvas.parent('sketchHolder');

      windowX = p.windowWidth;
      windowY = p.windowHeight;
    }

    p.draw = function(){//if window changes size
      if(windowX != p.windowWidth || windowY != p.windowHeight){
        p.setup();
        p.windowResized();
        }
      p.background(0,0,0,25);

      p.fill(255,255,255);
      p.rectMode(p.CENTER);
      p.rect(0,windowY/2,p.MyRandomNo(),p.windowHeight);
      p.rect(p.windowWidth,p.windowHeight/2,p.MyRandomNo(),p.windowHeight);
      p.fill(60,60,60);
      p.rect(p.windowWidth/2,p.windowHeight/2,p.MyRandomNo()/5,p.windowHeight);
      p.fill(200,200,200,50);
      p.rect(p.windowWidth/2,p.windowHeight/2,p.MyRandomNo()/15,p.windowHeight);

    }

    p.MyRandomNo = function(){
      var ran;
      ran = Math.random() *200 +100;
      return ran;
    }

    p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  }
var myp5 = new p5(figure);
