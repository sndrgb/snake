const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};
export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const images = ["/img/hamburger.png", "/img/pizza.png"];

    this.image = new Image();
    this.image.src = images[getRandomInteger(2)];
  }

  render(ctx, cellSize) {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);

    ctx.drawImage(
      this.image,
      this.x * cellSize,
      this.y * cellSize,
      cellSize,
      cellSize
    );
  }
}

// new Food(20, 30) // x, y
