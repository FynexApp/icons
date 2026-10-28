'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The awning flutters. */
export const Store = /* @__PURE__ */ makeIcon(
  'Store',
  [
    { tag: 'path', d: 'm2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' },
    { tag: 'path', d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' },
    { tag: 'path', d: 'M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' },
    { tag: 'path', d: 'M2 7h20' },
    { tag: 'path', d: 'M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7', part: 'awning' },
  ],
  { default: { awning: kf({ scaleY: [1, 0.7, 1] }, 0.45) } },
  { origins: { awning: [12, 7] } },
)
