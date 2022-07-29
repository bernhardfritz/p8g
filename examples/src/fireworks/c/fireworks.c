#define STB_DS_IMPLEMENTATION
#include "stb_ds.h"
#define USING_NAMESPACE_P8G
#include "p8g.h"

#include "firework.h"

firework_t* fireworks = NULL;
vec2 gravity = { 0.f, 0.2f };

void draw() {
    background(0.f, 0.f, 0.f, 25.5f);
    if (random() < 0.1f) {
        firework_t firework = {
            .rocket = {
                .position = { random(width), height },
                .velocity = { 0.f, random(-10.f, -12.f) },
                .color = { 255.f, 0.f, 0.f, 255.f },
                .mass = 1.f,
                .lifespan = -1,
            },
            .exploded = 0,
            .particles = NULL,
        };
        arrpush(fireworks, firework);
    }
    for (int i = 0; i < arrlen(fireworks); i++) {
        firework_t* firework = &fireworks[i];
        firework_apply_force(firework, gravity);
        firework_update(firework);
        firework_draw(firework);
    }
    for (int i = arrlen(fireworks) - 1; i >= 0; i--) {
        firework_t* firework = &fireworks[i];
        if (firework_is_done(firework)) {
            firework_destroy(firework);
            arrdel(fireworks, i);
        }
    }
}

int main(void) {
    run(512, 512, "Fireworks");
    for (int i = 0; i < arrlen(fireworks); i++) {
        firework_t* firework = &fireworks[i];
        firework_destroy(firework);
    }
    arrfree(fireworks);
    return 0;
}