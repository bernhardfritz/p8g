#ifndef P8G_H
#define P8G_H

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

#ifdef USING_NAMESPACE_P8G
extern int p8g_width, p8g_height;
extern int p8g_key_code;
extern int p8g_key_is_pressed;
extern float p8g_mouse_x, p8g_mouse_y;
extern int p8g_mouse_button;
extern int p8g_mouse_is_pressed;
extern float p8g_delta_time;

extern void draw(void);
static void _draw(float delta_time) {
    p8g_delta_time = delta_time * 1000.f;
    draw();
}
void __attribute__((weak)) p8g_key_pressed(void);
static void _p8g_key_pressed(int key_code) {
    p8g_key_code = key_code;
    p8g_key_is_pressed = 1;
    p8g_key_pressed();
}
#define keyPressed() p8g_key_pressed()
void __attribute__((weak)) p8g_key_released(void);
static void _p8g_key_released(int key_code) {
    p8g_key_code = key_code;
    p8g_key_is_pressed = 0;
    p8g_key_released();
}
#define keyReleased() p8g_key_released()
void __attribute__((weak)) p8g_mouse_moved(void);
static void _p8g_mouse_moved(float mouse_x, float mouse_y) {
    p8g_mouse_x = mouse_x;
    p8g_mouse_y = mouse_y;
    p8g_mouse_moved();
}
#define mouseMoved() p8g_mouse_moved()
void __attribute__((weak)) p8g_mouse_pressed(void);
static void _p8g_mouse_pressed(int mouse_button) {
    p8g_mouse_button = mouse_button;
    p8g_mouse_is_pressed = 1;
    p8g_mouse_pressed();
}
#define mousePressed() p8g_mouse_pressed()
void __attribute__((weak)) p8g_mouse_released(void);
static void _p8g_mouse_released(int mouse_button) {
    p8g_mouse_button = mouse_button;
    p8g_mouse_is_pressed = 0;
    p8g_mouse_released();
}
#define mouseReleased() p8g_mouse_released()
void __attribute__((weak)) p8g_mouse_wheel(float delta);
static void _p8g_mouse_wheel(float delta_x, float delta_y) {
    p8g_mouse_wheel(delta_y);
}
#define mouseWheel(delta) p8g_mouse_wheel(delta)
#define P8G_ARG_2(_1, _2, N, ...) N
#define P8G_ARG_4(_1, _2, _3, _4, N, ...) N
static float _buf[4];
static p8g_color_mode_t _color_mode;
static float* _color1f(float gray) {
    _buf[0] = gray;
    _buf[1] = gray;
    _buf[2] = gray;
    _buf[3] = _color_mode == P8G_COLOR_MODE_RGB ? 255.f : 1.f;
    return _buf;
}
#define _color2f(gray, alpha) (float[]) { gray, gray, gray, alpha }
#define _color3f(v1, v2, v3) (float[]) { v1, v2, v3, _color_mode == P8G_COLOR_MODE_RGB ? 255.f : 1.f }
#define _color4f(v1, v2, v3, alpha) (float[]) { v1, v2, v3, alpha }
static float* _color4fv(float color[4]) {
    return color;
}
#define _colort(t) _Generic((t), float*: _color4fv, default: _color1f)(t)
#define _color(...) P8G_ARG_4(__VA_ARGS__, _color4f, _color3f, _color2f, _colort)(__VA_ARGS__)
#define CORNER 0
#define CORNERS 1
#define RADIUS 2
#define CENTER 3
#define RGB 0
#define HSB 1
#define HSL 2
#define applyMatrix(a, b, c, d, e, f) p8g_apply_matrix(a, b, c, d, e, f)
#define background(...) p8g_background(_color(__VA_ARGS__))
#define colorMode(mode) \
    do { \
        _color_mode = mode; \
        p8g_color_mode(mode); \
    } while (0)
#define ellipse(x, y, w, h) p8g_ellipse(x, y, w, h)
#define ellipseMode(mode) p8g_ellipse_mode(mode)
#define fill(...) p8g_fill(_color(__VA_ARGS__))
#define line(x1, y1, x2, y2) p8g_line(x1, y1, x2, y2)
#define noFill() p8g_no_fill()
#define noSmooth() p8g_no_smooth()
#define noStroke() p8g_no_stroke()
#define point(x, y) p8g_point(x, y)
#define pop() p8g_pop()
#define push() p8g_push()
#define rect(x, y, w, h) p8g_rect(x, y, w, h)
#define rectMode(mode) p8g_rect_mode(mode)
#define resetMatrix() p8g_reset_matrix()
#define rotate(angle) p8g_rotate(angle)
static void _run(p8g_sketch_t sketch) {
    p8g_width = sketch.width ? sketch.width : 100;
    p8g_height = sketch.height ? sketch.height : 100;
    sketch.draw = _draw;
    sketch.key_pressed = _p8g_key_pressed;
    sketch.key_released = _p8g_key_released;
    sketch.mouse_moved = _p8g_mouse_moved;
    sketch.mouse_pressed = _p8g_mouse_pressed;
    sketch.mouse_released = _p8g_mouse_released;
    sketch.mouse_wheel = _p8g_mouse_wheel;
    p8g_run(sketch);
}
#define run(...) _run((p8g_sketch_t) { __VA_ARGS__ })
#define _scale1f(s) p8g_scale(s, s)
#define scale(...) P8G_ARG_2(__VA_ARGS__, p8g_scale, _scale1f)(__VA_ARGS__)
#define smooth() p8g_smooth()
#define stroke(...) p8g_stroke(_color(__VA_ARGS__))
#define strokeWeight(weight) p8g_stroke_weight(weight)
#define translate(x, y) p8g_translate(x, y)
#define triangle(x1, y1, x2, y2, x3, y3) p8g_triangle(x1, y1, x2, y2, x3, y3)
#define width p8g_width
#define height p8g_height
#define keyCode p8g_key_code
#define keyIsPressed p8g_key_is_pressed
#define mouseX p8g_mouse_x
#define mouseY p8g_mouse_y
#define mouseButton p8g_mouse_button
#define mouseIsPressed p8g_mouse_is_pressed
#define deltaTime p8g_delta_time
#endif /* USING_NAMESPACE_P8G */

#endif /* P8G_H */
