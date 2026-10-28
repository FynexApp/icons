'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The eye blinks. */
export const Eye = /* @__PURE__ */ makeIcon(
  'Eye',
  [
    { tag: 'path', d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' },
    { tag: 'circle', cx: 12, cy: 12, r: 3 },
  ],
  { default: { group: kf({ scaleY: [1, 0.1, 1] }, 0.35) } },
)
