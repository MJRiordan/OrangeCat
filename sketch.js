function setup() {
  createCanvas(800, 600);
  background(174,232,251);
}

function draw() {
  
  //Ears
  noStroke();
  fill(255,130,28);
  angleMode(DEGREES);
  triangle(300+(100*cos(67.5)),300-(100*sin(67.5)),400,200,300+(100*cos(22.5)),300-(100*sin(22.5)));
  triangle(300-(100*cos(67.5)),300-(100*sin(67.5)),200,200,300-(100*cos(22.5)),300-(100*sin(22.5)));
  
  //Head
  ellipseMode(CORNER);
  arc(200,200,200,200,PI,0);
  
  //Body
  rect(200,300,200,200);
    
  //HeadBodyOutline
  stroke(0);
  strokeWeight(4);
  noFill();
  line(200,300,200,500);
  line(400,300,400,500);
  arc(200,200,200,200,180,202.5);
  arc(200,200,200,200,247.5,292.5);
  arc(200,200,200,200,337.5,0);
  line(300+(100*cos(67.5)),300-(100*sin(67.5)),400,200);
  line(400,200,300+(100*cos(22.5)),300-(100*sin(22.5)));
  line(300-(100*cos(67.5)),300-(100*sin(67.5)),200,200);
  line(200,200,300-(100*cos(22.5)),300-(100*sin(22.5)));
  
  
  //Hindleg Background
   noStroke();
  fill(255,130,28);
  arc(180,400,60,60,PI,0);
  rect(180,430,60,70);
  arc(360,400,60,60,PI,0);
  rect(360,430,60,70);
  
  stroke(0);
  strokeWeight(4);
  angleMode(RADIANS);
  
  //Forelegs
  line(250,375,250,475);
  line(300,375,300,475);
  line(350,375,350,475);
  noFill();
  arc(250,450,50,50,0,PI);
  arc(300,450,50,50,0,PI);
  
  //Hindlegs
  arc(180,400,60,60,PI,0);
  line(180,430,180,498);
  //line(240,430,240,500);
  arc(360,400,60,60,PI,0);
  //line(360,430,360,500);
  line(420,430,420,498);
  line(180,500,420,500);
  
  //Tail
  noStroke();
  fill(255,130,28);
  arc(165,470,30,30,HALF_PI,PI+HALF_PI);
  rect(180,470,170,30);
  arc(335,470,30,30,PI+HALF_PI,HALF_PI);
  
  //TailOutline
  stroke(0);
  strokeWeight(4);
  noFill;
  arc(165,470,30,30,HALF_PI,PI+HALF_PI);
  line(180,470,350,470);
  line(180,500,350,500);
  arc(335,470,30,30,PI+HALF_PI,HALF_PI);
  
  //Eyes
  fill(255);
  ellipseMode(RADIUS);
  ellipse(270,280,30,30);
  ellipse(330,280,30,30);
  fill(0);
  ellipse(275,280,20,20);
  ellipse(325,280,20,20);
  
  //NoseAndMouth
  arc(300,315,10,5,PI,0,OPEN);
  arc(300,315,10,15,0,PI,OPEN);
  noFill();
  line(300,330,300,340);
  arc(285,340,15,15,0,PI);
  arc(315,340,15,15,0,PI);
  
}