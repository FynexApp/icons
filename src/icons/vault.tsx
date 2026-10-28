'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The dial turns a quarter. */
export const Vault = /* @__PURE__ */ makeIcon(
  'Vault',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'circle', cx: 7.5, cy: 7.5, r: 0.5, fill: 'currentColor' },
    { tag: 'path', d: 'm7.9 7.9 2.7 2.7', part: 'dial' },
    { tag: 'circle', cx: 16.5, cy: 7.5, r: 0.5, fill: 'currentColor' },
    { tag: 'path', d: 'm13.4 10.6 2.7-2.7', part: 'dial' },
    { tag: 'circle', cx: 7.5, cy: 16.5, r: 0.5, fill: 'currentColor' },
    { tag: 'path', d: 'm7.9 16.1 2.7-2.7', part: 'dial' },
    { tag: 'circle', cx: 16.5, cy: 16.5, r: 0.5, fill: 'currentColor' },
    { tag: 'path', d: 'm13.4 13.4 2.7 2.7', part: 'dial' },
    { tag: 'circle', cx: 12, cy: 12, r: 2, part: 'dial' },
  ],
  { default: { dial: turn(90) } },
  { origins: { dial: [12, 12] } },
)
