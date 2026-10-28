'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The medal swings from its ribbon. */
export const Medal = /* @__PURE__ */ makeIcon(
  'Medal',
  [
    { tag: 'path', d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15' },
    { tag: 'path', d: 'M11 12 5.12 2.2' },
    { tag: 'path', d: 'm13 12 5.88-9.8' },
    { tag: 'path', d: 'M8 7h8' },
    { tag: 'circle', cx: 12, cy: 17, r: 5, part: 'medal' },
    { tag: 'path', d: 'M12 18v-2h-.5', part: 'medal' },
  ],
  { default: { medal: rock([-12, 8, -4]) } },
  { origins: { medal: [12, 12] } },
)
