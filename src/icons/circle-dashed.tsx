'use client'

import { makeIcon } from '../make-icon'
import { turn } from '../motions'

/** The dashed circle turns a quarter. */
export const CircleDashed = /* @__PURE__ */ makeIcon(
  'CircleDashed',
  [
    { tag: 'path', d: 'M10.1 2.182a10 10 0 0 1 3.8 0' },
    { tag: 'path', d: 'M13.9 21.818a10 10 0 0 1-3.8 0' },
    { tag: 'path', d: 'M17.609 3.721a10 10 0 0 1 2.69 2.7' },
    { tag: 'path', d: 'M2.182 13.9a10 10 0 0 1 0-3.8' },
    { tag: 'path', d: 'M20.279 17.609a10 10 0 0 1-2.7 2.69' },
    { tag: 'path', d: 'M21.818 10.1a10 10 0 0 1 0 3.8' },
    { tag: 'path', d: 'M3.721 6.391a10 10 0 0 1 2.7-2.69' },
    { tag: 'path', d: 'M6.391 20.279a10 10 0 0 1-2.69-2.7' },
  ],
  { default: { group: turn(90, 0.5) } },
)
