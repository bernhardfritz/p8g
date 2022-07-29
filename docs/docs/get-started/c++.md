---
description: C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# C++

## Hello rectangle!

```cpp title=hello_rectangle.cpp
#include "p8g.hpp"

using namespace p8g;

void p8g::draw() {
    background(100);
    rect(50, 50, 100, 100);
}

int main() {
    run(400, 400, "Hello rectangle!");
}
```

<ThemedImage
  alt="Screenshot"
  sources={{
    light: useBaseUrl('/img/hello-rectangle-light.png'),
    dark: useBaseUrl('/img/hello-rectangle-dark.png'),
  }}
/>

## Build and run from the command line

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

```
.
├── glfw.dll
├── hello_rectangle.cpp
├── p8g++.dll
├── p8g.dll
└── p8g.hpp
```

```
g++ -std=c++11 hello_rectangle.cpp -L. -lp8g++
.\a.exe
```

Tested on Windows 10 with https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z extracted to `C:\Program Files` and `C:\Program Files\mingw64\bin` added to `PATH` environment variable.

</TabItem>
<TabItem value="macos" label="macOS">

```
.
├── hello_rectangle.cpp
├── libglfw.3.dylib
├── libp8g++.dylib
├── libp8g.dylib
└── p8g.hpp
```

```bash
g++ -std=c++11 hello_rectangle.cpp -L. -lp8g++
install_name_tool -add_rpath @executable_path/. a.out
./a.out
```

Tested on macOS Mojave 10.14.6 with command line tools installed via `xcode-select --install`.

</TabItem>
<TabItem value="linux" label="Linux">

```
.
├── hello_rectangle.cpp
├── libglfw.so
├── libp8g++.so
├── libp8g.so
└── p8g.hpp
```

```bash
g++ -std=c++11 hello_rectangle.cpp -L. -lp8g++ -Wl,-rpath=.
./a.out
```

Tested on Ubuntu 20.04.3 LTS with build essentials installed via `sudo apt install build-essential`.

</TabItem>
<TabItem value="web" label="Web">

```
.
├── hello_rectangle.cpp
├── p8g++.wasm
├── p8g.hpp
├── p8g.html
└── p8g.wasm
```

```bash
em++ -std=c++11 -s MAIN_MODULE=2 -sEXPORTED_FUNCTIONS=_main -o hello_rectangle.html hello_rectangle.cpp p8g++.wasm -L. -s MIN_WEBGL_VERSION=2 -s MAX_WEBGL_VERSION=2 -s FULL_ES3=1 -s USE_GLFW=3 --shell-file p8g.html
emrun --no_browser hello_rectangle.html
```

Tested on macOS Mojave 10.14.6 with Emscripten SDK 3.1.8 downloaded and installed from https://emscripten.org/docs/getting_started/downloads.html.

</TabItem>
</Tabs>
