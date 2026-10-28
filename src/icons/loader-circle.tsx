'use client'

import { makeIcon } from '../make-icon'
import { spin } from '../motions'

/** The arc goes round once (loops while waiting). */
export const LoaderCircle = /* @__PURE__ */ makeIcon(
  'LoaderCircle',
  [
    { tag: 'path', d: 'M21 12a9 9 0 1 1-6.219-8.56' },
  ],
  { default: { group: spin(360, 0.8, 'linear') } },
)
export { LoaderCircle as Loader2 }
