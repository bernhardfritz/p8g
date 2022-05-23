#include <stdlib.h>

float randf(float a, float b) {
    return a + (rand() / (float) RAND_MAX) * (b - a);
}