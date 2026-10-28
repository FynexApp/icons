'use client'

import { makeIcon } from '../make-icon'
import { rock } from '../motions'

/** The folder tips open and settles back. */
export const Folder = /* @__PURE__ */ makeIcon(
  'Folder',
  [
    { tag: 'path', d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' },
  ],
  { default: { group: rock([-5, 3]) } },
  { groupOrigin: '0% 100%' },
)
