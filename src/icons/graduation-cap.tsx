'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The tassel swings. */
export const GraduationCap = /* @__PURE__ */ makeIcon(
  'GraduationCap',
  [
    { tag: 'path', d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' },
    { tag: 'path', d: 'M22 10v6', part: 'tassel' },
    { tag: 'path', d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5' },
  ],
  { default: { tassel: rock([10, -8, 4]) } },
  { origins: { tassel: [22, 10] } },
)
