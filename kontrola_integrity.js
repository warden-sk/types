/*
 * Copyright 2023 Marek Kobida
 */

const fs = require('fs');
const http = require('https');
const path = require('path');

function fileRows(file, from, to) {
  return file
    .toString()
    .split(/\n/)
    .filter((a, b) => b >= from - 1 && b <= to - 1);
}

const notAllowed = [
  'animate',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'switch',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
  'view',
];

function test(rows) {
  const elements = {};

  rows.forEach(row => {
    const [, l, r] = /^\s*([^:]+):\s*([^;]+);/.exec(row) ?? [];
    l &&
      r &&
      notAllowed.indexOf(l) === -1 &&
      (elements[l.replace(/"/g, '')] = r.replace(/^\$</g, '').replace(/>>$/g, '>'));
  });

  return elements;
}

http
  .request(
    {
      host: 'raw.githubusercontent.com',
      path: '/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts',
    },
    response => {
      let i = 0,
        file = '';

      response.on('data', chunk => {
        i += chunk.byteLength;
        file += chunk;
        console.log(((i / response.headers['content-length']) * 100).toFixed(2));
      });

      response.on('end', () => {
        const a = test(fileRows(file, 3144, 3325));
        const b = test(fileRows(fs.readFileSync(path.resolve(__dirname, './index.d.ts')), 24, 136));

        Object.entries(a).forEach(([aL, aR], i) => {
          if (!(aL in b)) console.log(`"${aL}" is not in "@types/warden-sk/design"`);
          else if (aR !== b[aL])
            console.log(
              `(${i})(@types/react)            ${aR}\n\x1b[31m(${i})(@types/warden-sk/design) ${b[aL]}\x1b[0m`
            );
        });
      });
    }
  )
  .end();
