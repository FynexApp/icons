'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The panels of the map move apart: the map unfolds. */
export const Map = /* @__PURE__ */ makeIcon(
  'Map',
  [
    {
      tag: 'path',
      d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z',
    },
    { tag: 'path', d: 'M15 5.764v15', part: 'right' },
    { tag: 'path', d: 'M9 3.236v15', part: 'left' },
  ],
  { default: { left: move(-0.8, 0), right: move(0.8, 0) } },
)
export { Map as MapIcon }
