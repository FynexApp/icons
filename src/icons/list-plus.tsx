'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns. */
export const ListPlus = /* @__PURE__ */ makeIcon(
  'ListPlus',
  [
    { tag: 'path', d: 'M11 12H3' },
    { tag: 'path', d: 'M16 6H3' },
    { tag: 'path', d: 'M16 18H3' },
    { tag: 'path', d: 'M18 9v6', part: 'plus' },
    { tag: 'path', d: 'M21 12h-6', part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [18, 12] } },
)
