'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The two arrows make a half turn backwards. */
export const RefreshCcwDot = /* @__PURE__ */ makeIcon(
  'RefreshCcwDot',
  [
    { tag: 'path', d: 'M3 2v6h6' },
    { tag: 'path', d: 'M21 12A9 9 0 0 0 6 5.3L3 8' },
    { tag: 'path', d: 'M21 22v-6h-6' },
    { tag: 'path', d: 'M3 12a9 9 0 0 0 15 6.7l3-2.7' },
    { tag: 'circle', cx: 12, cy: 12, r: 1 },
  ],
  { default: { group: spin(-180, 0.5) } },
)
