# Precessing

<p align="center">
  <a href="https://bernhardfritz.github.io/p8g" target="_blank">
    <img alt="Precessing logo" src="https://bernhardfritz.github.io/p8g/img/logo-dark.png">
  </a>
</p>

<p align="center">
  Precessing, also known as <b>p8g</b>, is a general-purpose 2D graphics library.
</p>

|                                                Beginner friendly                                                 |                                    Language-agnostic                                     |                                                   Cross-platform                                                   |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| p8g has been developed for individuals interested in getting into creative programming no matter the experience. | p8g is available for C, C++, Java, JavaScript and TypeScript allowing further language bindings to be developed. | p8g applications can be developed on and built for all major operating systems including Windows, Linux and macOS as well as the web. |

## Install

`npm install p8g.js`

`npm install vite --save-dev`

`npm install vite-plugin-top-level-await --save-dev`

## Hello rectangle!

```
.
├── hello-rectangle.js
├── index.html
└── vite.config.js
```

### hello-rectangle.js

```js
import p8g, {
  background,
  createCanvas,
  rect,
} from 'p8g.js';

p8g.draw = () => {
  background(220);
  rect(50, 50, 100, 100);
};

createCanvas(320, 320);
```

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello rectangle!</title>
  </head>
  <body>
    <script type="module" src="hello-rectangle.js"></script>
  </body>
</html>
```

### vite.config.js

```js
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [topLevelAwait()],
});
```

## Run

`npx vite`

## Links

- [Documentation](https://bernhardfritz.github.io/p8g)
- [Discord](https://discord.gg/B3vrdJcra6)
