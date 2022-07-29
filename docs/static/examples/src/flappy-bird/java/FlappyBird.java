import io.github.bernhardfritz.p8g.Image;
import io.github.bernhardfritz.p8g.Sketch;

import java.util.List;

public class FlappyBird extends Sketch {
    Image backgroundDay = loadImage("background-day.png");
    Image base = loadImage("base.png");
    List<Image> yellowbird = List.of(loadImage("yellowbird-downflap.png"), loadImage("yellowbird-midflap.png"), loadImage("yellowbird-upflap.png"));

    @Override
    protected void draw() {
        image(backgroundDay, 0, 0);
        image(base, -(millis() / 10) % width, height - base.height);
        image(base, -(millis() / 10) % width + base.width, height - base.height);
        imageMode(CENTER);
        image(yellowbird.get((millis() / 100) % yellowbird.size()), width / 2, height / 2 + 2 * (float) Math.sin(millis() / 100.f));
    }

    public static void main(String[] args) {
        Sketch sketch = new FlappyBird();
        sketch.run(288, 512, "Flappy Bird");
    }
}
