'use client'

import { makeIcon } from '../make-icon'
import { draw, pulse } from '../motions'

/** The frame tightens, the face smiles. */
export const ScanFace = /* @__PURE__ */ makeIcon(
  'ScanFace',
  [
    { tag: 'path', d: 'M3 7V5a2 2 0 0 1 2-2h2', part: 'frame' },
    { tag: 'path', d: 'M17 3h2a2 2 0 0 1 2 2v2', part: 'frame' },
    { tag: 'path', d: 'M21 17v2a2 2 0 0 1-2 2h-2', part: 'frame' },
    { tag: 'path', d: 'M7 21H5a2 2 0 0 1-2-2v-2', part: 'frame' },
    { tag: 'path', d: 'M8 14s1.5 2 4 2 4-2 4-2', part: 'smile' },
    { tag: 'path', d: 'M9 9h.01' },
    { tag: 'path', d: 'M15 9h.01' },
  ],
  { default: { frame: pulse(0.9), smile: draw(0, 0.35) } },
  { origins: { frame: [12, 12] } },
)
