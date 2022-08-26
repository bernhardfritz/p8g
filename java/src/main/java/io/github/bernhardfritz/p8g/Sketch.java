package io.github.bernhardfritz.p8g;

import java.io.InputStream;
import java.io.IOException;
import java.io.File;
import java.io.FileOutputStream;

public abstract class Sketch {

    static {
        try {
            String osName = System.getProperty("os.name");
            if (osName.startsWith("Windows")) {
                load("glfw3.dll");
                load("p8g.dll");
                load("io_github_bernhardfritz_p8g_Sketch.dll");
            } else if (osName.startsWith("Linux") || osName.startsWith("FreeBSD") || osName.startsWith("SunOS") || osName.startsWith("Unix")) {
                load("libglfw.so.3");
                load("libp8g.so");
                load("libio_github_bernhardfritz_p8g_Sketch.so");
            } else if (osName.startsWith("Mac OS X") || osName.startsWith("Darwin")) {
                load("libglfw.3.dylib");
                load("libp8g.dylib");
                load("libio_github_bernhardfritz_p8g_Sketch.dylib");
            } else {
                throw new UnsupportedOperationException("Unknown platform: " + osName);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static final int CORNER = 0;
    public static final int CORNERS = 1;
    public static final int RADIUS = 2;
    public static final int CENTER = 3;

    public static final int RGB = 0;
    public static final int HSB = 1;
    public static final int HSL = 2;

    public static int width = 100;
    public static int height = 100;
    public static int keyCode;
    public static boolean keyIsPressed;
    public static float mouseX;
    public static float mouseY;
    public static int mouseButton;
    public static boolean mouseIsPressed;
    public static float deltaTime;

    public static native void applyMatrix(float a, float b, float c, float d, float e, float f);
    public static native void background(float[] color);
    public static void background(float gray) {
        background(new float[] { gray, gray, gray, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void background(float gray, float alpha) {
        background(new float[] { gray, gray, gray, alpha });
    }
    public static void background(float v1, float v2, float v3) {
        background(new float[] { v1, v2, v3, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void background(float v1, float v2, float v3, float alpha) {
        background(new float[] { v1, v2, v3, alpha });
    }
    public static native void colorMode(int mode);
    public static native void ellipse(float x, float y, float w, float h);
    public static native void ellipseMode(int mode);
    public static native void fill(float[] color);
    public static void fill(float gray) {
        fill(new float[] { gray, gray, gray, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void fill(float gray, float alpha) {
        fill(new float[] { gray, gray, gray, alpha });
    }
    public static void fill(float v1, float v2, float v3) {
        fill(new float[] { v1, v2, v3, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void fill(float v1, float v2, float v3, float alpha) {
        fill(new float[] { v1, v2, v3, alpha });
    }
    public static native void image(Image img, float dx, float dy, float dw, float dh, float sx, float sy, float sw, float sh);
    public static void image(Image img, float x, float y) {
        if (img == null) {
            return;
        }
        image(img, x, y, img.width, img.height, 0, 0, img.width, img.height);
    }
    public static void image(Image img, float x, float y, float w) {
        if (img == null) {
            return;
        }
        image(img, x, y, w, img.height, 0, 0, img.width, img.height);
    }
    public static void image(Image img, float x, float y, float w, float h) {
        if (img == null) {
            return;
        }
        image(img, x, y, w, h, 0, 0, img.width, img.height);
    }
    public static void image(Image img, float dx, float dy, float dw, float dh, float sx) {
        if (img == null) {
            return;
        }
        image(img, dx, dy, dw, dh, sx, 0, img.width, img.height);
    }
    public static void image(Image img, float dx, float dy, float dw, float dh, float sx, float sy) {
        if (img == null) {
            return;
        }
        image(img, dx, dy, dw, dh, sx, sy, img.width, img.height);
    }
    public static void image(Image img, float dx, float dy, float dw, float dh, float sx, float sy, float sw) {
        if (img == null) {
            return;
        }
        image(img, dx, dy, dw, dh, sx, sy, sw, img.height);
    }
    public static native void imageMode(int mode);
    public static native void line(float x1, float y1, float x2, float y2);
    public native Image loadImage(String filename);
    public native Font loadFont(String filename);
    public static native int millis();
    public static native void noFill();
    public static native void noSmooth();
    public static native void noStroke();
    public static native void noTint();
    private static native int peekColorMode();
    public static native void point(float x, float y);
    public static native void pop();
    public static native void push();
    public static native float random(float min, float max);
    public static float random(float max) {
        return random(0.f, max);
    }
    public static float random() {
        return random(0.f, 1.f);
    }
    public static native void randomSeed(int seed);
    public static native void rect(float x, float y, float w, float h);
    public static native void rectMode(int mode);
    public static native void resetMatrix();
    public static native void rotate(float angle);
    public native void run(int width, int height, String title, boolean fullScreen);
    public void run(int width, int height, String title) {
        run(width, height, title, false);
    }
    public void run(int width, int height) {
        run(width, height, "Sketch");
    }
    public void run(int width) {
        run(width, height);
    }
    public void run() {
        run(width);
    }
    public static native void scale(float x, float y);
    public static void scale(float s) {
        scale(s, s);
    }
    public static native void smooth();
    public static native void stroke(float[] color);
    public static void stroke(float gray) {
        stroke(new float[] { gray, gray, gray, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void stroke(float gray, float alpha) {
        stroke(new float[] { gray, gray, gray, alpha });
    }
    public static void stroke(float v1, float v2, float v3) {
        stroke(new float[] { v1, v2, v3, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void stroke(float v1, float v2, float v3, float alpha) {
        stroke(new float[] { v1, v2, v3, alpha });
    }
    public static native void strokeWeight(float weight);
    public static native void text(String str, float x, float y);
    public static native void textFont(Font font);
    public static native void textSize(float size);
    public static native void tint(float[] color);
    public static void tint(float gray) {
        tint(new float[] { gray, gray, gray, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void tint(float gray, float alpha) {
        tint(new float[] { gray, gray, gray, alpha });
    }
    public static void tint(float v1, float v2, float v3) {
        tint(new float[] { v1, v2, v3, peekColorMode() == RGB ? 255.f : 1.f });
    }
    public static void tint(float v1, float v2, float v3, float alpha) {
        tint(new float[] { v1, v2, v3, alpha });
    }
    public static native void translate(float x, float y);
    public static native void triangle(float x1, float y1, float x2, float y2, float x3, float y3);

    protected abstract void draw();
    protected void keyPressed() {}
    protected void keyReleased() {}
    protected void mouseMoved() {}
    protected void mousePressed() {}
    protected void mouseReleased() {}
    protected void mouseWheel(float delta) {}

    private void draw(float deltaTime) {
        Sketch.deltaTime = deltaTime * 1000.f;
        draw();
    }

    private void keyPressed(int keyCode) {
        Sketch.keyCode = keyCode;
        keyIsPressed = true;
        keyPressed();
    }

    private void keyReleased(int keyCode) {
        Sketch.keyCode = keyCode;
        keyIsPressed = false;
        keyReleased();
    }

    private void mouseMoved(float mouseX, float mouseY) {
        Sketch.mouseX = mouseX;
        Sketch.mouseY = mouseY;
        mouseMoved();
    }

    private void mousePressed(int mouseButton) {
        Sketch.mouseButton = mouseButton;
        mouseIsPressed = true;
        mousePressed();
    }

    private void mouseReleased(int mouseButton) {
        Sketch.mouseButton = mouseButton;
        mouseIsPressed = false;
        mouseReleased();
    }

    private static File extract(String name) throws IOException {
        InputStream in = Sketch.class.getResourceAsStream("/" + name);
        byte[] buffer = new byte[1024];
        int read = -1;
        File temp = new File(new File(System.getProperty("java.io.tmpdir")), name);
        FileOutputStream fos = new FileOutputStream(temp);

        while((read = in.read(buffer)) != -1) {
            fos.write(buffer, 0, read);
        }
        fos.close();
        in.close();

        return temp;
    }

    private static void load(String name) throws IOException {
        File temp = extract(name);
        System.load(temp.getAbsolutePath());
    }

}
