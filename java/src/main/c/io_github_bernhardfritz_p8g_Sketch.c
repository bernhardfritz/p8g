#include "io_github_bernhardfritz_p8g_Sketch.h"

#include <p8g.h>

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
    (*env)->SetStaticIntField(env, sketchClass, (*env)->GetStaticFieldID(env, sketchClass, "colorMode", "I"), mode);
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

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_line(JNIEnv *env, jclass clazz, jfloat x1, jfloat y1, jfloat x2, jfloat y2) {
    p8g_line(x1, y1, x2, y2);
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

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_point(JNIEnv *env, jclass clazz, jfloat x, jfloat y) {
    p8g_point(x, y);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_pop(JNIEnv *env, jclass clazz) {
    p8g_pop();
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_push(JNIEnv *env, jclass clazz) {
    p8g_push();
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

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_translate(JNIEnv *env, jclass clazz, jfloat x, jfloat y) {
    p8g_translate(x, y);
}

JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_triangle(JNIEnv *env, jclass clazz, jfloat x1, jfloat y1, jfloat x2, jfloat y2, jfloat x3, jfloat y3) {
    p8g_triangle(x1, y1, x2, y2, x3, y3);
}
