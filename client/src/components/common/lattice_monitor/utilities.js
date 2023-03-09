"use strict";

export const {
  abs,
  acos,
  asin,
  atan,
  atan2,
  ceil,
  cos,
  max,
  min,
  PI,
  pow,
  random,
  round,
  sin,
  sqrt,
  tan,
} = Math;
export const HALF_PI = 0.5 * PI;
export const QUART_PI = 0.25 * PI;
export const TAU = 2 * PI;
export const TO_RAD = PI / 180;
export const G = 6.67 * pow(10, -11);
export const EPSILON = 2.220446049250313e-16;
export const rand = (n) => n * random();
export const randIn = (_min, _max) => rand(_max - _min) + _min;
export const randRange = (n) => n - rand(2 * n);
export const fadeIn = (t, m) => t / m;
export const fadeOut = (t, m) => (m - t) / m;
export const fadeInOut = (t, m) => {
  let hm = 0.5 * m;
  return abs(((t + hm) % m) - hm) / hm;
};
export const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
export const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);
export const lerp = (a, b, t) => (1 - t) * a + t * b;
export const clamp = (n, _min, _max) => min(max(n, _min), _max);
export const norm = (n, _min, _max) => (n - _min) / (_max - _min);
export const floor = (n) => n | 0;
export const fract = (n) => n - floor(n);
export const vh = (p) => p * window.innerHeight * 0.01;
export const vw = (p) => p * window.innerWidth * 0.01;
export const vmin = (p) => min(vh(p), vw(p));
export const vmax = (p) => max(vh(p), vw(p));
export const intToRGBA = (n) => {
  let r, g, b, a;

  n >>>= 0;

  r = (n & 0xff000000) >>> 24;
  g = (n & 0xff0000) >>> 16;
  b = (n & 0xff00) >>> 8;
  a = (n & 0xff) / 255;

  return `rgba(${[r, g, b, a].join()})`;
};
export const nearestMultiple = (n, d) => n - (n % d);
export const drawTypes = {
  FILL: "fill",
  STROKE: "stroke",
};
export const textAlignTypes = {
  CENTER: "center",
  END: "end",
  LEFT: "left",
  RIGHT: "right",
  START: "start",
};
export const textBaselineTypes = {
  ALPHABETIC: "alphabetic",
  BOTTOM: "bottom",
  HANGING: "hanging",
  MIDDLE: "middle",
  TOP: "top",
};
export const debounce = (fn, wait = 200) => {
  let timeout;

  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => fn(...args), wait);
  };
};

function initGlobals() {
    Array.prototype.lerp = function (t = [], a = 0) {
        this.forEach((n, i) => (this[i] = lerp(n, t[i], a)));
    };
      
    Float32Array.prototype.get = function (i = 0, n = 0) {
        return this.slice(i, i + n);
    };
}

export class PropsArray {
  constructor(count = 0, props = [], type = "float") {
    this.count = count;
    this.props = props;
    this.spread = props.length;
    this.values =
      type === "float"
        ? new Float32Array(count * props.length)
        : new Uint32Array(count * props.length);
  }
  get length() {
    return this.values.length;
  }
  set(a = [], i = 0) {
    this.values.set(a, i);
  }
  setMap(o = {}, i = 0) {
    this.set(Object.values(o), i);
  }
  get(i = 0) {
    return this.values.get(i, this.spread);
  }
  getMap(i = 0) {
    return this.get(i).reduce((r, v, i) => {
      r[this.props[i]] = v;

      return r;
    }, {});
  }
  forEach(cb) {
    let i = 0;

    for (; i < this.length; i += this.spread) {
      cb(this.get(i), i, this);
    }
  }
  map(cb) {
    let i = 0;

    for (; i < this.length; i += this.spread) {
      this.set(cb(this.get(i), i, this), i);
    }
  }
  async *read() {
    let i = 0;

    for (; i < this.length; i += this.spread) {
      yield { index: i, value: this.get(i) };
    }
  }
}

function createOffscreenCanvas(width, height) {
  let _canvas;

  if (typeof OffscreenCanvas !== "undefined") {
    _canvas = new OffscreenCanvas(parseFloat(width), parseFloat(height));
  } else {
    _canvas = createCanvas(width, height);
  }

  return _canvas;
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  return canvas;
}

function createContext2D(
  width = innerWidth,
  height = innerHeight,
  contextAttributes
) {
  return createCanvas(width, height).getContext("2d", contextAttributes);
}

function createOffscreenContext2D(
  width = innerWidth,
  height = innerHeight,
  contextAttributes
) {
  return createOffscreenCanvas(width, height).getContext(
    "2d",
    contextAttributes
  );
}

function createRenderingContext(target, width, height, wFull = false, hFull = false) {

    const contextAttributes = {
        alpha: true,
        desynchronized: true,
    };

    const ctx = createContext2D(width, height, contextAttributes);
    const buffer = createOffscreenContext2D(width, height, contextAttributes);

    //console.log(width, height);

    //ctx.canvas.style.position = "absolute";
    ctx.canvas.style.width = width + "px"
    ctx.canvas.style.height = height + "px"

    if (wFull) ctx.canvas.style.width = window.innerWidth
    if (hFull) ctx.canvas.style.height = window.innerHeight
    //ctx.canvas.style.position = "block"

    try {
        target.appendChild(ctx.canvas);
    } catch (e) {
        console.error(e);
    }

    return {
        buffer,
        ctx,
    };
}


export default {
    initGlobals,
    createRenderingContext,
}