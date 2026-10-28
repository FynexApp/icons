'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two candles move in opposite directions. */
export const ChartCandlestick = /* @__PURE__ */ makeIcon(
  'ChartCandlestick',
  [
    { tag: 'path', d: 'M9 5v4', part: 'a' },
    { tag: 'rect', width: 4, height: 6, x: 7, y: 9, rx: 1, part: 'a' },
    { tag: 'path', d: 'M9 15v2', part: 'a' },
    { tag: 'path', d: 'M17 3v2', part: 'b' },
    { tag: 'rect', width: 4, height: 8, x: 15, y: 5, rx: 1, part: 'b' },
    { tag: 'path', d: 'M17 13v3', part: 'b' },
    { tag: 'path', d: 'M3 3v16a2 2 0 0 0 2 2h16' },
  ],
  { default: { a: move(0, 1.5), b: move(0, -1.5, 0.4, 0.08) } },
)
