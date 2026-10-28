'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The crown lifts. */
export const Crown = /* @__PURE__ */ makeIcon(
  'Crown',
  [
    { tag: 'path', d: 'M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z', part: 'crown' },
    { tag: 'path', d: 'M5 21h14' },
  ],
  { default: { crown: kf({ y: [0, -1, 0], rotate: [0, -3, 0] }) } },
)
