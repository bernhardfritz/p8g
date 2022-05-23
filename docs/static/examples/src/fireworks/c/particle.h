#ifndef PARTICLE_H
#define PARTICLE_H

#include "linmath.h"

typedef struct {
    vec2 position;
    vec2 velocity;
    vec2 acceleration;
    int age;
    int lifespan;
    float mass;
    vec4 color;
} particle_t;

void particle_apply_force(particle_t* particle, vec2 force);
void particle_update(particle_t* particle);
void particle_draw(particle_t* particle);
int particle_is_dead(particle_t* particle);

#endif /* PARTICLE_H */