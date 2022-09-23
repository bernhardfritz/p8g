import { deltaTime, ellipse, fill } from 'p8g.js';
import Victor from 'victor';

export default class Particle {
  constructor(position, mass, velocity, lifespan, color) {
    this._position = position;
    this._mass = mass;
    this._velocity = velocity;
    this._lifespan = lifespan;
    this._color = color;
    this._acceleration = new Victor(0, 0);
    this._age = 0;
  }

  applyForce(force) {
    const da = force.clone().multiply(new Victor(this._mass, this._mass));
    this._acceleration.add(da);
  }

  update() {
    const deltaVelocity = this._acceleration
      .clone()
      .multiply(new Victor(deltaTime / 19, deltaTime / 19));
    this.velocity.add(deltaVelocity);
    const deltaPosition = this.velocity
      .clone()
      .multiply(new Victor(deltaTime / 19, deltaTime / 19));
    this.position.add(deltaPosition);
    this._acceleration.x = 0;
    this._acceleration.y = 0;
    if (this._age < this._lifespan) {
      this._age = this._age + 1;
    }
  }

  draw() {
    if (this._lifespan === -1) {
      fill(this._color);
    } else {
      const pct = 1 - this._age / this._lifespan;
      fill(this._color[0], this._color[1], this._color[2], pct * 255);
    }
    ellipse(this._position.x, this._position.y, this._mass * 8, this._mass * 8);
  }

  isDead() {
    return this._age === this._lifespan;
  }

  get position() {
    return this._position;
  }

  get velocity() {
    return this._velocity;
  }

  set velocity(velocity) {
    this._velocity = velocity;
  }
}
