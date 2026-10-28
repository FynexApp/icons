'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow leaves the frame. */
export const ExternalLink = /* @__PURE__ */ makeIcon(
  'ExternalLink',
  [
    { tag: 'path', d: 'M15 3h6v6', part: 'arrow' },
    { tag: 'path', d: 'M10 14 21 3', part: 'arrow' },
    { tag: 'path', d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' },
  ],
  { default: { arrow: move(1.5, -1.5) } },
)
