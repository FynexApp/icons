'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The colors light up one by one. */
export const Palette = /* @__PURE__ */ makeIcon(
  'Palette',
  [
    { tag: 'path', d: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z' },
    { tag: 'circle', cx: 13.5, cy: 6.5, r: 0.5, fill: 'currentColor', part: 'd3' },
    { tag: 'circle', cx: 17.5, cy: 10.5, r: 0.5, fill: 'currentColor', part: 'd4' },
    { tag: 'circle', cx: 6.5, cy: 12.5, r: 0.5, fill: 'currentColor', part: 'd1' },
    { tag: 'circle', cx: 8.5, cy: 7.5, r: 0.5, fill: 'currentColor', part: 'd2' },
  ],
  { default: { d1: blink(0, 0.3), d2: blink(0.06, 0.3), d3: blink(0.12, 0.3), d4: blink(0.18, 0.3) } },
)
