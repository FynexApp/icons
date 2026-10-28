'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/**
 * The continents slide, the globe turns.
 *
 * The globe seen from the Americas. The land masses are an original drawing, not a
 * lucide shape.
 */
export const EarthAmericas = /* @__PURE__ */ makeIcon(
  'EarthAmericas',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    {
      tag: 'path',
      d: 'M4.6 7.4 7.8 4.8l4.2-.9 2.6 1.1-1 2-1.6 1.6-1 2-1.6 1-1-1.5-2-1-1.9-.2zM10.9 12.4l2.1-.4 2.6 1 1 2-1.6 2.5-1.5 3h-1l-.6-3.4-1-2.4z',
      fill: 'currentColor',
      stroke: 'none',
      part: 'land',
    },
  ],
  { default: { land: move(-1.2, 0, 0.5) } },
)
