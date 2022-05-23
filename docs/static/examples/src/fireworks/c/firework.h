#ifndef FIREWORK_H
#define FIREWORK_H

#include "linmath.h"

#include "particle.h"

typedef struct {
    particle_t rocket;
    int exploded;
    particle_t* particles;
} firework_t;

void firework_apply_force(firework_t* firework, vec2 force);
void firework_update(firework_t* firework);
void firework_explode(firework_t* firework);
void firework_draw(firework_t* firework);
int firework_is_done(firework_t* firework);
void firework_destroy(firework_t* firework);

#endif /* FIREWORK_H */