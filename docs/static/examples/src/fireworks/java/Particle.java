import org.joml.Vector2f;
import org.joml.Vector4f;

import static io.github.bernhardfritz.p8g.Sketch.*;

public class Particle {

    private Vector2f position;
    private Vector2f velocity;
    private Vector2f acceleration;
    private int age;
    private int lifespan;
    private float mass;
    private Vector4f color;

    public Particle(Vector2f position, float mass, Vector2f velocity, int lifespan, Vector4f color) {
        this.position = position;
        this.mass = mass;
        this.velocity = velocity;
        this.lifespan = lifespan;
        this.color = color;
        this.acceleration = new Vector2f();
        this.age = 0;
    }

    public void applyForce(Vector2f force) {
        Vector2f da = new Vector2f();
        force.mul(mass, da);
        acceleration.add(da);
    }

    public void update() {
        Vector2f deltaVelocity = new Vector2f();
        acceleration.mul(deltaTime / 19.f, deltaVelocity);
        velocity.add(deltaVelocity);
        Vector2f deltaPosition = new Vector2f();
        velocity.mul(deltaTime / 19.f, deltaPosition);
        position.add(deltaPosition);
        acceleration.set(0.f , 0.f);
        if (age < lifespan) {
            age = age + 1;
        }
    }

    public void draw() {
        if (lifespan == -1) {
            fill(color.get(0), color.get(1), color.get(2), color.get(3));
        } else {
            float pct = 1.f - age / (float) lifespan;
            fill(color.get(0), color.get(1), color.get(2), pct * 255.f);
        }
        ellipse(position.get(0), position.get(1), mass * 8.f, mass * 8.f);
    }

    public boolean isDead() {
        return age == lifespan;
    }

    public Vector2f getPosition() {
        return position;
    }

    public Vector2f getVelocity() {
        return velocity;
    }
}
