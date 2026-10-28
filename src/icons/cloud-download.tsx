'use client'

import { makeIcon } from '../make-icon'
import { move } from '../motions'

/** The arrow drops out of the cloud. */
export const CloudDownload = /* @__PURE__ */ makeIcon(
  'CloudDownload',
  [
    { tag: 'path', d: 'M12 13v8l-4-4', part: 'arrow' },
    { tag: 'path', d: 'm12 21 4-4', part: 'arrow' },
    { tag: 'path', d: 'M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284' },
  ],
  { default: { arrow: move(0, 1.5) } },
)
export { CloudDownload as DownloadCloud }
