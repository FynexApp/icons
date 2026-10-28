'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/**
 * The arms of the k and the shoulder of the r draw themselves.
 *
 * "kr", the Swedish krona (and its Norwegian and Danish neighbours): lucide
 * has no sign for it, so this is an original drawing on the lucide grid.
 */
export const Krona = /* @__PURE__ */ makeIcon(
  'Krona',
  [
    { tag: 'path', d: 'M5 4v16' },
    { tag: 'path', d: 'M12.5 9 5 15m3-2.4 5 7.4', part: 'k' },
    { tag: 'path', d: 'M16 20v-10' },
    { tag: 'path', d: 'M16 14.5c0-2.8 1.6-4.5 4-4.5', part: 'r' },
  ],
  { default: { k: draw(0, 0.35), r: draw(0.15, 0.3) } },
)
