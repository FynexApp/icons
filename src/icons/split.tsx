'use client'

import { makeIcon } from '../make-icon'
import { appear, draw } from '../motions'

/** The trunk draws itself, then forks. */
export const Split = /* @__PURE__ */ makeIcon(
  'Split',
  [
    { tag: 'path', d: 'M16 3h5v5', part: 'heads' },
    { tag: 'path', d: 'M8 3H3v5', part: 'heads' },
    { tag: 'path', d: 'M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3', part: 'stem' },
    { tag: 'path', d: 'm15 9 6-6', part: 'branch' },
  ],
  { default: { stem: draw(0, 0.4), branch: draw(0.15, 0.3), heads: appear(0.3, 0.25) } },
)
