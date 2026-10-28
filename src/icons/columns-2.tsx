'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The divider slides and comes back. */
export const Columns2 = /* @__PURE__ */ makeIcon(
  'Columns2',
  [
    { tag: 'rect', width: 18, height: 18, x: 3, y: 3, rx: 2 },
    { tag: 'path', d: 'M12 3v18', part: 'divider' },
  ],
  { default: { divider: kf({ x: [0, -2.5, 0] }, 0.45) } },
)
export { Columns2 as Columns }
