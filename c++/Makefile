ifeq ($(origin CC),default)
CC = g++
endif
MKDIR_P ?= mkdir -p
P8G_DIR := ../c
SRC_DIR := .
_SRCS := p8g.cpp
SRCS := $(_SRCS:%=$(SRC_DIR)/%)
BUILD_DIR := build
_OBJS := $(_SRCS:%.cpp=%.o)
OBJS := $(_SRCS:%.cpp=$(BUILD_DIR)/%.o)
ifeq ($(OS),Windows_NT)
	UNAME_S := Windows
else
	UNAME_S := $(shell uname -s)
endif
ifeq ($(UNAME_S),Windows)
	TARGET := p8g++.dll
	FLAGS := -lp8g
endif
ifeq ($(UNAME_S),Linux)
	TARGET := libp8g++.so
	FLAGS := -lp8g -Wl,-rpath='$$ORIGIN'
endif
ifeq ($(UNAME_S),Darwin)
	TARGET := libp8g++.dylib
	FLAGS := -lp8g -install_name @rpath/$(TARGET)
endif
ifdef EMSCRIPTEN
	TARGET := p8g++.wasm
	FLAGS := ../c/p8g.wasm
endif

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp
	$(CC) -std=c++11 -c -fPIC $< -o $@ -I$(P8G_DIR)

all: $(OBJS)
	$(CC) $(if $(EMSCRIPTEN),-s SIDE_MODULE,-shared) -o $(BUILD_DIR)/$(TARGET) $< -L$(P8G_DIR) $(FLAGS)

$(OBJS): | $(BUILD_DIR)

$(BUILD_DIR):
	$(MKDIR_P) $(BUILD_DIR)

.PHONY: clean

clean:
	$(RM) -r $(BUILD_DIR)
