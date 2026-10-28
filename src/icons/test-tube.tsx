'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The test tube gets a shake. */
export const TestTube = /* @__PURE__ */ makeIcon(
  'TestTube',
  [
    { tag: 'path', d: 'M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2' },
    { tag: 'path', d: 'M8.5 2h7' },
    { tag: 'path', d: 'M14.5 16h-5' },
  ],
  { default: { group: rock([-8, 6, -3]) } },
  { groupOrigin: '50% 100%' },
)
