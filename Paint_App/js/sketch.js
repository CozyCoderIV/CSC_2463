// Attributes
let serialPDM;
let portName = "/dev/tty.usbmodem113401";

let serial;
let latestData;
let acount = 0;

let paint;

let change;
let bsensor;

// Set up Tone
let sound1 = new Tone.Player('media/paint.mp3').toDestination();
let sound2 = new Tone.Player('media/switch.mp3').toDestination(); 
let sound3 = new Tone.Player('media/themeA.mp3').toDestination(); 

// Methods
function preload(){
  // Setup Arduino Connection
  serialPDM = new PDMSerial(portName);
  bsensor = serialPDM.sensorData;
}
function setup() {
  createCanvas(1100, 600);
  background(225, 220, 200);

  // CHange Boolean
  change = false;

  // Colors
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
  if(mouseIsPressed && mouseX >= 50)
  {  change = false;
     paint = true; 
     stroke(value);
     strokeWeight(5);

     curve(mouseX, mouseY, mouseX, mouseY);
     line(mouseX, mouseY, pmouseX, pmouseY);

     serialPDM.transmit('mouse', paint); // Send data 
  }
  else{
    paint = false;
  }
  switch(bsensor.p9){
    case 0:
      change = true;
      paint = false;
      value = color(255, 0, 0);
      break;
    case 1:
      change = true;
      paint = false;
      value = color(255, 132, 0);
      break;
    case 2:
      change = true;
      paint = false;
      value = color(255, 230, 0);
      break;
    case 3:
      change = true;
      paint = false;
      value = color(106, 255, 0);
      break;
    case 4:
      change = true;
      paint = false;
      value = color(0, 247, 255);
      break;
    case 5: 
      change = true;
      paint = false;
      value = color(0, 64, 255);
      break;
    case 6: 
      change = true;
      paint = false;
      value = color(221, 0, 255);
      break;
    case 7:
      change = true;
      paint = false;
      value = color(74, 39, 1);
      break;
    case 8:
      change = true;
      paint = false;
      value = color('white');
      break;
    case 9:
      change = true;
      paint = false;
      value = color('black');
      break;
  }

  console.log("mouseX: " + mouseX);
  console.log("mouseY: " + mouseY);
}

function mousePressed(){
  if(!change){
    paint = true;
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
  paint = false;
  count++;
  if(count >= 10){
    count = 0;
  }
  sound1.stop();
}

function playSound(){
    sound3.start();
}
 
