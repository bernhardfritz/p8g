"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[2711],{4678:function(e,n,a){a.d(n,{Z:function(){return i}});var r=a(7294),d=a(6649),t=a(4996);function i(e){return r.createElement(d.Z,{src:(0,t.Z)(e.src),style:{width:"1px",minWidth:"100%"}})}},4649:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return A},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return b}});var r=a(3117),d=a(102),t=(a(7294),a(3905)),i=a(9877),u=a(8215),o=a(8066),s=a(4678),T=["components"],l={},c="Quadtree",f={unversionedId:"examples/quadtree",id:"examples/quadtree",title:"Quadtree",description:"",source:"@site/docs/examples/quadtree.md",sourceDirName:"examples",slug:"/examples/quadtree",permalink:"/p8g/docs/examples/quadtree",editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/examples/quadtree.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mouse events",permalink:"/p8g/docs/examples/mouse-events"}},p={},b=[],_={toc:b};function A(e){var n=e.components,a=(0,d.Z)(e,T);return(0,t.kt)("wrapper",(0,r.Z)({},_,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"quadtree"},"Quadtree"),(0,t.kt)(s.Z,{src:"/examples/quadtree.html",mdxType:"Emscripten"}),(0,t.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,t.kt)(o.Z,{language:"c",title:"aabb.c",mdxType:"CodeBlock"},'#include "aabb.h"\n#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\nint AABB_contains_point(AABB* aabb, XY point) {\n    return fabs(aabb->center.x - point.x) <= aabb->halfDimension\n        && fabs(aabb->center.y - point.y) <= aabb->halfDimension;\n}\n\nint AABB_intersects_AABB(AABB* aabb, AABB other) {\n    float sum = aabb->halfDimension + other.halfDimension;\n    return fabs(aabb->center.x - other.center.x) <= sum\n        || fabs(aabb->center.y - other.center.y) <= sum;\n}\n\nvoid AABB_draw(AABB* aabb, vec4 color) {\n    push();\n    stroke(color);\n    strokeWeight(1.f);\n    noFill();\n    rectMode(RADIUS);\n    rect(aabb->center.x, aabb->center.y, aabb->halfDimension, aabb->halfDimension);\n    pop();\n}'),(0,t.kt)(o.Z,{language:"c",title:"aabb.h",mdxType:"CodeBlock"},'#ifndef AABB_H\n#define AABB_H\n\n#include "linmath.h"\n#include "xy.h"\n\ntypedef struct {\n    XY center;\n    float halfDimension;\n} AABB;\n\nint AABB_contains_point(AABB* aabb, XY point);\nint AABB_intersects_AABB(AABB* aabb, AABB other);\nvoid AABB_draw(AABB* aabb, vec4 color);\n\n#endif /* AABB_H */'),(0,t.kt)(o.Z,{language:"c",title:"quadtree.c",mdxType:"CodeBlock"},'#include "quadtree.h"\n\n#include <stdlib.h>\n#include "stb_ds.h"\n\n#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\n#define CAPACITY 4\n\nstatic void QuadTree_subdivide(QuadTree* quadTree) {\n    float halfDimension = quadTree->boundary.halfDimension / 2.f;\n    quadTree->nw = QuadTree_new((AABB) {\n        .center = { quadTree->boundary.center.x - halfDimension, quadTree->boundary.center.y - halfDimension },\n        .halfDimension = halfDimension\n    });\n    quadTree->ne = QuadTree_new((AABB) {\n        .center = { quadTree->boundary.center.x + halfDimension, quadTree->boundary.center.y - halfDimension },\n        .halfDimension = halfDimension\n    });\n    quadTree->sw = QuadTree_new((AABB) {\n        .center = { quadTree->boundary.center.x - halfDimension, quadTree->boundary.center.y + halfDimension },\n        .halfDimension = halfDimension\n    });\n    quadTree->se = QuadTree_new((AABB) {\n        .center = { quadTree->boundary.center.x + halfDimension, quadTree->boundary.center.y + halfDimension },\n        .halfDimension = halfDimension\n    });\n    int length = arrlen(quadTree->points);\n    for (int i = 0; i < length; i++) {\n        if (QuadTree_insert(quadTree->nw, quadTree->points[i])\n            || QuadTree_insert(quadTree->ne, quadTree->points[i])\n            || QuadTree_insert(quadTree->sw, quadTree->points[i])\n            || QuadTree_insert(quadTree->se, quadTree->points[i])) {\n            continue;\n        }\n    }\n}\n\nQuadTree* QuadTree_new(AABB aabb) {\n    QuadTree* quadTree = (QuadTree*) malloc(sizeof(QuadTree));\n    quadTree->boundary = aabb;\n    quadTree->points = NULL;\n    quadTree->nw = NULL;\n    quadTree->ne = NULL;\n    quadTree->sw = NULL;\n    quadTree->se = NULL;\n    return quadTree;\n}\n\nint QuadTree_insert(QuadTree* quadTree, XY point) {\n    if (!AABB_contains_point(&quadTree->boundary, point)) {\n        return 0;\n    }\n    if (arrlen(quadTree->points) < CAPACITY) {\n        arrpush(quadTree->points, point);\n        return 1;\n    }\n    if (quadTree->nw == NULL) {\n        QuadTree_subdivide(quadTree);\n    }\n    return QuadTree_insert(quadTree->nw, point)\n        || QuadTree_insert(quadTree->ne, point)\n        || QuadTree_insert(quadTree->sw, point)\n        || QuadTree_insert(quadTree->se, point);\n}\n\nvoid QuadTree_queryRange(QuadTree* quadTree, AABB range, XY** pointsInRange) {\n    if (!AABB_intersects_AABB(&quadTree->boundary, range)) {\n        return;\n    }\n    int length = arrlen(quadTree->points);\n    for (int i = 0; i < length; i++) {\n        if (AABB_contains_point(&range, quadTree->points[i])) {\n            arrpush(*pointsInRange, quadTree->points[i]);\n        }\n    }\n    if (quadTree->nw == NULL) {\n        return;\n    }\n    QuadTree_queryRange(quadTree->nw, range, pointsInRange);\n    QuadTree_queryRange(quadTree->ne, range, pointsInRange);\n    QuadTree_queryRange(quadTree->sw, range, pointsInRange);\n    QuadTree_queryRange(quadTree->se, range, pointsInRange);\n}\n\nvoid QuadTree_draw(QuadTree* quadTree, vec4 boundaryColor, vec4 pointColor) {\n    AABB_draw(&quadTree->boundary, boundaryColor);\n    int length = arrlen(quadTree->points);\n    for (int i = 0; i < length; i++) {\n        XY_draw(&quadTree->points[i], pointColor);\n    }\n    if (quadTree->nw == NULL) {\n        return;\n    }\n    QuadTree_draw(quadTree->nw, boundaryColor, pointColor);\n    QuadTree_draw(quadTree->ne, boundaryColor, pointColor);\n    QuadTree_draw(quadTree->sw, boundaryColor, pointColor);\n    QuadTree_draw(quadTree->se, boundaryColor, pointColor);\n}\n\nvoid QuadTree_destroy(QuadTree* quadTree) {\n    arrfree(quadTree->points);\n    if (quadTree->nw == NULL) {\n        return;\n    }\n    QuadTree_destroy(quadTree->nw);\n    QuadTree_destroy(quadTree->ne);\n    QuadTree_destroy(quadTree->sw);\n    QuadTree_destroy(quadTree->se);\n}'),(0,t.kt)(o.Z,{language:"c",title:"quadtree.h",mdxType:"CodeBlock"},'#ifndef QUADTREE_H\n#define QUADTREE_H\n\n#include "linmath.h"\n#include "aabb.h"\n#include "xy.h"\n\nstruct QuadTree {\n    AABB boundary;\n    XY *points;\n    struct QuadTree *nw, *ne, *sw, *se;\n};\ntypedef struct QuadTree QuadTree;\n\nQuadTree* QuadTree_new(AABB aabb);\nint QuadTree_insert(QuadTree* quadTree, XY point);\nvoid QuadTree_queryRange(QuadTree* quadTree, AABB range, XY** pointsInRange);\nvoid QuadTree_draw(QuadTree* quadTree, vec4 boundaryColor, vec4 pointColor);\nvoid QuadTree_destroy(QuadTree* quadTree);\n\n#endif /* QUADTREE_H */'),(0,t.kt)(o.Z,{language:"c",title:"random.c",mdxType:"CodeBlock"},"#include <stdlib.h>\n\nfloat randf(float a, float b) {\n    return a + (rand() / (float) RAND_MAX) * (b - a);\n}"),(0,t.kt)(o.Z,{language:"c",title:"random.h",mdxType:"CodeBlock"},"#ifndef RANDOM_H\n#define RANDOM_H\n\nfloat randf(float a, float b);\n\n#endif /* RANDOM_H */"),(0,t.kt)(o.Z,{language:"c",title:"sketch.c",mdxType:"CodeBlock"},'#include "aabb.h"\n\n#include "stb_ds.h"\n\n#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\n#include "quadtree.h"\n#include "random.h"\n\n#define HALF_DIMENSION 256\n\nvec4 GREEN = { 0.f, 255.f, 0.f, 255.f };\nvec4 WHITE = { 255.f, 255.f, 255.f, 255.f };\n\nQuadTree quadTree = {\n    .boundary = {\n        .center = {\n            .x = HALF_DIMENSION,\n            .y = HALF_DIMENSION,\n        },\n        .halfDimension = HALF_DIMENSION,\n    },\n    .points = NULL,\n    .nw = NULL,\n    .ne = NULL,\n    .sw = NULL,\n    .se = NULL,\n};\nAABB aabb = {\n    .center = {\n        .x = 0.f,\n        .y = 0.f,\n    },\n    .halfDimension = 50.f,\n};\n\nvoid draw() {\n    background(0);\n    QuadTree_draw(&quadTree, WHITE, WHITE);\n    AABB_draw(&aabb, GREEN);\n    XY* pointsInRange = NULL;\n    QuadTree_queryRange(&quadTree, aabb, &pointsInRange);\n    int length = arrlen(pointsInRange);\n    for (int i = 0; i < length; i++) {\n        XY_draw(&pointsInRange[i], GREEN);\n    }\n    arrfree(pointsInRange);\n}\n\nvoid mouseMoved() {\n    aabb.center.x = mouseX;\n    aabb.center.y = mouseY;\n}\n\nint main() {\n    vec2 center = { HALF_DIMENSION, HALF_DIMENSION };\n    for (int i = 0; i < 1000; i++) {\n        float r = randf(0.f, HALF_DIMENSION);\n        float phi = randf(0.f, 2.f * M_PI);\n        vec2 v = { cosf(phi), sinf(phi) };\n        vec2_scale(v, v, r);\n        vec2_add(v, center, v);\n        QuadTree_insert(&quadTree, (XY) { .x = v[0], .y = v[1] });\n    }\n    run(2 * HALF_DIMENSION, 2 * HALF_DIMENSION, "Quadtree");\n#ifndef __EMSCRIPTEN__\n    QuadTree_destroy(&quadTree);\n#endif\n}'),(0,t.kt)(o.Z,{language:"c",title:"xy.c",mdxType:"CodeBlock"},'#include "xy.h"\n\n#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\nvoid XY_draw(XY* xy, vec4 color) {\n    push();\n    stroke(color);\n    strokeWeight(3.f);\n    point(xy->x, xy->y);\n    pop();\n}'),(0,t.kt)(o.Z,{language:"c",title:"xy.h",mdxType:"CodeBlock"},'#ifndef XY_H\n#define XY_H\n\n#include "linmath.h"\n\ntypedef struct {\n    float x;\n    float y;\n} XY;\n\nvoid XY_draw(XY* xy, vec4 color);\n\n#endif /* XY_H */'))))}A.isMDXComponent=!0}}]);