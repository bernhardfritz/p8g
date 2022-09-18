#define USING_NAMESPACE_P8G
#include "p8g.h"

#include <stdio.h>
#include <string.h>

char buf[16] = "Press any key";

void draw() {
    background(0);
    fill(255);
    textSize(32);
    text(buf, width / 2.f - (strlen(buf) * 18.f) / 2.f, height / 2.f + 8.f);
}

void keyPressed() {
    snprintf(buf, 16, "keyCode: %d", keyCode);
}

int main() {
    run(320, 320, "Keyboard events");
}