var ball = {
  x:200,
  y:200,
  xspeed:-1,
  yspeed:3
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  display();
  move();
  bounce();
}

function move(){
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce(){
  if (ball.x > width || ball.x < 0) {
   ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
   ball.yspeed = ball.yspeed * -1;
  }
}

function display(){
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}
