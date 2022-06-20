#include "particle.h"

#define USING_NAMESPACE_P8G
#include "p8g.h"

void particle_apply_force(particle_t* particle, vec2 force) {
    vec2 da;
    vec2_scale(da, force, particle->mass);
    vec2_add(particle->acceleration, particle->acceleration, da);
}

void particle_update(particle_t* particle) {
    vec2 deltaVelocity;
    vec2_scale(deltaVelocity, particle->acceleration, deltaTime / 19.f);
    vec2_add(particle->velocity, particle->velocity, deltaVelocity);
    vec2 deltaPosition;
    vec2_scale(deltaPosition, particle->velocity, deltaTime / 19.f);
    vec2_add(particle->position, particle->position, deltaPosition);
    particle->acceleration[0] = 0.f;
    particle->acceleration[1] = 0.f;
    if (particle->age < particle->lifespan) {
        particle->age = particle->age + 1;
    }
}

void particle_draw(particle_t* particle) {
    if (particle->lifespan == -1) {
        fill(particle->color);
    } else {
        float pct = 1.f - particle->age / (float) particle->lifespan;
        fill(particle->color[0], particle->color[1], particle->color[2], pct * particle->color[3]);
    }
    ellipse(particle->position[0], particle->position[1], particle->mass * 8.f, particle->mass * 8.f);
}

int particle_is_dead(particle_t* particle) {
    return particle->age == particle->lifespan;
}