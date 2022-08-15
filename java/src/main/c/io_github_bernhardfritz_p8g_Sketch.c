#include "io_github_bernhardfritz_p8g_Sketch.h"

#include <p8g.h>
p8g_color_mode_t p8g_peek_color_mode();

static JavaVM *jvm;
static jobject sketch;
static jclass sketchClass;

static void draw(float deltaTime) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "draw", "(F)V"), deltaTime);
}

static void keyPressed(int keyCode) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "keyPressed", "(I)V"), keyCode);
}

static void keyReleased(int keyCode) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "keyReleased", "(I)V"), keyCode);
}

static void mouseMoved(float mouseX, float mouseY) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "mouseMoved", "(FF)V"), mouseX, mouseY);
}

static void mousePressed(int mouseButton) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "mousePressed", "(I)V"), mouseButton);
}

static void mouseReleased(int mouseButton) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "mouseReleased", "(I)V"), mouseButton);
}

static void mouseWheel(float deltaX, float deltaY) {
    JNIEnv *env;
    (*jvm)->AttachCurrentThread(jvm, (void**) &env, NULL);
    (*env)->CallVoidMethod(env, sketch, (*env)->GetMethodID(env, sketchClass, "mouseWheel", "(F)V"), deltaY);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_applyMatrix(JNIEnv *env, jclass clazz, jfloat a, jfloat b, jfloat c, jfloat d, jfloat e, jfloat f) {
    p8g_apply_matrix(a, b, c, d, e, f);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_background(JNIEnv *env, jclass clazz, jfloatArray color) {
    p8g_background((*env)->GetFloatArrayElements(env, color, NULL));
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_colorMode(JNIEnv *env, jclass clazz, jint mode) {
    p8g_color_mode(mode);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_ellipse(JNIEnv *env, jclass clazz, jfloat x, jfloat y, jfloat w, jfloat h) {
    p8g_ellipse(x, y, w, h);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_ellipseMode(JNIEnv *env, jclass clazz, jint mode) {
    p8g_ellipse_mode(mode);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_fill(JNIEnv *env, jclass clazz, jfloatArray color) {
    p8g_fill((*env)->GetFloatArrayElements(env, color, NULL));
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_image(JNIEnv *env, jclass clazz, jobject img, jfloat dx, jfloat dy, jfloat dw, jfloat dh, jfloat sx, jfloat sy, jfloat sw, jfloat sh) {
    if (!img) {
        return;
    }
    jclass imageClass = (*env)->GetObjectClass(env, img);
    jint imageIndex = (*env)->GetIntField(env, img, (*env)->GetFieldID(env, imageClass, "index", "I"));
    jint imageWidth = (*env)->GetIntField(env, img, (*env)->GetFieldID(env, imageClass, "width", "I"));
    jint imageHeight = (*env)->GetIntField(env, img, (*env)->GetFieldID(env, imageClass, "height", "I"));
    p8g_image((p8g_image_t) { imageIndex, imageWidth, imageHeight }, dx, dy, dw, dh, sx, sy, sw, sh);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_imageMode(JNIEnv *env, jclass clazz, jint mode) {
    p8g_image_mode(mode);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_line(JNIEnv *env, jclass clazz, jfloat x1, jfloat y1, jfloat x2, jfloat y2) {
    p8g_line(x1, y1, x2, y2);
}

JNIEXPORT jobject JNICALL Java_io_github_bernhardfritz_p8g_Sketch_loadFont(JNIEnv *env, jobject self, jstring filename) {
    const char* nativeFilename = (*env)->GetStringUTFChars(env, filename, NULL);
    p8g_font_t font = p8g_load_font(nativeFilename);
    (*env)->ReleaseStringUTFChars(env, filename, nativeFilename);
    jclass fontClass = (*env)->FindClass(env, "io/github/bernhardfritz/p8g/Font");
    return (*env)->NewObject(env, fontClass, (*env)->GetMethodID(env, fontClass, "<init>", "(I)V"), font._index);
}

JNIEXPORT jobject JNICALL Java_io_github_bernhardfritz_p8g_Sketch_loadImage(JNIEnv *env, jobject self, jstring filename) {
    const char* nativeFilename = (*env)->GetStringUTFChars(env, filename, NULL);
    p8g_image_t image = p8g_load_image(nativeFilename);
    (*env)->ReleaseStringUTFChars(env, filename, nativeFilename);
    jclass imageClass = (*env)->FindClass(env, "io/github/bernhardfritz/p8g/Image");
    return (*env)->NewObject(env, imageClass, (*env)->GetMethodID(env, imageClass, "<init>", "(III)V"), image._index, image.width, image.height);
}

JNIEXPORT jint JNICALL Java_io_github_bernhardfritz_p8g_Sketch_millis(JNIEnv *env, jclass clazz) {
    return p8g_time() * 1000.f;
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noFill(JNIEnv *env, jclass clazz) {
    p8g_no_fill();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noSmooth(JNIEnv *env, jclass clazz) {
    p8g_no_smooth();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noStroke(JNIEnv *env, jclass clazz) {
    p8g_no_stroke();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noTint(JNIEnv *env, jclass clazz) {
    p8g_no_tint();
}

JNIEXPORT jint JNICALL Java_io_github_bernhardfritz_p8g_Sketch_peekColorMode(JNIEnv *env, jclass clazz) {
    return p8g_peek_color_mode();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_point(JNIEnv *env, jclass clazz, jfloat x, jfloat y) {
    p8g_point(x, y);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_pop(JNIEnv *env, jclass clazz) {
    p8g_pop();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_push(JNIEnv *env, jclass clazz) {
    p8g_push();
}

JNIEXPORT jfloat JNICALL Java_io_github_bernhardfritz_p8g_Sketch_random(JNIEnv *env, jclass clazz, jfloat min, jfloat max) {
    return p8g_random(min, max);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_randomSeed(JNIEnv *env, jclass clazz, jint seed) {
    p8g_random_seed(seed);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rect(JNIEnv * env, jclass clazz, jfloat x, jfloat y, jfloat w, jfloat h) {
    p8g_rect(x, y, w, h);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rectMode(JNIEnv *env, jclass clazz, jint mode) {
    p8g_rect_mode(mode);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_resetMatrix(JNIEnv *env, jclass clazz) {
    p8g_reset_matrix();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rotate(JNIEnv *env, jclass clazz, jfloat angle) {
    p8g_rotate(angle);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_run(JNIEnv *env, jobject self, jint width, jint height, jstring title, jboolean fullScreen) {
    (*env)->GetJavaVM(env, &jvm);
    sketch = (*env)->NewGlobalRef(env, self);
    sketchClass = (*env)->GetObjectClass(env, sketch);
    (*env)->SetStaticIntField(env, sketchClass, (*env)->GetStaticFieldID(env, sketchClass, "width", "I"), width);
    (*env)->SetStaticIntField(env, sketchClass, (*env)->GetStaticFieldID(env, sketchClass, "height", "I"), height);
    const char* nativeTitle = (*env)->GetStringUTFChars(env, title, NULL);
    p8g_run((p8g_sketch_t) {
        .width = width,
        .height = height,
        .title = nativeTitle,
        .full_screen = fullScreen,
        .draw = draw,
        .key_pressed = keyPressed,
        .key_released = keyReleased,
        .mouse_moved = mouseMoved,
        .mouse_pressed = mousePressed,
        .mouse_released = mouseReleased,
        .mouse_wheel = mouseWheel
    });
    (*env)->ReleaseStringUTFChars(env, title, nativeTitle);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_scale(JNIEnv *env, jclass clazz, jfloat x, jfloat y) {
    p8g_scale(x, y);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_smooth(JNIEnv *env, jclass clazz) {
    p8g_smooth();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_stroke(JNIEnv *env, jclass clazz, jfloatArray color) {
    p8g_stroke((*env)->GetFloatArrayElements(env, color, NULL));
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_strokeWeight(JNIEnv *env, jclass clazz, jfloat weight) {
    p8g_stroke_weight(weight);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_text(JNIEnv *env, jclass clazz, jstring str, jfloat x, jfloat y) {
    const char* nativeStr = (*env)->GetStringUTFChars(env, str, NULL);
    p8g_text(nativeStr, x, y);
    (*env)->ReleaseStringUTFChars(env, str, nativeStr);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_textFont(JNIEnv *env, jclass clazz, jobject font) {
    if (!font) {
        return;
    }
    jclass fontClass = (*env)->GetObjectClass(env, font);
    jint fontIndex = (*env)->GetIntField(env, font, (*env)->GetFieldID(env, fontClass, "index", "I"));
    p8g_text_font((p8g_font_t) { fontIndex });
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_textSize(JNIEnv *env, jclass clazz, jfloat size) {
    p8g_text_size(size);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_tint(JNIEnv *env, jclass clazz, jfloatArray color) {
    p8g_tint((*env)->GetFloatArrayElements(env, color, NULL));
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_translate(JNIEnv *env, jclass clazz, jfloat x, jfloat y) {
    p8g_translate(x, y);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_triangle(JNIEnv *env, jclass clazz, jfloat x1, jfloat y1, jfloat x2, jfloat y2, jfloat x3, jfloat y3) {
    p8g_triangle(x1, y1, x2, y2, x3, y3);
}
