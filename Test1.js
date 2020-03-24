let bubble1 , bubble2;

function setup() {
  createCanvas(300, 300);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  print(bubble1.x, bubble1.y);
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble1.bounce();

  bubble2.show();
  bubble2.move();
  bubble2.bounce();

}

class Bubble {
  constructor(){
    this.x = random(0,300);
    this.y = random(0,300);
    this.xspeed = random(-5,5);
    this.yspeed = random(-5,5);
  }

  move() {
    this.x = this.x + this.xspeed
    this.y = this.y + this.yspeed
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

  bounce() {
    if (this.x > width || this.x < 0) {
     this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
     this.yspeed = this.yspeed * -1;
    }
  }

}
