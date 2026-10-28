'use client'

import { makeIcon } from '../make-icon'
import { draw, pulse } from '../motions'

/** The links draw themselves, the nodes beat. */
export const ChartNetwork = /* @__PURE__ */ makeIcon(
  'ChartNetwork',
  [
    { tag: 'path', d: 'm13.11 7.664 1.78 2.672', part: 'e2' },
    { tag: 'path', d: 'm14.162 12.788-3.324 1.424', part: 'e3' },
    { tag: 'path', d: 'm20 4-6.06 1.515', part: 'e1' },
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
    { tag: 'circle', cx: 12, cy: 6, r: 2, part: 'nodes' },
    { tag: 'circle', cx: 16, cy: 12, r: 2, part: 'nodes' },
    { tag: 'circle', cx: 9, cy: 15, r: 2, part: 'nodes' },
  ],
  { default: { e1: draw(0, 0.25), e2: draw(0.12, 0.25), e3: draw(0.24, 0.25), nodes: pulse(1.2, 0.4, 0.1) } },
)
