//your parameter variables go here!
let bodyX = 140; // move bird left and right
let bodyY = 115; //  move bird up and down
let scaleFactor = 0.8; // to increase/decrease size of bird

let cubeX = 11; // move cube left and right
let cubeY = 8; // move cube up and down
let cubeFactor = 22; // to increase/decrease cube size


let baseColour = '#b3e4e6'; // base colour of cube
let shadeColour = '#4dacb0'; // darker colour of cube
let highlightColour = '#dff4f5'; // lightest colour of cube

let insideCircle = '#c2ffff' // inside circle
let outlineCircle = '#07525e' // outline darkest part of circle
let bubbleCircles = '#1a8b9c' //  the four circle or bubbles

let circleX = 100; // moves circle pattern left and right
let circleY = 80; //  moves circle pattern up and down
let scaleCircle = 20; // scales up or down the largest circle

let fourX = 50; //  mvoes four circles left and right
let fourY = 50; // moves four circles up and down
let fourCircleW = 55; // changes width of four circles
let fourCircleL = 55; // changes length of four circles

let pattern2 = false; // if true creates a pattern (IF STATEMENT FOUND ON LINE 81)

let pattern3 = false; // if true creates pattern 2

let pattern4 = false; // if true creates pattern 4

let pattern5 = false; // if true creates pattern 5

let pattern6 = false; // if true creates pattern 6

let pattern7 = false; // if true creates pattern 7

let pattern8 = false; // if true creates pattern 8

let pattern9 = true; // if true creates pattern 9

let blueColour = true; // if false changes to blue (IF STATEMENT FOUND ON LINE 44)

let bodyColour = '#ffffff' // the body colour of bird
let beakColour = '#fa8d69' // orange colour on face/beak of bird
let featherColour = '#b8afad' // the grey colour on bird
let darkColour = '#141212' // dark colour on bird
let strokeColour = '#183e61' // changes stroke colour of bird

let bodyColour2 = '#ffffff' // the body colour of bird2
let beakColour2 = '#fa8d69' // orange colour on face/beak of bird2
let featherColour2 = '#b8afad' // the grey colour on bird2
let darkColour2 = '#141212' // dark colour on bird2
let strokeColour2 = '#183e61' // changes stroke colour of bird2

let backColour = '#48b2c2' // changes background colour

let flamX = 50 // moves flamingo left and right
let flamY = 50 //  moves flamingo up and down
let flamFactor = 1 // scales flamingo up and down

let flamColour = '#f598e4'
let flamTip = '#212118'
let flamBeak = '#ffffff'
let flamOne = '#bdb182'
let flamTwo = '#f5eed3'
let flamHip = '#e07ece'

let flamColour2 = '#ff0561'
let flamTip2 = '#ff0561'
let flamBeak2 = '#ff0561'
let flamOne2 = '#ff0561'
let flamTwo2 = '#ff0561'
let flamHip2 = '#ff0561'


// colours for pattern cubefactor > 25
if (cubeFactor > 24){
  backColour = '#131361'
  baseColour = '#131361'
  shadeColour = '#131361'
  highlightColour = '#3737b3'
  insideCircle = '#0d0d4f'
  outlineCircle = '#4f4fc9'
  bubbleCircles = '#7f7feb'

}
// pink colour palette
if (blueColour == false) { // changes colour of cubes and circles to pink
  baseColour = '#e6a45a'
  shadeColour = '#d6c24d'
  highlightColour = '#f08de8'
  insideCircle = '#c4376b'
  outlineCircle = '#f578a6'
  bubbleCircles = '#fffcfd'
  backColour = '#ff3d24'
  
}
// colour palette for pattern 4
if (pattern4) {

  backColour = '#ffd4f2'
  outlineCircle = '#ffd4f2'
  insideCircle = '#f542bf'
  baseColour = '#ffd4f2'
  shadeColour = '#f542bf'
  highlightColour = '#ffd4f2'

  flamColour = '#ffd4f8'
  flamTip = '#ffd4f8'
  flamBeak = '#ffd4f8'
  flamOne = '#ffd4f8'
  flamTwo = '#ffd4f8'
  flamHip = '#ffd4f8'

}
// colour palette for pattern 5
if (pattern5) {

  flamTip2 = '#f2f23f'
  flamColour2 = '#f2f23f'
  flamBeak2 = '#f2f23f'
  flamOne2 = '#f2f23f'
  flamTwo2 = '#f2f23f'
  flamHip2 = '#f2f23f'

  flamColour = '#26c5ff'
  flamTip = '#26c5ff'
  flamBeak = '#26c5ff'
  flamOne = '#26c5ff'
  flamTwo = '#26c5ff'
  flamHip = '#26c5ff'

  bodyColour2 = '#f947ff'
  beakColour2 = '#f947ff'
  featherColour2 = '#f947ff'
  darkColour2 = '#f947ff'
  strokeColour2 = '#f947ff'

  bodyColour = '#30ff64'
  beakColour = '#30ff64'
  featherColour = '#30ff64'
  darkColour = '#30ff64'
  strokeColour = '#30ff64'

  
  backColour = '#000000'

}
// colour palette for pattern 6
if (pattern6) {

  bodyColour2 = '#4f1502'
  beakColour2 = '#4f1502'
  featherColour2 = '#4f1502'
  darkColour2 = '#4f1502'
  strokeColour2 = '#4f1502'

  bodyColour = '#ffb95e'
  beakColour = '#ffb95e'
  featherColour = '#ffb95e'
  darkColour = '#ffb95e'
  strokeColour = '#ffb95e'

  baseColour = '#ff8800' 
  shadeColour = '#b34805'
  highlightColour = '#ff9c5e'

  backColour = '#ff8800'

}
// colour palette for pattern 7
if (pattern7) {

  backColour = '#61ffb3'
  outlineCircle = '#004f42'
  insideCircle = '#90fcc8'
  baseColour = '#61ffb3'
  shadeColour = '#08966e'
  highlightColour = '#61ffb3'

  flamColour = '#e3ffe9'
  flamTip = '#e3ffe9'
  flamBeak = '#e3ffe9'
  flamOne = '#e3ffe9'
  flamTwo = '#e3ffe9'
  flamHip = '#e3ffe9'

  flamTip2 = '#02543e'
  flamColour2 = '#02543e'
  flamBeak2 = '#02543e'
  flamOne2 = '#02543e'
  flamTwo2 = '#02543e'
  flamHip2 = '#02543e'

}
// colour palette for pattern 8
if (pattern8) {

  backColour = '#e66374'
  outlineCircle = '#ff6177'
  insideCircle = '#ffa1ad'

  flamColour = '#fc445c'
  flamTip = '#212118'
  flamBeak = '#ffffff'
  flamOne = '#bdb182'
  flamTwo = '#f5eed3'
  flamHip = '#d62b42'

}

if (pattern9) {
  backColour = '#e66374'
  outlineCircle = '#ff6177'
  insideCircle = '#ffa1ad'

  flamColour = '#fc445c'
  flamTip = '#212118'
  flamBeak = '#ffffff'
  flamOne = '#bdb182'
  flamTwo = '#f5eed3'
  flamHip = '#d62b42'

  bodyColour = '#ffebed'
  beakColour = '#cc767f'
  featherColour = '#c7a9ac'
  darkColour = '#42070e'
  strokeColour = '#183e61'
}


// if statements found on line 90 and 192

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 290;
  pWallpaper.grid_settings.cell_height = 225;
  pWallpaper.grid_settings.row_offset  = 110;
}

function wallpaper_background() {
  background(backColour); 

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  if (pattern2) {
  
    DrawCube(5,5,4); // cube found on the top left corner ( rest of cube go from left )

    DrawCube(18.5,5.5,3); //small

    DrawCube(25,5,4);

    DrawCube(45,5.5,3); //small

    DrawCube(45,5,4);

    DrawCube(72,5.5,3); //small

    DrawCube(0,13,4);

    DrawCube(11.5,16.5,3); //small

    DrawCube(20,13,4);

    DrawCube(38.5,16.5,3); //small

    DrawCube(40,13,4);

    DrawCube(65,16.5,3); //small

    DrawCube(60,13,4);

    DrawCube(5,27,3); //small

    DrawCube(15,21,4);

    DrawCube(32,27,3); //small

    DrawCube(35,21,4);

    DrawCube(58.5,27,3); //small

    DrawCube(55,21,4);

    DrawCube(-1.5,37.5,3); //small

    DrawCube(10,29,4);

    DrawCube(25,37.5,3); //small

    DrawCube(30,29,4);

    DrawCube(51.5,37.5,3); //small

    DrawCube(50,29,4);

    DrawCube(78.5,37.5,3); //small

    DrawCube(5,37,4);

    DrawCube(18.5,48.5,3); //small

    DrawCube(25,37,4);

    DrawCube(45,48.5,3); //small

    DrawCube(45,37,4);

    DrawCube(72,48.5,3); //small

    DrawCube(0,45,4);

    DrawCube(11.5,59,3); //small

    DrawCube(20,45,4);

    DrawCube(38.5,59,3); //small

    DrawCube(40,45,4);

    DrawCube(65,59,3); //small
  
    DrawCube(60,45,4);

    DrawCube(5,69.5,3); //small

    DrawCube(15,53,4);

    DrawCube(31.5,69.5,3); //small

    DrawCube(35,53,4);

    DrawCube(58.5,69.5,3); //small

    DrawCube(55,53,4);

    DrawFour(5,5,120,20);

    DrawFour(5,5,20,140);
      
    DrawCircle(5,5,40,40);

    DrawBird(30,30,0.7);

  }

  if (pattern3) {

    DrawCircle(5,5,50,250);

    DrawCircle(5,5,50,200)

    DrawCircle(5,5,50,125);

    DrawCircle(5,5,50,62.5);

    DrawCircle(5,5,50,31)

    DrawFour(45,-50,20,20);

    DrawFour(15,0,20,20);

    DrawFlamingo2(25,5,1);

    DrawFlamingo2(25,27,0.8);

    flamColour2 = '#4f0938'
    flamTip2 = '#4f0938'
    flamBeak2 = '#4f0938'
    flamOne2 = '#4f0938'
    flamTwo2 = '#4f0938'
    flamHip2 = '#4f0938'

    DrawFlamingo(15,20,0.8)

  }

  if (cubeFactor > 24)  {

    DrawCube(5,5,25);

    DrawFour(-50,5,20,20);

    DrawFour(-20,-40,50,50);

    DrawCircle(-75,-45,-35,-35);

    DrawCircle(35,-45,-35,-35);

    DrawCircle(15,-90,-35,-35);

    DrawCircle(-65,5,-35,-35);

    DrawBird(5,-20,0.6);

    DrawBird2(-50,35,0.8);
    
    DrawBird(-90,90,0.9);

    bodyColour = '#e0d2f7'
    beakColour = '#e0d2f7'
    featherColour = '#e0d2f7'
    darkColour = '#e0d2f7'
    strokeColour = '#e0d2f7'

    bodyColour2 = '#8551e0'
    beakColour2 = '#8551e0'
    featherColour2 = '#8551e0'
    darkColour2 = '#8551e0'
    strokeColour = '#8551e0'
  }

  if (pattern4) {

    DrawCircle(100,45,10,220)

    DrawCube(10.75,7,25)

    DrawFlamingo2(56,15,1.5)

    DrawFlamingo(61,18.5,1.4)

    DrawFlamingo2(66,21.5,1.3)

    DrawFlamingo(70,24.5,1.2)

    DrawFlamingo2(75,27.5,1.1)

    DrawFlamingo(80,30.5,1)

    DrawFlamingo2(86,33.5,0.9)  
  }

  if (pattern5) {

    DrawBird(-10,10,1)

    DrawBird2(190,40,0.8)

    DrawFlamingo(90,-100,0.5)

    DrawFlamingo2(350,-150,0.5)

  }

  if (pattern6) {

    DrawCube(10,10,80);

    angleMode(DEGREES)

    rotate(45)

    DrawBird2(15,0,1)  

    DrawBird(0,0,1.1)

    DrawBird2(-5,8,1)  
  }

  if (pattern7) {

    DrawCircle(100,45,10,270)

    DrawCircle(100,70,10,270)

    DrawCircle(100,85,10,270)

    DrawCube(5,7,40)

    DrawFlamingo2(-225,-165,0.8)

    DrawFlamingo(-230,-160,0.8)

    DrawFlamingo2(-10,-30,0.6)

  
  }

  if (pattern8) {

    DrawCircle(0,0,10,60);

    DrawCircle(-150,50,10,1);

    DrawCircle(-150,-70,10,20);

    DrawFour(0,0,20,20);

    DrawFour(-150,50,5,5);

    DrawFour(-150,-70,5,5,);

    DrawFlamingo(0,0,0.9)

    DrawFlamingo(-250,-50,0.5)

    DrawFlamingo(-390,320,0.3)

  }

  if (pattern9) {

    DrawCube(5,5,4); // cube found on the top left corner ( rest of cube go from left )

    DrawCube(18.5,5.5,3); //small

    DrawCube(25,5,4);

    DrawCube(45,5.5,3); //small

    DrawCube(45,5,4);

    DrawCube(72,5.5,3); //small

    DrawCube(0,13,4);

    DrawCube(11.5,16.5,3); //small

    DrawCube(20,13,4);

    DrawCube(38.5,16.5,3); //small

    DrawCube(40,13,4);

    DrawCube(65,16.5,3); //small

    DrawCube(60,13,4);

    DrawCube(5,27,3); //small

    DrawCube(15,21,4);

    DrawCube(32,27,3); //small

    DrawCube(35,21,4);

    DrawCube(58.5,27,3); //small

    DrawCube(55,21,4);

    DrawCube(-1.5,37.5,3); //small

    DrawCube(10,29,4);

    DrawCube(25,37.5,3); //small

    DrawCube(30,29,4);

    DrawCube(51.5,37.5,3); //small

    DrawCube(50,29,4);

    DrawCube(78.5,37.5,3); //small

    DrawCube(5,37,4);

    DrawCube(18.5,48.5,3); //small

    DrawCube(25,37,4);

    DrawCube(45,48.5,3); //small

    DrawCube(45,37,4);

    DrawCube(72,48.5,3); //small

    DrawCube(0,45,4);

    DrawCube(11.5,59,3); //small

    DrawCube(20,45,4);

    DrawCube(38.5,59,3); //small

    DrawCube(40,45,4);

    DrawCube(65,59,3); //small
  
    DrawCube(60,45,4);

    DrawCube(5,69.5,3); //small

    DrawCube(15,53,4);

    DrawCube(31.5,69.5,3); //small

    DrawCube(35,53,4);

    DrawCube(58.5,69.5,3); //small

    DrawCube(55,53,4);

    DrawFour(5,5,120,20);

    DrawFour(5,5,20,140);
      
    DrawCircle(5,5,40,40);

    DrawCircle(-150,50,10,1);

    DrawCircle(-150,-70,10,20);

    DrawFour(-150,50,5,5);

    DrawFour(-150,-70,5,5,);

    DrawBird(20,20,0.9)

    DrawFlamingo(-250,-50,0.5)

    DrawFlamingo(-390,320,0.3)


  }


}
  

function DrawBird(bodyX,bodyY,scaleFactor) {

  stroke(strokeColour); // dark blue
  strokeWeight(0.2);

  fill(bodyColour);
  

  // for the white outline / body of the bird

  beginShape();

    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
    vertex((bodyX + 45) * scaleFactor,(bodyY + 55) * scaleFactor); // (95,105)
    vertex((bodyX + 10) * scaleFactor,(bodyY + 55) * scaleFactor); // (60.105)
    vertex(bodyX * scaleFactor,(bodyY + 50) * scaleFactor); // (50,100)
    vertex((bodyX - 2) * scaleFactor,(bodyY + 40) * scaleFactor); // (48,90)
    vertex((bodyX - 2) * scaleFactor,(bodyY - 10) * scaleFactor); // (48,40)
    vertex((bodyX - 15) * scaleFactor,(bodyY - 20) * scaleFactor); // (35,30)
    vertex((bodyX - 32) * scaleFactor,(bodyY - 10) * scaleFactor); // (18,40)
    vertex((bodyX - 42) * scaleFactor,(bodyY + 5) * scaleFactor); // (8,55)
    vertex((bodyX - 25) * scaleFactor,bodyY * scaleFactor); // (25,50)
    vertex((bodyX - 15) * scaleFactor,(bodyY + 2) * scaleFactor); // (35,52)
    vertex((bodyX - 15) * scaleFactor,(bodyY + 50) * scaleFactor); // (35,100)
    vertex((bodyX - 14) * scaleFactor,(bodyY + 55) * scaleFactor); // (26,105)
    vertex((bodyX - 10) * scaleFactor,(bodyY + 60) * scaleFactor); // (40,110)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 100) * scaleFactor); // (55,150)
    vertex((bodyX + 20) * scaleFactor,(bodyY + 98) * scaleFactor); // (70,148)
    vertex((bodyX + 35) * scaleFactor,(bodyY + 102) * scaleFactor); // (85,152)
    vertex((bodyX + 45) * scaleFactor,(bodyY + 105) * scaleFactor); // (95,155)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 110) * scaleFactor); // (105,160)
    vertex((bodyX + 50) * scaleFactor,(bodyY + 95) * scaleFactor); // (100,145)
    vertex((bodyX + 70) * scaleFactor,(bodyY + 105) * scaleFactor); // (120,155)
    vertex((bodyX + 65) * scaleFactor,(bodyY + 95) * scaleFactor); // (115,145)

  endShape(CLOSE);



  fill(beakColour);// orange colour

  // shape of the orange pattern on bird
  beginShape();
  
    vertex((bodyX - 25) * scaleFactor,(bodyY - 6) * scaleFactor); // (25,44)
    vertex((bodyX - 15) * scaleFactor,(bodyY - 2) * scaleFactor); // (35,48)
    vertex((bodyX - 9) * scaleFactor,(bodyY - 12) * scaleFactor); // (41,38)
    vertex((bodyX - 13) * scaleFactor,(bodyY - 15) * scaleFactor); // (37,35)
    vertex((bodyX - 28) * scaleFactor,(bodyY - 10) * scaleFactor); // (22,40)
    vertex((bodyX - 32) * scaleFactor,(bodyY - 5) * scaleFactor); // (18,45)

  endShape(CLOSE);
  
  fill(featherColour);// grey colour

  // grey shading of the birds wings
  beginShape();

    vertex((bodyX + 57) * scaleFactor,(bodyY + 82) * scaleFactor); // (107,132)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 90) * scaleFactor); // (105,140)
    vertex((bodyX + 40) * scaleFactor,(bodyY + 80) * scaleFactor); // (90,130)
    vertex((bodyX + 37) * scaleFactor,(bodyY + 90) * scaleFactor); // (87,140)
    vertex((bodyX + 11) * scaleFactor,(bodyY + 87) * scaleFactor); // (61,137)
    vertex(bodyX * scaleFactor,(bodyY + 70) * scaleFactor); // (50,120)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 90) * scaleFactor); // (58,140)
    vertex((bodyX + 41) * scaleFactor,(bodyY + 95) * scaleFactor); // (91,145)
    vertex((bodyX + 42) * scaleFactor,(bodyY + 85) * scaleFactor); // (92,135)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 95) * scaleFactor); // (110,145)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 88) * scaleFactor); // (110,138)
    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
 
  endShape(CLOSE);
  

  endShape(CLOSE);

  fill(darkColour);// black colour

  // black colour patterning on bottom of birds wings
  beginShape();

    vertex((bodyX + 60) * scaleFactor,(bodyY + 88) * scaleFactor); // (110,138)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 95) * scaleFactor); // (110,145)
    vertex((bodyX + 42) * scaleFactor,(bodyY + 85) * scaleFactor); // (92,135)
    vertex((bodyX + 41) * scaleFactor,(bodyY + 95) * scaleFactor); // (91,145)
    vertex((bodyX + 25) * scaleFactor,(bodyY + 92) * scaleFactor); // (75,142)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 110) * scaleFactor); // (105,160)
    vertex((bodyX + 50) * scaleFactor,(bodyY + 95) * scaleFactor); // (100,145)
    vertex((bodyX + 70) * scaleFactor,(bodyY + 105) * scaleFactor); // (120,155)
    vertex((bodyX + 65) * scaleFactor,(bodyY + 95) * scaleFactor); // (115,145)
    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
  
  endShape(CLOSE);

  // beginning feather found on the top most of head
  beginShape();

    vertex((bodyX - 15) * scaleFactor,(bodyY - 20) * scaleFactor); // (35,30)
    vertex((bodyX - 14) * scaleFactor,(bodyY - 35) * scaleFactor); // (36,15)
    vertex((bodyX - 8) * scaleFactor,(bodyY - 35) * scaleFactor); // (42,15)
    vertex((bodyX - 14) * scaleFactor,(bodyY - 19) * scaleFactor); // (36,31)

  endShape(CLOSE);

  // second feather
  beginShape();

    vertex((bodyX - 10) * scaleFactor,(bodyY - 16) * scaleFactor); // (40,34)
    vertex((bodyX + 4) * scaleFactor,(bodyY - 32) * scaleFactor); // (54,18)
    vertex((bodyX + 15) * scaleFactor,(bodyY - 30) * scaleFactor); // (65,20)
    vertex((bodyX - 9) * scaleFactor,(bodyY - 15) * scaleFactor); //(41,35)

  endShape();
  
  // third feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY - 10) * scaleFactor); // (48,40)
    vertex((bodyX + 20) * scaleFactor,(bodyY - 24) * scaleFactor); // (70,26)
    vertex((bodyX + 28) * scaleFactor,(bodyY - 15) * scaleFactor); // (78,35)
    vertex((bodyX - 2) * scaleFactor,(bodyY - 8) * scaleFactor); // (48,42)

  endShape(CLOSE);

  //fourth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,bodyY * scaleFactor); // (48,50)
    vertex((bodyX + 15) * scaleFactor,(bodyY - 5) * scaleFactor); // (65,45)
    vertex((bodyX + 20) * scaleFactor,bodyY * scaleFactor); // (70,50)

  endShape(CLOSE);

  // fifth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY + 5) * scaleFactor); // (48,55)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 5) * scaleFactor); // (55,55)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 10) * scaleFactor); // (58,60)

  endShape(CLOSE);

  }

function DrawBird2(bodyX,bodyY,scaleFactor) {

  stroke(strokeColour2); // dark blue
  strokeWeight(0.2);

  fill(bodyColour2);
  

  // for the white outline / body of the bird

  beginShape();

    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
    vertex((bodyX + 45) * scaleFactor,(bodyY + 55) * scaleFactor); // (95,105)
    vertex((bodyX + 10) * scaleFactor,(bodyY + 55) * scaleFactor); // (60.105)
    vertex(bodyX * scaleFactor,(bodyY + 50) * scaleFactor); // (50,100)
    vertex((bodyX - 2) * scaleFactor,(bodyY + 40) * scaleFactor); // (48,90)
    vertex((bodyX - 2) * scaleFactor,(bodyY - 10) * scaleFactor); // (48,40)
    vertex((bodyX - 15) * scaleFactor,(bodyY - 20) * scaleFactor); // (35,30)
    vertex((bodyX - 32) * scaleFactor,(bodyY - 10) * scaleFactor); // (18,40)
    vertex((bodyX - 42) * scaleFactor,(bodyY + 5) * scaleFactor); // (8,55)
    vertex((bodyX - 25) * scaleFactor,bodyY * scaleFactor); // (25,50)
    vertex((bodyX - 15) * scaleFactor,(bodyY + 2) * scaleFactor); // (35,52)
    vertex((bodyX - 15) * scaleFactor,(bodyY + 50) * scaleFactor); // (35,100)
    vertex((bodyX - 14) * scaleFactor,(bodyY + 55) * scaleFactor); // (26,105)
    vertex((bodyX - 10) * scaleFactor,(bodyY + 60) * scaleFactor); // (40,110)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 100) * scaleFactor); // (55,150)
    vertex((bodyX + 20) * scaleFactor,(bodyY + 98) * scaleFactor); // (70,148)
    vertex((bodyX + 35) * scaleFactor,(bodyY + 102) * scaleFactor); // (85,152)
    vertex((bodyX + 45) * scaleFactor,(bodyY + 105) * scaleFactor); // (95,155)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 110) * scaleFactor); // (105,160)
    vertex((bodyX + 50) * scaleFactor,(bodyY + 95) * scaleFactor); // (100,145)
    vertex((bodyX + 70) * scaleFactor,(bodyY + 105) * scaleFactor); // (120,155)
    vertex((bodyX + 65) * scaleFactor,(bodyY + 95) * scaleFactor); // (115,145)

  endShape(CLOSE);



  fill(beakColour2);// orange colour

  // shape of the orange pattern on bird
  beginShape();
  
    vertex((bodyX - 25) * scaleFactor,(bodyY - 6) * scaleFactor); // (25,44)
    vertex((bodyX - 15) * scaleFactor,(bodyY - 2) * scaleFactor); // (35,48)
    vertex((bodyX - 9) * scaleFactor,(bodyY - 12) * scaleFactor); // (41,38)
    vertex((bodyX - 13) * scaleFactor,(bodyY - 15) * scaleFactor); // (37,35)
    vertex((bodyX - 28) * scaleFactor,(bodyY - 10) * scaleFactor); // (22,40)
    vertex((bodyX - 32) * scaleFactor,(bodyY - 5) * scaleFactor); // (18,45)

  endShape(CLOSE);
  
  fill(featherColour2);// grey colour

  // grey shading of the birds wings
  beginShape();

    vertex((bodyX + 57) * scaleFactor,(bodyY + 82) * scaleFactor); // (107,132)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 90) * scaleFactor); // (105,140)
    vertex((bodyX + 40) * scaleFactor,(bodyY + 80) * scaleFactor); // (90,130)
    vertex((bodyX + 37) * scaleFactor,(bodyY + 90) * scaleFactor); // (87,140)
    vertex((bodyX + 11) * scaleFactor,(bodyY + 87) * scaleFactor); // (61,137)
    vertex(bodyX * scaleFactor,(bodyY + 70) * scaleFactor); // (50,120)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 90) * scaleFactor); // (58,140)
    vertex((bodyX + 41) * scaleFactor,(bodyY + 95) * scaleFactor); // (91,145)
    vertex((bodyX + 42) * scaleFactor,(bodyY + 85) * scaleFactor); // (92,135)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 95) * scaleFactor); // (110,145)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 88) * scaleFactor); // (110,138)
    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
 
  endShape(CLOSE);
  

  endShape(CLOSE);

  fill(darkColour2);// black colour

  // black colour patterning on bottom of birds wings
  beginShape();

    vertex((bodyX + 60) * scaleFactor,(bodyY + 88) * scaleFactor); // (110,138)
    vertex((bodyX + 60) * scaleFactor,(bodyY + 95) * scaleFactor); // (110,145)
    vertex((bodyX + 42) * scaleFactor,(bodyY + 85) * scaleFactor); // (92,135)
    vertex((bodyX + 41) * scaleFactor,(bodyY + 95) * scaleFactor); // (91,145)
    vertex((bodyX + 25) * scaleFactor,(bodyY + 92) * scaleFactor); // (75,142)
    vertex((bodyX + 55) * scaleFactor,(bodyY + 110) * scaleFactor); // (105,160)
    vertex((bodyX + 50) * scaleFactor,(bodyY + 95) * scaleFactor); // (100,145)
    vertex((bodyX + 70) * scaleFactor,(bodyY + 105) * scaleFactor); // (120,155)
    vertex((bodyX + 65) * scaleFactor,(bodyY + 95) * scaleFactor); // (115,145)
    vertex((bodyX + 110) * scaleFactor,(bodyY + 100) * scaleFactor); // (160,150)
  
  endShape(CLOSE);

  // beginning feather found on the top most of head
  beginShape();

    vertex((bodyX - 15) * scaleFactor,(bodyY - 20) * scaleFactor); // (35,30)
    vertex((bodyX - 14) * scaleFactor,(bodyY - 35) * scaleFactor); // (36,15)
    vertex((bodyX - 8) * scaleFactor,(bodyY - 35) * scaleFactor); // (42,15)
    vertex((bodyX - 14) * scaleFactor,(bodyY - 19) * scaleFactor); // (36,31)

  endShape(CLOSE);

  // second feather
  beginShape();

    vertex((bodyX - 10) * scaleFactor,(bodyY - 16) * scaleFactor); // (40,34)
    vertex((bodyX + 4) * scaleFactor,(bodyY - 32) * scaleFactor); // (54,18)
    vertex((bodyX + 15) * scaleFactor,(bodyY - 30) * scaleFactor); // (65,20)
    vertex((bodyX - 9) * scaleFactor,(bodyY - 15) * scaleFactor); //(41,35)

  endShape();
  
  // third feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY - 10) * scaleFactor); // (48,40)
    vertex((bodyX + 20) * scaleFactor,(bodyY - 24) * scaleFactor); // (70,26)
    vertex((bodyX + 28) * scaleFactor,(bodyY - 15) * scaleFactor); // (78,35)
    vertex((bodyX - 2) * scaleFactor,(bodyY - 8) * scaleFactor); // (48,42)

  endShape(CLOSE);

  //fourth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,bodyY * scaleFactor); // (48,50)
    vertex((bodyX + 15) * scaleFactor,(bodyY - 5) * scaleFactor); // (65,45)
    vertex((bodyX + 20) * scaleFactor,bodyY * scaleFactor); // (70,50)

  endShape(CLOSE);

  // fifth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY + 5) * scaleFactor); // (48,55)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 5) * scaleFactor); // (55,55)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 10) * scaleFactor); // (58,60)

  endShape(CLOSE);

  }

  function DrawCube (cubeX,cubeY,cubeFactor) {

  fill(baseColour); // outside rim colour of top portion of cube


  strokeWeight(0);

  // cube shape
  beginShape();

    vertex((cubeX - 10) * cubeFactor,cubeY * cubeFactor); // (10,20)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)
    vertex(cubeX * cubeFactor,cubeY * cubeFactor); // (20,20)
    vertex(cubeX * cubeFactor,(cubeY - 5) * cubeFactor); // (20,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 8) * cubeFactor); // (15,12)
    vertex((cubeX - 10) * cubeFactor,(cubeY - 5) * cubeFactor); // (10,15)

  endShape(CLOSE);

  fill(shadeColour); // shaded colour

  beginShape();

    vertex((cubeX - 10) * cubeFactor,(cubeY - 5) * cubeFactor); // (10,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 2) * cubeFactor); // (15,18)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)
    vertex((cubeX - 10) * cubeFactor,cubeY * cubeFactor); // (10,20)

  endShape(CLOSE);

  fill(highlightColour); // highlight colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2) * cubeFactor); // (15,18)
    vertex(cubeX * cubeFactor,(cubeY - 5) * cubeFactor); // (20,15)
    vertex(cubeX * cubeFactor,cubeY * cubeFactor); // (20,20)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)

  endShape(CLOSE);

  // top patterning on the cube 

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2.5) * cubeFactor); // (120,140) (15,17.5)
    vertex((cubeX - 9) * cubeFactor,(cubeY - 5) * cubeFactor); // (87,120) (11,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 7.5) * cubeFactor); // (120,100) (15,12.5)
    vertex((cubeX - 1) * cubeFactor,(cubeY - 5) * cubeFactor); // (153,120) (19,15)

  endShape(CLOSE);

  fill(shadeColour); // green colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2.9) * cubeFactor); // (120,136) (15,17)
    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 5) * cubeFactor); // (92,120) (11.5,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 7.1) * cubeFactor); // (120,103) (15,13)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 5) * cubeFactor); // (147,120) (18.5,15)

  endShape(CLOSE);

  fill(baseColour); // blue colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 3.3) * cubeFactor); // (120,133) (15,16.5)
    vertex((cubeX - 8) * cubeFactor,(cubeY - 5) * cubeFactor); // (97,120) (12,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6.7) * cubeFactor); // (120,106) (15,13)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 5) * cubeFactor); // (142,120) (17.5,15)

  endShape(CLOSE);

  fill(highlightColour); // hot pink colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 3.7) * cubeFactor); // (120,130) (15,16)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 5) * cubeFactor); // (102,120) (12.5,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6.4) * cubeFactor); // (120,109) (15,13.5)
    vertex((cubeX - 2.6) * cubeFactor,(cubeY - 5) * cubeFactor); // (138,120) (17,15)

  endShape(CLOSE);

  fill(shadeColour); // yellow colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.1) * cubeFactor); // (120,127) (15,15.8)
    vertex((cubeX - 6.8) * cubeFactor,(cubeY - 5) * cubeFactor); // (107,120) (13.3,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6) * cubeFactor); // (120,112) (15,14)
    vertex((cubeX - 3.2) * cubeFactor,(cubeY - 5) * cubeFactor); // (133,120) (16.6,15)

  endShape(CLOSE);

  fill(baseColour); // dark green colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.3) * cubeFactor); // (120,125) (15,15.6)
    vertex((cubeX - 6.4) * cubeFactor,(cubeY - 5) * cubeFactor); // (110,120) (13.7,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 5.8) * cubeFactor); // (120,114) (15,14.2)
    vertex((cubeX - 3.6) * cubeFactor,(cubeY - 5) * cubeFactor); // (130,120) (16.2,15)

  endShape(CLOSE);

  fill(highlightColour); // red colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.6) * cubeFactor); // (120,123) (15,15.4)
    vertex((cubeX - 5.9) * cubeFactor,(cubeY - 5) * cubeFactor); // (114,120) (14.2,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 5.5) * cubeFactor); // (120,116) (15,14.5)
    vertex((cubeX - 4.1) * cubeFactor,(cubeY - 5) * cubeFactor); // (126,120) (15.7,15)

  endShape(CLOSE);

  // patterning on the left hand side of cube

  fill(highlightColour); // highlight colour

  beginShape();

    vertex((cubeX - 9.5) * cubeFactor,(cubeY - 4.1) * cubeFactor); // (84,127) (10.5,15.9)
    vertex((cubeX - 9.5) * cubeFactor,(cubeY - 0.2) * cubeFactor); // (84,158) (10.5,19.7)
    vertex((cubeX - 5.6) * cubeFactor,(cubeY + 2.2) * cubeFactor); // (115,177) (14.4,22)
    vertex((cubeX - 5.6) * cubeFactor,(cubeY - 1.8) * cubeFactor); // (115,146) (14.4,18.2)

  endShape(CLOSE);

  fill(shadeColour); // light green

  beginShape();

    vertex((cubeX - 9.2) * cubeFactor,(cubeY - 3.6) * cubeFactor); // (86,131) (10.7,16.4)
    vertex((cubeX - 9.2) * cubeFactor,(cubeY - 0.4) * cubeFactor); // (86,157) (10.7,19.6)
    vertex((cubeX - 6) * cubeFactor,(cubeY + 1.6) * cubeFactor); // (112,172) (14,21.5)
    vertex((cubeX - 6) * cubeFactor,(cubeY - 1.7) * cubeFactor); // (112,147) (14,18.4)

  endShape(CLOSE);

  fill(baseColour); // blue

  beginShape();

    vertex((cubeX - 8.95) * cubeFactor,(cubeY - 3.1) * cubeFactor); // (88,135) (11,16.9)
    vertex((cubeX - 8.95) * cubeFactor,(cubeY - 0.5) * cubeFactor); // (88,156) (11,19.5)
    vertex((cubeX - 6.35) * cubeFactor,(cubeY + 1) * cubeFactor); // (109,168) (13.6,21)
    vertex((cubeX - 6.35) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (109,148) (13.6,18.5)

  endShape(CLOSE);

  fill(highlightColour); // hot pink

  beginShape();

    vertex((cubeX - 8.7) * cubeFactor,(cubeY - 2.6) * cubeFactor); // (90.5,139) (11.3,17.4)
    vertex((cubeX - 8.7) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (90.5,154) (11.3,19.2)
    vertex((cubeX - 6.65) * cubeFactor,(cubeY + 0.45) * cubeFactor); // (106,163) (13.2,20.4)
    vertex((cubeX - 6.65) * cubeFactor,(cubeY - 1.4) * cubeFactor); // (106,149) (13.2,18.6)

  endShape(CLOSE);

  fill(shadeColour); // yellow

  beginShape();

    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 2.2) * cubeFactor); // (92.5,143) (11.5,17.8)
    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 0.9) * cubeFactor); // (92.5,153) (11.5,19.1)
    vertex((cubeX - 7) * cubeFactor,cubeY * cubeFactor); // (104,159.5) (13,20)
    vertex((cubeX - 7) * cubeFactor,(cubeY - 1.3) * cubeFactor); // (104,150.5) (13,18.8)

  endShape();

  fill(baseColour); // dark green

  beginShape();

    vertex((cubeX - 8.3) * cubeFactor,(cubeY - 1.9) * cubeFactor); // (94,146) (11.75.18.2)
    vertex((cubeX - 8.3) * cubeFactor,(cubeY - 0.95) * cubeFactor); // (94,152) (11.75,18.2)
    vertex((cubeX - 7.2) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (102.5,157) (12.8,19.6)
    vertex((cubeX - 7.2) * cubeFactor,(cubeY - 1.2) * cubeFactor); // (102.5,151) (12.8,18.9)

  endShape(CLOSE);

  fill(highlightColour); // red

  beginShape();

    vertex((cubeX - 8.1) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (95.5,148.5) (11.9,18.5)
    vertex((cubeX - 8.1) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (95.5,151) (11.9,18.9)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (101,154.5) (12.6,19.3)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (101,151.5) (12.6,18.9)

  endShape(CLOSE);

  // patterning on the right side of cube

  fill(shadeColour); // shaded colour

  beginShape();

    vertex((cubeX - 4.4) * cubeFactor,(cubeY - 1.8) * cubeFactor); // (125,146) (15.6,18.2)
    vertex((cubeX - 4.4) * cubeFactor,(cubeY + 2.1) * cubeFactor); // (125,177) (15.6,22.1)
    vertex((cubeX - 0.5) * cubeFactor,(cubeY - 0.1) * cubeFactor); // (155.5,159) (19.4,19.9)
    vertex((cubeX - 0.5) * cubeFactor,(cubeY - 4) * cubeFactor); // (155.5,128) (19.4,16)

  endShape(CLOSE);

  fill(baseColour); // light green

  beginShape();

    vertex((cubeX - 4) * cubeFactor,(cubeY - 1.6) * cubeFactor); // (128,147) (16,18.4)
    vertex((cubeX - 4) * cubeFactor,(cubeY + 1.5) * cubeFactor); // (128,172) (16,21.5)
    vertex((cubeX - 0.9) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (153,157) (19.1,19.6)
    vertex((cubeX - 0.9) * cubeFactor,(cubeY - 3.4) * cubeFactor); // (153,133) (19.1,16.6)

  endShape(CLOSE);

  fill(highlightColour); // blue

  beginShape();

    vertex((cubeX - 3.7) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (130.5,148) (16.3,18.5)
    vertex((cubeX - 3.7) * cubeFactor,(cubeY + 1) * cubeFactor); // (130.5,168) (16.3,21)
    vertex((cubeX - 1.2) * cubeFactor,(cubeY - 0.4) * cubeFactor); // (150.5,156) (18.8,19.5)
    vertex((cubeX - 1.2) * cubeFactor,(cubeY - 2.9) * cubeFactor); // (150.5,137) (18.8,17.1)

  endShape(CLOSE);

  fill(shadeColour); // hot pink

  beginShape();

    vertex((cubeX - 3.4) * cubeFactor,(cubeY - 1.35) * cubeFactor); // (133,149) (16.6,18.6)
    vertex((cubeX - 3.4) * cubeFactor,(cubeY + 0.5) * cubeFactor); // (133,163.5) (16.6,20.4)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 0.6) * cubeFactor); // (148,154.5) (18.5,19.3)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 2.4) * cubeFactor); // (148,141) (18.5,17.6)

  endShape(CLOSE);

  fill(baseColour); // yellow

  beginShape();

    vertex((cubeX - 3.1) * cubeFactor,(cubeY - 1.3) * cubeFactor); // (135.5,150) (16.9,18.7)
    vertex((cubeX - 3.1) * cubeFactor,(cubeY) * cubeFactor); // (135.5,159.5) (16.9,19.9)
    vertex((cubeX - 1.8) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (146,153.5) (18.2,19.2)
    vertex((cubeX - 1.8) * cubeFactor,(cubeY - 2) * cubeFactor); // (146,144.5) (18.2,18)

  endShape(CLOSE);

  fill(highlightColour); // dark green

  beginShape();

    vertex((cubeX - 2.9) * cubeFactor,(cubeY - 1.2) * cubeFactor); // (137,151) (17.1,18.8)
    vertex((cubeX - 2.9) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (137,157) (17.1,19.6)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 0.8) * cubeFactor); // (144.5,153) (18,19.1)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 1.7) * cubeFactor); // (144.5,147) (18,18.4)

  endShape(CLOSE);

  fill(shadeColour); // red

  beginShape();

    vertex((cubeX - 2.7) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (139,151.5) (17.4,18.9)
    vertex((cubeX - 2.7) * cubeFactor,(cubeY - 0.6) * cubeFactor); // (139,154.5) (17.4,19.3)
    vertex((cubeX - 2.2) * cubeFactor,(cubeY - 0.9) * cubeFactor); // (143,152.5) (17.9,19)
    vertex((cubeX - 2.2) * cubeFactor,(cubeY - 1.4) * cubeFactor); // (143,149.5) (17.9,18.7)

  endShape(CLOSE);

  }
  

  // circle pattern
function DrawCircle(circleX,circleY,scaleCircle,scaleCircle) {

  
  noStroke();

  fill(outlineCircle); // dark blue
  ellipse(circleX + 45,circleY + 70,scaleCircle + 70,scaleCircle + 80); // dark circle outline (95,120,110,120)

  fill(insideCircle); // light blue
  ellipse(circleX + 45,circleY + 70,scaleCircle + 50,scaleCircle + 80); // light blue circle // (95,120,90,120)

}

  // four circles
function DrawFour (fourX,fourY,fourCircleW,fourCircleL)  {

  noStroke();

  fill(bubbleCircles);
  ellipse(fourX - 10,fourY + 65,fourCircleW,fourCircleL); // 40,115,40,40
  ellipse(fourX + 100,fourY + 65,fourCircleW,fourCircleL); // 150,115,40,40
  ellipse(fourX,fourY + 115,fourCircleW,fourCircleL); // 50,165,40,40
  ellipse(fourX + 80,fourY + 18,fourCircleW,fourCircleL); // 130,65,40,40

}

function DrawFlamingo (flamX,flamY,flamFactor)  {

noStroke();
fill(flamBeak);
  // beak of the flamingo
  beginShape();

    vertex((flamX + 2) * flamFactor,(flamY - 17) * flamFactor); // (52,33)
    vertex((flamX - 5) * flamFactor,(flamY - 13) * flamFactor); // (45,37)
    vertex((flamX - 9) * flamFactor,(flamY - 11) * flamFactor); // (41,39)
    vertex((flamX - 12) * flamFactor,(flamY - 8) * flamFactor); // (38,42)
    vertex((flamX - 14) * flamFactor,(flamY - 6) * flamFactor); // (36,44)
    vertex((flamX - 17) * flamFactor,(flamY + 2) * flamFactor); // (33,52)
    vertex((flamX - 13) * flamFactor,(flamY - 1) * flamFactor); // (37,49)
    vertex((flamX - 10) * flamFactor,(flamY - 3) * flamFactor); // (40,47)
    vertex((flamX + 2) * flamFactor,(flamY - 7) * flamFactor); // (52,43)

  endShape(CLOSE);


  fill(flamTip);
  beginShape();

    vertex((flamX - 9) * flamFactor,(flamY - 11) * flamFactor); // (41,39)
    vertex((flamX - 12) * flamFactor,(flamY - 8) * flamFactor); // (38,42)
    vertex((flamX - 14) * flamFactor,(flamY - 6) * flamFactor); // (36,44)
    vertex((flamX - 17) * flamFactor,(flamY + 2) * flamFactor); // (33,52)
    vertex((flamX - 13) * flamFactor,(flamY - 1) * flamFactor); // (37,49)
    vertex((flamX - 10) * flamFactor,(flamY - 3) * flamFactor); // (40,47)

  endShape(CLOSE);

  fill(flamColour);
  // body of the flamingo
  beginShape();

    vertex((flamX + 60) * flamFactor,(flamY + 77) * flamFactor); // (110,127)
    vertex((flamX + 20) * flamFactor,(flamY + 77) * flamFactor); // (70,127)
    vertex((flamX + 17) * flamFactor,(flamY + 75) * flamFactor); // (67,125)
    vertex((flamX + 10) * flamFactor,(flamY + 70) * flamFactor); // (60,120)
    vertex((flamX - 2) * flamFactor,(flamY + 50) * flamFactor); // (48,100)
    vertex((flamX + 15) * flamFactor,(flamY - 3) * flamFactor); // (65,47)
    vertex((flamX + 13) * flamFactor,(flamY - 5) * flamFactor); // (63,45)
    vertex((flamX - 1) * flamFactor,(flamY - 7) * flamFactor); // (49,43)
    vertex((flamX - 2) * flamFactor,(flamY - 12) * flamFactor); // (48,38)
    vertex((flamX + 2) * flamFactor,(flamY - 17) * flamFactor); // going left (52,33)
    vertex((flamX + 15) * flamFactor,(flamY - 23) * flamFactor); // top most point of flamingo (65,27)
    vertex((flamX + 25) * flamFactor,(flamY - 21) * flamFactor); // going right (75,29)
    vertex((flamX + 30) * flamFactor,(flamY - 10) * flamFactor); // (80,40)
    vertex((flamX + 16) * flamFactor,(flamY + 40) * flamFactor); // (66,90)
    vertex((flamX + 17) * flamFactor,(flamY + 50) * flamFactor); // (67,100)
    vertex((flamX + 24) * flamFactor,(flamY + 52) * flamFactor); // (74,102)
    vertex((flamX + 28) * flamFactor,(flamY + 50) * flamFactor); // (78,100)
    vertex((flamX + 33) * flamFactor,(flamY + 43) * flamFactor); // (83,93)
    vertex((flamX + 47) * flamFactor,(flamY + 34) * flamFactor); // (97,84)
    vertex((flamX + 70) * flamFactor,(flamY + 40) * flamFactor); // (120,90)
    vertex((flamX + 105) * flamFactor,(flamY + 70) * flamFactor); // (155,120)
    vertex((flamX + 112) * flamFactor,(flamY + 83) * flamFactor); // (162,133)
    vertex((flamX + 95) * flamFactor,(flamY + 75) * flamFactor); // (145,125)
    vertex((flamX + 94) * flamFactor,(flamY + 80) * flamFactor); // (144,130)
    vertex((flamX + 87) * flamFactor,(flamY + 77) * flamFactor); // (137,127)

  endShape(CLOSE);

  fill(flamOne);
  // first part of leg of flamingo
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 88) * flamFactor); // (99,138)
    vertex((flamX + 51) * flamFactor,(flamY + 88) * flamFactor); // (101,138)
    vertex((flamX + 59) * flamFactor,(flamY + 120) * flamFactor); // (109,170)
    vertex((flamX + 57) * flamFactor,(flamY + 120) * flamFactor); // (107,170)

  endShape(CLOSE);

  // second part of leg of flamingo
  beginShape();

    vertex((flamX + 57) * flamFactor,(flamY + 119) * flamFactor); // (107,169)
    vertex((flamX + 59) * flamFactor,(flamY + 120) * flamFactor); // (109,170)
    vertex((flamX + 31) * flamFactor,(flamY + 130) * flamFactor); // (81,180)
    vertex((flamX + 32) * flamFactor,(flamY + 128) * flamFactor); // (82,178)

  endShape(CLOSE);

  // bend leg triangle foot
  beginShape();

    vertex((flamX + 31) * flamFactor,(flamY + 130) * flamFactor); // (81,180)
    vertex((flamX + 32) * flamFactor,(flamY + 128) * flamFactor); // (82,178)
    vertex((flamX + 34) * flamFactor,(flamY + 141) * flamFactor) // (84,191)
    vertex((flamX + 26) * flamFactor,(flamY + 143) * flamFactor); // (76,193)

  endShape(CLOSE);

  fill(flamHip);
  // triangle leg shape for flamingo
  beginShape();

    vertex((flamX + 35) * flamFactor,(flamY + 76) * flamFactor); // (85,126)
    vertex((flamX + 50) * flamFactor,(flamY + 90) * flamFactor); // (100,140)
    vertex((flamX + 60) * flamFactor,(flamY + 76) * flamFactor); // (110,126)

  endShape(CLOSE);

  fill(flamTwo);
  // straight flamingo leg
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 88) * flamFactor); // (99,138)
    vertex((flamX + 51) * flamFactor,(flamY + 88) * flamFactor); // (101,138)
    vertex((flamX + 51) * flamFactor,(flamY + 158) * flamFactor); // (101,208)
    vertex((flamX + 49) * flamFactor,(flamY + 158) * flamFactor); // (99,208)

  endShape(CLOSE);

  // foot on ground flamingo
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 158) * flamFactor); // (99,208)
    vertex((flamX + 51) * flamFactor,(flamY + 158) * flamFactor); // (101,208)
    vertex((flamX + 51) * flamFactor,(flamY + 160) * flamFactor); // (101,210)
    vertex((flamX + 33) * flamFactor,(flamY + 160) * flamFactor); // (83,210)

  endShape(CLOSE);

}

function DrawFlamingo2 (flamX,flamY,flamFactor)  {

noStroke();
fill(flamBeak2);
  // beak of the flamingo
  beginShape();

    vertex((flamX + 2) * flamFactor,(flamY - 17) * flamFactor); // (52,33)
    vertex((flamX - 5) * flamFactor,(flamY - 13) * flamFactor); // (45,37)
    vertex((flamX - 9) * flamFactor,(flamY - 11) * flamFactor); // (41,39)
    vertex((flamX - 12) * flamFactor,(flamY - 8) * flamFactor); // (38,42)
    vertex((flamX - 14) * flamFactor,(flamY - 6) * flamFactor); // (36,44)
    vertex((flamX - 17) * flamFactor,(flamY + 2) * flamFactor); // (33,52)
    vertex((flamX - 13) * flamFactor,(flamY - 1) * flamFactor); // (37,49)
    vertex((flamX - 10) * flamFactor,(flamY - 3) * flamFactor); // (40,47)
    vertex((flamX + 2) * flamFactor,(flamY - 7) * flamFactor); // (52,43)

  endShape(CLOSE);


  fill(flamTip2);
  beginShape();

    vertex((flamX - 9) * flamFactor,(flamY - 11) * flamFactor); // (41,39)
    vertex((flamX - 12) * flamFactor,(flamY - 8) * flamFactor); // (38,42)
    vertex((flamX - 14) * flamFactor,(flamY - 6) * flamFactor); // (36,44)
    vertex((flamX - 17) * flamFactor,(flamY + 2) * flamFactor); // (33,52)
    vertex((flamX - 13) * flamFactor,(flamY - 1) * flamFactor); // (37,49)
    vertex((flamX - 10) * flamFactor,(flamY - 3) * flamFactor); // (40,47)

  endShape(CLOSE);

  fill(flamColour2);
  // body of the flamingo
  beginShape();

    vertex((flamX + 60) * flamFactor,(flamY + 77) * flamFactor); // (110,127)
    vertex((flamX + 20) * flamFactor,(flamY + 77) * flamFactor); // (70,127)
    vertex((flamX + 17) * flamFactor,(flamY + 75) * flamFactor); // (67,125)
    vertex((flamX + 10) * flamFactor,(flamY + 70) * flamFactor); // (60,120)
    vertex((flamX - 2) * flamFactor,(flamY + 50) * flamFactor); // (48,100)
    vertex((flamX + 15) * flamFactor,(flamY - 3) * flamFactor); // (65,47)
    vertex((flamX + 13) * flamFactor,(flamY - 5) * flamFactor); // (63,45)
    vertex((flamX - 1) * flamFactor,(flamY - 7) * flamFactor); // (49,43)
    vertex((flamX - 2) * flamFactor,(flamY - 12) * flamFactor); // (48,38)
    vertex((flamX + 2) * flamFactor,(flamY - 17) * flamFactor); // going left (52,33)
    vertex((flamX + 15) * flamFactor,(flamY - 23) * flamFactor); // top most point of flamingo (65,27)
    vertex((flamX + 25) * flamFactor,(flamY - 21) * flamFactor); // going right (75,29)
    vertex((flamX + 30) * flamFactor,(flamY - 10) * flamFactor); // (80,40)
    vertex((flamX + 16) * flamFactor,(flamY + 40) * flamFactor); // (66,90)
    vertex((flamX + 17) * flamFactor,(flamY + 50) * flamFactor); // (67,100)
    vertex((flamX + 24) * flamFactor,(flamY + 52) * flamFactor); // (74,102)
    vertex((flamX + 28) * flamFactor,(flamY + 50) * flamFactor); // (78,100)
    vertex((flamX + 33) * flamFactor,(flamY + 43) * flamFactor); // (83,93)
    vertex((flamX + 47) * flamFactor,(flamY + 34) * flamFactor); // (97,84)
    vertex((flamX + 70) * flamFactor,(flamY + 40) * flamFactor); // (120,90)
    vertex((flamX + 105) * flamFactor,(flamY + 70) * flamFactor); // (155,120)
    vertex((flamX + 112) * flamFactor,(flamY + 83) * flamFactor); // (162,133)
    vertex((flamX + 95) * flamFactor,(flamY + 75) * flamFactor); // (145,125)
    vertex((flamX + 94) * flamFactor,(flamY + 80) * flamFactor); // (144,130)
    vertex((flamX + 87) * flamFactor,(flamY + 77) * flamFactor); // (137,127)

  endShape(CLOSE);

  fill(flamOne2);
  // first part of leg of flamingo
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 88) * flamFactor); // (99,138)
    vertex((flamX + 51) * flamFactor,(flamY + 88) * flamFactor); // (101,138)
    vertex((flamX + 59) * flamFactor,(flamY + 120) * flamFactor); // (109,170)
    vertex((flamX + 57) * flamFactor,(flamY + 120) * flamFactor); // (107,170)

  endShape(CLOSE);

  // second part of leg of flamingo
  beginShape();

    vertex((flamX + 57) * flamFactor,(flamY + 119) * flamFactor); // (107,169)
    vertex((flamX + 59) * flamFactor,(flamY + 120) * flamFactor); // (109,170)
    vertex((flamX + 31) * flamFactor,(flamY + 130) * flamFactor); // (81,180)
    vertex((flamX + 32) * flamFactor,(flamY + 128) * flamFactor); // (82,178)

  endShape(CLOSE);

  // bend leg triangle foot
  beginShape();

    vertex((flamX + 31) * flamFactor,(flamY + 130) * flamFactor); // (81,180)
    vertex((flamX + 32) * flamFactor,(flamY + 128) * flamFactor); // (82,178)
    vertex((flamX + 34) * flamFactor,(flamY + 141) * flamFactor) // (84,191)
    vertex((flamX + 26) * flamFactor,(flamY + 143) * flamFactor); // (76,193)

  endShape(CLOSE);

  fill(flamHip2);
  // triangle leg shape for flamingo
  beginShape();

    vertex((flamX + 35) * flamFactor,(flamY + 76) * flamFactor); // (85,126)
    vertex((flamX + 50) * flamFactor,(flamY + 90) * flamFactor); // (100,140)
    vertex((flamX + 60) * flamFactor,(flamY + 76) * flamFactor); // (110,126)

  endShape(CLOSE);

  fill(flamTwo2);
  // straight flamingo leg
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 88) * flamFactor); // (99,138)
    vertex((flamX + 51) * flamFactor,(flamY + 88) * flamFactor); // (101,138)
    vertex((flamX + 51) * flamFactor,(flamY + 158) * flamFactor); // (101,208)
    vertex((flamX + 49) * flamFactor,(flamY + 158) * flamFactor); // (99,208)

  endShape(CLOSE);

  // foot on ground flamingo
  beginShape();

    vertex((flamX + 49) * flamFactor,(flamY + 158) * flamFactor); // (99,208)
    vertex((flamX + 51) * flamFactor,(flamY + 158) * flamFactor); // (101,208)
    vertex((flamX + 51) * flamFactor,(flamY + 160) * flamFactor); // (101,210)
    vertex((flamX + 33) * flamFactor,(flamY + 160) * flamFactor); // (83,210)

  endShape(CLOSE);
}