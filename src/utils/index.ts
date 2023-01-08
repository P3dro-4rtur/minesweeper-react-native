function randomColor() {
  const element = () => Math.floor(Math.random() * 256);
  const color = `rgb(${element()},${element()},${element()})`;

  return color;
}

function randomNumber(min: number, max: number) {
  if (min > max) {
    min = max;
    max = min;
  }

  const result = Math.floor(Math.random() * (max - min)) + min;

  return result;
}

export const Utils = { randomColor, randomNumber };
