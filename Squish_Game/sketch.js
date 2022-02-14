// Attributes
let bugArray = []; // object array
let bugArray2 = []; // Updated object array
let blength = 175; // Object array size
let scounter = 0; // squish count
let bspeed = 1; // bug speed

// Time Attributes
let startSec = 30; // Start Time
let endSec = 0; // End Time
let totalTime;

let run = false; // run boolean

// Image Attributes
let imgA;
let imgB; // Beetle
let imgC;
let imgD; // Spider

// Tracker Array
let tracked = []; // Debug Array
let clickcount = 0; // Debug Var

let twoFive = blength * (1/4); // Kill Tracker
let fiveZero = blength / 2; // Kill Tracker
let sevenFive = blength * (3/4); // Kill Tracker

let scoreText = 0; // Title var
let time = 30; // Total seconds
let button; // Start Button

function preload() {
  // Upload Spritesheets
  imgA = loadImage("Bug.png");
  imgB = loadImage("Bug(Death).png");
  imgC = loadImage("Bug(Spider).png");
  imgD = loadImage("Bug(Spider-Dead).png");
}
function setup() {
  createCanvas(800, 700);

  // Instantiate Objects
  for(let x = 0; x < blength/2; x++){
    bugArray.push(new Bug(imgA, random(1, 5)));
  }
  for(let j = 0; j < blength/2; j++){
    bugArray.push(new Bug(imgC, random(1, 5)));
  }

}
function draw() {
  background(130);

  // Text Setup
  textSize(30);
  fill(95, 250, 90);
  text("Squish Game ", 10, 30);
  fill('white')
  text("Time: ", 270, 30);
  fill(100, 0, 0);
  text("Kill Count: ", 425, 30);
  fill(190, 0, 0);
  text(scoreText, 570, 30);
  fill(0);
  text(startSec + "s", 360, 30);

  rect(630, 8, 120, 30);
  fill('white');
  button = text("Start", 655, 32);

  // Timer && Bug Disappear After Death Mechanics 
  if ((frameCount % 60 == 0 && startSec > 0) && run){
    startSec--;
    for(let c = 0; c < bugArray.length; c++){
      if(bugArray[c].getImg() == imgB || bugArray[c].getImg() == imgD){
        if(frameCount % 120 == 0 && startSec > 0){
          bugArray[c].setState(false);
        }
      }
    }
  }

  // Bug Objects -> Render && Update Mechanics 
  for(let i = 0; i < bugArray.length; i++){
    bugArray[i].draw();
    if(tracked.length >= 3 && tracked.length < 15){
      bugArray[i].setSpeed(5);
    } else if (tracked.length > twoFive && tracked.length < fiveZero){
      bugArray[i].setSpeed(random(6, 8))
    } else if (tracked.length > fiveZero && tracked.length < sevenFive){
      bugArray[i].setSpeed(random(8, 10))
    } else if (tracked.length > sevenFive){
      bugArray[i].setSpeed(11);
    }
  }

}
function mouseClicked(){
  console.log("Start Array Length: " + blength);
  
  if (mouseX >= 590 && mouseY <= 30){
    run = true;
    button = text("Start", 655, 32);
  }
  if(run){ 
    update();
  }
}
function update() {
  for(let i = 0; i < bugArray.length; i++){
    bugArray[i].grab();
  }

  if(startSec <= endSec){
    run = false;
  }
}

// Bug Class
class Bug {
  // Constructor
  constructor(img, speed){
    this.img = img;
    this.speed = speed;
    this.sx = 0;
    this.x = random(width-100);
    this.y = random(100, 450);
    this.move = 1;
    this.facing = 1;
    this.dead = false;
    this.dir = Math.round(random(1, 4));
    this.alive = true;
  }

  // Getters && Setters
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getImg(){
    return this.img;
  }
  getState(){
    return this.alive;
  }
  setImg(newImg){
    this.move = 0;
    this.img = newImg;
    this.dead = true; 
  }
  setSpeed(nspeed){
    this.speed = nspeed;
  }
  setState(nbool){
    this.alive = nbool;
  }

  // Methods
  draw(){
    if(this.getState() == true){
      push();
      image(this.img, this.x, this.y, 60, 60);
      scale(this.facing, 1);
      if(run == true){
        if(this.dir == 1){
          this.y -= this.speed * this.move;
        } else if(this.dir == 2){
          this.y += this.speed * this.move;
        } else if(this.dir == 3){
          this.x += this.speed * this.move;
        } else if(this.dir == 4){
          this.x -= this.speed * this.move;
        }
      }
      if(this.y < 100){
        this.move = -1;
        this.facing = 1;
      }
      if(this.y > height-50){
        this.move = 1;
        this.facing = -1;
      }
      if(this.x > width-50){
        this.move = -1;
        this.facing = -1;
      }
      if(this.x < 50){
        this.move = 1;
        this.facing = -1;
      }
      pop();
    }
  }
  go(direction){
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  stop(){
    this.move = 0;
    this.setState(true); // dead
    tracked.push(1);
    console.log("Score " + tracked.length);
    scoreText = tracked.length;
  }
  grab(){
    if((mouseX > this.x - 30 && mouseX < this.x + 30) && (mouseY > this.y - 20 &&
       mouseY < this.y + 40) && (this.getImg() == imgA)){
         this.grabbed = true;
         this.setImg(imgB);
         this.stop();
       }

       if((mouseX > this.x - 30 && mouseX < this.x + 30) && (mouseY > this.y - 20 &&
        mouseY < this.y + 40) && (this.getImg() == imgC)){
          this.grabbed = true;
          this.setImg(imgD);
          this.stop();
        }
  }
}

