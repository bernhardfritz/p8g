#include <emscripten.h>

#include <p8g.h>

p8g_color_mode_t p8g_peek_color_mode();

void EMSCRIPTEN_KEEPALIVE background1(float gray) {
    p8g_background((float[]) { gray, gray, gray, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE background2(float gray, float alpha) {
    p8g_background((float[]) { gray, gray, gray, alpha });
}

void EMSCRIPTEN_KEEPALIVE background3(float v1, float v2, float v3) {
    p8g_background((float[]) { v1, v2, v3, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE background4(float v1, float v2, float v3, float alpha) {
    p8g_background((float[]) { v1, v2, v3, alpha });
}

void EMSCRIPTEN_KEEPALIVE fill1(float gray) {
    p8g_fill((float[]) { gray, gray, gray, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE fill2(float gray, float alpha) {
    p8g_fill((float[]) { gray, gray, gray, alpha });
}

void EMSCRIPTEN_KEEPALIVE fill3(float v1, float v2, float v3) {
    p8g_fill((float[]) { v1, v2, v3, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE fill4(float v1, float v2, float v3, float alpha) {
    p8g_fill((float[]) { v1, v2, v3, alpha });
}

void EMSCRIPTEN_KEEPALIVE image(int _index, float dx, float dy, float dw, float dh, float sx, float sy, float sw, float sh) {
    p8g_image((p8g_image_t) { _index }, dx, dy, dw, dh, sx, sy, sw, sh);
}

int EMSCRIPTEN_KEEPALIVE loadFont(const char* filename) {
    p8g_font_t font = p8g_load_font(filename);
    return font._index;
}

int EMSCRIPTEN_KEEPALIVE loadImage(const char* filename) {
    p8g_image_t image = p8g_load_image(filename);
    if (image._index == -1) {
        return -1;
    }
    return image._index << 24 | image.width << 12 | image.height;
}

void EMSCRIPTEN_KEEPALIVE run(int width, int height, const char* title, int full_screen, int draw, int key_pressed, int key_released, int mouse_moved, int mouse_pressed, int mouse_released, int mouse_wheel) {
    p8g_run((p8g_sketch_t){
        .width = width,
        .height = height,
        .title = title,
        .full_screen = full_screen,
        .draw = (void (*)(float)) draw,
        .key_pressed = (void (*)(int)) key_pressed,
        .key_released = (void (*)(int)) key_released,
        .mouse_moved = (void (*)(float, float)) mouse_moved,
        .mouse_pressed = (void (*)(int)) mouse_pressed,
        .mouse_released = (void (*)(int)) mouse_released,
        .mouse_wheel = (void (*)(float, float)) mouse_wheel,
    });
}

void EMSCRIPTEN_KEEPALIVE stroke1(float gray) {
    p8g_stroke((float[]) { gray, gray, gray, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE stroke2(float gray, float alpha) {
    p8g_stroke((float[]) { gray, gray, gray, alpha });
}

void EMSCRIPTEN_KEEPALIVE stroke3(float v1, float v2, float v3) {
    p8g_stroke((float[]) { v1, v2, v3, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f });
}

void EMSCRIPTEN_KEEPALIVE stroke4(float v1, float v2, float v3, float alpha) {
    p8g_stroke((float[]) { v1, v2, v3, alpha });
}

void EMSCRIPTEN_KEEPALIVE textFont(int _index) {
    p8g_text_font((p8g_font_t) { _index });
}
