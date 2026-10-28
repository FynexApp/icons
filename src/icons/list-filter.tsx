'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The three lines narrow in cascade. */
export const ListFilter = /* @__PURE__ */ makeIcon(
  'ListFilter',
  [
    { tag: 'path', d: 'M3 6h18', part: 'a' },
    { tag: 'path', d: 'M7 12h10', part: 'b' },
    { tag: 'path', d: 'M10 18h4', part: 'c' },
  ],
  { default: { a: kf({ scaleX: [1, 0.7, 1] }, 0.35), b: kf({ scaleX: [1, 0.7, 1] }, 0.35, 0.07), c: kf({ scaleX: [1, 0.7, 1] }, 0.35, 0.14) } },
)
