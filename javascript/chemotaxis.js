var b=[40];
function setup() {
	createCanvas(600,600);
	for (var i=0; i<20; i++) {
		b[i]=new Bacteria(width/2, height/2);
	}
}
function draw() {
	background(216, 108, 243);
	fill(255);
	textSize(25);
	text("Run from the skittles!",180,150);
	for (var i=0; i<20; i++) {
		b[i].move();
		b[i].show();
	}
}
class Bacteria {
	constructor(bX, bY) {
		this.xPos=bX;
		this.yPos=bY;
	}
	move() {
		this.xPos += (int)(Math.random() * 9) - 4;
		this.yPos += (int)(Math.random() * 9) - 4;
		if (mouseX > this.xPos) {
			this.xPos += (int)(Math.random() * 7);
		} else if (mouseX < this.xPos) {
			this.xPos -= (int)(Math.random() * 7);
		}if(mouseY > this.yPos) {
			this.yPos += (int)(Math.random() * 7);
		}else if(mouseX < this.yPos) {
			this.yPos -= (int)(Math.random() * 7);
		}
	}

	show() {
		fill((float)(Math.random()*255), (float)(Math.random()*255), (float)(Math.random()*255));
		ellipse(this.xPos, this.yPos, (Math.random()*15)+5, (Math.random()*15)+5);
		fill(255);
		textSize(12);
		text("run", this.xPos, this.yPos);
	}
}