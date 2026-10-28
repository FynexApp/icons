'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow rises into the cloud. */
export const CloudUpload = /* @__PURE__ */ makeIcon(
  'CloudUpload',
  [
    { tag: 'path', d: 'M12 13v8', part: 'arrow' },
    { tag: 'path', d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242' },
    { tag: 'path', d: 'm8 17 4-4 4 4', part: 'arrow' },
  ],
  { default: { arrow: move(0, -1.5) } },
)
export { CloudUpload as UploadCloud }
