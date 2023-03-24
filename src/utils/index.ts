import uui from "react-native-uuid";
import { withTiming } from "react-native-reanimated";

function randomColor() {
  const element = () => Math.floor(Math.random() * 255);
  const color = `rgb(${element()},${element()},${element()})`;

  return color;
}

function randomOpacityColor() {
  const rgx = /rgb\(([0-9])+,([0-9])+,([0-9])+\)/;
  const randomRgb = randomColor();

  const element = (el: string) => {
    const result = el + 15;
    return result;
  };

  const rgba = randomRgb.replace(
    rgx,
    `rgba(${element(`$1`)},${element(`$2`)},${element(`$3`)}, 0.2)`
  );

  return rgba;
}

function randomNumber(min: number, max: number) {
  if (min > max) {
    min = max;
    max = min;
  }
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

function createTimingAnimated(
  howLongWillTheAnimationLast: number,
  durationInMilliseconds: number
) {
  return withTiming(howLongWillTheAnimationLast, {
    duration: durationInMilliseconds,
  });
}

function getNewId() {
  const id = uui.v4();
  return String(id);
}

function getNewDate() {
  const actualDate = new Date();
  return actualDate;
}

function getTimestamp() {
  const timestamp = new Date().getDate();
  return timestamp;
}

export const Utils = {
  randomColor,
  randomOpacityColor,
  randomNumber,
  createTimingAnimated,
  getNewId,
  getNewDate,
  getTimestamp,
};
