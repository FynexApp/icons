'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns inside the circle. */
export const CirclePlus = /* @__PURE__ */ makeIcon(
  'CirclePlus',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M8 12h8', part: 'plus' },
    { tag: 'path', d: 'M12 8v8', part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [12, 12] } },
)
export { CirclePlus as PlusCircle }
