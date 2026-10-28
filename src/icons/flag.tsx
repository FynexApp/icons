'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The flag flutters. */
export const Flag = /* @__PURE__ */ makeIcon(
  'Flag',
  [
    { tag: 'path', d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z', part: 'cloth' },
    { tag: 'line', x1: 4, x2: 4, y1: 22, y2: 15 },
  ],
  { default: { cloth: kf({ scaleX: [1, 0.85, 1, 0.93, 1] }, 0.6) } },
  { origins: { cloth: [4, 9] } },
)
