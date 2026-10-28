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
  { name: 'Plus', slug: 'plus', family: 'actions', motion: 'The plus turns a quarter turn', aliases: [] },
  { name: 'Minus', slug: 'minus', family: 'actions', motion: 'The bar contracts', aliases: [] },
  { name: 'X', slug: 'x', family: 'actions', motion: 'The cross turns a quarter turn', aliases: ['XIcon'] },
  { name: 'Check', slug: 'check', family: 'actions', motion: 'The check draws itself', aliases: ['CheckIcon'] },
  { name: 'CheckCheck', slug: 'check-check', family: 'actions', motion: 'The two checks draw one after the other', aliases: [] },
  { name: 'Copy', slug: 'copy', family: 'actions', motion: 'The two sheets slide apart', aliases: [] },
  { name: 'Trash2', slug: 'trash-2', family: 'actions', motion: 'The lid lifts', aliases: [] },
  { name: 'Pencil', slug: 'pencil', family: 'actions', motion: 'The pencil writes', aliases: [] },
  { name: 'SquarePen', slug: 'square-pen', family: 'actions', motion: 'The pen writes inside the frame', aliases: [] },
  { name: 'Eraser', slug: 'eraser', family: 'actions', motion: 'The eraser rubs along the line', aliases: [] },
  { name: 'Brush', slug: 'brush', family: 'actions', motion: 'The brush makes a stroke', aliases: [] },
  { name: 'Save', slug: 'save', family: 'actions', motion: 'The label and the shutter draw themselves', aliases: [] },
  { name: 'Send', slug: 'send', family: 'actions', motion: 'The paper plane winds up and takes off', aliases: [] },
  { name: 'Search', slug: 'search', family: 'actions', motion: 'The magnifier sweeps around', aliases: [] },
  { name: 'SearchX', slug: 'search-x', family: 'actions', motion: 'The magnifier shakes its head', aliases: [] },
  { name: 'ScanSearch', slug: 'scan-search', family: 'actions', motion: 'The frame tightens, the magnifier searches', aliases: [] },
  { name: 'Funnel', slug: 'funnel', family: 'actions', motion: 'The funnel narrows', aliases: ['Filter'] },
  { name: 'FunnelX', slug: 'funnel-x', family: 'actions', motion: 'The cross turns', aliases: [] },
  { name: 'ListFilter', slug: 'list-filter', family: 'actions', motion: 'The three lines narrow in cascade', aliases: [] },
  { name: 'SlidersHorizontal', slug: 'sliders-horizontal', family: 'actions', motion: 'The three knobs slide', aliases: [] },
  { name: 'Settings', slug: 'settings', family: 'actions', motion: 'The gear turns one notch', aliases: [] },
  { name: 'Bookmark', slug: 'bookmark', family: 'actions', motion: 'The bookmark lifts', aliases: [] },
  { name: 'BookmarkPlus', slug: 'bookmark-plus', family: 'actions', motion: 'The plus turns', aliases: [] },
  { name: 'BookmarkMinus', slug: 'bookmark-minus', family: 'actions', motion: 'The bar contracts', aliases: [] },
  { name: 'CirclePlus', slug: 'circle-plus', family: 'actions', motion: 'The plus turns inside the circle', aliases: ['PlusCircle'] },
  { name: 'Eye', slug: 'eye', family: 'actions', motion: 'The eye blinks', aliases: [] },
  { name: 'EyeOff', slug: 'eye-off', family: 'actions', motion: 'A slash strikes through the eye', aliases: [] },
  { name: 'Lock', slug: 'lock', family: 'actions', motion: 'The shackle lifts and snaps shut', aliases: ['LockIcon'] },
  { name: 'Fullscreen', slug: 'fullscreen', family: 'actions', motion: 'The frame opens, the content grows', aliases: [] },
  { name: 'TextCursorInput', slug: 'text-cursor-input', family: 'actions', motion: 'The text cursor blinks', aliases: [] },
  { name: 'Plug', slug: 'plug', family: 'actions', motion: 'The plug pushes in', aliases: [] },
  { name: 'Unplug', slug: 'unplug', family: 'actions', motion: 'The two halves pull apart', aliases: [] },
  { name: 'ThumbsUp', slug: 'thumbs-up', family: 'actions', motion: 'The thumb gives its approval', aliases: [] },
  { name: 'ThumbsDown', slug: 'thumbs-down', family: 'actions', motion: 'The thumb gives its disapproval', aliases: [] },
  { name: 'MessageSquarePlus', slug: 'message-square-plus', family: 'actions', motion: 'The plus turns inside the bubble', aliases: [] },
  { name: 'Link2', slug: 'link-2', family: 'actions', motion: 'The two links move closer', aliases: [] },
  { name: 'Share2', slug: 'share-2', family: 'actions', motion: 'The branches draw out to both nodes', aliases: [], reversed: true },
  { name: 'ChartLine', slug: 'chart-line', family: 'data', motion: 'The line draws itself', aliases: ['LineChart', 'ChartLineIcon'], reversed: true },
  { name: 'ChartSpline', slug: 'chart-spline', family: 'data', motion: 'The curve draws itself', aliases: [] },
  { name: 'ChartColumn', slug: 'chart-column', family: 'data', motion: 'The bars grow one after another', aliases: ['BarChart3'] },
  { name: 'ChartColumnIncreasing', slug: 'chart-column-increasing', family: 'data', motion: 'The bars grow one after another', aliases: ['ChartColumnIncreasingIcon'] },
  { name: 'ChartCandlestick', slug: 'chart-candlestick', family: 'data', motion: 'The two candles move in opposite directions', aliases: [] },
  { name: 'ChartPie', slug: 'chart-pie', family: 'data', motion: 'The slice pops out', aliases: [] },
  { name: 'TrendingUp', slug: 'trending-up', family: 'data', motion: 'The trend draws itself, the arrowhead arrives', aliases: [], reversed: true },
  { name: 'Activity', slug: 'activity', family: 'data', motion: 'The pulse line draws itself', aliases: [], reversed: true },
  { name: 'Gauge', slug: 'gauge', family: 'data', motion: 'The needle sweeps the dial', aliases: ['GaugeIcon'] },
  { name: 'Coins', slug: 'coins', family: 'data', motion: 'The coin flips', aliases: [] },
  { name: 'DollarSign', slug: 'dollar-sign', family: 'data', motion: 'The S draws itself', aliases: [] },
  { name: 'Banknote', slug: 'banknote', family: 'data', motion: 'The medallion beats, the corner marks blink', aliases: [] },
  { name: 'Wallet', slug: 'wallet', family: 'data', motion: 'The wallet sways', aliases: [] },
  { name: 'CreditCard', slug: 'credit-card', family: 'data', motion: 'The magnetic strip draws itself', aliases: [] },
  { name: 'PiggyBank', slug: 'piggy-bank', family: 'data', motion: 'The piggy bank hops, the eye winks', aliases: [] },
  { name: 'Landmark', slug: 'landmark', family: 'data', motion: 'The pediment lifts, the columns rise', aliases: [] },
  { name: 'ReceiptText', slug: 'receipt-text', family: 'data', motion: 'The receipt lines write themselves', aliases: [], reversed: true },
  { name: 'Scale', slug: 'scale', family: 'data', motion: 'The beam tips and balances again', aliases: [] },
  { name: 'Database', slug: 'database', family: 'data', motion: 'The top disk lifts', aliases: [] },
  { name: 'Layers', slug: 'layers', family: 'data', motion: 'The layers spread apart', aliases: [] },
  { name: 'TableProperties', slug: 'table-properties', family: 'data', motion: 'The table rows draw themselves', aliases: [], reversed: true },
  { name: 'List', slug: 'list', family: 'data', motion: 'The rows arrive one after another', aliases: [] },
  { name: 'ListChecks', slug: 'list-checks', family: 'data', motion: 'The two checks draw themselves', aliases: [] },
  { name: 'Calendar', slug: 'calendar', family: 'data', motion: 'The rings lift', aliases: ['CalendarIcon'] },
  { name: 'CalendarDays', slug: 'calendar-days', family: 'data', motion: 'The days blink, week after week', aliases: [] },
  { name: 'CalendarClock', slug: 'calendar-clock', family: 'data', motion: 'The hands go round once', aliases: ['CalendarClockIcon'] },
  { name: 'CalendarPlus', slug: 'calendar-plus', family: 'data', motion: 'The plus turns', aliases: [] },
  { name: 'CalendarCheck', slug: 'calendar-check', family: 'data', motion: 'The check draws itself', aliases: [] },
  { name: 'Clock', slug: 'clock', family: 'data', motion: 'The hands go round once', aliases: [] },
  { name: 'Target', slug: 'target', family: 'data', motion: 'The bullseye beats, the rings answer', aliases: [] },
]
