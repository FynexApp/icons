'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The umbrella sways. */
export const Umbrella = /* @__PURE__ */ makeIcon(
  'Umbrella',
  [
    { tag: 'path', d: 'M22 12a10.06 10.06 1 0 0-20 0Z' },
    { tag: 'path', d: 'M12 12v8a2 2 0 0 0 4 0' },
    { tag: 'path', d: 'M12 2v1' },
  ],
  { default: { group: rock([-8, 6, -3]) } },
  { groupOrigin: '50% 100%' },
)
