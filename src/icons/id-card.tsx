'use client'

import { makeIcon } from '../make-icon'
import { draw, pulse } from '../motions'

/** The photo beats, the lines write themselves. */
export const IdCard = /* @__PURE__ */ makeIcon(
  'IdCard',
  [
    { tag: 'path', d: 'M16 10h2', part: 'l1' },
    { tag: 'path', d: 'M16 14h2', part: 'l2' },
    { tag: 'path', d: 'M6.17 15a3 3 0 0 1 5.66 0' },
    { tag: 'circle', cx: 9, cy: 11, r: 2, part: 'photo' },
    { tag: 'rect', x: 2, y: 5, width: 20, height: 14, rx: 2 },
  ],
  { default: { photo: pulse(1.15), l1: draw(0, 0.25), l2: draw(0.08, 0.25) } },
)
