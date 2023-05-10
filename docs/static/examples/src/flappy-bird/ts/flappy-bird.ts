import p8g, {
  CENTER,
  Image,
  createCanvas,
  height,
  image,
  imageMode,
  loadImage,
  millis,
  width,
} from 'p8g.js';

const background_day: Image = await loadImage('background-day.png');
const base: Image = await loadImage('base.png');
const yellowbird: Image[] = await Promise.all([
  loadImage('yellowbird-downflap.png'),
  loadImage('yellowbird-midflap.png'),
  loadImage('yellowbird-upflap.png'),
]);

p8g.draw = () => {
  image(background_day, 0, 0);
  image(base, -(millis() / 10) % width, height - base.height);
  image(base, (-(millis() / 10) % width) + base.width, height - base.height);
  imageMode(CENTER);
  image(
    yellowbird[Math.floor((millis() / 100) % yellowbird.length)],
    width / 2,
    height / 2 + 2 * Math.sin(millis() / 100),
  );
};

createCanvas(288, 512);
