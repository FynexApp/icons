'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The three shapes hop one after another. */
export const Shapes = /* @__PURE__ */ makeIcon(
  'Shapes',
  [
    { tag: 'path', d: 'M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z', part: 'triangle' },
    { tag: 'rect', x: 3, y: 14, width: 7, height: 7, rx: 1, part: 'square' },
    { tag: 'circle', cx: 17.5, cy: 17.5, r: 3.5, part: 'round' },
  ],
  { default: { square: move(0, -1.5, 0.3), triangle: move(0, -1.5, 0.3, 0.08), round: move(0, -1.5, 0.3, 0.16) } },
)
