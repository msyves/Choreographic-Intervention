class Star {
  
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.xdir = random(-2,2);
    this.ydir = random(-2,2);
    this.s = random(3,15);
  }
 
  // star moves to edge of screen
  move() {
    this.x += this.xdir;
    this.y += this.ydir;
  }

  moveFaster() {
    // this.xdir += 0.05
    // this.ydir += 0.05
    this.xdir = this.xdir < 0 ? this.xdir -= 0.1 : this.xdir += 0.1
    this.ydir = this.ydir < 0 ? this.ydir -= 0.1 : this.ydir += 0.1
  }
	// display ellipses
  display() {
    fill(255, random(70,250));
    noStroke();
    ellipse(this.x, this.y, this.s);
  }
  // check if ellipse reach the edge, return true or false
  finished() {
    return this.y > height || this.y < 0;
  }
  // ellipse go from center again
  reset() {
    this.x = width/2;
    this.y = height/2;
    this.xdir = random(-6,6);
    this.ydir = random(-6,6);
  }
}