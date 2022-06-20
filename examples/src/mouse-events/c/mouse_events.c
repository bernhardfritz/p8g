#define USING_NAMESPACE_P8G
#include "p8g.h"

int once;

void draw() {
    if (!once) {
        background(100);
        once = 1;
    }
}

void mouseMoved() {
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 50, 50);
}

void mousePressed() {
    background(100);
}

int main() {
    run(400, 400, "Mouse events");
}