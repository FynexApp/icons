'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow rises. */
export const BanknoteArrowUp = /* @__PURE__ */ makeIcon(
  'BanknoteArrowUp',
  [
    { tag: 'path', d: 'M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5' },
    { tag: 'path', d: 'M18 12h.01' },
    { tag: 'path', d: 'M19 22v-6', part: 'arrow' },
    { tag: 'path', d: 'm22 19-3-3-3 3', part: 'arrow' },
    { tag: 'path', d: 'M6 12h.01' },
    { tag: 'circle', cx: 12, cy: 12, r: 2 },
  ],
  { default: { arrow: move(0, -1.5) } },
)
