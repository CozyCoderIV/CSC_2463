// Sprite Object
let sprite;
let sprite2;

let ilist = []; // Array of Images
let list = []; // Array of Objects

function preload(){
  spritesheet = loadImage("SpelunkyGuy.png");
  spritesheet2 = loadImage("Green.png");

  ilist[0] = spritesheet;
  ilist[1] = spritesheet2;
}
function setup(){
  createCanvas(1440, 1000);
  imageMode(CENTER);

  // Instantiate Sprite
  sprite = new Sprite(spritesheet);
  sprite2 = new Sprite(spritesheet2);

  // (Initialize - Instantiate) Sprite Objects
  for(let i = 0; i < 5; i++){
    list.push(new Sprite(ilist[0]));
  }
  for(let j = 0; j < 5; j++){
    list.push(new Sprite(ilist[1]));
  }

  console.log(list.length); // -> 4 Objects

  console.log(list[0].x, list[0].y);
  console.log(list[1].x, list[1].y);
  console.log(list[2].x, list[2].y);
  console.log(list[3].x, list[3].y);
}

function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    for(let i = 0; i < list.length; i++){
      list[i].go(1);
    }
  }
  else if(keyCode == LEFT_ARROW){
    for(let i = 0; i < list.length; i++){
      list[i].go(-1);
    }
  }

  console.log(list[0].x, list[0].y);
  console.log(list[1].x, list[1].y);
  console.log(list[2].x, list[2].y);
  console.log(list[3].x, list[3].y);
}

function keyReleased(){
  for(let i = 0; i < list.length; i++){
    list[i].stop();
  }
}
function draw(){
  background(120);

  // Draw Sprite Objects
  for(let i = 0; i < list.length; i++){
    list[i].draw();
  }
}

// Object Class
class Sprite{
  // Constructor
  constructor(spritesheet){
    this.spritesheet = spritesheet;
    this.sx = 0;
    this.x = random(width-200);
    this.y = random(height-200);
    this.move = 0;
    this.facing = 1;
  }

  // Methods
  draw(){
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if(this.move == 1){
      image(this.spritesheet, 0, 0, 145, 145, 80 * (this.sx+1), 0, 80, 80);
    }
    else if(this.move == -1){
      image(this.spritesheet, 0, 0, 145, 145, 80 * (this.sx+1), 0, 80, 80);
    } else{
      image(this.spritesheet, 0, 0, 145, 145, 0, 0, 80, 80);
    }

    if(frameCount % 5 == 0){
      this.sx = (this.sx+1) % 8;
    }
    this.x += 2 * this.move;
    pop();
  }
  
  go(direction){
    this.move = direction;
    this.facing = direction;
    this.sx = 3
  }

  stop(){
    this.move = 0;
  }
}

/*// Array of Objects
let group = [];
let idle;

// Image Array
let images = [];
let index = 0;
let refl = false;

function preload(){

  // Fill Image Array 
  for(let i = 0; i < 9; i++){
    let temp = loadImage("spelunkysheets/tile00" + i + ".png");
    images.push(temp);
  }
  idle = images[index];
}

function setup() {
  createCanvas(700, 700);

  // (Initialize - Instantiate) Sprite Objects
   for(let i = 0; i < 4; i++){
     group.push(new spriteObject(idle));
   }

}

function draw() {
  background(120);

  if(refl){
    scale(-1, 1);
    for(let i = 0; i < group.length; i++){
      group[i].display();
    }
  }

  // Draw Sprite Objects
  for(let i = 0; i < group.length; i++){
    group[i].display();
  }

}

// Sprite Object
class spriteObject {

  // Constructor
  constructor(img){
    // Attributes
    this.x = random(width-200);
    this.y = random(height-200); 

    this.sprite = img;
  }
  
  // Methods
  move(){
    image(images[0], this.x, this.y, this.width, this.height);

    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
       refl = false; 
       this.x +=5;
       this.animate(); 
      }  else if (keyCode == LEFT_ARROW) {
        refl = true; 
        this.x -= 5;
        this.animate();
      } 
    } 
  }

  display(){
    this.move();
  }

  animate(){
    image(images[index], this.x, this.y, this.width, this.height);
    index++;
    if(index === images.length){
      index = 0;
    }
  }

}*/