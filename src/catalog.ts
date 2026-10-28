/**
 * The icon catalog: family, motion and aliases of every icon. It references
 * no component, so importing it embeds nothing. It is the single source for
 * the tests, the shadcn registry and the icon table of the README (see
 * `scripts/generate.ts`).
 */

export type IconFamily = 'arrows' | 'actions' | 'data' | 'status' | 'navigation' | 'objects'

export const ICON_FAMILIES: Record<IconFamily, { label: string; grammar: string }> = {
  arrows: {
    label: 'Arrows and chevrons',
    grammar:
      'Anything that points or turns: an arrow nudges a pixel or two in its own direction and settles back, a loop goes all the way round.',
  },
  actions: {
    label: 'Actions',
    grammar:
      'What the user does: each icon mimes its own action (the lid lifts, the check draws itself, the plus turns).',
  },
  data: {
    label: 'Data and charts',
    grammar:
      'Lines draw themselves, bars grow, list rows arrive one after another.',
  },
  status: {
    label: 'Status',
    grammar:
      'What informs or warns: a light blinks, the bell rings, the exclamation mark shakes its head.',
  },
  navigation: {
    label: 'Navigation and interface',
    grammar:
      'The landmarks of an interface: panels, pages, people, tools.',
  },
  objects: {
    label: 'Objects',
    grammar:
      'Everyday things, each doing what the object does: the heart beats, the flame flickers, the rocket takes off.',
  },
}

export type IconCatalogEntry = {
  /** Name of the exported component. */
  name: string
  /** File name (`src/icons/<slug>.tsx`) and shadcn registry item name. */
  slug: string
  family: IconFamily
  /** What the icon does on hover, in one sentence. */
  motion: string
  /** Other names lucide exports the same icon under, re-exported for a drop-in migration. */
  aliases: string[]
  /** True when the path was rewritten in the other direction so that it draws the right way round. */
  reversed?: boolean
}

export const ICON_CATALOG: IconCatalogEntry[] = [
  { name: 'ArrowUp', slug: 'arrow-up', family: 'arrows', motion: 'The arrow rises and settles back', aliases: [] },
  { name: 'ArrowDown', slug: 'arrow-down', family: 'arrows', motion: 'The arrow dips and settles back', aliases: ['ArrowDownIcon'] },
  { name: 'ArrowLeft', slug: 'arrow-left', family: 'arrows', motion: 'The arrow steps back and returns', aliases: ['ArrowLeftIcon'] },
  { name: 'ArrowRight', slug: 'arrow-right', family: 'arrows', motion: 'The arrow steps forward and returns', aliases: [] },
  { name: 'ArrowUpRight', slug: 'arrow-up-right', family: 'arrows', motion: 'The arrow shoots off diagonally and returns', aliases: ['ArrowUpRightIcon'] },
  { name: 'ArrowDownUp', slug: 'arrow-down-up', family: 'arrows', motion: 'The two arrows pass each other', aliases: [] },
  { name: 'ArrowUpDown', slug: 'arrow-up-down', family: 'arrows', motion: 'The two arrows pass each other', aliases: [] },
  { name: 'ArrowLeftRight', slug: 'arrow-left-right', family: 'arrows', motion: 'The two arrows move apart', aliases: [] },
  { name: 'ChevronDown', slug: 'chevron-down', family: 'arrows', motion: 'The chevron dips and settles back', aliases: ['ChevronDownIcon'] },
  { name: 'ChevronUp', slug: 'chevron-up', family: 'arrows', motion: 'The chevron rises and settles back', aliases: [] },
  { name: 'ChevronLeft', slug: 'chevron-left', family: 'arrows', motion: 'The chevron steps back and returns', aliases: ['ChevronLeftIcon'] },
  { name: 'ChevronRight', slug: 'chevron-right', family: 'arrows', motion: 'The chevron steps forward and returns', aliases: ['ChevronRightIcon'] },
  { name: 'ChevronsUpDown', slug: 'chevrons-up-down', family: 'arrows', motion: 'The two chevrons move apart', aliases: [] },
  { name: 'CornerLeftUp', slug: 'corner-left-up', family: 'arrows', motion: 'The bend draws itself, the tip rises', aliases: [] },
  { name: 'ExternalLink', slug: 'external-link', family: 'arrows', motion: 'The arrow leaves the frame', aliases: [] },
  { name: 'GitCompareArrows', slug: 'git-compare-arrows', family: 'arrows', motion: 'The two links draw toward each other', aliases: [] },
  { name: 'Split', slug: 'split', family: 'arrows', motion: 'The trunk draws itself, then forks', aliases: [] },
  { name: 'RotateCw', slug: 'rotate-cw', family: 'arrows', motion: 'The loop makes a full turn', aliases: [] },
  { name: 'RotateCcw', slug: 'rotate-ccw', family: 'arrows', motion: 'The loop makes a full turn backwards', aliases: [] },
  { name: 'RefreshCw', slug: 'refresh-cw', family: 'arrows', motion: 'The two arrows make a half turn', aliases: [] },
  { name: 'RefreshCcwDot', slug: 'refresh-ccw-dot', family: 'arrows', motion: 'The two arrows make a half turn backwards', aliases: [] },
  { name: 'History', slug: 'history', family: 'arrows', motion: 'The dial winds time back one turn', aliases: [] },
  { name: 'Share', slug: 'share', family: 'arrows', motion: 'The arrow leaves through the top', aliases: [] },
  { name: 'Upload', slug: 'upload', family: 'arrows', motion: 'The arrow rises', aliases: [] },
  { name: 'Download', slug: 'download', family: 'arrows', motion: 'The arrow drops', aliases: ['DownloadIcon'] },
  { name: 'FileUp', slug: 'file-up', family: 'arrows', motion: 'The arrow rises inside the page', aliases: [] },
]
