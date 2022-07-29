#include "firework.h"

#include "stb_ds.h"
#define USING_NAMESPACE_P8G
#include "p8g.h"

void firework_apply_force(firework_t* firework, vec2 force) {
    if (firework->exploded == 0) {
        particle_t* rocket = &firework->rocket;
        particle_apply_force(rocket, force);
    } else {
        for (int i = 0; i < arrlen(firework->particles); i++) {
            particle_t* particle = &firework->particles[i];
            particle_apply_force(particle, force);
        }
    }
}

void firework_update(firework_t* firework) {
    if (firework->exploded == 0) {
        particle_t* rocket = &firework->rocket;
        particle_update(rocket);
        if (rocket->velocity[1] >= 0.f) {
            firework_explode(firework);
        }
    } else {
        for (int i = 0; i < arrlen(firework->particles); i++) {
            particle_t* particle = &firework->particles[i];
            vec2_scale(particle->velocity, particle->velocity, 0.95f);
            particle_update(particle);
        }
        for (int i = arrlen(firework->particles) - 1; i >= 0; i--) {
            particle_t* particle = &firework->particles[i];
            if (particle_is_dead(particle)) {
                arrdel(firework->particles, i);
            }
        }
    }
}

void firework_explode(firework_t* firework) {
    vec4 color = { random(255.f), random(255.f), random(255.f), 255.f };
    for (int i = 0; i < 200; i++) {
        float angle = random(2.f * M_PI);
        float magnitude = random(2.f, 10.f);
        particle_t particle = {
            .position = { firework->rocket.position[0], firework->rocket.position[1] },
            .mass = random(0.7f, 1.f),
            .velocity = { magnitude * cosf(angle), magnitude * sinf(angle) },
            .lifespan = random(90.f, 110.f),
            .color = { color[0], color[1], color[2], color[3] },
        };
        arrpush(firework->particles, particle);
    }
    firework->exploded = 1;
}

void firework_draw(firework_t* firework) {
    noStroke();
    if (firework->exploded == 0) {
        particle_t* rocket = &firework->rocket;
        particle_draw(rocket);
    } else {
        for (int i = 0; i < arrlen(firework->particles); i++) {
            particle_t* particle = &firework->particles[i];
            particle_draw(particle);
        }
    }
}

int firework_is_done(firework_t* firework) {
    return firework->exploded == 1 && arrlen(firework->particles) == 0
        ? 1
        : 0;
}

void firework_destroy(firework_t* firework) {
    arrfree(firework->particles);
}