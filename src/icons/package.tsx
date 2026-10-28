'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The parcel hops. */
export const Package = /* @__PURE__ */ makeIcon(
  'Package',
  [
    { tag: 'path', d: 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z' },
    { tag: 'path', d: 'M12 22V12' },
    { tag: 'polyline', points: '3.29 7 12 12 20.71 7' },
    { tag: 'path', d: 'm7.5 4.27 9 5.15' },
  ],
  { default: { group: kf({ y: [0, -1.5, 0, -0.5, 0] }, 0.5) } },
)
