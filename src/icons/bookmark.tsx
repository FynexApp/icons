'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The bookmark lifts. */
export const Bookmark = /* @__PURE__ */ makeIcon(
  'Bookmark',
  [
    { tag: 'path', d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' },
  ],
  { default: { group: move(0, -1.5) } },
)
