'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The snowflake turns by one branch. */
export const Snowflake = /* @__PURE__ */ makeIcon(
  'Snowflake',
  [
    { tag: 'path', d: 'm10 20-1.25-2.5L6 18' },
    { tag: 'path', d: 'M10 4 8.75 6.5 6 6' },
    { tag: 'path', d: 'm14 20 1.25-2.5L18 18' },
    { tag: 'path', d: 'm14 4 1.25 2.5L18 6' },
    { tag: 'path', d: 'm17 21-3-6h-4' },
    { tag: 'path', d: 'm17 3-3 6 1.5 3' },
    { tag: 'path', d: 'M2 12h6.5L10 9' },
    { tag: 'path', d: 'm20 10-1.5 2 1.5 2' },
    { tag: 'path', d: 'M22 12h-6.5L14 15' },
    { tag: 'path', d: 'm4 10 1.5 2L4 14' },
    { tag: 'path', d: 'm7 21 3-6-1.5-3' },
    { tag: 'path', d: 'm7 3 3 6h4' },
  ],
  { default: { group: turn(60, 0.6) } },
)
