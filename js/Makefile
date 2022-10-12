ifeq ($(origin CC),default)
CC = emcc
endif
MKDIR_P ?= mkdir -p
P8G_DIR := ../c
SRC_DIR := src
_SRCS := p8g.js.c
SRCS := $(_SRCS:%=$(SRC_DIR)/%)
BUILD_DIR := build
_OBJS := $(_SRCS:%.c=%.o)
OBJS := $(_SRCS:%.c=$(BUILD_DIR)/%.o)
TARGET := p8g.js
FLAGS := ../c/p8g.wasm -s MIN_WEBGL_VERSION=2 -s MAX_WEBGL_VERSION=2 -s FULL_ES3=1 -s USE_GLFW=3 -s EXPORTED_RUNTIME_METHODS=cwrap,addFunction -s ALLOW_TABLE_GROWTH -s FORCE_FILESYSTEM -s SINGLE_FILE -s MODULARIZE -s EXPORT_ES6 -s ENVIRONMENT=web -s ALLOW_MEMORY_GROWTH=1
ifeq ($(OS),Windows_NT)
	UNAME_S := Windows
else
	UNAME_S := $(shell uname -s)
endif
ifeq ($(UNAME_S),Linux)
	SED_I := sed -i
endif
ifeq ($(UNAME_S),Darwin)
	SED_I := sed -i ''
endif

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c
	$(CC) -c -fPIC $< -o $@ -I$(P8G_DIR)

all: $(OBJS)
	$(CC) -s MAIN_MODULE=2 -o $(BUILD_DIR)/$(TARGET) $< -L$(P8G_DIR) $(FLAGS); \
	$(SED_I) 's/readAsync(libFile, (data) => resolve(new Uint8Array(data)), reject);/readAsync(locateFile(libFile), (data) => resolve(new Uint8Array(data)), reject);/g' $(BUILD_DIR)/$(TARGET)

$(OBJS): | $(BUILD_DIR)

$(BUILD_DIR):
	$(MKDIR_P) $(BUILD_DIR)

.PHONY: clean

clean:
	$(RM) -r $(BUILD_DIR)
