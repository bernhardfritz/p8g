import p8g, {
  background,
  createCanvas,
  height,
  point,
  stroke,
  width,
} from 'p8g.js';
import { createNoise2D } from 'simplex-noise';

const noise2D = createNoise2D();
let r = 0;

p8g.draw = () => {
  background(255);
  for (let y = 0; y < height; y++) {
    stroke(255 * noise2D(y, 0));
    for (let x = 0; x < width; x++) {
      point(99 * noise2D((x - y) / 99 + r, 0) * Math.sin((x + y) / 99) + y, x);
    }
  }
  r -= Math.PI / 99;
};

createCanvas(320, 320);
