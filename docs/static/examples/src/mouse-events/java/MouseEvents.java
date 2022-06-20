import io.github.bernhardfritz.p8g.Sketch;

public class MouseEvents extends Sketch {

    private boolean once;

    @Override
    protected void draw() {
        if (!once) {
            background(100);
            once = true;
        }
    }

    @Override
    protected void mouseMoved() {
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, 50, 50);
    }

    @Override
    protected void mousePressed() {
        background(100);
    }

    public static void main(String[] args) {
        Sketch sketch = new MouseEvents();
        sketch.run(400, 400, "Mouse events");
    }
}
