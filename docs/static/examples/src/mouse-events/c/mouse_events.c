#define USING_NAMESPACE_P8G
#include "p8g.h"

int once;

void draw() {
    if (!once) {
        background(220);
        once = 1;
    }
}

void keyPressed() {}
void keyReleased() {}

void mouseMoved() {
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 50, 50);
}

void mousePressed() {
    background(220);
}

void mouseReleased() {}
void mouseWheel(float delta) {}

int main() {
    run(320, 320, "Mouse events");
}