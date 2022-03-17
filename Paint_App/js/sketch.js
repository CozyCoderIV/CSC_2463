// Attributes
let change;

// Set up Tone
let sound1 = new Tone.Player('media/paint.mp3').toDestination();
let sound2 = new Tone.Player('media/switch.mp3').toDestination(); 
let sound3 = new Tone.Player('media/themeA.mp3').toDestination(); 
function setup() {
  createCanvas(1100, 600);
  background(225, 220, 200);
 
  change = false;

  noStroke();
  fill('red');
  rect(5, 10, 30, 30); // red

  fill('orange');
  rect(5, 40, 30, 30); // orange

  fill('yellow');
  rect(5, 70, 30, 30); // yellow

  fill(106, 255, 0);
  rect(5, 100, 30, 30); // green

  fill(0, 247, 255);
  rect(5, 130, 30, 30); // sky blue

  fill(0, 64, 255);
  rect(5, 160, 30, 30); // blue

  fill(221, 0, 255);
  rect(5, 190, 30, 30); // magenta

  fill(74, 39, 1);
  rect(5, 220, 30, 30); // brown

  fill('white');
  rect(5, 250, 30, 30); // white

  fill(0, 0, 0);
  rect(5, 280, 30, 30); // black
}

let value = 0;
let count = 0;
function draw() {
  if((mouseX <= 75 && mouseY <= 45) && mouseIsPressed)
  { change = true;
    console.log("red" + change);
    value = color(225, 0, 0);
  } else if(mouseX <= 75 && ((mouseY > 45 && mouseY < 75) && mouseIsPressed)){
    change = true;
    console.log("orange" + change);
    value = color(255, 132, 0);
  } else if(mouseX <= 75 && ((mouseY > 75 && mouseY < 95) && mouseIsPressed)){ 
    change = true;
    console.log("yellow" + change);
    value = color(255, 230, 0);
  } else if(mouseX <= 75 && ((mouseY > 95 && mouseY < 115) && mouseIsPressed)){
    change = true;
    console.log("green" + change);
    value = color(106, 255, 0);
  } else if(mouseX <= 75 && ((mouseY > 135 && mouseY < 145) && mouseIsPressed)){
    change = true;
    console.log("sky blue" + change);
    value = color(0, 247, 255);
  } else if(mouseX <= 75 && ((mouseY > 155 && mouseY < 185) && mouseIsPressed)){
    change = true;
    console.log("blue" + change);
    value = color(0, 64, 255);
  } else if(mouseX <= 75 && ((mouseY > 200 && mouseY < 215) && mouseIsPressed)){
    change = true;
    console.log("magenta" + change);
    value = color(221, 0, 255);
  } else if(mouseX <= 75 && ((mouseY > 225 && mouseY < 235) && mouseIsPressed)){
    change = true;
    console.log("brown" + change);
    value = color(74, 39, 1);
  } else if(mouseX <= 75 && ((mouseY > 245 && mouseY < 275) && mouseIsPressed)){
    change = true;
    console.log("white" + change);
    value = color('white');
  } else if(mouseX <= 75 && ((mouseY > 285 && mouseY < 300) && mouseIsPressed)){
    change = true;
    console.log("black" + change);
    value = color('black');
  }
  if(mouseIsPressed && mouseX >= 50)
  {  change = false;
     console.log(count); 
     stroke(value);
     strokeWeight(5);
     curve(mouseX, mouseY, mouseX, mouseY);
     line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
function mousePressed(){
  if(!change){
    sound1.start();
    sound2.stop();
  } else if(change){
    sound2.start();
  }

  if(count === 0){
    playSound();
  }
} 
function mouseReleased(){
  count++;
  if(count >= 10){
    count = 0;
  }
  sound1.stop();
}
function playSound(){
    sound3.start();
}
