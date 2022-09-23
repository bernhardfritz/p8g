import p8g, {
  background,
  createCanvas,
  fill,
  height,
  keyCode,
  text,
  textSize,
  width,
} from 'p8g.js';

let str = 'Press any key';

p8g.draw = () => {
  background(0);
  fill(255);
  textSize(32);
  text(str, width / 2 - (str.length * 18) / 2, height / 2 + 8);
};

p8g.keyPressed = () => {
  str = `keyCode: ${keyCode}`;
};

createCanvas(320, 320);
