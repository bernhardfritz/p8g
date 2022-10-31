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
typedef struct {
    int _index;
    int width, height;
} p8g_image_t;
void p8g_image(p8g_image_t img, float dx, float dy, float dw, float dh, float sx, float sy, float sw, float sh);
typedef enum {
    P8G_IMAGE_MODE_CORNER,
    P8G_IMAGE_MODE_CORNERS,
    P8G_IMAGE_MODE_RADIUS,
    P8G_IMAGE_MODE_CENTER,
} p8g_image_mode_t;
void p8g_image_mode(p8g_image_mode_t mode);
void p8g_line(float x1, float y1, float x2, float y2);
typedef struct {
    int _index;
} p8g_font_t;
p8g_font_t p8g_load_font(const char* filename);
p8g_image_t p8g_load_image(const char* filename);
void p8g_no_fill(void);
void p8g_no_smooth(void);
void p8g_no_stroke(void);
void p8g_no_tint(void);
void p8g_point(float x, float y);
void p8g_pop(void);
void p8g_push(void);
float p8g_random(float min, float max);
void p8g_random_seed(int seed);
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
void p8g_text(const char* str, float x, float y);
void p8g_text_font(p8g_font_t font);
void p8g_text_size(float size);
float p8g_time(void);
void p8g_tint(float color[4]);
void p8g_translate(float x, float y);
void p8g_triangle(float x1, float y1, float x2, float y2, float x3, float y3);

#ifdef USING_NAMESPACE_P8G
typedef struct {
    int _index;
    int p8g_width, p8g_height;
} Image;
static Image _to_image(p8g_image_t img) {
    return (Image) {
        ._index = img._index,
        .p8g_width = img.width,
        .p8g_height = img.height,
    };
}
static p8g_image_t _to_p8g_image_t(Image img) {
    return (p8g_image_t) {
        ._index = img._index,
        .width = img.p8g_width,
        .height = img.p8g_height,
    };
}
typedef p8g_font_t Font;
extern int p8g_width, p8g_height;
extern int p8g_key_code;
extern int p8g_key_is_pressed;
extern float p8g_mouse_x, p8g_mouse_y;
extern int p8g_mouse_button;
extern int p8g_mouse_is_pressed;
extern float p8g_delta_time;
p8g_color_mode_t p8g_peek_color_mode();

extern void draw(void);
extern void keyPressed(void);
extern void keyReleased(void);
extern void mouseMoved(void);
extern void mousePressed(void);
extern void mouseReleased(void);
extern void mouseWheel(float delta);
#define P8G_ARG_2(_1, _2, N, ...) N
#define P8G_ARG_3(_1, _2, _3, N, ...) N
#define P8G_ARG_4(_1, _2, _3, _4, N, ...) N
#define P8G_ARG_9(_1, _2, _3, _4, _5, _6, _7, _8, _9, N, ...) N
static float _buf[4];
static float* _color1f(float gray) {
    _buf[0] = gray;
    _buf[1] = gray;
    _buf[2] = gray;
    _buf[3] = p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f;
    return _buf;
}
#define _color2f(gray, alpha) (float[]) { gray, gray, gray, alpha }
#define _color3f(v1, v2, v3) (float[]) { v1, v2, v3, p8g_peek_color_mode() == P8G_COLOR_MODE_RGB ? 255.f : 1.f }
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
#define colorMode(mode) p8g_color_mode(mode)
#define ellipse(x, y, w, h) p8g_ellipse(x, y, w, h)
#define ellipseMode(mode) p8g_ellipse_mode(mode)
#define fill(...) p8g_fill(_color(__VA_ARGS__))
#define _image1(img)
#define _image2(img, x)
#define _image3(img, x, y) p8g_image(_to_p8g_image_t(img), x, y, img.width, img.height, 0, 0, img.width, img.height)
#define _image4(img, x, y, w) p8g_image(_to_p8g_image_t(img), x, y, w, img.height, 0, 0, img.width, img.height)
#define _image5(img, x, y, w, h) p8g_image(_to_p8g_image_t(img), x, y, w, h, 0, 0, img.width, img.height)
#define _image6(img, dx, dy, dw, dh, sx) p8g_image(_to_p8g_image_t(img), dx, dy, dw, dh, sx, 0, img.width, img.height)
#define _image7(img, dx, dy, dw, dh, sx, sy) p8g_image(_to_p8g_image_t(img), dx, dy, dw, dh, sx, sy, img.width, img.height)
#define _image8(img, dx, dy, dw, dh, sx, sy, sw) p8g_image(_to_p8g_image_t(img), dx, dy, dw, dh, sx, sy, sw, img.height)
#define _image9(img, dx, dy, dw, dh, sx, sy, sw, sh) p8g_image(_to_p8g_image_t(img), dx, dy, dw, dh, sx, sy, sw, sh)
#define image(...) P8G_ARG_9(__VA_ARGS__, _image9, _image8, _image7, _image6, _image5, _image4, _image3, _image2, _image1)(__VA_ARGS__)
#define imageMode(mode) p8g_image_mode(mode)
#define line(x1, y1, x2, y2) p8g_line(x1, y1, x2, y2)
#define loadFont(filename) p8g_load_font(filename)
#define loadImage(filename) _to_image(p8g_load_image(filename))
static int p8g_millis() {
    return p8g_time() * 1000.f;
}
#define millis() p8g_millis()
#define noFill() p8g_no_fill()
#define noSmooth() p8g_no_smooth()
#define noStroke() p8g_no_stroke()
#define noTint() p8g_no_tint()
#define point(x, y) p8g_point(x, y)
#define pop() p8g_pop()
#define push() p8g_push()
static float _random0f() {
    return p8g_random(0.f, 1.f);
}
static float _random1f(float max) {
    return p8g_random(0.f, max);
}
#define random(...) P8G_ARG_3(_1, ##__VA_ARGS__, p8g_random, _random1f, _random0f)(__VA_ARGS__)
#define rect(x, y, w, h) p8g_rect(x, y, w, h)
#define rectMode(mode) p8g_rect_mode(mode)
#define resetMatrix() p8g_reset_matrix()
#define rotate(angle) p8g_rotate(angle)
typedef struct {
    int width, height;
    const char* title;
    int full_screen;
} p8g_run_args_t;
static struct {
    void (*draw)(void);
    void (*keyPressed)(void);
    void (*keyReleased)(void);
    void (*mouseMoved)(void);
    void (*mousePressed)(void);
    void (*mouseReleased)(void);
    void (*mouseWheel)(float);
} _captures;
static void _draw(float delta_time) {
    p8g_delta_time = delta_time * 1000.f;
    _captures.draw();
}
static void _key_pressed(int key_code) {
    p8g_key_code = key_code;
    p8g_key_is_pressed = 1;
    _captures.keyPressed();
}
static void _key_released(int key_code) {
    p8g_key_code = key_code;
    p8g_key_is_pressed = 0;
    _captures.keyReleased();
}
static void _mouse_moved(float mouse_x, float mouse_y) {
    p8g_mouse_x = mouse_x;
    p8g_mouse_y = mouse_y;
    _captures.mouseMoved();
}
static void _mouse_pressed(int mouse_button) {
    p8g_mouse_button = mouse_button;
    p8g_mouse_is_pressed = 1;
    _captures.mousePressed();
}
static void _mouse_released(int mouse_button) {
    p8g_mouse_button = mouse_button;
    p8g_mouse_is_pressed = 0;
    _captures.mouseReleased();
}
static void _mouse_wheel(float delta_x, float delta_y) {
    _captures.mouseWheel(delta_y);
}
static void _run(p8g_run_args_t run_args, void (*draw)(void), void (*keyPressed)(void), void (*keyReleased)(void), void (*mouseMoved)(void), void (*mousePressed)(void), void (*mouseReleased)(void), void (*mouseWheel)(float)) {
    p8g_width = run_args.width ? run_args.width : 100;
    p8g_height = run_args.height ? run_args.height : 100;
    _captures.draw = draw;
    _captures.keyPressed = keyPressed;
    _captures.keyReleased = keyReleased;
    _captures.mouseMoved = mouseMoved;
    _captures.mousePressed = mousePressed;
    _captures.mouseReleased = mouseReleased;
    _captures.mouseWheel = mouseWheel;
    p8g_run((p8g_sketch_t) {
        .width = run_args.width,
        .height = run_args.height,
        .title = run_args.title,
        .full_screen = run_args.full_screen,
        .draw = _draw,
        .key_pressed = _key_pressed,
        .key_released = _key_released,
        .mouse_moved = _mouse_moved,
        .mouse_pressed = _mouse_pressed,
        .mouse_released = _mouse_released,
        .mouse_wheel = _mouse_wheel,
    });
}
#define run(...) _run((p8g_run_args_t) { __VA_ARGS__ }, draw, keyPressed, keyReleased, mouseMoved, mousePressed, mouseReleased, mouseWheel)
#define _scale1f(s) p8g_scale(s, s)
#define scale(...) P8G_ARG_2(__VA_ARGS__, p8g_scale, _scale1f)(__VA_ARGS__)
#define smooth() p8g_smooth()
#define stroke(...) p8g_stroke(_color(__VA_ARGS__))
#define strokeWeight(weight) p8g_stroke_weight(weight)
#define text(str, x, y) p8g_text(str, x, y)
#define textFont(font) p8g_text_font(font)
#define textSize(size) p8g_text_size(size)
#define tint(...) p8g_tint(_color(__VA_ARGS__))
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
