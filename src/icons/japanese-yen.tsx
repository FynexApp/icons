'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The V of the yen draws itself, then its two bars. */
export const JapaneseYen = /* @__PURE__ */ makeIcon(
  'JapaneseYen',
  [
    { tag: 'path', d: 'M12 9.5V21m0-11.5L6 3m6 6.5L18 3', part: 'v' },
    { tag: 'path', d: 'M6 15h12', part: 'bars' },
    { tag: 'path', d: 'M6 11h12', part: 'bars' },
  ],
  { default: { v: draw(0, 0.4), bars: draw(0.15, 0.3) } },
)
