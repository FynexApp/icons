'use client'

import { makeIcon } from '../make-icon'
import { draw, pulse } from '../motions'

/** The sun beats, the hills draw themselves. */
export const Image = /* @__PURE__ */ makeIcon(
  'Image',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 },
    { tag: 'circle', cx: 9, cy: 9, r: 2, part: 'sun' },
    { tag: 'path', d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', part: 'hill' },
  ],
  { default: { sun: pulse(1.25), hill: draw(0, 0.45) } },
)
