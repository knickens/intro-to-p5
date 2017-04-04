var kiaraRed = 50;
var kiaraBlue = 255;
var kiaraGreen = 255;


function setup(){
 createCanvas(700,500);
 if(mouseIsPressed){
    background(0); 
 }
 kiaraBlue = random(0,255);
 kiaraGreen = random(0,255);
 kiaraRed = random(0,255);
}

function draw(){
    
     fill(kiaraBlue,kiaraGreen,kiaraRed);
    rect(mouseX,200,100,100);
    
    
     fill(kiaraBlue,kiaraGreen,kiaraRed);
    rect(mouseX,200,70,70);    

   
    fill(kiaraBlue,kiaraGreen,kiaraRed);
    ellipse(50,mouseY,40,40);
    
    
    ellipse(100,mouseY,10,10);
    
    line(50,50,30.100);
    stroke(255,255,255);
    strokeWeight(2);
    line(50,50,200,20);
    line(0,500,200,50);    
    }
