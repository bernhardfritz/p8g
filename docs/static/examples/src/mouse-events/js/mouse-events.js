import p8g, {
  background,
  createCanvas,
  CENTER,
  ellipseMode,
  ellipse,
  mouseX,
  mouseY,
} from 'p8g.js';

let once = false;

p8g.draw = () => {
  if (!once) {
    background(220);
    once = true;
  }
};

p8g.mouseMoved = () => {
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 50, 50);
};

createCanvas(320, 320);
