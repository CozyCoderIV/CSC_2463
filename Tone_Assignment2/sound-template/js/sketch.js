// Attributes
let slider;  // create reverb slider 
let slider2; // create freeverb slider

const synth2 = new Tone.FMSynth();
const chorus = new Tone.Chorus(4, 2.5, 0.5);
const synth3 = new Tone.PolySynth().connect(chorus);
const drum = new Tone.MembraneSynth().toDestination();

const phaser = new Tone.Phaser();
const reverb = new Tone.JCReverb().toDestination();
const freeverb = new Tone.Freeverb().toDestination();

synth2.connect(phaser);
synth3.connect(chorus);
phaser.connect(reverb);
phaser.connect(freeverb);
chorus.connect(phaser);

let notes = { 
  'a': 'C2',
  's': 'D3',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}
let notes2 = {
  'z': "C3",
  'x': "E3",
  'c': "G3"
}
let notes3 = {
  'u': "A2",
  'i': "B2",
  'o': "C2",
  'p': "D2"
}
function setup() {
  createCanvas(400, 400);
  slider = new Nexus.Slider('#slider');
  slider.on('change', (v)=> {
    reverb.roomSize.value = v;
  })

  slider2 = new Nexus.Slider('#slider2', {
    'min': 0,
    'max': 1
  });
   slider2.on('change', (v)=>{
     freeverb.roomSize.value = v;
   })
 }
function draw() {
  background(0,110,110);

  stroke(0)
  fill(5, 200, 190);
  rect(5, 2, 100, 19);
  rect(5, 49, 100, 19);

  circle(130, 130, 40)
  circle(170, 150, 40)
  circle(210, 170, 40)
  circle(250, 190, 40)
  circle(290, 210, 40)
  circle(130, 180, 40)
  circle(170, 200, 40)
  circle(210, 220, 40)

  fill(150);
  circle(250, 240, 40)
  circle(290, 260, 40)
  circle(330, 280, 40)

  fill(50);
  circle(230, 70, 40);
  circle(275, 70, 40);
  circle(320, 70, 40);
  circle(365, 70, 40);

  fill(0);
  text("Reverb Lvl.", 9, 18);
  text("Freeverb Lvl.", 9, 65);
  text("C2", 125, 135);
  text("a", 155, 110);
  text("D3", 165, 155);
  text("s", 195, 130);
  text("E4", 205, 175);
  text("d", 235, 150);
  text("F4", 245, 195);
  text("f", 275, 170);
  text("G4", 285, 215);
  text("g", 315, 190);
  text("A4", 125, 185); 
  text("h", 115, 215);
  text("B4", 165, 205); 
  text("j", 155, 235);
  text("C5", 205, 225); 
  text("k", 195, 255);
  text("z", 235, 275);
  text("x", 275, 295);
  text("c", 315, 315);
  
  fill(255);
  text("C3", 245, 245); 
  text("E3", 285, 265); 
  text("G3", 325, 285); 

  fill(5, 200, 190);
  text("A2", 225, 75) 
  text("u", 225, 110)
  text("B2", 270, 75) 
  text("i", 270, 110)
  text("C2", 315, 75) 
  text("o", 315, 110)
  text("D2", 360, 75) 
  text("p", 360, 110)

  

  fill(210)
  rect(5, 365, 390, 30);

  fill(5, 120, 120);
  text("Tone.js / NexusUI.js Synthesizer", 100, 385)


  stroke(250)
  line(0, 200, 100, 270);
  stroke(250)
  line(0, 230, 155, 335)
}
function keyPressed(){
  let toPlay = notes[key];
  let toPlay2 = notes2[key];
  let toPlay3 = notes3[key];
  console.log(toPlay);

  synth2.triggerAttackRelease(toPlay, 0.5);

  synth3.triggerAttackRelease(toPlay2, 1);
  drum.triggerAttackRelease(toPlay3, 2);
}