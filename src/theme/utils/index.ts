function randomColor() {
  const element = () => Math.floor(Math.random() * 256);
  const color = `rgb(${element()},${element()},${element()})`;

  return color;
}

export const ThemeUtils = { randomColor };
