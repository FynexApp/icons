'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The two arrows make a half turn. */
export const RefreshCw = /* @__PURE__ */ makeIcon(
  'RefreshCw',
  [
    { tag: 'path', d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' },
    { tag: 'path', d: 'M21 3v5h-5' },
    { tag: 'path', d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' },
    { tag: 'path', d: 'M8 16H3v5' },
  ],
  { default: { group: spin(180, 0.5) } },
)
