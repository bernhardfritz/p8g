#include "xy.h"

#define USING_NAMESPACE_P8G
#include "p8g.h"

void XY_draw(XY* xy, vec4 color) {
    push();
    stroke(color);
    strokeWeight(3.f);
    point(xy->x, xy->y);
    pop();
}