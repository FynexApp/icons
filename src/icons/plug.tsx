'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The plug pushes in. */
export const Plug = /* @__PURE__ */ makeIcon(
  'Plug',
  [
    { tag: 'path', d: 'M12 22v-5' },
    { tag: 'path', d: 'M9 8V2' },
    { tag: 'path', d: 'M15 8V2' },
    { tag: 'path', d: 'M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z' },
  ],
  { default: { group: kf({ y: [0, 1, -1, 0] }, 0.45) } },
)
