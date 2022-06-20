#ifndef P8G_TYPOGRAPHY_H
#define P8G_TYPOGRAPHY_H

void p8g_text(const char* str, float x, float y);

#ifdef USING_NAMESPACE_P8G
#define text(str, x, y) p8g_text(str, x, y)
#endif /* USING_NAMESPACE_P8G */

#endif /* P8G_TYPOGRAPHY_H */