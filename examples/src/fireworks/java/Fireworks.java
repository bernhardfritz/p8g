import io.github.bernhardfritz.p8g.Sketch;
import org.joml.Vector2f;
import org.joml.Vector4f;

import java.util.HashSet;
import java.util.Set;

public class Fireworks extends Sketch {

    Set<Firework> fireworks = new HashSet<>();
    Vector2f gravity = new Vector2f(0.f, 0.2f);

    @Override
    public void draw() {
        background(new float[] { 0.f, 0.f, 0.f, 25.5f});
        if (Random.randf(0.f, 1.f) < 0.1f) {
            Firework firework = new Firework(
              new Particle(
                      new Vector2f(Random.randf(0.f, width), height),
                      1.f,
                      new Vector2f(0.f, Random.randf(-10.f, -12.f)),
                      -1,
                      new Vector4f(255.f, 0.f, 0.f, 255.f)
              )
            );
            fireworks.add(firework);
        }
        for (Firework firework : fireworks) {
            firework.applyForce(gravity);
            firework.update();
            firework.draw();
        }
        fireworks.removeIf(Firework::isDone);
    }

    public static void main(String[] args) {
        Sketch sketch = new Fireworks();
        sketch.run(512, 512, "Fireworks");
    }
}
