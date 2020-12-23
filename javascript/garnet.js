function setup() {
	var canvas=createCanvas(500, 500);
}
function draw() {
	background(5,19,150);
	//hair
	stroke(46,2,31);
	fill(46,2,31);
	rectMode(CENTER);
	rect(250,100,100,50);
	rect(180,150,50,150);
	rect(320,150,50,150);
	//head
	stroke(156,0,117);
	fill(156,0,117);
	rect(250,170,90,100);
	rect(250,230,50,20);
	//glasses
	stroke(145,207,185);
	fill(145,207,185);
	rect(250,140,90,50);
	//mouth
	fill(255);
	ellipse(250,200,60,30);
	stroke(0);
	line(250,185,250,215);
	line(230,190,230,210);
	line(270,190,270,210);
	//midsection
	stroke(6,10,82);
	fill(6,10,82);
	rect(225,350,50,120);
	stroke(99,4,91);
	fill(99,4,91);
	rect(275,350,50,120);
	//top pink
	stroke(207,93,173);
	fill(207,93,173);
	ellipse(250,300,200,110);
	//top blue
	stroke(6,10,82);
	fill(6,10,82);
	rect(250,250,80,30);
	//arms
	stroke(156,0,117);
	fill(156,0,117);
	rect(140,375,30,200);
	rect(360,375,30,200);
	//shoulders
	stroke(99,4,91);
	fill(99,4,91);
	ellipse(350,275,75,50);
	fill(99,4,91);
	ellipse(150,275,75,50);
	//lower body
	stroke(6,10,82);
	fill(6,10,82);
	rect(205,450,90,100);
	stroke(99,4,91);
	fill(99,4,91);
	rect(295,450,90,100);
	//name and coursse
	fill(255);
	textSize(32);
	text("ACSCompSciPandemic2020",50,50);
	text("(Made by Kaitlyn Hanley)",75,450)
		//cursor tag
		fill(209,194,31);
	textSize(48);
	text("GARNET",mouseX,mouseY)
	}