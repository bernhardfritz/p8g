#include "p8g.hpp"

#include <memory>

namespace {
void draw(float deltaTime) {
    p8g::deltaTime = deltaTime * 1000.f;
    p8g::draw();
}
void keyPressed(int keyCode) {
    p8g::keyCode = keyCode;
    p8g::keyIsPressed = true;
    p8g::keyPressed();
}
void keyReleased(int keyCode) {
    p8g::keyCode = keyCode;
    p8g::keyIsPressed = false;
    p8g::keyReleased();
}
void mouseMoved(float mouseX, float mouseY) {
    p8g::mouseX = mouseX;
    p8g::mouseY = mouseY;
    p8g::mouseMoved();
}
void mousePressed(int mouseButton) {
    p8g::mouseButton = mouseButton;
    p8g::mouseIsPressed = true;
    p8g::mousePressed();
}
void mouseReleased(int mouseButton) {
    p8g::mouseButton = mouseButton;
    p8g::mouseIsPressed = false;
    p8g::mouseReleased();
}
void mouseWheel(float deltaX, float deltaY) {
    p8g::mouseWheel(deltaY);
}
}

int p8g::width, p8g::height;
int p8g::keyCode;
bool p8g::keyIsPressed;
float p8g::mouseX, p8g::mouseY;
int p8g::mouseButton;
bool p8g::mouseIsPressed;
float p8g::deltaTime;

void p8g::draw() {}
void p8g::keyPressed() {}
void p8g::keyReleased() {}
void p8g::mouseMoved() {}
void p8g::mousePressed() {}
void p8g::mouseReleased() {}
void p8g::mouseWheel(float delta) {}

void p8g::applyMatrix(float a, float b, float c, float d, float e, float f) {
    p8g_apply_matrix(a, b, c, d, e, f);
}

void p8g::background(float gray) {
    float background[] = { gray, gray, gray, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_background(background);
}

void p8g::background(float gray, float alpha) {
    float background[] = { gray, gray, gray, alpha };
    p8g_background(background);
}

void p8g::background(float v1, float v2, float v3) {
    float background[] = { v1, v2, v3, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_background(background);
}

void p8g::background(float v1, float v2, float v3, float alpha) {
    float background[] = { v1, v2, v3, alpha };
    p8g_background(background);
}

void p8g::background(float color[4]) {
    p8g_background(color);
}

void p8g::colorMode(int mode) {
    p8g_color_mode((p8g_color_mode_t) mode);
}

void p8g::ellipse(float x, float y, float w, float h) {
    p8g_ellipse(x, y, w, h);
}

void p8g::ellipseMode(int mode) {
    p8g_ellipse_mode((p8g_ellipse_mode_t) mode);
}

void p8g::fill(float gray) {
    float fill[] = { gray, gray, gray, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_fill(fill);
}

void p8g::fill(float gray, float alpha) {
    float fill[] = { gray, gray, gray, alpha };
    p8g_fill(fill);
}

void p8g::fill(float v1, float v2, float v3) {
    float fill[] = { v1, v2, v3, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_fill(fill);
}

void p8g::fill(float v1, float v2, float v3, float alpha) {
    float fill[] = { v1, v2, v3, alpha };
    p8g_fill(fill);
}

void p8g::fill(float color[4]) {
    p8g_fill(color);
}

void p8g::image(p8g::Image img, float x, float y) {
    p8g_image(img, x, y, img.width, img.height, 0, 0, img.width, img.height);
}

void p8g::image(p8g::Image img, float x, float y, float w) {
    p8g_image(img, x, y, w, img.height, 0, 0, img.width, img.height);
}

void p8g::image(p8g::Image img, float x, float y, float w, float h) {
    p8g_image(img, x, y, w, h, 0, 0, img.width, img.height);
}

void p8g::image(p8g::Image img, float dx, float dy, float dw, float dh, float sx) {
    p8g_image(img, dx, dy, dw, dh, sx, 0, img.width, img.height);
}

void p8g::image(p8g::Image img, float dx, float dy, float dw, float dh, float sx, float sy) {
    p8g_image(img, dx, dy, dw, dh, sx, sy, img.width, img.height);
}

void p8g::image(p8g::Image img, float dx, float dy, float dw, float dh, float sx, float sy, float sw) {
    p8g_image(img, dx, dy, dw, dh, sx, sy, sw, img.height);
}

void p8g::image(p8g::Image img, float dx, float dy, float dw, float dh, float sx, float sy, float sw, float sh) {
    p8g_image(img, dx, dy, dw, dh, sx, sy, sw, sh);
}

void p8g::imageMode(int mode) {
    p8g_image_mode((p8g_image_mode_t) mode);
}

void p8g::line(float x1, float y1, float x2, float y2) {
    p8g_line(x1, y1, x2, y2);
}

p8g::Image p8g::loadImage(std::string filename) {
    return p8g_load_image(filename.c_str());
}

p8g::Font p8g::loadFont(std::string filename) {
    return p8g_load_font(filename.c_str());
}

int p8g::millis() {
    return p8g_time() * 1000.f;
}

void p8g::noFill() {
    p8g_no_fill();
}

void p8g::noSmooth() {
    p8g_no_smooth();
}

void p8g::noStroke() {
    p8g_no_stroke();
}

void p8g::noTint() {
    p8g_no_tint();
}

void p8g::point(float x, float y) {
    p8g_point(x, y);
}

void p8g::pop() {
    p8g_pop();
}

void p8g::push() {
    p8g_push();
}

float p8g::random() {
    return p8g_random(0.f, 1.f);
}

float p8g::random(float max) {
    return p8g_random(0.f, max);
}

float p8g::random(float min, float max) {
    return p8g_random(min, max);
}

void p8g::randomSeed(int seed) {
    p8g_random_seed(seed);
}

void p8g::rect(float x, float y, float w, float h) {
    p8g_rect(x, y, w, h);
}

void p8g::rectMode(int mode) {
    p8g_rect_mode((p8g_rect_mode_t) mode);
}

void p8g::resetMatrix() {
    p8g_reset_matrix();
}

void p8g::rotate(float angle) {
    p8g_rotate(angle);
}

void p8g::run() {
    p8g_run((p8g_sketch_t) {
        .draw = ::draw,
        .key_pressed = ::keyPressed,
        .key_released = ::keyReleased,
        .mouse_moved = ::mouseMoved,
        .mouse_pressed = ::mousePressed,
        .mouse_released = ::mouseReleased,
        .mouse_wheel = ::mouseWheel,
    });
}

void p8g::run(int width, int height) {
    p8g::width = width;
    p8g::height = height;
    p8g_run((p8g_sketch_t) {
        .width = width,
        .height = height,
        .draw = ::draw,
        .key_pressed = ::keyPressed,
        .key_released = ::keyReleased,
        .mouse_moved = ::mouseMoved,
        .mouse_pressed = ::mousePressed,
        .mouse_released = ::mouseReleased,
        .mouse_wheel = ::mouseWheel,
    });
}

void p8g::run(int width, int height, std::string title) {
    p8g::width = width;
    p8g::height = height;
    p8g_run((p8g_sketch_t) {
        .width = width,
        .height = height,
        .title = title.c_str(),
        .draw = ::draw,
        .key_pressed = ::keyPressed,
        .key_released = ::keyReleased,
        .mouse_moved = ::mouseMoved,
        .mouse_pressed = ::mousePressed,
        .mouse_released = ::mouseReleased,
        .mouse_wheel = ::mouseWheel,
    });
}

void p8g::scale(float s) {
    p8g_scale(s, s);
}

void p8g::scale(float x, float y) {
    p8g_scale(x, y);
}

void p8g::smooth() {
    p8g_smooth();
}

void p8g::stroke(float gray) {
    float stroke[] = { gray, gray, gray, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_stroke(stroke);
}

void p8g::stroke(float gray, float alpha) {
    float stroke[] = { gray, gray, gray, alpha };
    p8g_stroke(stroke);
}

void p8g::stroke(float v1, float v2, float v3) {
    float stroke[] = { v1, v2, v3, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_stroke(stroke);
}

void p8g::stroke(float v1, float v2, float v3, float alpha) {
    float stroke[] = { v1, v2, v3, alpha };
    p8g_stroke(stroke);
}

void p8g::stroke(float color[4]) {
    p8g_stroke(color);
}

void p8g::strokeWeight(float weight) {
    p8g_stroke_weight(weight);
}

void p8g::text(std::string str, float x, float y) {
    p8g_text(str.c_str(), x, y);
}

void p8g::textFont(p8g::Font font) {
    p8g_text_font(font);
}

void p8g::textSize(float size) {
    p8g_text_size(size);
}

void p8g::tint(float gray) {
    float tint[] = { gray, gray, gray, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_tint(tint);
}

void p8g::tint(float gray, float alpha) {
    float tint[] = { gray, gray, gray, alpha };
    p8g_tint(tint);
}

void p8g::tint(float v1, float v2, float v3) {
    float tint[] = { v1, v2, v3, p8g_peek_color_mode() == p8g::RGB ? 255.f : 1.f };
    p8g_tint(tint);
}

void p8g::tint(float v1, float v2, float v3, float alpha) {
    float tint[] = { v1, v2, v3, alpha };
    p8g_tint(tint);
}

void p8g::tint(float color[4]) {
    p8g_tint(color);
}

void p8g::translate(float x, float y) {
    p8g_translate(x, y);
}

void p8g::triangle(float x1, float y1, float x2, float y2, float x3, float y3) {
    p8g_triangle(x1, y1, x2, y2, x3, y3);
}
