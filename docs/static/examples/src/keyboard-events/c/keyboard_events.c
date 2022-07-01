#define USING_NAMESPACE_P8G
#include "p8g.h"

#include <stdio.h>
#include <string.h>

#include "p8g_typography.h"

char buf[16] = "Press any key";

void draw() {
    background(0);
    text(buf, width / 2.f - (strlen(buf) * 5.f) / 2.f, height / 2.f - 4.5f);
}

void keyPressed() {
    snprintf(buf, 16, "keyCode: %d", keyCode);
}

int main() {
    run(512, 512, "Keyboard events");
}