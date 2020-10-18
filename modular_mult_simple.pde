float x,x1;
float y,y1;
int r =180;
int theta = 0;
int theta1;
int m =2;

void setup() {
  //size(400, 400);
  fullScreen();
  background(0);
  translate(width/2,height/2);
  //angleMode(DEGREES);
  stroke(255,50);
  fill(255);
  if (width>height){
    r = height/2 -10;
  } else{
    r = width/2-10;  
  }
   
}

void draw() {
  //background(0);
  translate(width/2,height/2);
  theta+=2;
  if (theta%360 == 0){ //incr each round
    m=m+1;
    if (m>11){
      m=2;
      theta =0;
      background(0);
    }
   // background(0);
  }
  theta1 = theta*m;
  x = cos(radians(theta)) *r;
  y = sin(radians(theta)) *r;
  x1 = cos(radians(theta1)) *r;
  y1 = sin(radians(theta1)) *r;
  line(x,y,x1,y1);
}
