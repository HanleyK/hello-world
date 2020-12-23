var dots=0;
var rollTotal=0;
var xPos=0;
var yPos=0;
var start=0;
var off=0;
var sumEven=false;
var sumOdd=false;

function setup()
{
	createCanvas(520, 520);
	noLoop();
}
function draw()
{
	var rollSum=0;
	background(208,88,216);
	if(off==0){
		guess();
	}
	var dice = new Array(9);
	var xBtwn=133;
	var yBtwn=40;
	if(start!=0){
		for(var i=0; i<dice.length; i++){
			if(i<3){
				dice[i] = new Dice(90+xBtwn*i, yBtwn);
			}
			else if(i<6){
				yBtwn=140;
				dice[i] = new Dice(90+xBtwn*(i-3), yBtwn);
			}
			else{
				yBtwn=240;
				dice[i] = new Dice(90+xBtwn*(i-6), yBtwn);
			}
			dice[i].roll();	
			rollSum+=dice[i].getRollSum();
			dice[i].show();	
			if((rollSum%2)!=0){
				sumOdd=true;
				sumEven=false;
			}
			else if((rollSum%2)==0){
				sumOdd=false;
				sumEven=true;
			}
		}
		text("The total is"+" "+rollSum+".", 190, 375);
		if(sumOdd==false&&sumEven==true){
			fill(51,51,204);
			text("It's even!", 220, 400);
		}
		if(sumOdd==true&&sumEven==false){
			fill(0,102,51);
			text("It's odd!", 220, 400);
		}
		
	}
}
function mousePressed(){
	off=1;
	if(start==0){
		start+=1;
		draw();
	}
	else{
		background(208,88,216);
		guess();
		start=0;
	}
}
function guess(){
	if(start!=0||off==0){
		fill(255);
		textSize(30);
		text("If I roll 9 die, do you think the" ,60,height/2-100);
		text("sum will be even or odd?" ,80,height/2-70);
		textSize(25);
		fill(51,51,204);
		text("Even!", 50, 300);
		fill(0,102,51);
		text("Odd!", 400, 300);
		textSize(22);
	}
}

class Dice 
{
	constructor(x, y) 
	{
		xPos=x;
		yPos=y;         
	}
	mousePressed(){
		loop();
		draw();
	}
	roll(){
		dots=(int)(Math.random()*6) + 1;
		rollTotal=0;
		rollTotal+=dots;
	}
	getRollSum(){
		return rollTotal;
	}
	show(){
		fill(0);
		rect(xPos,yPos,75,75);
		fill(255);
		if(dots==1){
			ellipse(xPos+38,yPos+38,18,18);
		}
		if(dots==2){
			ellipse(xPos+25,yPos+25,20,20);
			ellipse(xPos+50,yPos+50,20,20);	
		}
		if(dots==3){
			ellipse(xPos+38,yPos+38,20,20);
			ellipse(xPos+57,yPos+57,20,20);
			ellipse(xPos+19,yPos+19,20,20);
		}
		if(dots==4){
			ellipse(xPos+18,yPos+20,20,20);
			ellipse(xPos+18,yPos+54,20,20);
			ellipse(xPos+58,yPos+20,20,20);
			ellipse(xPos+58,yPos+54,20,20);
		}
		if(dots==5){
			ellipse(xPos+38,yPos+38,20,20);
			ellipse(xPos+18,yPos+20,20,20);
			ellipse(xPos+18,yPos+54,20,20);
			ellipse(xPos+58,yPos+20,20,20);
			ellipse(xPos+58,yPos+54,20,20);
		}
		if(dots==6){
			ellipse(xPos+22,yPos+16,20,20);
			ellipse(xPos+22,yPos+37,20,20);
			ellipse(xPos+22,yPos+58,20,20);
			ellipse(xPos+54,yPos+16,20,20);
			ellipse(xPos+54,yPos+37,20,20);
			ellipse(xPos+54,yPos+58,20,20);
		}
	}
}