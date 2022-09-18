#include "aabb.h"

#include "stb_ds.h"

#define USING_NAMESPACE_P8G
#include "p8g.h"

#include "quadtree.h"

#define HALF_DIMENSION 160

vec4 GREEN = { 0.f, 255.f, 0.f, 255.f };
vec4 WHITE = { 255.f, 255.f, 255.f, 255.f };

QuadTree quadTree = {
    .boundary = {
        .center = {
            .x = HALF_DIMENSION,
            .y = HALF_DIMENSION,
        },
        .halfDimension = HALF_DIMENSION,
    },
    .points = NULL,
    .nw = NULL,
    .ne = NULL,
    .sw = NULL,
    .se = NULL,
};
AABB aabb = {
    .center = {
        .x = 0.f,
        .y = 0.f,
    },
    .halfDimension = 40.f,
};

void draw() {
    background(0);
    QuadTree_draw(&quadTree, WHITE, WHITE);
    AABB_draw(&aabb, GREEN);
    XY* pointsInRange = NULL;
    QuadTree_queryRange(&quadTree, aabb, &pointsInRange);
    int length = arrlen(pointsInRange);
    for (int i = 0; i < length; i++) {
        XY_draw(&pointsInRange[i], GREEN);
    }
    arrfree(pointsInRange);
}

void mouseMoved() {
    aabb.center.x = mouseX;
    aabb.center.y = mouseY;
}

int main() {
    vec2 center = { HALF_DIMENSION, HALF_DIMENSION };
    for (int i = 0; i < 1000; i++) {
        float r = random(HALF_DIMENSION);
        float phi = random(2.f * M_PI);
        vec2 v = { cosf(phi), sinf(phi) };
        vec2_scale(v, v, r);
        vec2_add(v, center, v);
        QuadTree_insert(&quadTree, (XY) { .x = v[0], .y = v[1] });
    }
    run(2 * HALF_DIMENSION, 2 * HALF_DIMENSION, "Quadtree");
#ifndef __EMSCRIPTEN__
    QuadTree_destroy(&quadTree);
#endif
}