'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/**
 * The continents slide, the globe turns.
 *
 * The globe seen from Asia and Oceania. The land masses are an original drawing, not a
 * lucide shape.
 */
export const EarthAsia = /* @__PURE__ */ makeIcon(
  'EarthAsia',
  [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    {
      tag: 'path',
      d: 'M4.6 7.2 7 5.1l4-1.1h4l3 1.5 1.5 2.5-2 1.5-1.5 1.5-2-.5-1.5 1.5-2-2H8L5.5 9zM13 15.6l3-1.1 2 1-.5 2.6-2.5.5-1.5-1z',
      fill: 'currentColor',
      stroke: 'none',
      part: 'land',
    },
  ],
  { default: { land: move(-1.2, 0, 0.5) } },
)
