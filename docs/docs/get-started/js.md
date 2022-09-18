---
description: JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JavaScript

## Hello rectangle!

<div className="flex">
<div style={{flex: 1}}>

```js title=hello-rectangle.js
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

<Tabs groupId="js">
<TabItem value="download" label="p8g.zip">

```
.
├── hello-rectangle.js
├── index.html
└── p8g.js
```

Use something like `python -m http.server` or https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer to serve your sketch during development.
</TabItem>
<TabItem value="cdn" label="CDN">

```
.
├── hello-rectangle.js
└── index.html
```

```diff title=hello-rectangle.js
- import { background, createCanvas, rect } from './p8g.js';
+ import { background, createCanvas, rect } from 'https://unpkg.com/p8g.js';
```

Use something like `python -m http.server` or https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer to serve your sketch during development.
</TabItem>
<TabItem value="npm" label="npm">

```
.
├── hello-rectangle.js
└── index.html
```

```diff title=hello-rectangle.js
- import { background, createCanvas, rect } from './p8g.js';
+ import { background, createCanvas, rect } from 'p8g.js';
```

`npm install p8g.js`

`npm install snowpack --save-dev`

`npx snowpack dev`

</TabItem>
</Tabs>
