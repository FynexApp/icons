'use client'

import { makeIcon } from '../make-icon'
import { kf } from '../motions'

/** The needle sweeps the dial. */
export const Gauge = /* @__PURE__ */ makeIcon(
  'Gauge',
  [
    { tag: 'path', d: 'm12 14 4-4', part: 'needle' },
    { tag: 'path', d: 'M3.34 19a10 10 0 1 1 17.32 0' },
  ],
  { default: { needle: kf({ rotate: [0, -70, 10, 0] }, 0.6) } },
  { origins: { needle: [12, 14] } },
)
export { Gauge as GaugeIcon }
