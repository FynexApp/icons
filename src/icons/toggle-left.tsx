'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The knob nudges toward the other side. */
export const ToggleLeft = /* @__PURE__ */ makeIcon(
  'ToggleLeft',
  [
    { tag: 'circle', cx: 9, cy: 12, r: 3, part: 'knob' },
    { tag: 'rect', width: 20, height: 14, x: 2, y: 5, rx: 7 },
  ],
  { default: { knob: kf({ x: [0, 2, 0] }, 0.45) } },
)
