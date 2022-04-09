ifeq ($(origin CC),default)
CC = gcc
endif
MKDIR_P ?= mkdir -p
P8G_DIR := ../c
SRC_DIR := src/main/c
_SRCS := io_github_bernhardfritz_p8g_Sketch.c
SRCS := $(_SRCS:%=$(SRC_DIR)/%)
BUILD_DIR := build
_OBJS := $(_SRCS:%.c=%.o)
OBJS := $(_SRCS:%.c=$(BUILD_DIR)/%.o)
ifeq ($(OS),Windows_NT)
	UNAME_S := Windows
else
	UNAME_S := $(shell uname -s)
endif
ifeq ($(UNAME_S),Windows)
	TARGET := io_github_bernhardfritz_p8g_Sketch.dll
	FLAGS := -lp8g
	JNI_MD_DIR := ${JAVA_HOME}/include/windows
endif
ifeq ($(UNAME_S),Linux)
	TARGET := libio_github_bernhardfritz_p8g_Sketch.so
	FLAGS := -lp8g -Wl,-rpath='$$ORIGIN'
	JNI_MD_DIR := ${JAVA_HOME}/include/linux
endif
ifeq ($(UNAME_S),Darwin)
	TARGET := libio_github_bernhardfritz_p8g_Sketch.dylib
	FLAGS := -lp8g -install_name @rpath/$(TARGET)
	JNI_MD_DIR := ${JAVA_HOME}/include/darwin
endif

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c
	$(CC) -c -fPIC $< -o $@ -I${JAVA_HOME}/include -I$(JNI_MD_DIR) -I$(P8G_DIR)

all: $(OBJS)
	$(CC) -shared -o $(BUILD_DIR)/$(TARGET) $< -L$(P8G_DIR) $(FLAGS)

$(OBJS): | $(BUILD_DIR)

$(BUILD_DIR):
	$(MKDIR_P) $(BUILD_DIR)

src/main/c/io_github_bernhardfritz_p8g_Sketch.h: src/main/java/io/github/bernhardfritz/p8g/Sketch.java
	javac -d $(BUILD_DIR) -h src/main/c src/main/java/io/github/bernhardfritz/p8g/Sketch.java

$(BUILD_DIR)/p8g.jar: src/main/java/io/github/bernhardfritz/p8g/Sketch.java $(BUILD_DIR)/io_github_bernhardfritz_p8g_Sketch.dll $(BUILD_DIR)/libio_github_bernhardfritz_p8g_Sketch.dylib $(BUILD_DIR)/libio_github_bernhardfritz_p8g_Sketch.so
	javac -d $(BUILD_DIR) src/main/java/io/github/bernhardfritz/p8g/Sketch.java; \
	cp $(P8G_DIR)/glfw3.dll $(BUILD_DIR); \
	cp $(P8G_DIR)/libglfw.3.dylib $(BUILD_DIR); \
	cp $(P8G_DIR)/libglfw.so $(BUILD_DIR); \
	cp $(P8G_DIR)/libp8g.dylib $(BUILD_DIR); \
	cp $(P8G_DIR)/libp8g.so $(BUILD_DIR); \
	cp $(P8G_DIR)/p8g.dll $(BUILD_DIR); \
	cd $(BUILD_DIR); \
	jar cf p8g.jar io glfw3.dll io_github_bernhardfritz_p8g_Sketch.dll libglfw.3.dylib libglfw.so libio_github_bernhardfritz_p8g_Sketch.dylib libio_github_bernhardfritz_p8g_Sketch.so libp8g.dylib libp8g.so p8g.dll

.PHONY: clean

clean:
	$(RM) -r $(BUILD_DIR)
