import org.joml.Vector2f;
import org.joml.Vector4f;

import java.util.HashSet;
import java.util.Set;

import static io.github.bernhardfritz.p8g.Sketch.*;

public class Firework {

    private Particle rocket;
    boolean exploded;
    private Set<Particle> particles;

    public Firework(Particle rocket) {
        this.rocket = rocket;
        this.exploded = false;
        this.particles = new HashSet<>();
    }

    public void applyForce(Vector2f force) {
        if (!exploded) {
            rocket.applyForce(force);
        } else {
            for (Particle particle : particles) {
                particle.applyForce(force);
            }
        }
    }

    public void update() {
        if (!exploded) {
            rocket.update();
            if (rocket.getVelocity().get(1) >= 0.f) {
                explode();
            }
        } else {
            for (Particle particle : particles) {
                particle.getVelocity().mul(0.95f);
                particle.update();
            }
            particles.removeIf(Particle::isDead);
        }
    }

    public void explode() {
        Vector4f color = new Vector4f(random(255.f), random(255.f), random(255.f), 255.f);
        for (int i = 0; i < 200; i++) {
            float angle = random(2.f * (float) Math.PI);
            float magnitude = random(7.f);
            Particle particle = new Particle(
                    new Vector2f(rocket.getPosition()),
                    random(0.7f, 1.f),
                    new Vector2f(magnitude * (float) Math.cos(angle), magnitude * (float) Math.sin(angle)),
                    (int) random(90.f, 110.f),
                    color
            );
            particles.add(particle);
        }
        exploded = true;
    }

    public void draw() {
        noStroke();
        if (!exploded) {
            rocket.draw();
        } else {
            for (Particle particle : particles) {
                particle.draw();
            }
        }
    }

    public boolean isDone() {
        return exploded && particles.isEmpty();
    }

}
