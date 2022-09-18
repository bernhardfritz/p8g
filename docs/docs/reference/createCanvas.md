import { Highlight } from '@site/src/components/Highlight';

# createCanvas

<Highlight>JavaScript only</Highlight>

## Description

Creates a canvas element in the document and sets its dimensions in pixels. The variables `width` and `height` are set by the parameters passed to this function.

By default, your canvas is added to the end of the web page it's in. Alternatively, you may want to position your canvas in the midst of other information on your page. This can be done by using the [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) function:

```html title=index.html
<!DOCTYPE html>
<html>
  <head>
    <title>My Sketch</title>
  </head>
  <body>
    <p>Here is my sketch:</p>
    <div id="sketch-holder">
      <!-- Our sketch will go here! -->
    </div>
    <p>Pretty cool, eh?</p>
    <script type="module" src="sketch.js"></script>
  </body>
</html>

```

```js title=sketch.js
import p8g, {
  background,
  createCanvas,
  rect,
} from './p8g.js';

p8g.draw = () => {
  background(220);
  rect(50, 50, 100, 100);
};

const canvas = createCanvas(320, 320);
const sketchHolder = document.getElementById('sketch-holder');
sketchHolder.appendChild(canvas);
```

## Syntax

```js
createCanvas(w, h)
```

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| w         | width of the canvas  |
| h         | height of the canvas |

## Returns

[HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
