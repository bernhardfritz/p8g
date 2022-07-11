#ifndef P8G_HPP
#define P8G_HPP

#include <string>

extern "C" {
void p8g_apply_matrix(float a, float b, float c, float d, float e, float f);
void p8g_background(float color[4]);
typedef enum {
    P8G_COLOR_MODE_RGB,
    P8G_COLOR_MODE_HSB,
    P8G_COLOR_MODE_HSL,
} p8g_color_mode_t;
void p8g_color_mode(p8g_color_mode_t mode);
void p8g_ellipse(float x, float y, float w, float h);
typedef enum {
    P8G_ELLIPSE_MODE_CORNER,
    P8G_ELLIPSE_MODE_CORNERS,
    P8G_ELLIPSE_MODE_RADIUS,
    P8G_ELLIPSE_MODE_CENTER,
} p8g_ellipse_mode_t;
void p8g_ellipse_mode(p8g_ellipse_mode_t mode);
void p8g_fill(float color[4]);
void p8g_line(float x1, float y1, float x2, float y2);
void p8g_no_fill(void);
void p8g_no_smooth(void);
void p8g_no_stroke(void);
void p8g_point(float x, float y);
void p8g_pop(void);
void p8g_push(void);
void p8g_rect(float x, float y, float w, float h);
typedef enum {
    P8G_RECT_MODE_CORNER,
    P8G_RECT_MODE_CORNERS,
    P8G_RECT_MODE_RADIUS,
    P8G_RECT_MODE_CENTER,
} p8g_rect_mode_t;
void p8g_rect_mode(p8g_rect_mode_t mode);
void p8g_reset_matrix(void);
void p8g_rotate(float angle);
typedef struct {
    int width, height;
    const char* title;
    int full_screen;
    void (*draw)(float);
    void (*key_pressed)(int);
    void (*key_released)(int);
    void (*mouse_moved)(float, float);
    void (*mouse_pressed)(int);
    void (*mouse_released)(int);
    void (*mouse_wheel)(float, float);
} p8g_sketch_t;
void p8g_run(p8g_sketch_t sketch);
void p8g_scale(float x, float y);
void p8g_smooth(void);
void p8g_stroke(float color[4]);
void p8g_stroke_weight(float weight);
void p8g_translate(float x, float y);
void p8g_triangle(float x1, float y1, float x2, float y2, float x3, float y3);
}

namespace p8g {
const int CORNER = 0;
const int CORNERS = 1;
const int RADIUS = 2;
const int CENTER = 3;
const int RGB = 0;
const int HSB = 1;
const int HSL = 2;
extern int width, height;
extern int keyCode;
extern bool keyIsPressed;
extern float mouseX, mouseY;
extern int mouseButton;
extern bool mouseIsPressed;
extern float deltaTime;
void __attribute__((weak)) draw(void);
void __attribute__((weak)) keyPressed(void);
void __attribute__((weak)) keyReleased(void);
void __attribute__((weak)) mouseMoved(void);
void __attribute__((weak)) mousePressed(void);
void __attribute__((weak)) mouseReleased(void);
void __attribute__((weak)) mouseWheel(float delta);
void applyMatrix(float a, float b, float c, float d, float e, float f);
void background(float gray);
void background(float gray, float alpha);
void background(float v1, float v2, float v3);
void background(float v1, float v2, float v3, float alpha);
void background(float color[4]);
void colorMode(int mode);
void ellipse(float x, float y, float w, float h);
void ellipseMode(int mode);
void fill(float gray);
void fill(float gray, float alpha);
void fill(float v1, float v2, float v3);
void fill(float v1, float v2, float v3, float alpha);
void fill(float color[4]);
void line(float x1, float y1, float x2, float y2);
void noFill(void);
void noSmooth(void);
void noStroke(void);
void point(float x, float y);
void pop(void);
void push(void);
void rect(float x, float y, float w, float h);
void rectMode(int mode);
void resetMatrix(void);
void rotate(float angle);
void run(void);
void run(int width, int height);
void run(int width, int height, std::string title);
void scale(float s);
void scale(float x, float y);
void smooth(void);
void stroke(float gray);
void stroke(float gray, float alpha);
void stroke(float v1, float v2, float v3);
void stroke(float v1, float v2, float v3, float alpha);
void stroke(float color[4]);
void strokeWeight(float weight);
void translate(float x, float y);
void triangle(float x1, float y1, float x2, float y2, float x3, float y3);
}

#endif /* P8G_HPP */
