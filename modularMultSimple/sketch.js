/*
Reading "Descartes' Secret Notebook" got me thinking of geometry, harmony and the universe. So I happened to revisit modular multiplication on my phone. When you don't clear the screen after each multiple, it makes a sort of nice harmonic universe in an egg thingy. Here I have coded it up in just about 30 lines, with a much more simple approach than I used before when following #thecodingtrain.

To create the visualization we need two points on a circle.  They will be the two ends of a line.

We must be familiar with polar to Cartesian coordinates.  soh cah toa.  but we only need the soh cah  

the x, y Cartesian from polar  r and theta define a one step move around a circle

x1 y1 Cartesian from polar r and theta1 defines the other end. 

so drawing the modular multiple 2: theta1 = theta *2 
*/

let x,x1;
let y,y1;
let r;
let theta = 0;
let theta1;
let m =2;

function setup() {
  createCanvas(windowWidth,windowHeight)
  if (width>height){
    r = height/2 -10;
  } else{
    r = width/2-10;  
  }
  background(0);
  translate(width/2,height/2);
  angleMode(DEGREES);
  stroke(255,50);
  fill(255);
}

function draw() {
  //background(0);
  translate(width/2,height/2);
  theta++;

  if (theta%360 == 0){ //incr each round
    m=m+1
    //background(0);
    if (m>12){       // reset after 12 back to 2
      background(0);
      m=2;
      theta =0;
    }
  }
  theta1 = theta*m;
  x = cos(theta) *r;
  y = sin(theta) *r;
  x1 = cos(theta1) *r;
  y1 = sin(theta1) *r;
  line(x,y,x1,y1);
}