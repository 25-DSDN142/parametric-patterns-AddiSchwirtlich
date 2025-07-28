//your parameter variables go here!
let bodyX = 200; // move bird left and right
let bodyY = 200; //  move bird up and down
let scaleFactor = 0.5; // to increase/decrease size of bird

let cubeX = 20; // move cube left and right
let cubeY = 20; // move cube up and down
let cubeFactor = 8; // to increase/decrease cube size

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(141, 227, 221); //light blue colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  
  DrawBird (100,100,0.2); // bird


  fill(250, 157, 35); // orange color


  // cube shape
  beginShape();

    vertex((cubeX - 10) * cubeFactor,cubeY * cubeFactor); // (10,20)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)
    vertex(cubeX * cubeFactor,cubeY * cubeFactor); // (20,20)
    vertex(cubeX * cubeFactor,(cubeY - 5) * cubeFactor); // (20,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 8) * cubeFactor); // (15,12)
    vertex((cubeX - 10) * cubeFactor,(cubeY - 5) * cubeFactor); // (10,15)

  endShape(CLOSE);

  fill(212, 78, 11); // dark orange

  beginShape();

    vertex((cubeX - 10) * cubeFactor,(cubeY - 5) * cubeFactor); // (10,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 2) * cubeFactor); // (15,18)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)
    vertex((cubeX - 10) * cubeFactor,cubeY * cubeFactor); // (10,20)

  endShape(CLOSE);

  fill(255, 197, 135); // light orange

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2) * cubeFactor); // (15,18)
    vertex(cubeX * cubeFactor,(cubeY - 5) * cubeFactor); // (20,15)
    vertex(cubeX * cubeFactor,cubeY * cubeFactor); // (20,20)
    vertex((cubeX - 5) * cubeFactor,(cubeY + 3) * cubeFactor); // (15,23)

  endShape(CLOSE);


  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2.5) * cubeFactor); // (120,140) (15,17.5)
    vertex((cubeX - 9) * cubeFactor,(cubeY - 5) * cubeFactor); // (87,120) (11,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 7.5) * cubeFactor); // (120,100) (15,12.5)
    vertex((cubeX - 1) * cubeFactor,(cubeY - 5) * cubeFactor); // (153,120) (19,15)

  endShape(CLOSE);

  fill(19, 209, 66); // green colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 2.9) * cubeFactor); // (120,136) (15,17)
    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 5) * cubeFactor); // (92,120) (11.5,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 7.1) * cubeFactor); // (120,103) (15,13)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 5) * cubeFactor); // (147,120) (18.5,15)

  endShape(CLOSE);

  fill(12, 40, 199); // blue colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 3.3) * cubeFactor); // (120,133) (15,16.5)
    vertex((cubeX - 8) * cubeFactor,(cubeY - 5) * cubeFactor); // (97,120) (12,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6.7) * cubeFactor); // (120,106) (15,13)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 5) * cubeFactor); // (142,120) (17.5,15)

  endShape(CLOSE);

  fill(217, 41, 111); // hot pink colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 3.7) * cubeFactor); // (120,130) (15,16)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 5) * cubeFactor); // (102,120) (12.5,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6.4) * cubeFactor); // (120,109) (15,13.5)
    vertex((cubeX - 2.6) * cubeFactor,(cubeY - 5) * cubeFactor); // (138,120) (17,15)

  endShape(CLOSE);

  fill(255, 204, 36); // yellow colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.1) * cubeFactor); // (120,127) (15,15.8)
    vertex((cubeX - 6.8) * cubeFactor,(cubeY - 5) * cubeFactor); // (107,120) (13.3,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 6) * cubeFactor); // (120,112) (15,14)
    vertex((cubeX - 3.2) * cubeFactor,(cubeY - 5) * cubeFactor); // (133,120) (16.6,15)

  endShape(CLOSE);

  fill(23, 87, 29); // dark green colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.3) * cubeFactor); // (120,125) (15,15.6)
    vertex((cubeX - 6.4) * cubeFactor,(cubeY - 5) * cubeFactor); // (110,120) (13.7,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 5.8) * cubeFactor); // (120,114) (15,14.2)
    vertex((cubeX - 3.6) * cubeFactor,(cubeY - 5) * cubeFactor); // (130,120) (16.2,15)

  endShape(CLOSE);

  fill(250, 23, 2); // red colour

  beginShape();

    vertex((cubeX - 5) * cubeFactor,(cubeY - 4.6) * cubeFactor); // (120,123) (15,15.4)
    vertex((cubeX - 5.9) * cubeFactor,(cubeY - 5) * cubeFactor); // (114,120) (14.2,15)
    vertex((cubeX - 5) * cubeFactor,(cubeY - 5.5) * cubeFactor); // (120,116) (15,14.5)
    vertex((cubeX - 4.1) * cubeFactor,(cubeY - 5) * cubeFactor); // (126,120) (15.7,15)

  endShape(CLOSE);

  // shape on the left hand side of cube

  fill(255, 197, 135); // light orange

  beginShape();

    vertex((cubeX - 9.5) * cubeFactor,(cubeY - 4.1) * cubeFactor); // (84,127) (10.5,15.9)
    vertex((cubeX - 9.5) * cubeFactor,(cubeY - 0.2) * cubeFactor); // (84,158) (10.5,19.7)
    vertex((cubeX - 5.6) * cubeFactor,(cubeY + 2.2) * cubeFactor); // (115,177) (14.4,22)
    vertex((cubeX - 5.6) * cubeFactor,(cubeY - 1.8) * cubeFactor); // (115,146) (14.4,18.2)

  endShape(CLOSE);

  fill(19, 209, 66); // light green

  beginShape();

    vertex((cubeX - 9.2) * cubeFactor,(cubeY - 3.6) * cubeFactor); // (86,131) (10.7,16.4)
    vertex((cubeX - 9.2) * cubeFactor,(cubeY - 0.4) * cubeFactor); // (86,157) (10.7,19.6)
    vertex((cubeX - 6) * cubeFactor,(cubeY + 1.6) * cubeFactor); // (112,172) (14,21.5)
    vertex((cubeX - 6) * cubeFactor,(cubeY - 1.7) * cubeFactor); // (112,147) (14,18.4)

  endShape(CLOSE);

  fill(12, 40, 199); // blue

  beginShape();

    vertex((cubeX - 8.95) * cubeFactor,(cubeY - 3.1) * cubeFactor); // (88,135) (11,16.9)
    vertex((cubeX - 8.95) * cubeFactor,(cubeY - 0.5) * cubeFactor); // (88,156) (11,19.5)
    vertex((cubeX - 6.35) * cubeFactor,(cubeY + 1) * cubeFactor); // (109,168) (13.6,21)
    vertex((cubeX - 6.35) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (109,148) (13.6,18.5)

  endShape(CLOSE);

  fill(217, 41, 111); // hot pink

  beginShape();

    vertex((cubeX - 8.7) * cubeFactor,(cubeY - 2.6) * cubeFactor); // (90.5,139) (11.3,17.4)
    vertex((cubeX - 8.7) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (90.5,154) (11.3,19.2)
    vertex((cubeX - 6.65) * cubeFactor,(cubeY + 0.45) * cubeFactor); // (106,163) (13.2,20.4)
    vertex((cubeX - 6.65) * cubeFactor,(cubeY - 1.4) * cubeFactor); // (106,149) (13.2,18.6)

  endShape(CLOSE);

  fill(255, 204, 36); // yellow

  beginShape();

    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 2.2) * cubeFactor); // (92.5,143) (11.5,17.8)
    vertex((cubeX - 8.5) * cubeFactor,(cubeY - 0.9) * cubeFactor); // (92.5,153) (11.5,19.1)
    vertex((cubeX - 7) * cubeFactor,cubeY * cubeFactor); // (104,159.5) (13,20)
    vertex((cubeX - 7) * cubeFactor,(cubeY - 1.3) * cubeFactor); // (104,150.5) (13,18.8)

  endShape();

  fill(23, 87, 29); // dark green

  beginShape();

    vertex((cubeX - 8.3) * cubeFactor,(cubeY - 1.9) * cubeFactor); // (94,146) (11.75.18.2)
    vertex((cubeX - 8.3) * cubeFactor,(cubeY - 0.95) * cubeFactor); // (94,152) (11.75,18.2)
    vertex((cubeX - 7.2) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (102.5,157) (12.8,19.6)
    vertex((cubeX - 7.2) * cubeFactor,(cubeY - 1.2) * cubeFactor); // (102.5,151) (12.8,18.9)

  endShape(CLOSE);

  fill(250, 23, 2); // red

  beginShape();

    vertex((cubeX - 8.1) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (95.5,148.5) (11.9,18.5)
    vertex((cubeX - 8.1) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (95.5,151) (11.9,18.9)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (101,154.5) (12.6,19.3)
    vertex((cubeX - 7.4) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (101,151.5) (12.6,18.9)

  endShape(CLOSE);

  fill(212, 78, 11); // dark orange

  beginShape();

    vertex((cubeX - 4.4) * cubeFactor,(cubeY - 1.8) * cubeFactor); // (125,146) (15.6,18.2)
    vertex((cubeX - 4.4) * cubeFactor,(cubeY + 2.1) * cubeFactor); // (125,177) (15.6,22.1)
    vertex((cubeX - 0.5) * cubeFactor,(cubeY - 0.1) * cubeFactor); // (155.5,159) (19.4,19.9)
    vertex((cubeX - 0.5) * cubeFactor,(cubeY - 4) * cubeFactor); // (155.5,128) (19.4,16)

  endShape(CLOSE);

  fill(19, 209, 66); // light green

  beginShape();

    vertex((cubeX - 4) * cubeFactor,(cubeY - 1.6) * cubeFactor); // (128,147) (16,18.4)
    vertex((cubeX - 4) * cubeFactor,(cubeY + 1.5) * cubeFactor); // (128,172) (16,21.5)
    vertex((cubeX - 0.9) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (153,157) (19.1,19.6)
    vertex((cubeX - 0.9) * cubeFactor,(cubeY - 3.4) * cubeFactor); // (153,133) (19.1,16.6)

  endShape(CLOSE);

  fill(12, 40, 199); // blue

  beginShape();

    vertex((cubeX - 3.7) * cubeFactor,(cubeY - 1.5) * cubeFactor); // (130.5,148) (16.3,18.5)
    vertex((cubeX - 3.7) * cubeFactor,(cubeY + 1) * cubeFactor); // (130.5,168) (16.3,21)
    vertex((cubeX - 1.2) * cubeFactor,(cubeY - 0.4) * cubeFactor); // (150.5,156) (18.8,19.5)
    vertex((cubeX - 1.2) * cubeFactor,(cubeY - 2.9) * cubeFactor); // (150.5,137) (18.8,17.1)

  endShape(CLOSE);

  fill(217, 41, 111); // hot pink

  beginShape();

    vertex((cubeX - 3.4) * cubeFactor,(cubeY - 1.35) * cubeFactor); // (133,149) (16.6,18.6)
    vertex((cubeX - 3.4) * cubeFactor,(cubeY + 0.5) * cubeFactor); // (133,163.5) (16.6,20.4)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 0.6) * cubeFactor); // (148,154.5) (18.5,19.3)
    vertex((cubeX - 1.5) * cubeFactor,(cubeY - 2.4) * cubeFactor); // (148,141) (18.5,17.6)

  endShape(CLOSE);

  fill(255, 204, 36); // yellow

  beginShape();

    vertex((cubeX - 3.1) * cubeFactor,(cubeY - 1.3) * cubeFactor); // (135.5,150) (16.9,18.7)
    vertex((cubeX - 3.1) * cubeFactor,(cubeY) * cubeFactor); // (135.5,159.5) (16.9,19.9)
    vertex((cubeX - 1.8) * cubeFactor,(cubeY - 0.7) * cubeFactor); // (146,153.5) (18.2,19.2)
    vertex((cubeX - 1.8) * cubeFactor,(cubeY - 2) * cubeFactor); // (146,144.5) (18.2,18)

  endShape(CLOSE);

  fill(23, 87, 29); // dark green

  beginShape();

    vertex((cubeX - 2.9) * cubeFactor,(cubeY - 1.2) * cubeFactor); // (137,151) (17.1,18.8)
    vertex((cubeX - 2.9) * cubeFactor,(cubeY - 0.3) * cubeFactor); // (137,157) (17.1,19.6)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 0.8) * cubeFactor); // (144.5,153) (18,19.1)
    vertex((cubeX - 2) * cubeFactor,(cubeY - 1.7) * cubeFactor); // (144.5,147) (18,18.4)

  endShape(CLOSE);

  fill(250, 23, 2); // red

  beginShape();

    vertex((cubeX - 2.7) * cubeFactor,(cubeY - 1.1) * cubeFactor); // (139,151.5) (17.4,18.9)
    vertex((cubeX - 2.7) * cubeFactor,(cubeY - 0.6) * cubeFactor); // (139,154.5) (17.4,19.3)
    vertex((cubeX - 2.2) * cubeFactor,(cubeY - 0.9) * cubeFactor); // (143,152.5) (17.9,19)
    vertex((cubeX - 2.2) * cubeFactor,(cubeY - 1.4) * cubeFactor); // (143,149.5) (17.9,18.7)

  endShape(CLOSE);


}

function DrawBird(bodyX,bodyY,scaleFactor) {

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

  // fifth feather
  beginShape();

    vertex((bodyX - 2) * scaleFactor,(bodyY + 5) * scaleFactor); // (48,55)
    vertex((bodyX + 5) * scaleFactor,(bodyY + 5) * scaleFactor); // (55,55)
    vertex((bodyX + 8) * scaleFactor,(bodyY + 10) * scaleFactor); // (58,60)

  endShape(CLOSE);

  }
