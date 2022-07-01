#ifndef AABB_H
#define AABB_H

#include "linmath.h"
#include "xy.h"

typedef struct {
    XY center;
    float halfDimension;
} AABB;

int AABB_contains_point(AABB* aabb, XY point);
int AABB_intersects_AABB(AABB* aabb, AABB other);
void AABB_draw(AABB* aabb, vec4 color);

#endif /* AABB_H */