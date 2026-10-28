'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The divider slides and comes back. */
export const Rows2 = /* @__PURE__ */ makeIcon(
  'Rows2',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M3 12h18', part: 'divider' },
  ],
  { default: { divider: kf({ y: [0, -2.5, 0] }, 0.45) } },
)
export { Rows2 as Rows }
