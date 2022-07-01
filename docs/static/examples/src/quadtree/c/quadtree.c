#include "quadtree.h"

#include <stdlib.h>
#include "stb_ds.h"

#define USING_NAMESPACE_P8G
#include "p8g.h"

#define CAPACITY 4

static void QuadTree_subdivide(QuadTree* quadTree) {
    float halfDimension = quadTree->boundary.halfDimension / 2.f;
    quadTree->nw = QuadTree_new((AABB) {
        .center = { quadTree->boundary.center.x - halfDimension, quadTree->boundary.center.y - halfDimension },
        .halfDimension = halfDimension
    });
    quadTree->ne = QuadTree_new((AABB) {
        .center = { quadTree->boundary.center.x + halfDimension, quadTree->boundary.center.y - halfDimension },
        .halfDimension = halfDimension
    });
    quadTree->sw = QuadTree_new((AABB) {
        .center = { quadTree->boundary.center.x - halfDimension, quadTree->boundary.center.y + halfDimension },
        .halfDimension = halfDimension
    });
    quadTree->se = QuadTree_new((AABB) {
        .center = { quadTree->boundary.center.x + halfDimension, quadTree->boundary.center.y + halfDimension },
        .halfDimension = halfDimension
    });
    int length = arrlen(quadTree->points);
    for (int i = 0; i < length; i++) {
        if (QuadTree_insert(quadTree->nw, quadTree->points[i])
            || QuadTree_insert(quadTree->ne, quadTree->points[i])
            || QuadTree_insert(quadTree->sw, quadTree->points[i])
            || QuadTree_insert(quadTree->se, quadTree->points[i])) {
            continue;
        }
    }
}

QuadTree* QuadTree_new(AABB aabb) {
    QuadTree* quadTree = (QuadTree*) malloc(sizeof(QuadTree));
    quadTree->boundary = aabb;
    quadTree->points = NULL;
    quadTree->nw = NULL;
    quadTree->ne = NULL;
    quadTree->sw = NULL;
    quadTree->se = NULL;
    return quadTree;
}

int QuadTree_insert(QuadTree* quadTree, XY point) {
    if (!AABB_contains_point(&quadTree->boundary, point)) {
        return 0;
    }
    if (arrlen(quadTree->points) < CAPACITY) {
        arrpush(quadTree->points, point);
        return 1;
    }
    if (quadTree->nw == NULL) {
        QuadTree_subdivide(quadTree);
    }
    return QuadTree_insert(quadTree->nw, point)
        || QuadTree_insert(quadTree->ne, point)
        || QuadTree_insert(quadTree->sw, point)
        || QuadTree_insert(quadTree->se, point);
}

void QuadTree_queryRange(QuadTree* quadTree, AABB range, XY** pointsInRange) {
    if (!AABB_intersects_AABB(&quadTree->boundary, range)) {
        return;
    }
    int length = arrlen(quadTree->points);
    for (int i = 0; i < length; i++) {
        if (AABB_contains_point(&range, quadTree->points[i])) {
            arrpush(*pointsInRange, quadTree->points[i]);
        }
    }
    if (quadTree->nw == NULL) {
        return;
    }
    QuadTree_queryRange(quadTree->nw, range, pointsInRange);
    QuadTree_queryRange(quadTree->ne, range, pointsInRange);
    QuadTree_queryRange(quadTree->sw, range, pointsInRange);
    QuadTree_queryRange(quadTree->se, range, pointsInRange);
}

void QuadTree_draw(QuadTree* quadTree, vec4 boundaryColor, vec4 pointColor) {
    AABB_draw(&quadTree->boundary, boundaryColor);
    int length = arrlen(quadTree->points);
    for (int i = 0; i < length; i++) {
        XY_draw(&quadTree->points[i], pointColor);
    }
    if (quadTree->nw == NULL) {
        return;
    }
    QuadTree_draw(quadTree->nw, boundaryColor, pointColor);
    QuadTree_draw(quadTree->ne, boundaryColor, pointColor);
    QuadTree_draw(quadTree->sw, boundaryColor, pointColor);
    QuadTree_draw(quadTree->se, boundaryColor, pointColor);
}

void QuadTree_destroy(QuadTree* quadTree) {
    arrfree(quadTree->points);
    if (quadTree->nw == NULL) {
        return;
    }
    QuadTree_destroy(quadTree->nw);
    QuadTree_destroy(quadTree->ne);
    QuadTree_destroy(quadTree->sw);
    QuadTree_destroy(quadTree->se);
}