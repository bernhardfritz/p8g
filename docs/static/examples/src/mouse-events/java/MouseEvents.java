import io.github.bernhardfritz.p8g.Sketch;

public class MouseEvents extends Sketch {

    private boolean once;

    @Override
    protected void draw() {
        if (!once) {
            background(220);
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
        background(220);
    }

    public static void main(String[] args) {
        Sketch sketch = new MouseEvents();
        sketch.run(320, 320, "Mouse events");
    }
}
