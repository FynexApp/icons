'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The plus turns. */
export const FilePlus = /* @__PURE__ */ makeIcon(
  'FilePlus',
  [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'M9 15h6', part: 'plus' },
    { tag: 'path', d: 'M12 18v-6', part: 'plus' },
  ],
  { default: { plus: turn(90) } },
  { origins: { plus: [12, 15] } },
)
