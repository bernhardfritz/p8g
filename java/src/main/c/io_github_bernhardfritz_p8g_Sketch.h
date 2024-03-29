/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class io_github_bernhardfritz_p8g_Sketch */

#ifndef _Included_io_github_bernhardfritz_p8g_Sketch
#define _Included_io_github_bernhardfritz_p8g_Sketch
#ifdef __cplusplus
extern "C" {
#endif
#undef io_github_bernhardfritz_p8g_Sketch_CORNER
#define io_github_bernhardfritz_p8g_Sketch_CORNER 0L
#undef io_github_bernhardfritz_p8g_Sketch_CORNERS
#define io_github_bernhardfritz_p8g_Sketch_CORNERS 1L
#undef io_github_bernhardfritz_p8g_Sketch_RADIUS
#define io_github_bernhardfritz_p8g_Sketch_RADIUS 2L
#undef io_github_bernhardfritz_p8g_Sketch_CENTER
#define io_github_bernhardfritz_p8g_Sketch_CENTER 3L
#undef io_github_bernhardfritz_p8g_Sketch_RGB
#define io_github_bernhardfritz_p8g_Sketch_RGB 0L
#undef io_github_bernhardfritz_p8g_Sketch_HSB
#define io_github_bernhardfritz_p8g_Sketch_HSB 1L
#undef io_github_bernhardfritz_p8g_Sketch_HSL
#define io_github_bernhardfritz_p8g_Sketch_HSL 2L
/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    applyMatrix
 * Signature: (FFFFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_applyMatrix
  (JNIEnv *, jclass, jfloat, jfloat, jfloat, jfloat, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    background
 * Signature: ([F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_background
  (JNIEnv *, jclass, jfloatArray);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    colorMode
 * Signature: (I)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_colorMode
  (JNIEnv *, jclass, jint);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    ellipse
 * Signature: (FFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_ellipse
  (JNIEnv *, jclass, jfloat, jfloat, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    ellipseMode
 * Signature: (I)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_ellipseMode
  (JNIEnv *, jclass, jint);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    fill
 * Signature: ([F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_fill
  (JNIEnv *, jclass, jfloatArray);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    image
 * Signature: (Lio/github/bernhardfritz/p8g/Image;FFFFFFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_image
  (JNIEnv *, jclass, jobject, jfloat, jfloat, jfloat, jfloat, jfloat, jfloat, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    imageMode
 * Signature: (I)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_imageMode
  (JNIEnv *, jclass, jint);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    line
 * Signature: (FFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_line
  (JNIEnv *, jclass, jfloat, jfloat, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    loadImage
 * Signature: (Ljava/lang/String;)Lio/github/bernhardfritz/p8g/Image;
 */
JNIEXPORT jobject JNICALL Java_io_github_bernhardfritz_p8g_Sketch_loadImage
  (JNIEnv *, jobject, jstring);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    loadFont
 * Signature: (Ljava/lang/String;)Lio/github/bernhardfritz/p8g/Font;
 */
JNIEXPORT jobject JNICALL Java_io_github_bernhardfritz_p8g_Sketch_loadFont
  (JNIEnv *, jobject, jstring);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    millis
 * Signature: ()I
 */
JNIEXPORT jint JNICALL Java_io_github_bernhardfritz_p8g_Sketch_millis
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    noFill
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noFill
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    noSmooth
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noSmooth
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    noStroke
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noStroke
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    noTint
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_noTint
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    peekColorMode
 * Signature: ()I
 */
JNIEXPORT jint JNICALL Java_io_github_bernhardfritz_p8g_Sketch_peekColorMode
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    point
 * Signature: (FF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_point
  (JNIEnv *, jclass, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    pop
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_pop
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    push
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_push
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    random
 * Signature: (FF)F
 */
JNIEXPORT jfloat JNICALL Java_io_github_bernhardfritz_p8g_Sketch_random
  (JNIEnv *, jclass, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    randomSeed
 * Signature: (I)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_randomSeed
  (JNIEnv *, jclass, jint);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    rect
 * Signature: (FFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rect
  (JNIEnv *, jclass, jfloat, jfloat, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    rectMode
 * Signature: (I)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rectMode
  (JNIEnv *, jclass, jint);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    resetMatrix
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_resetMatrix
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    rotate
 * Signature: (F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_rotate
  (JNIEnv *, jclass, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    run
 * Signature: (IILjava/lang/String;Z)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_run
  (JNIEnv *, jobject, jint, jint, jstring, jboolean);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    scale
 * Signature: (FF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_scale
  (JNIEnv *, jclass, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    smooth
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_smooth
  (JNIEnv *, jclass);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    stroke
 * Signature: ([F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_stroke
  (JNIEnv *, jclass, jfloatArray);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    strokeWeight
 * Signature: (F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_strokeWeight
  (JNIEnv *, jclass, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    text
 * Signature: (Ljava/lang/String;FF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_text
  (JNIEnv *, jclass, jstring, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    textFont
 * Signature: (Lio/github/bernhardfritz/p8g/Font;)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_textFont
  (JNIEnv *, jclass, jobject);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    textSize
 * Signature: (F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_textSize
  (JNIEnv *, jclass, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    tint
 * Signature: ([F)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_tint
  (JNIEnv *, jclass, jfloatArray);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    translate
 * Signature: (FF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_translate
  (JNIEnv *, jclass, jfloat, jfloat);

/*
 * Class:     io_github_bernhardfritz_p8g_Sketch
 * Method:    triangle
 * Signature: (FFFFFF)V
 */
JNIEXPORT void JNICALL Java_io_github_bernhardfritz_p8g_Sketch_triangle
  (JNIEnv *, jclass, jfloat, jfloat, jfloat, jfloat, jfloat, jfloat);

#ifdef __cplusplus
}
#endif
#endif
