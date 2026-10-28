'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The two halves pull apart. */
export const Unplug = /* @__PURE__ */ makeIcon(
  'Unplug',
  [
    { tag: 'path', d: 'm19 5 3-3', part: 'high' },
    { tag: 'path', d: 'm2 22 3-3', part: 'low' },
    { tag: 'path', d: 'M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z', part: 'low' },
    { tag: 'path', d: 'M7.5 13.5 10 11', part: 'low' },
    { tag: 'path', d: 'M10.5 16.5 13 14', part: 'low' },
    { tag: 'path', d: 'm12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z', part: 'high' },
  ],
  { default: { low: move(-1, 1), high: move(1, -1) } },
)
