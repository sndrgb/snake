import Snake from "./Snake.js";

export default class Game {
  constructor() {
    const canvas = document.querySelector("#game");
    this.ctx = canvas.getContext("2d");

    this.cellSize = 30;
    this.cellCount = canvas.width / this.cellSize;
    this.createInterval();
  }

  play() {
    this.spawnSnake();
  }

  createInterval() {
    this.updateWithForcedContext = this.update.bind(this);
    requestAnimationFrame(this.updateWithForcedContext);
  }

  update() {
    requestAnimationFrame(this.updateWithForcedContext);

    const head = { ...this.snake.segments[0] }; // {x: 0, y: 4}

    const direction = this.snake.direction;

    switch (direction) {
      case "left":
        break;
      case "right":
        break;
      case "up":
        break;
      case "down":
        head.y = head.y + 1;
        break;
    }

    console.log(this.snake.segments);

    this.snake.move(head);

    this.ctx.clearRect(0, 0, 540, 540);
    this.snake.render(this.ctx, this.cellSize);
  }

  spawnSnake() {
    const initialLength = 4;
    const ctx = this.ctx;
    const cellSize = this.cellSize;

    const headX = 0;
    const headY = 0;
    const tailX = headX + (initialLength - 1);
    const tailY = headY + (initialLength - 1);

    const directions = ["up", "left", "down", "right"];
    this.snake = new Snake(directions[2]);
    this.snake.createSegments(headX, headY, tailX, tailY);
    this.snake.render(ctx, cellSize);
  }

  endGame() {}

  testCanvas() {
    // SET FILL STYLE IN GIALLO
    this.ctx.fillStyle = "#ffff00";

    // rettangolo pieno grande tutto 540 x 540
    this.ctx.fillRect(0, 0, 540, 540);

    // cambio colore in fucsia
    this.ctx.fillStyle = "#ff00ff";

    // rettangolo pieno da x 0 y 0 a 540/2 (metà)
    this.ctx.fillRect(0, 0, 270, 270);

    // cambio colore in fucsia
    this.ctx.fillStyle = "#00ffff";

    // rettangolo pieno da x 270 y 270 a 540/2 (metà)
    this.ctx.fillRect(270, 270, 270, 270);
  }
}
