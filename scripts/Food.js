export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render(ctx, cellSize) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
}

// new Food(20, 30) // x, y
