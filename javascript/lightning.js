var startX = 250;
var startY = 200;
var endX = 250;
var endY = 400;

function setup() {
  createCanvas(500, 500);
  background(7,5,51);
  strokeWeight(3);
}
function draw() {
  var c1 = (int)(Math.random()*255);
  var c2 = (int)(Math.random()*255);
  var c3 = (int)(Math.random()*255);
  while (endX < 600) {
    stroke(c1, c2, c3);
    endX=startX + (int)(Math.random()*10);
    endY=startY + ((int)(Math.random()*20)-9);
    line(startX, startY, endX, endY);
    startX=endX;
    startY=endY;
  }
	//background
	stroke(0,51,8);
	fill(0,51,8);
	rect(0,350,500,250);
	//moon
	stroke(0);
	fill(255);
	ellipse(400,50,60,60);
	//broom
	stroke(0);
	fill(187,175,82);
	rect(50,195,200,20);
	//pumpkin body
	fill(255,146,0);
	ellipse(100,170,75,50);
	//leaf
	fill(57,172,0);
	ellipse(120,130,30,10);
	rect(95,125,10,20);
	//smile and eyes
	fill(0);
	arc(100, 170, 50, 40, 0, 3.14);
	ellipse(120,160,10,10);
	ellipse(80,160,10,10);
}
function mousePressed() {
  startX = 250;
	startY = 200;
	endX = 250;
	endY = 400;
}