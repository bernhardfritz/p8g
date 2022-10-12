#include "p8g.hpp"
#include "SimplexNoise.h"
#include <cmath>

using namespace p8g;

float r = 0.f;

void p8g::draw() {
  background(255);
  for (int y = 0; y < height; y++) {
    stroke(255 * SimplexNoise::noise(y));
    for (int x = 0; x < width; x++) {
      point(99 * SimplexNoise::noise((x - y) / 99.f + r) * sinf((x + y) / 99.f) + y, x);
    }
  }
  r -= M_PI / 99.f;
}

void p8g::keyPressed() {}
void p8g::keyReleased() {}
void p8g::mouseMoved() {}
void p8g::mousePressed() {}
void p8g::mouseReleased() {}
void p8g::mouseWheel(float delta) {}

int main() {
  run(320, 320, "Noise");
}