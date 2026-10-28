'use client'

import { makeIcon } from '../make-icon'
import { blink, pulse } from '../motions'

/** The medallion beats, the corner marks blink. */
export const Banknote = /* @__PURE__ */ makeIcon(
  'Banknote',
  [
    { tag: 'rect', width: 20, height: 12, x: 2, y: 6, rx: 2 },
    { tag: 'circle', cx: 12, cy: 12, r: 2, part: 'center' },
    { tag: 'path', d: 'M6 12h.01M18 12h.01', part: 'dots' },
  ],
  { default: { center: pulse(1.25), dots: blink(0.1) } },
)
