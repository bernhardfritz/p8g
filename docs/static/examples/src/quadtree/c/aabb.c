#include "aabb.h"
#define USING_NAMESPACE_P8G
#include "p8g.h"

int AABB_contains_point(AABB* aabb, XY point) {
    return fabs(aabb->center.x - point.x) <= aabb->halfDimension
        && fabs(aabb->center.y - point.y) <= aabb->halfDimension;
}

int AABB_intersects_AABB(AABB* aabb, AABB other) {
    float sum = aabb->halfDimension + other.halfDimension;
    return fabs(aabb->center.x - other.center.x) <= sum
        || fabs(aabb->center.y - other.center.y) <= sum;
}

void AABB_draw(AABB* aabb, vec4 color) {
    push();
    stroke(color);
    strokeWeight(1.f);
    noFill();
    rectMode(RADIUS);
    rect(aabb->center.x, aabb->center.y, aabb->halfDimension, aabb->halfDimension);
    pop();
}