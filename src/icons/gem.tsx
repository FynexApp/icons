'use client'

import { makeIcon } from '../make-icon'
import { draw } from '../motions'

/** The facets draw themselves. */
export const Gem = /* @__PURE__ */ makeIcon(
  'Gem',
  [
    { tag: 'path', d: 'M6 3h12l4 6-10 13L2 9Z' },
    { tag: 'path', d: 'M11 3 8 9l4 13 4-13-3-6', part: 'facets' },
    { tag: 'path', d: 'M2 9h20', part: 'girdle' },
  ],
  { default: { facets: draw(0, 0.5), girdle: draw(0.1, 0.3) } },
)
