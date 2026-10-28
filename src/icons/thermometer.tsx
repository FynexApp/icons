'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The thermometer gets a shake. */
export const Thermometer = /* @__PURE__ */ makeIcon(
  'Thermometer',
  [
    { tag: 'path', d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z' },
  ],
  { default: { group: rock([-6, 4, -2]) } },
  { groupOrigin: '50% 100%' },
)
