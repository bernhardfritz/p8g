import ModuleFactory from '../build/p8g.js';
import p8gWasm from '../../c/p8g.wasm';
const Module = await ModuleFactory({
  canvas: (() => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`
      canvas.p8g {
        border: 0px none;
        background-color: black;
        image-rendering: optimizeSpeed;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: optimize-contrast;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        -ms-interpolation-mode: nearest-neighbor;
        margin: -0.375px 0 0 -0.375px;
      }
    `);
    style.sheet.insertRule(`
      .hidden {
        display: none;
      }
    `);
    const canvasWrapper = document.createElement('div');
    document.body.appendChild(canvasWrapper);
    canvasWrapper.style.cssText = 'display: inline-flex; overflow: hidden;';
    const canvas = document.createElement('canvas');
    canvasWrapper.appendChild(canvas);
    canvas.classList.add('p8g');
    canvas.classList.add('hidden');
    canvas.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    canvas.tabIndex = -1;
    canvas.getContext = ((getContext) => {
      return function (contextType, contextAttributes) {
        if (contextAttributes) {
          contextAttributes.antialias = false;
          contextAttributes.imageSmoothingEnabled = false;
          contextAttributes.preserveDrawingBuffer = true;
        }
        return getContext.call(this, contextType, contextAttributes);
      };
    })(canvas.getContext);
    return canvas;
  })(),
  locateFile: (path, scriptDirectory) => {
    if (path.endsWith('.wasm')) {
      return 'data:application/octet-stream;base64,' + p8gWasm;
    }
    return scriptDirectory + path;
  },
});
/**
 * @type {{
 * draw: () => void,
 * keyPressed: () => void,
 * keyReleased: () => void,
 * mouseMoved: () => void,
 * mousePressed: () => void,
 * mouseReleased: () => void,
 * mouseWheel: (deltaY: number) => void
 * }}
 */
const p8g = {
  draw: () => {},
  keyPressed: () => {},
  keyReleased: () => {},
  mouseMoved: () => {},
  mousePressed: () => {},
  mouseReleased: () => {},
  mouseWheel: (deltaY) => {},
};
export default p8g;
export const CORNER = 0;
export const CORNERS = 1;
export const RADIUS = 2;
export const CENTER = 3;
export const RGB = 0;
export const HSB = 1;
export const HSL = 2;
export let width = 100;
export let height = 100;
export let keyCode = 0;
export let keyIsPressed = false;
export let mouseX = 0;
export let mouseY = 0;
export let mouseButton = 0;
export let mouseIsPressed = false;
export let deltaTime = 0;
/** @type {(a: number, b: number, c: number, d: number, e: number, f: number) => void} */
export const applyMatrix = Module.cwrap('p8g_apply_matrix', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
/**
 * @type {{
* (values: [number, number, number, number]) => void;
* (gray: number) => void;
* (gray: number, alpha: number) => void;
* (v1: number, v2: number, v3: number) => void;
* (v1: number, v2: number, v3: number, alpha: number) => void;
* }}
*/
export const background = (() => {
  const background = Module.cwrap('p8g_background', 'void', ['array']);
  const background1 = Module.cwrap('background1', 'void', ['number']);
  const background2 = Module.cwrap('background2', 'void', ['number', 'number']);
  const background3 = Module.cwrap('background3', 'void', [
    'number',
    'number',
    'number',
  ]);
  const background4 = Module.cwrap('background4', 'void', [
    'number',
    'number',
    'number',
    'number',
  ]);
  return (...args) => {
    switch (args.length) {
      case 1:
        if (Array.isArray(args[0])) {
          background(new Uint8Array(new Float32Array(args[0]).buffer));
        } else {
          background1(args[0]);
        }
        break;
      case 2:
        background2(args[0], args[1]);
        break;
      case 3:
        background3(args[0], args[1], args[2]);
        break;
      case 4:
        background4(args[0], args[1], args[2], args[3]);
        break;
    }
  };
})();
/** @type {(mode: RGB | HSB | HSL) => void} */
export const colorMode = Module.cwrap('p8g_color_mode', 'void', ['number']);
/** @type {(x: number, y: number, w: number, h: number) => void} */
export const ellipse = Module.cwrap('p8g_ellipse', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
/** @type {(mode: CORNER | CORNERS | RADIUS | CENTER) => void} */
export const ellipseMode = Module.cwrap('p8g_ellipse_mode', 'void', ['number']);
/**
 * @type {{
* (values: [number, number, number, number]) => void;
* (gray: number) => void;
* (gray: number, alpha: number) => void;
* (v1: number, v2: number, v3: number) => void;
* (v1: number, v2: number, v3: number, alpha: number) => void;
* }}
*/
export const fill = (() => {
  const fill = Module.cwrap('p8g_fill', 'void', ['array']);
  const fill1 = Module.cwrap('fill1', 'void', ['number']);
  const fill2 = Module.cwrap('fill2', 'void', ['number', 'number']);
  const fill3 = Module.cwrap('fill3', 'void', ['number', 'number', 'number']);
  const fill4 = Module.cwrap('fill4', 'void', [
    'number',
    'number',
    'number',
    'number',
  ]);
  return (...args) => {
    switch (args.length) {
      case 1:
        if (Array.isArray(args[0])) {
          fill(new Uint8Array(new Float32Array(args[0]).buffer));
        } else {
          fill1(args[0]);
        }
        break;
      case 2:
        fill2(args[0], args[1]);
        break;
      case 3:
        fill3(args[0], args[1], args[2]);
        break;
      case 4:
        fill4(args[0], args[1], args[2], args[3]);
        break;
    }
  };
})();
/** @typedef {{ _index: number, width: number, height: number }} Image */
/**
 * @type {{
 * (img: Image, x: number, y: number) => void;
 * (img: Image, x: number, y: number, width: number) => void;
 * (img: Image, x: number, y: number, width: number, height: number) => void;
 * (img: Image, dx: number, dy: number, dw: number, dh: number, sx: number) => void;
 * (img: Image, dx: number, dy: number, dw: number, dh: number, sx: number, sy: number) => void;
 * (img: Image, dx: number, dy: number, dw: number, dh: number, sx: number, sy: number, sw: number) => void;
 * (img: Image, dx: number, dy: number, dw: number, dh: number, sx: number, sy: number, sw: number, sh: number) => void;
 * }}
 */
export const image = (() => {
  const image = Module.cwrap('image', 'void', [
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
  ]);
  return (...args) => {
    if (args.length < 3 || !args[0]) {
      return;
    }
    switch (args.length) {
      case 3:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[0].width,
          args[0].height,
          0,
          0,
          args[0].width,
          args[0].height,
        );
        break;
      case 4:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[0].height,
          0,
          0,
          args[0].width,
          args[0].height,
        );
        break;
      case 5:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[4],
          0,
          0,
          args[0].width,
          args[0].height,
        );
        break;
      case 6:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[4],
          args[5],
          0,
          args[0].width,
          args[0].height,
        );
        break;
      case 7:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[4],
          args[5],
          args[6],
          args[0].width,
          args[0].height,
        );
        break;
      case 8:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[4],
          args[5],
          args[6],
          args[7],
          args[0].height,
        );
        break;
      case 9:
        image(
          args[0]._index,
          args[1],
          args[2],
          args[3],
          args[4],
          args[5],
          args[6],
          args[7],
          args[8],
        );
        break;
    }
  };
})();
/** @type {(mode: CORNER | CORNERS | RADIUS | CENTER) => void} */
export const imageMode = Module.cwrap('p8g_image_mode', 'void', ['number']);
/** @type {(x1: number, y1: number, x2: number, y2: number) => void} */
export const line = Module.cwrap('p8g_line', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
/** @typedef {{ _index: number }} Font */
/** @type {(filename: string) => Promise<Font>} */
export const loadFont = (() => {
  const loadFont = Module.cwrap('loadFont', 'number', ['string']);
  return async (url) => {
    const data = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => new Uint8Array(arrayBuffer));
    const { hostname, pathname } = new URL(url, document.baseURI);
    const path = hostname + pathname;
    const dir = path.slice(0, path.lastIndexOf('/'));
    Module.FS_createPath('/', dir, true, true);
    Module.FS_createDataFile('/', path, data, true, false);
    return {
      _index: loadFont(path),
    };
  };
})();
/** @type {(filename: string) => Promise<Image>} */
export const loadImage = (() => {
  const loadImage = Module.cwrap('loadImage', 'number', ['string']);
  return async (url) => {
    const data = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => new Uint8Array(arrayBuffer));
    const { hostname, pathname } = new URL(url, document.baseURI);
    const path = hostname + pathname;
    const dir = path.slice(0, path.lastIndexOf('/'));
    Module.FS_createPath('/', dir, true, true);
    Module.FS_createDataFile('/', path, data, true, false);
    let i = loadImage(path);
    if (i === -1) {
      return {
        _index: -1,
        width: 0,
        height: 0,
      };
    }
    return {
      _index: (i >> 24) & 0xff,
      width: (i >> 12) & 0xfff,
      height: i & 0xfff,
    };
  };
})();
/** @type {() => number} */
export const millis = (() => {
  const time = Module.cwrap('p8g_time', 'float', []);
  return () => {
    return time() * 1000;
  };
})();
/** @type {() => void} */
export const noFill = Module.cwrap('p8g_no_fill', 'void', []);
/** @type {() => void} */
export const noSmooth = Module.cwrap('p8g_no_smooth', 'void', []);
/** @type {() => void} */
export const noStroke = Module.cwrap('p8g_no_stroke', 'void', []);
/** @type {() => void} */
export const noTint = Module.cwrap('p8g_no_tint', 'void', []);
/** @type {(x: number, y: number) => void} */
export const point = Module.cwrap('p8g_point', 'void', ['number', 'number']);
/** @type {() => void} */
export const pop = Module.cwrap('p8g_pop', 'void', []);
/** @type {() => void} */
export const push = Module.cwrap('p8g_push', 'void', []);
/**
 * @type {{
 * () => number;
 * (max: number) => number;
 * (min: number, max: number) => number;
 * }}
 */
export const random = (() => {
  const random = Module.cwrap('p8g_random', 'number', ['number', 'number']);
  return (...args) => {
    switch (args.length) {
      case 0:
        return random(0, 1);
      case 1:
        return random(0, args[0]);
      case 2:
        return random(args[0], args[1]);
    }
  };
})();
/** @type {(seed: number) => void} */
export const randomSeed = Module.cwrap('p8g_random_seed', 'void', ['number']);
/** @type {(x: number, y: number, w: number, h: number) => void} */
export const rect = Module.cwrap('p8g_rect', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
/** @type {(mode: CORNER | CORNERS | RADIUS | CENTER) => void} */
export const rectMode = Module.cwrap('p8g_rect_mode', 'void', ['number']);
/** @type {() => void} */
export const resetMatrix = Module.cwrap('p8g_reset_matrix', 'void', []);
/** @type {(angle: number) => void} */
export const rotate = Module.cwrap('p8g_rotate', 'void', ['number']);

/** @type {(width: number, height: number) => HTMLCanvasElement} */
export const createCanvas = (() => {
  const run = Module.cwrap('run', 'void', [
    'number',
    'number',
    'string',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
    'number',
  ]);
  const draw = (_deltaTime) => {
    deltaTime = _deltaTime * 1000;
    p8g.draw();
  };
  const keyPressed = (_keyCode) => {
    keyCode = _keyCode;
    keyIsPressed = true;
    p8g.keyPressed();
  };
  const keyReleased = (_keyCode) => {
    keyCode = _keyCode;
    keyIsPressed = false;
    p8g.keyReleased();
  };
  const mouseMoved = (_mouseX, _mouseY) => {
    mouseX = _mouseX;
    mouseY = _mouseY;
    p8g.mouseMoved();
  };
  const mousePressed = (_mouseButton) => {
    mouseButton = _mouseButton;
    mouseIsPressed = true;
    p8g.mousePressed();
  };
  const mouseReleased = (_mouseButton) => {
    mouseButton = _mouseButton;
    mouseIsPressed = false;
    p8g.mouseReleased();
  };
  const mouseWheel = (deltaX, deltaY) => {
    p8g.mouseWheel(deltaY);
  };
  return (_width, _height) => {
    width = _width;
    height = _height;
    Module.canvas.classList.remove('hidden');
    run(
      width,
      height,
      'Sketch',
      0,
      Module.addFunction(draw, 'vf'),
      Module.addFunction(keyPressed, 'vi'),
      Module.addFunction(keyReleased, 'vi'),
      Module.addFunction(mouseMoved, 'vff'),
      Module.addFunction(mousePressed, 'vi'),
      Module.addFunction(mouseReleased, 'vi'),
      Module.addFunction(mouseWheel, 'vff'),
    );
    return Module.canvas;
  };
})();
/**
 * @type {{
 * (s: number) => void;
 * (x: number, y: number) => void;
 * }}
 */
export const scale = (() => {
  const scale = Module.cwrap('p8g_scale', 'void', ['number']);
  return (...args) => {
    switch (args.length) {
      case 1:
        scale(args[0], args[0]);
        break;
      case 2:
        scale(args[0], args[1]);
        break;
    }
  };
})();
/** @type {() => void} */
export const smooth = Module.cwrap('p8g_smooth', 'void', []);
/**
 * @type {{
* (values: [number, number, number, number]) => void;
* (gray: number) => void;
* (gray: number, alpha: number) => void;
* (v1: number, v2: number, v3: number) => void;
* (v1: number, v2: number, v3: number, alpha: number) => void;
* }}
*/
export const stroke = (() => {
  const stroke = Module.cwrap('p8g_stroke', 'void', ['array']);
  const stroke1 = Module.cwrap('stroke1', 'void', ['number']);
  const stroke2 = Module.cwrap('stroke2', 'void', ['number', 'number']);
  const stroke3 = Module.cwrap('stroke3', 'void', [
    'number',
    'number',
    'number',
  ]);
  const stroke4 = Module.cwrap('stroke4', 'void', [
    'number',
    'number',
    'number',
    'number',
  ]);
  return (...args) => {
    switch (args.length) {
      case 1:
        if (Array.isArray(args[0])) {
          stroke(new Uint8Array(new Float32Array(args[0]).buffer));
        } else {
          stroke1(args[0]);
        }
        break;
      case 2:
        stroke2(args[0], args[1]);
        break;
      case 3:
        stroke3(args[0], args[1], args[2]);
        break;
      case 4:
        stroke4(args[0], args[1], args[2], args[3]);
        break;
    }
  };
})();
/** @type {(weight: number) => void} */
export const strokeWeight = Module.cwrap('p8g_stroke_weight', 'void', [
  'number',
]);
/** @type {(str: string, x: number, y: number) => void} */
export const text = Module.cwrap('p8g_text', 'void', [
  'string',
  'number',
  'number',
]);
/** @type {(font: Font) => void} */
export const textFont = (() => {
  const textFont = Module.cwrap('textFont', 'void', ['number']);
  return (font) => {
    textFont(font._index);
  };
})();
/** @type {(size: number) => void} */
export const textSize = Module.cwrap('p8g_text_size', 'void', ['number']);
/**
 * @type {{
 * (values: [number, number, number, number]) => void;
 * (gray: number) => void;
 * (gray: number, alpha: number) => void;
 * (v1: number, v2: number, v3: number) => void;
 * (v1: number, v2: number, v3: number, alpha: number) => void;
 * }}
 */
export const tint = (() => {
  const tint = Module.cwrap('p8g_tint', 'void', ['array']);
  const tint1 = Module.cwrap('tint1', 'void', ['number']);
  const tint2 = Module.cwrap('tint2', 'void', ['number', 'number']);
  const tint3 = Module.cwrap('tint3', 'void', ['number', 'number', 'number']);
  const tint4 = Module.cwrap('tint4', 'void', [
    'number',
    'number',
    'number',
    'number',
  ]);
  return (...args) => {
    switch (args.length) {
      case 1:
        if (Array.isArray(args[0])) {
          tint(new Uint8Array(new Float32Array(args[0]).buffer));
        } else {
          tint1(args[0]);
        }
        break;
      case 2:
        tint2(args[0], args[1]);
        break;
      case 3:
        tint3(args[0], args[1], args[2]);
        break;
      case 4:
        tint4(args[0], args[1], args[2], args[3]);
        break;
    }
  };
})();
/** @type {(x: number, y: number) => void} */
export const translate = Module.cwrap('p8g_translate', 'void', [
  'number',
  'number',
]);
/** @type {(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void} */
export const triangle = Module.cwrap('p8g_triangle', 'void', [
  'number',
  'number',
  'number',
  'number',
  'number',
  'number',
]);
