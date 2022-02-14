// // Attributes

function setup() {
  createCanvas(1100, 600);
  background(225, 220, 200);

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
function draw() {
  if((mouseX <= 25 && mouseY <= 45) && mouseIsPressed)
  {   console.log("red");
      value = color(225, 0, 0);
  } else if(mouseX <= 25 && ((mouseY > 45 && mouseY < 75) && mouseIsPressed)){
    console.log("orange");
    value = color(255, 132, 0);
  } else if(mouseX <= 25 && ((mouseY > 75 && mouseY < 95) && mouseIsPressed)){ 
    console.log("yellow");
    value = color(255, 230, 0);
  } else if(mouseX <= 25 && ((mouseY > 95 && mouseY < 115) && mouseIsPressed)){
    console.log("green");
    value = color(106, 255, 0);
  } else if(mouseX <= 25 && ((mouseY > 135 && mouseY < 145) && mouseIsPressed)){
    console.log("sky blue");
    value = color(0, 247, 255);
  } else if(mouseX <= 25 && ((mouseY > 155 && mouseY < 185) && mouseIsPressed)){
    console.log("blue");
    value = color(0, 64, 255);
  } else if(mouseX <= 25 && ((mouseY > 200 && mouseY < 215) && mouseIsPressed)){
    console.log("magenta");
    value = color(221, 0, 255);
  } else if(mouseX <= 25 && ((mouseY > 225 && mouseY < 235) && mouseIsPressed)){
    console.log("brown");
    value = color(74, 39, 1);
  } else if(mouseX <= 25 && ((mouseY > 245 && mouseY < 275) && mouseIsPressed)){
    console.log("white");
    value = color('white');
  } else if(mouseX <= 25 && ((mouseY > 285 && mouseY < 300) && mouseIsPressed)){
    console.log("black");
    value = color('black');
  }
  
  if(mouseIsPressed && mouseX >= 50)
  {  stroke(value);
     strokeWeight(5);
     curve(mouseX, mouseY, mouseX, mouseY);
     line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


