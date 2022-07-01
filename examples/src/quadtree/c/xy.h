#ifndef XY_H
#define XY_H

#include "linmath.h"

typedef struct {
    float x;
    float y;
} XY;

void XY_draw(XY* xy, vec4 color);

#endif /* XY_H */