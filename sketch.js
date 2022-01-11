function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke(); 
  noLoop();
}

function draw() {
  bgBlocks();

  let triWidth = 243;
  let triX = ((innerWidth/triWidth)-1);
  let triHeight = 210;
  let triY = ((innerHeight/triHeight)-1);

  let triCol = int(random(0,triX));
  let xPos = triCol * triWidth;

  let triRow = int(random(0,triY));
  let yPos = triRow * triHeight;
  
  if (triRow % 2 == 1) {
    xPos = xPos + triWidth/6;
}
else {
  xPos = xPos;
}
  triAngle(xPos,yPos);
}

function bgBlocks() {
  let yDrop = 280*1.5;
  for (i = 0; i < height; i += yDrop) {
    push();
    translate(0, i);
    blockRow();
    pop();
}
}

function blockRow() {
  let xOff = 243;
  let yOff = 280;
  for (b = 0; b < width*1.2; b+=xOff) {
    triBlock(0,-70);
    translate(xOff,0);
    triBlock(-(xOff*1.5),yOff*.5);
  }
}

  function triBlock(xOffset, yOffset) {

    let darkGrey = color('#A4A8B0');
    let mediumGrey = color('#D0D1D4');
    let lightGrey = color('#F9F8F3');

    fill(lightGrey);
    quad(0+xOffset,0+yOffset,81+xOffset,140+yOffset,0+xOffset,140+yOffset,-40+xOffset,70+yOffset);
    quad(81+xOffset,140+yOffset,0+xOffset,280+yOffset,-40+xOffset,210+yOffset,0+xOffset,140+yOffset);

    fill(mediumGrey);
    quad(0+xOffset,0+yOffset,81+xOffset,0+yOffset,121+xOffset,70+yOffset,81+xOffset,140+yOffset);
    quad(121+xOffset,70+yOffset,202+xOffset,70+yOffset,243+xOffset,140+yOffset,81+xOffset,140+yOffset);

    fill(darkGrey);
    quad(81+xOffset,140+yOffset,243+xOffset,140+yOffset,202+xOffset,210+yOffset,121+xOffset,210+yOffset,81+xOffset,140+yOffset);
    quad(121+xOffset,210+yOffset,81+xOffset,280+yOffset,0+xOffset,280+yOffset,81+xOffset,140+yOffset);


  }

  function triAngle(xOffset, yOffset) {
    let alpha = 255*.8;
    let red = color(213,105,87, alpha);

    let orange = color(239,156,91, alpha);
    let darkRed = color(177,93,91, alpha);
    let purple = color(77,70,97, alpha);

    let yellow = color(247,225,84, alpha);
    let lightGreen = color(107,192,107, alpha);
    let green = color(77,145,105, alpha);
    let darkGreen = color(61,81,87, alpha);
    let blue = color(55,130,196, alpha);

    fill(red);
    triangle(121+xOffset,0+yOffset,162+xOffset,70+yOffset,81+xOffset,70+yOffset);

    fill(orange);
    triangle(81+xOffset,70+yOffset,121+xOffset,140+yOffset,40+xOffset,140+yOffset);

    fill(darkRed);
    triangle(81+xOffset,70+yOffset,162+xOffset,70+yOffset,121+xOffset,140+yOffset);

    fill(purple);
    triangle(162+xOffset,70+yOffset,202+xOffset,140+yOffset,121+xOffset,140+yOffset);

    fill(yellow);
    triangle(81+xOffset,210+yOffset,0+xOffset,210+yOffset,41+xOffset,140+yOffset);

    fill(lightGreen);
    triangle(121+xOffset,140+yOffset,81+xOffset,210+yOffset,41+xOffset,140+yOffset);

    fill(green);
    triangle(121+xOffset,140+yOffset,162+xOffset,210+yOffset,81+xOffset,210+yOffset);

    fill(darkGreen);
    triangle(202+xOffset,140+yOffset,162+xOffset,210+yOffset,121+xOffset,140+yOffset);

    fill(blue);
    triangle(202+xOffset,140+yOffset,243+xOffset,210+yOffset,162+xOffset,210+yOffset);
  }