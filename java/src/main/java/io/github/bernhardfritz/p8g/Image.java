package io.github.bernhardfritz.p8g;

public final class Image {

    private final int index;
    public final int width;
    public final int height;

    private Image(int index, int width, int height) {
        this.index = index;
        this.width = width;
        this.height = height;
    }

}
