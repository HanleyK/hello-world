function setup() {
	var canvas = createCanvas(800, 400);
}

function draw() {
	background(0);
	//PFont g= createFont("Georgia",24);
	//PFont t= createFont("Times New Roman",24);
	//PFont a= createFont("",24);



	var s = "Things are stressful";
	textSize(23);
	textFont("Times New Roman");
	text(s, 100, 100);
	text(s, 100, 110);
	text(s, 100, 115);

	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		fill(random(255));


		textSize(43);
		textFont('Georgia');
		text(s, 100, 200);
		text(s, 100, 210);
		text(s, 100, 215);

		fill(200, 20, 200);

		text(s, 100, 300);
		text(s, 100, 310);
		text(s, 100, 315);
	}

}