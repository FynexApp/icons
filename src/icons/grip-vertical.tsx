'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The handle is dragged up and down. */
export const GripVertical = /* @__PURE__ */ makeIcon(
  'GripVertical',
  [
    { tag: 'circle', cx: 9, cy: 12, r: 1 },
    { tag: 'circle', cx: 9, cy: 5, r: 1 },
    { tag: 'circle', cx: 9, cy: 19, r: 1 },
    { tag: 'circle', cx: 15, cy: 12, r: 1 },
    { tag: 'circle', cx: 15, cy: 5, r: 1 },
    { tag: 'circle', cx: 15, cy: 19, r: 1 },
  ],
  { default: { group: kf({ y: [0, -1.5, 1.5, 0] }, 0.5) } },
)
