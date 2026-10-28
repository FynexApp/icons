'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The brush makes a stroke. */
export const Brush = /* @__PURE__ */ makeIcon(
  'Brush',
  [
    { tag: 'path', d: 'm11 10 3 3' },
    { tag: 'path', d: 'M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z' },
    { tag: 'path', d: 'M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031' },
  ],
  { default: { group: rock([-4, 3]) } },
  { groupOrigin: '15% 85%' },
)
