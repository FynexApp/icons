'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The dot of the i hops. */
export const Info = /* @__PURE__ */ makeIcon(
  'Info',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M12 16v-4' },
    { tag: 'path', d: 'M12 8h.01', part: 'dot' },
  ],
  { default: { dot: move(0, -1.5, 0.35) } },
)
