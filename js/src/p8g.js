import ModuleFactory from '../build/p8g.js';
import p8gWasm from '../../c/p8g.wasm';
const Module = await ModuleFactory({
  canvas: (() => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    return canvas;
  })(),
  locateFile: (path, scriptDirectory) => {
    if (path.endsWith('.wasm')) {
      return 'data:application/octet-stream;base64,' + p8gWasm;
    }
    return scriptDirectory + path;
  }
});
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
export const applyMatrix = Module.cwrap('p8g_apply_matrix', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
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
export const colorMode = Module.cwrap('p8g_color_mode', 'void', ['number']);
export const ellipse = Module.cwrap('p8g_ellipse', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
export const ellipseMode = Module.cwrap('p8g_ellipse_mode', 'void', ['number']);
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
export const imageMode = Module.cwrap('p8g_image_mode', 'void', ['number']);
export const line = Module.cwrap('p8g_line', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
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
export const millis = (() => {
  const time = Module.cwrap('p8g_time', 'float', []);
  return () => {
    return time() * 1000;
  };
})();
export const noFill = Module.cwrap('p8g_no_fill', 'void', []);
export const noSmooth = Module.cwrap('p8g_no_smooth', 'void', []);
export const noStroke = Module.cwrap('p8g_no_stroke', 'void', []);
export const noTint = Module.cwrap('p8g_no_tint', 'void', []);
export const point = Module.cwrap('p8g_point', 'void', ['number', 'number']);
export const pop = Module.cwrap('p8g_pop', 'void', []);
export const push = Module.cwrap('p8g_push', 'void', []);
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
export const randomSeed = Module.cwrap('p8g_random_seed', 'void', ['number']);
export const rect = Module.cwrap('p8g_rect', 'void', [
  'number',
  'number',
  'number',
  'number',
]);
export const rectMode = Module.cwrap('p8g_rect_mode', 'void', ['number']);
export const resetMatrix = Module.cwrap('p8g_reset_matrix', 'void', []);
export const rotate = Module.cwrap('p8g_rotate', 'void', ['number']);

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
  const keyReleased = (keyCode) => {
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
  const mouseReleased = (mouseButton) => {
    mouseIsPressed = false;
    p8g.mouseReleased();
  };
  const mouseWheel = (deltaX, deltaY) => {
    p8g.mouseWheel(deltaY);
  };
  return (_width, _height) => {
    width = _width;
    height = _height;
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
export const smooth = Module.cwrap('p8g_smooth', 'void', []);
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
export const strokeWeight = Module.cwrap('p8g_stroke_weight', 'void', [
  'number',
]);
export const text = Module.cwrap('p8g_text', 'void', [
  'string',
  'number',
  'number',
]);
export const textFont = (() => {
  const textFont = Module.cwrap('textFont', 'void', ['number']);
  return (font) => {
    textFont(font._index);
  };
})();
export const textSize = Module.cwrap('p8g_text_size', 'void', ['number']);
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
export const translate = Module.cwrap('p8g_translate', 'void', [
  'number',
  'number',
]);
export const triangle = Module.cwrap('p8g_triangle', 'void', [
  'number',
  'number',
  'number',
  'number',
  'number',
  'number',
]);
