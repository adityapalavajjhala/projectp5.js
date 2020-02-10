function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 60, 100);

  line(0, 0, 400, 400);
  line(400, 0, 0, 400);
  circle(20, 20, 100);
  rectMode(CENTER);
  rect(200, 200, 150, 150);
  circle(370, 370, 100);

  triangle(400,0,340,10,380,60);
  quad(0,400,40,340,100,300,60,370); 
draw2();
}

function draw2(){
  ellipse(200,200,200,100);
  fill(100);
}