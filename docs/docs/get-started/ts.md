---
description: TypeScript is a free and open-source programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IconExternalLink from '@theme/IconExternalLink';

# TypeScript

## Hello rectangle!

<div className="flex">
<div style={{flex: 1}}>

```ts title=hello-rectangle.ts
import p8g, {
  background,
  createCanvas,
  rect,
} from './p8g.js';

p8g.draw = () => {
  background(220);
  rect(50, 50, 100, 100);
};

createCanvas(320, 320);
```

</div>
<ThemedImage
  alt="Screenshot"
  sources={{
    light: useBaseUrl('/img/hello-rectangle.png'),
    dark: useBaseUrl('/img/hello-rectangle.png'),
  }}
  width="320"
  style={{
    padding: '30px 28px 37px 28px',
  }}
/>
</div>

```html title=index.html
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

## Run in browser

<Tabs groupId="ts">
<TabItem value="download" label="p8g.zip">

```
.
├── hello-rectangle.ts
├── index.html
├── p8g.d.ts
└── p8g.js

0 directories, 4 files
```

```tsc hello-rectangle.ts --module esnext --target es2017```

Use something like `python -m http.server` or https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer to serve your sketch during development.
</TabItem>
<TabItem value="npm" label="npm">

```
.
├── hello-rectangle.ts
├── index.html
└── vite.config.js

0 directories, 3 files
```

```diff title=index.html
- <script type="module" src="hello-rectangle.js"></script>
+ <script type="module" src="hello-rectangle.ts"></script>
```

```diff title=hello-rectangle.ts
- import { background, createCanvas, rect } from './p8g.js';
+ import { background, createCanvas, rect } from 'p8g.js';
```

```js title=vite.config.js
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [topLevelAwait()],
});
```

`npm install p8g.js`

`npm install vite --save-dev`

`npm install vite-plugin-top-level-await --save-dev`

`npx vite`

</TabItem>
<TabItem value="cookiecutter" label="Cookiecutter">

```
.

0 directories, 0 files
```

`cookiecutter https://github.com/bernhardfritz/cookiecutter-p8g`

[cookiecutter-p8g<IconExternalLink />](https://github.com/bernhardfritz/cookiecutter-p8g) is a Cookiecutter template for a p8g project.

</TabItem>
</Tabs>
