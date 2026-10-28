'use client'

import { makeIcon } from '../make-icon'
import { kf, rock, turn } from '../motions'

/** The bell rings, the plus turns. */
export const BellPlus = /* @__PURE__ */ makeIcon(
  'BellPlus',
  [
    { tag: 'path', d: 'M10.268 21a2 2 0 0 0 3.464 0', part: 'clapper' },
    { tag: 'path', d: 'M15 8h6', part: 'plus' },
    { tag: 'path', d: 'M18 5v6', part: 'plus' },
    { tag: 'path', d: 'M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332', part: 'body' },
  ],
  { default: { body: rock([-8, 6, -3]), clapper: kf({ x: [0, 1.5, -1.5, 0.5, 0] }, 0.5), plus: turn(90) } },
  { origins: { body: [12, 2], plus: [18, 8] } },
)
