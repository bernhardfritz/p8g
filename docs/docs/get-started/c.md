---
description: C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C

## Hello rectangle!

<div className="flex">
<div style={{flex: 1}}>

```c title=hello_rectangle.c
#define USING_NAMESPACE_P8G
#include "p8g.h"

void draw() {
    background(220);
    rect(50, 50, 100, 100);
}

void keyPressed() {}
void keyReleased() {}
void mouseMoved() {}
void mousePressed() {}
void mouseReleased() {}
void mouseWheel(float delta) {}

int main() {
    run(320, 320, "Hello rectangle!");
}
```

</div>
<ThemedImage
  alt="Screenshot"
  sources={{
    light: useBaseUrl('/img/hello-rectangle-light.png'),
    dark: useBaseUrl('/img/hello-rectangle-dark.png'),
  }}
  width="320"
/>
</div>

## Build and run from the command line

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

```
.
├── glfw.dll
├── hello_rectangle.c
├── p8g.dll
└── p8g.h
```

```
gcc hello_rectangle.c -L. -lp8g
.\a.exe
```

Tested on Windows 10 with https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z extracted to `C:\Program Files` and `C:\Program Files\mingw64\bin` added to `PATH` environment variable.

</TabItem>
<TabItem value="macos" label="macOS">

```
.
├── hello_rectangle.c
├── libglfw.3.dylib
├── libp8g.dylib
└── p8g.h
```

```bash
gcc hello_rectangle.c -L. -lp8g
install_name_tool -add_rpath @executable_path/. a.out
./a.out
```

Tested on macOS Mojave 10.14.6 with command line tools installed via `xcode-select --install`.

</TabItem>
<TabItem value="linux" label="Linux">

```
.
├── hello_rectangle.c
├── libglfw.so.3
├── libp8g.so
└── p8g.h
```

```bash
gcc hello_rectangle.c -L. -lp8g -Wl,-rpath=.
./a.out
```

Tested on Ubuntu 20.04.3 LTS with build essentials installed via `sudo apt install build-essential`.

</TabItem>
<TabItem value="web" label="Web">

```
.
├── hello_rectangle.c
├── p8g.h
├── p8g.wasm
└── p8g.html
```

```bash
emcc -s MAIN_MODULE=2 -sEXPORTED_FUNCTIONS=_main -o hello_rectangle.html hello_rectangle.c p8g.wasm -s MIN_WEBGL_VERSION=2 -s MAX_WEBGL_VERSION=2 -s FULL_ES3=1 -s USE_GLFW=3 -s ALLOW_MEMORY_GROWTH=1 --shell-file p8g.html
emrun --no_browser hello_rectangle.html
```

Tested on macOS Mojave 10.14.6 with Emscripten SDK 3.1.8 downloaded and installed from https://emscripten.org/docs/getting_started/downloads.html.

</TabItem>
</Tabs>
