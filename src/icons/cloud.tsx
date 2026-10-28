'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The cloud drifts. */
export const Cloud = /* @__PURE__ */ makeIcon(
  'Cloud',
  [
    { tag: 'path', d: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z' },
  ],
  { default: { group: kf({ x: [0, 1.5, -0.5, 0] }, 0.6) } },
)
