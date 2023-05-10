import { noStroke, random } from 'p8g.js';
import Victor from 'victor';
import Particle from './particle';

export default class Firework {
  private readonly _rocket: Particle;
  private _exploded: boolean;
  private readonly _particles: Particle[];

  constructor(rocket: Particle) {
    this._rocket = rocket;
    this._exploded = false;
    this._particles = [];
  }

  applyForce(force: Victor): void {
    if (!this._exploded) {
      this._rocket.applyForce(force);
    } else {
      for (const particle of this._particles) {
        particle.applyForce(force);
      }
    }
  }

  update(): void {
    if (!this._exploded) {
      this._rocket.update();
      if (this._rocket.velocity.y >= 0) {
        this.explode();
      }
    } else {
      for (const particle of this._particles) {
        particle.velocity.multiply(new Victor(0.95, 0.95));
        particle.update();
      }
      let index = -1;
      while (
        (index = this._particles.findIndex((particle) => particle.isDead())) !==
        -1
      ) {
        this._particles.splice(index, 1);
      }
    }
  }

  explode(): void {
    const color: [number, number, number, number] = [random(255), random(255), random(255), 255];
    for (let i = 0; i < 200; i++) {
      const angle = random(2 * Math.PI);
      const magnitude = random(7);
      const particle = new Particle(
        this._rocket.position.clone(),
        random(0.7, 1),
        new Victor(magnitude * Math.cos(angle), magnitude * Math.sin(angle)),
        Math.floor(random(90, 110)),
        color,
      );
      this._particles.push(particle);
    }
    this._exploded = true;
  }

  draw(): void {
    noStroke();
    if (!this._exploded) {
      this._rocket.draw();
    } else {
      for (const particle of this._particles) {
        particle.draw();
      }
    }
  }

  isDone(): boolean {
    return this._exploded && this._particles.length === 0;
  }
}
