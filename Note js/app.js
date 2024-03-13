let
  blokSize = 25,
  rows = 20,
  cols = 20,
  board,
  context,
  snakeX = blokSize * 5,
  snakeY = blokSize * 5,
  foodX,
  foodY,
  velocityX = 0,
  velocityY = 0
  ;

window.onload = function () {
  board = document.getElementById('board');
  board.heigth = rows * blokSize;
  board.width = cols * blokSize;
  context = board.getContext('2d');
  placeFood()
  document.addEventListener("keyup", changeDirection)
  // update()
  setInterval(update, 1000 / 10)
}
function changeDirection(e) {
  if (e.code == "ArrowUp") {
    velocityX = 0
    velocityX = -1
  }
  else if (e.code == "ArrowDown") {
    velocityX = 0
    velocityX = 1
  }
  else if (e.code == "ArrowLeft") {
    velocityX = -1
    velocityX = 0
  }
  else if (e.code == "ArrowRigth") {
    velocityX = 1
    velocityX = 0
  }
}
function update() {
  context.fillstyle = 'black';
  context.fillRact(0, 0, board.width, board.heigth)
  context.fillstyle = "lime";
  snakeX += velocityX;
  context.fillRact(snakeX, snakeY, blokSize, blokSize);
  context.fillstyle = "red"
  context.fillRact(foodX, foodY, blokSize, blokSize)
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blokSize;
  foodY = Math.floor(Math.random() * rows) * blokSize;
}
