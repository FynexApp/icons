'use client'

import { makeIcon } from '../make-icon'
import { shake } from '../motions'

/** The exclamation mark shakes its head. */
export const CircleAlert = /* @__PURE__ */ makeIcon(
  'CircleAlert',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'line', x1: 12, x2: 12, y1: 8, y2: 12, part: 'mark' },
    { tag: 'line', x1: 12, x2: 12.01, y1: 16, y2: 16, part: 'mark' },
  ],
  { default: { mark: shake(1) } },
)
export { CircleAlert as AlertCircle }
