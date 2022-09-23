import p8g, { background, createCanvas, height, random, width } from 'p8g.js';
import Victor from 'victor';
import Firework from './firework';
import Particle from './particle';

let fireworks = [];
const gravity = new Victor(0, 0.2);

p8g.draw = () => {
  background([0, 0, 0, 25.5]);
  if (random() < 0.1) {
    const firework = new Firework(
      new Particle(
        new Victor(random(width), height),
        1,
        new Victor(0, random(-9, -10)),
        -1,
        [255, 0, 0, 255],
      ),
    );
    fireworks.push(firework);
  }
  for (const firework of fireworks) {
    firework.applyForce(gravity);
    firework.update();
    firework.draw();
  }
  let index = -1;
  while (
    (index = fireworks.findIndex((firework) => firework.isDone())) !== -1
  ) {
    fireworks.splice(index, 1);
  }
};

const canvasWrapper = document.getElementById('canvas-wrapper');
const canvas = createCanvas(320, 320);
canvasWrapper.appendChild(canvas);
