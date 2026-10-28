'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The arc of the euro draws itself, then its two bars. */
export const Euro = /* @__PURE__ */ makeIcon(
  'Euro',
  [
    { tag: 'path', d: 'M4 10h12', part: 'bars' },
    { tag: 'path', d: 'M4 14h9', part: 'bars' },
    { tag: 'path', d: 'M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2', part: 'arc' },
  ],
  { default: { arc: draw(0, 0.45), bars: draw(0.15, 0.3) } },
)
