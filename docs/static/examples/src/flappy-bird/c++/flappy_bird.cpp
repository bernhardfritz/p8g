#include "p8g.hpp"

#include <math.h>
#include <vector>

using namespace p8g;

Image background_day = loadImage("background-day.png");
Image base = loadImage("base.png");
std::vector<Image> yellowbird = { loadImage("yellowbird-downflap.png"), loadImage("yellowbird-midflap.png"), loadImage("yellowbird-upflap.png") };

void p8g::draw() {
    image(background_day, 0, 0);
    image(base, -(millis() / 10) % width, height - base.height);
    image(base, -(millis() / 10) % width + base.width, height - base.height);
    imageMode(CENTER);
    image(yellowbird[(millis() / 100) % yellowbird.size()], width / 2, height / 2 + 2 * sinf(millis() / 100.f));
}

int main() {
    run(288, 512, "Flappy Bird");
}