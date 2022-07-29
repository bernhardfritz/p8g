#define USING_NAMESPACE_P8G
#include "p8g.h"

#include <math.h>

Image background_day;
Image base;
Image yellowbird[3];

void draw() {
    image(background_day, 0, 0);
    image(base, -(millis() / 10) % width, height - base.height);
    image(base, -(millis() / 10) % width + base.width, height - base.height);
    imageMode(CENTER);
    image(yellowbird[(millis() / 100) % (sizeof(yellowbird) / sizeof(yellowbird[0]))], width / 2, height / 2 + 2 * sinf(millis() / 100.f));
}

int main() {
    background_day = loadImage("background-day.png");
    base = loadImage("base.png");
    yellowbird[0] = loadImage("yellowbird-downflap.png");
    yellowbird[1] = loadImage("yellowbird-midflap.png");
    yellowbird[2] = loadImage("yellowbird-upflap.png");
    run(288, 512, "Flappy Bird");
}
