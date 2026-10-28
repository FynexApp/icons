'use client'

import { makeIcon } from '../make-icon'
import { kf, rock } from '../motions'

/** The bell rings. */
export const Bell = /* @__PURE__ */ makeIcon(
  'Bell',
  [
    { tag: 'path', d: 'M10.268 21a2 2 0 0 0 3.464 0', part: 'clapper' },
    { tag: 'path', d: 'M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326', part: 'body' },
  ],
  { default: { body: rock([-8, 6, -3]), clapper: kf({ x: [0, 1.5, -1.5, 0.5, 0] }, 0.5) } },
  { origins: { body: [12, 2] } },
)
