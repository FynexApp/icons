'use client'

import { makeIcon } from '../make-icon'
import { blink, draw } from '../motions'

/** The circuits draw themselves, the nodes blink. */
export const BrainCircuit = /* @__PURE__ */ makeIcon(
  'BrainCircuit',
  [
    { tag: 'path', d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z' },
    { tag: 'path', d: 'M9 13a4.5 4.5 0 0 0 3-4' },
    { tag: 'path', d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5' },
    { tag: 'path', d: 'M3.477 10.896a4 4 0 0 1 .585-.396' },
    { tag: 'path', d: 'M6 18a4 4 0 0 1-1.967-.516' },
    { tag: 'path', d: 'M12 13h4', part: 'c2' },
    { tag: 'path', d: 'M12 18h6a2 2 0 0 1 2 2v1', part: 'c3' },
    { tag: 'path', d: 'M12 8h8', part: 'c1' },
    { tag: 'path', d: 'M16 8V5a2 2 0 0 1 2-2', part: 'c1' },
    { tag: 'circle', cx: 16, cy: 13, r: 0.5, part: 'nodes' },
    { tag: 'circle', cx: 18, cy: 3, r: 0.5, part: 'nodes' },
    { tag: 'circle', cx: 20, cy: 21, r: 0.5, part: 'nodes' },
    { tag: 'circle', cx: 20, cy: 8, r: 0.5, part: 'nodes' },
  ],
  { default: { c1: draw(0, 0.3), c2: draw(0.08, 0.3), c3: draw(0.16, 0.3), nodes: blink(0.2, 0.35) } },
)
