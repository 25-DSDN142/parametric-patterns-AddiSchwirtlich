//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


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

    vertex(160,150);
    vertex(95,105);
    vertex(60,105);
    vertex(50,100);
    vertex(48,90);
    vertex(48,40);
    vertex(35,30);
    vertex(18,40);
    vertex(8,55);
    vertex(25,50);
    vertex(35,52);
    vertex(35,100);
    vertex(36,105);
    vertex(40,110);
    vertex(55,150);
    vertex(70,148);
    vertex(85,152);
    vertex(95,155);
    vertex(105,160);
    vertex(100,145);
    vertex(120,155);
    vertex(115,145);

  endShape(CLOSE);

  fill(250, 141, 105);// orange colour

  // shape of the orange pattern on bird
  beginShape();
  
    vertex(25,44);
    vertex(35,48);
    vertex(41,38);
    vertex(37,35);
    vertex(22,40);
    vertex(18,45);

  endShape(CLOSE);
  
  fill(184, 175, 173);// grey colour

  // grey shading of the birds wings
  beginShape();

    vertex(107,132);
    vertex(105,140);
    vertex(90,130);
    vertex(87,140);
    vertex(61,137);
    vertex(50,120);
    vertex(58,140);
    vertex(91,145);
    vertex(92,135);
    vertex(110,145);
    vertex(110,138);
    vertex(160,150);
 
  endShape(CLOSE);

  fill(20, 18, 18);// black colour

  // black colour patterning on bottom of birds wings
  beginShape();

    vertex(110,138);
    vertex(110,145);
    vertex(92,135);
    vertex(91,145)
    vertex(75,142);
    vertex(105,160);
    vertex(100,145);
    vertex(120,155);
    vertex(115,145);
    vertex(160,150);
  
  endShape(CLOSE);

  // beginning feather found on the top most of head
  beginShape();

    vertex(35,30);
    vertex(36,15);
    vertex(42,15);
    vertex(36,31);

  endShape(CLOSE);

  // second feather
  beginShape();

    vertex(40,34);
    vertex(54,18);
    vertex(65,20);
    vertex(41,35);

  endShape();
  
  // third feather
  beginShape();

    vertex(48,40);
    vertex(70,26);
    vertex(78,35);
    vertex(48,42);

  endShape(CLOSE);

  //fourth feather
  beginShape();

    vertex(48,50);
    vertex(65,45);
    vertex(70,50);

  endShape(CLOSE);

  //fifth feather
  beginShape();

    vertex(48,55);
    vertex(55,55);
    vertex(58,60);

  endShape(CLOSE);


}


