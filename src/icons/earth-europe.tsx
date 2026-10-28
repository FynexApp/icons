'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/**
 * The continents slide, the globe turns.
 *
 * The globe seen from Europe and Africa. The land masses are an original drawing, not a
 * lucide shape.
 */
export const EarthEurope = /* @__PURE__ */ makeIcon(
  'EarthEurope',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    {
      tag: 'path',
      d: 'M7.5 9.2 8 6.6l1.7-1.5 1.6.9 1.6-1.6h2.6l1.6 1.6-.5 2-2.6.6-2-.5-1.6.6zM8.5 10.8l2.6-1.1 2.9.4 2.6 1 1 2-1.6 2.5-1 2.6-1.6 2.3h-.9l-.6-3-1-2.5-.6-1.5-1.9-.5-1-1.5z',
      fill: 'currentColor',
      stroke: 'none',
      part: 'land',
    },
  ],
  { default: { land: move(-1.2, 0, 0.5) } },
)
