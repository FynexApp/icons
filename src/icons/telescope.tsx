'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The telescope pivots on its stand. */
export const Telescope = /* @__PURE__ */ makeIcon(
  'Telescope',
  [
    { tag: 'path', d: 'm10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44', part: 'scope' },
    { tag: 'path', d: 'm13.56 11.747 4.332-.924', part: 'scope' },
    { tag: 'path', d: 'm16 21-3.105-6.21' },
    { tag: 'path', d: 'M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z', part: 'scope' },
    { tag: 'path', d: 'm6.158 8.633 1.114 4.456', part: 'scope' },
    { tag: 'path', d: 'm8 21 3.105-6.21' },
    { tag: 'circle', cx: 12, cy: 13, r: 2 },
  ],
  { default: { scope: rock([-8, 5]) } },
  { origins: { scope: [12, 13] } },
)
export { Telescope as TelescopeIcon }
