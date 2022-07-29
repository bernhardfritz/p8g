---
description: Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java

## Hello rectangle!

```java title=HelloRectangle.java
import io.github.bernhardfritz.p8g.Sketch;

public class HelloRectangle extends Sketch {
    @Override
    public void draw() {
        background(100);
        rect(50, 50, 100, 100);
    }

    public static void main(String[] args) {
        Sketch sketch = new HelloRectangle();
        sketch.run(400, 400, "Hello rectangle!");
    }
}
```

<ThemedImage
  alt="Screenshot"
  sources={{
    light: useBaseUrl('/img/hello-rectangle-light.png'),
    dark: useBaseUrl('/img/hello-rectangle-dark.png'),
  }}
/>

## Build and run with an IDE

### IntelliJ IDEA

![IntelliJ project settings](/img/intellij-project-settings.png)

<details>
<summary>macOS users should start their application passing <code>-XstartOnFirstThread</code> as a VM option.</summary>

![IntelliJ run configuration](/img/intellij-run-configuration.png)

</details>

Tested on IntelliJ IDEA Community 2021.3.3.

### Eclipse

![Eclipse project settings](/img/eclipse-project-settings.png)

<details>
<summary>macOS users should start their application passing <code>-XstartOnFirstThread</code> as a VM option.</summary>

![Eclipse run configuration](/img/eclipse-run-configuration.png)

</details>

Tested on Eclipse 4.23.

## Build and run from the command line

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

```
.
├── HelloRectangle.java
└── p8g.jar
```

```
javac -cp p8g.jar HelloRectangle.java
java -cp .;p8g.jar HelloRectangle
```

Tested on Windows 10 with OpenJDK installed from https://adoptium.net/.

</TabItem>
<TabItem value="macos" label="macOS">

```
.
├── HelloRectangle.java
└── p8g.jar
```

```
javac -cp p8g.jar HelloRectangle.java
java -XstartOnFirstThread -cp .:p8g.jar HelloRectangle
```

Tested on macOS Mojave 10.14.6 with OpenJDK installed via `brew install --cask temurin`.

</TabItem>
<TabItem value="linux" label="Linux">

```
.
├── HelloRectangle.java
└── p8g.jar
```

```
javac -cp p8g.jar HelloRectangle.java
java -cp .:p8g.jar HelloRectangle
```

Tested on Ubuntu 20.04.3 LTS with OpenJDK installed via `sudo apt install temurin-17-jdk`.

</TabItem>
</Tabs>
