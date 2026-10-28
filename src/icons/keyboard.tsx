'use client'

import { makeIcon } from '../make-icon'
import { blink } from '../motions'

/** The keys are struck from left to right. */
export const Keyboard = /* @__PURE__ */ makeIcon(
  'Keyboard',
  [
    { tag: 'path', d: 'M10 8h.01', part: 'k2' },
    { tag: 'path', d: 'M12 12h.01', part: 'k2' },
    { tag: 'path', d: 'M14 8h.01', part: 'k3' },
    { tag: 'path', d: 'M16 12h.01', part: 'k3' },
    { tag: 'path', d: 'M18 8h.01', part: 'k4' },
    { tag: 'path', d: 'M6 8h.01', part: 'k1' },
    { tag: 'path', d: 'M7 16h10' },
    { tag: 'path', d: 'M8 12h.01', part: 'k1' },
    { tag: 'rect', width: 20, height: 16, x: 2, y: 4, rx: 2 },
  ],
  { default: { k1: blink(0, 0.3), k2: blink(0.06, 0.3), k3: blink(0.12, 0.3), k4: blink(0.18, 0.3) } },
)
export { Keyboard as KeyboardIcon }
