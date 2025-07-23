//your parameter variables go here!
let bodyX = 450; // move bird left and right
let bodyY = 450; //  move bird up and down
let scaleFactor = 0.2; // to decrease size of bird

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(141, 227, 221); //light blue colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  strokeWeight(0);

  fill(255);

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

  fill(250, 141, 105);// orange colour

  // shape of the orange pattern on bird
  beginShape();
  
    vertex((bodyX - 25) * scaleFactor,(bodyY - 6) * scaleFactor); // (25,44)
    vertex((bodyX - 15) * scaleFactor,(bodyY - 2) * scaleFactor); // (35,48)
    vertex((bodyX - 9) * scaleFactor,(bodyY - 12) * scaleFactor); // (41,38)
    vertex((bodyX - 13) * scaleFactor,(bodyY - 15) * scaleFactor); // (37,35)
    vertex((bodyX - 28) * scaleFactor,(bodyY - 10) * scaleFactor); // (22,40)
    vertex((bodyX - 32) * scaleFactor,(bodyY - 5) * scaleFactor); // (18,45)

  endShape(CLOSE);
  
  fill(184, 175, 173);// grey colour

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

  fill(20, 18, 18);// black colour

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

  //fifth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY + 5) * scaleFactor); // (48,55)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 5) * scaleFactor); // (55,55)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 10) * scaleFactor); // (58,60)

  endShape(CLOSE);



}


