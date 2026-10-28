'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The label and the shutter draw themselves. */
export const Save = /* @__PURE__ */ makeIcon(
  'Save',
  [
    { tag: 'path', d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' },
    { tag: 'path', d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', part: 'label' },
    { tag: 'path', d: 'M7 3v4a1 1 0 0 0 1 1h7', part: 'slot' },
  ],
  { default: { label: draw(0, 0.4), slot: draw(0.1, 0.3) } },
)
