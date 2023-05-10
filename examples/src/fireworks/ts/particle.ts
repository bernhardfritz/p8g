import { deltaTime, ellipse, fill } from 'p8g.js';
import Victor from 'victor';

export default class Particle {
  private readonly _position: Victor;
  private readonly _mass: number;
  private _velocity: Victor;
  private readonly _lifespan: number;
  private readonly _color: [number, number, number, number];
  private readonly _acceleration: Victor;
  private _age: number;

  constructor(position: Victor, mass: number, velocity: Victor, lifespan: number, color: [number, number, number, number]) {
    this._position = position;
    this._mass = mass;
    this._velocity = velocity;
    this._lifespan = lifespan;
    this._color = color;
    this._acceleration = new Victor(0, 0);
    this._age = 0;
  }

  applyForce(force: Victor): void {
    const da = force.clone().multiply(new Victor(this._mass, this._mass));
    this._acceleration.add(da);
  }

  update(): void {
    const deltaVelocity = this._acceleration
      .clone()
      .multiply(new Victor(deltaTime / 19, deltaTime / 19));
    this._velocity.add(deltaVelocity);
    const deltaPosition = this._velocity
      .clone()
      .multiply(new Victor(deltaTime / 19, deltaTime / 19));
    this._position.add(deltaPosition);
    this._acceleration.x = 0;
    this._acceleration.y = 0;
    if (this._age < this._lifespan) {
      this._age = this._age + 1;
    }
  }

  draw(): void {
    if (this._lifespan === -1) {
      fill(this._color);
    } else {
      const pct = 1 - this._age / this._lifespan;
      fill(this._color[0], this._color[1], this._color[2], pct * 255);
    }
    ellipse(this._position.x, this._position.y, this._mass * 8, this._mass * 8);
  }

  isDead(): boolean {
    return this._age === this._lifespan;
  }

  get position(): Victor {
    return this._position;
  }

  get velocity(): Victor {
    return this._velocity;
  }

  set velocity(velocity: Victor) {
    this._velocity = velocity;
  }
}
