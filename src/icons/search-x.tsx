'use client'

import { makeIcon } from '../make-icon'
import { shake } from '../motions'

/** The magnifier shakes its head. */
export const SearchX = /* @__PURE__ */ makeIcon(
  'SearchX',
  [
    { tag: 'path', d: 'm13.5 8.5-5 5' },
    { tag: 'path', d: 'm8.5 8.5 5 5' },
    { tag: 'circle', cx: 11, cy: 11, r: 8 },
    { tag: 'path', d: 'm21 21-4.3-4.3' },
  ],
  { default: { group: shake(1.5) } },
)
