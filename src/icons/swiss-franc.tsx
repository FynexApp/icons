'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The F of the franc draws itself, then its bars. */
export const SwissFranc = /* @__PURE__ */ makeIcon(
  'SwissFranc',
  [
    { tag: 'path', d: 'M10 21V3h8', part: 'f' },
    { tag: 'path', d: 'M6 16h9', part: 'bars' },
    { tag: 'path', d: 'M10 9.5h7', part: 'bars' },
  ],
  { default: { f: draw(0, 0.4), bars: draw(0.15, 0.3) } },
)
