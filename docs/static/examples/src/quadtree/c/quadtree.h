#ifndef QUADTREE_H
#define QUADTREE_H

#include "linmath.h"
#include "aabb.h"
#include "xy.h"

struct QuadTree {
    AABB boundary;
    XY *points;
    struct QuadTree *nw, *ne, *sw, *se;
};
typedef struct QuadTree QuadTree;

QuadTree* QuadTree_new(AABB aabb);
int QuadTree_insert(QuadTree* quadTree, XY point);
void QuadTree_queryRange(QuadTree* quadTree, AABB range, XY** pointsInRange);
void QuadTree_draw(QuadTree* quadTree, vec4 boundaryColor, vec4 pointColor);
void QuadTree_destroy(QuadTree* quadTree);

#endif /* QUADTREE_H */