var fixRect, movingRect

function setup() {
  createCanvas(800, 800);
  fixRect = createSprite(200, 200, 100, 150);
  fixRect.shapeColor = "green";
  movingRect = createSprite(300, 200, 50, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixRect.x);
  //A-B=-10
  //B-A=10
  if (movingRect.x - fixRect.x <= fixRect.width / 2 + movingRect.width / 2 &&
    fixRect.x - movingRect.x <= fixRect.width / 2 + movingRect.width / 2 &&
    movingRect.y - fixRect.y <= fixRect.height / 2 + movingRect.height / 2 &&
    fixRect.y - movingRect.y <= fixRect.height / 2 + movingRect.height / 2) {
    fixRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    console.log("yoo");
  }
  else {
    fixRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}