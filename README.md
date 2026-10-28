# @fynex/icons

Animated SVG icons for React, with one motion grammar for the whole set.

- **173 icons** drawn on the lucide grid (24 x 24, stroke 2, round caps, `currentColor`), with the same names and props as `lucide-react`.
- **A plain SVG at rest.** The `motion` elements are mounted only while a gesture plays, then unmounted, so a long table of icons costs about what static SVGs cost.
- **One grammar, not 173 ideas.** Every gesture comes from the same handful of motion factories, with the same durations, curves and amplitudes. A set that moves as one family, not a gallery of effects.
- **Triggers that fit a design system.** Icons play on their own hover, on the hover of the button or menu row that contains them, or on demand (`animate`, `loop`, `animateOnTap`, `animateOnView`).
- **Accessible by default.** Decorative unless labelled, still under `prefers-reduced-motion`, no fake hover on touch screens.
- **Two ways to install.** An npm package (ESM, typed, tree-shakable), or a shadcn registry that copies the source into your app.

Made for and used in production by [Fynex](https://fynexapp.com).

## Contents

- [Why another animated icon set](#why-another-animated-icon-set)
- [The motion grammar](#the-motion-grammar)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Icons](#icons)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Why another animated icon set

Libraries such as `lucide-animated` or `animate-ui` animate each icon on its own terms: every icon is a small piece of motion design, written once, with its own timings. That is great for a hero section and tiring in a product, where dozens of icons sit side by side in toolbars, menus and tables.

`@fynex/icons` takes the opposite approach. Icons are data (a list of shapes, some of them named parts) and their animation is picked from a small grammar shared by the whole set. The result is a set that feels like one system: an arrow always nudges a pixel or two in its own direction, a check always draws itself, a symmetric shape always holds a quarter turn. And because an icon is a plain SVG until the pointer reaches it, you can afford to animate every icon of an app.

## The motion grammar

Every gesture lasts between 0.2 and 0.8 seconds (most of them 0.3 to 0.6), moves by one or two pixels on the 24 grid, and animates only transforms, opacity and path length: nothing that triggers a layout. The test suite enforces these rules for every icon.

There are two kinds of gestures:

- **The round trip.** Keyframes that start from rest and end on it, so the icon is back in place before the pointer even leaves: `move`, `rock`, `pulse`, `blink`, `shake`, `draw`, `appear`, `spin` and the generic `kf`.
- **The held state.** `turn` keeps a part rotated while hovered. It is reserved for symmetric shapes (a plus, a cross, a gear) where the rotated drawing looks the same as the resting one.

| Factory | What it does | Typical use |
| --- | --- | --- |
| `move(x, y)` | Moves forward, then back | Arrows, chevrons, lids, anything that points |
| `rock(angles)` | A damped swing around a pivot | Bells, tags, brushes, thumbs |
| `pulse(scale)` | A beat of scale | Hearts, shields, badges |
| `blink(delay)` | Dips the opacity and comes back | Status lights, dots, cursors |
| `shake(amplitude)` | A shake of the head | Refusal, warnings |
| `turn(degrees)` | A rotation held while hovered | Plus, cross, gear |
| `spin(degrees)` | A full turn that snaps back to zero | Refresh, history, loaders in a loop |
| `draw(delay)` | The path draws itself | Checks, lines, charts, text rows |
| `appear(delay)` | Fades in while growing slightly | Waves, leaves, arrowheads |
| `kf(frames)` | Any round trip keyframes | Everything else |

Each family applies the grammar in its own way:

| Family | Grammar |
| --- | --- |
| Arrows and chevrons | Anything that points or turns: an arrow nudges a pixel or two in its own direction and settles back, a loop goes all the way round. |
| Actions | What the user does: each icon mimes its own action (the lid lifts, the check draws itself, the plus turns). |
| Data and charts | Lines draw themselves, bars grow, list rows arrive one after another. |
| Status | What informs or warns: a light blinks, the bell rings, the exclamation mark shakes its head. |
| Navigation and interface | The landmarks of an interface: panels, pages, people, tools. |
| Objects | Everyday things, each doing what the object does: the heart beats, the flame flickers, the rocket takes off. |

## Install

### npm

```sh
npm install @fynex/icons motion
```

`react` (18.2 or later) and `motion` (12 to 14) are peer dependencies. The package is ESM only, ships its type declarations, has no side effects and exports every icon by name, so your bundler keeps only the icons you import. Every module that needs it starts with `'use client'`, so the icons work in React Server Components trees (Next.js App Router) out of the box.

### shadcn

Each icon is also a shadcn registry item. The CLI copies the source into your project, together with the shared core (factory, motion grammar and triggers) the first time:

```sh
npx shadcn@latest add https://fynexapp.github.io/icons/r/arrow-right.json
npx shadcn@latest add https://fynexapp.github.io/icons/r/check.json https://fynexapp.github.io/icons/r/trash-2.json
```

The files land in `components/fynex-icons/` (under the `components` alias of your `components.json`): the core next to `icons/`, one file per icon.

```tsx
import { ArrowRight } from '@/components/fynex-icons/icons/arrow-right'
```

To use short names, register the namespace once in `components.json`:

```json
{
  "registries": {
    "@fynex-icons": "https://fynexapp.github.io/icons/r/{name}.json"
  }
}
```

```sh
npx shadcn@latest add @fynex-icons/arrow-right
```

The registry is served from `https://fynexapp.github.io/icons/r/` (the `public/r/` output of `npm run registry:build`, published with GitHub Pages). This address is a placeholder until the site is live.

## Usage

### Drop-in for lucide

```tsx
import { Download, Trash2 } from '@fynex/icons'

<Download />
<Trash2 size={16} className="text-red-500" strokeWidth={1.5} />
```

An icon renders a real `<svg>` and accepts every SVG prop, plus `size` (24 by default). Color follows `currentColor`, so `className="text-..."` or `style={{ color }}` work as with lucide. The lucide aliases the set covers (`Loader2`, `XCircle`, `ChevronDownIcon`, ...) are exported too, so most imports only need a new package name.

### Hover

With no setup, an icon plays its gesture when the pointer enters it. Most of the time, though, the icon sits inside something clickable, and it is the hover of that element that should play it. Wire the trigger once into your own components:

```tsx
import { IconTriggerScope, useIconTrigger } from '@fynex/icons'

export function Button({ onMouseEnter, onMouseLeave, ...props }: React.ComponentProps<'button'>) {
  const trigger = useIconTrigger<HTMLButtonElement>({ onMouseEnter, onMouseLeave })
  return (
    <IconTriggerScope scope={trigger.scope}>
      <button {...props} {...trigger.handlers} />
    </IconTriggerScope>
  )
}

<Button>
  <Download /> Export
</Button>
```

The same two lines work for a menu row, a palette item or a tab. For a block that is not a component of yours (a table cell, a card), use `IconTrigger`, a `div` that does the same:

```tsx
import { IconTrigger, ExternalLink } from '@fynex/icons'

<IconTrigger className="cell">
  <ExternalLink size={14} /> Open
</IconTrigger>
```

The light trigger is one boolean and one context: no motion controls, no effects. It is cheap enough to sit on every button of an app.

To keep an icon still inside an animated element (a state indicator, a long list), pass `animateOnHover={false}`: the icon renders the bare drawing, with no listener at all.

### Programmatic trigger

```tsx
import { LoaderCircle, RefreshCw } from '@fynex/icons'

// A loader: the gesture plays in a loop for as long as `animate` is true.
<LoaderCircle animate={isLoading} loop aria-label="Loading" />

// While pressed, after a delay, or when scrolled into view.
<RefreshCw animateOnTap />
<RefreshCw animate delay={300} />
<RefreshCw animateOnView animateOnViewOnce />
```

`AnimateIcon` drives all the icons it contains with the same triggers, for instance on a link or a card you do not control:

```tsx
import { AnimateIcon, Download } from '@fynex/icons'

<AnimateIcon animateOnHover asChild>
  <a href="/export">
    <Download /> Export
  </a>
</AnimateIcon>
```

Under an `AnimateIcon`, the light triggers step aside, so wrapping one of your `Button`s in it works as expected.

### Reduced motion

Under `prefers-reduced-motion: reduce`, icons never animate: they render the bare drawing, and loops never start. There is nothing to configure.

### Touch screens

A tap on a touch screen fires a fake `mouseenter`. Hover triggers ignore it (`(hover: none)` media query), so an icon does not stay stuck mid-gesture after a tap. Use `animateOnTap` for a deliberate press gesture.

### Accessibility

Icons are decorative by default (`aria-hidden="true"`), as with lucide: the label belongs to the button or the text next to them. Give an icon an `aria-label`, `aria-labelledby` or `role` and it becomes visible to assistive technologies.

### Custom icons

The factory and the grammar are public, so your own icons can move like the rest of the set:

```tsx
import { draw, makeIcon, move } from '@fynex/icons'

export const Inbox = makeIcon(
  'Inbox',
  [
    { tag: 'path', d: 'M22 12h-6l-2 3h-4l-2-3H2', part: 'tray' },
    { tag: 'path', d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' },
  ],
  { default: { tray: move(0, 1.5) } },
)
```

## API

### Icon props

Every icon accepts the props of an `<svg>` element, and:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number \| string` | `24` | Width and height. |
| `animate` | `boolean \| string` | | Plays the gesture while truthy. A string plays that named animation. |
| `animateOnHover` | `boolean \| string` | `true` | Plays on hover of the icon itself (on by default unless another trigger is set). `false` renders the bare drawing, even inside an animated parent. |
| `animateOnTap` | `boolean \| string` | | Plays while the icon is pressed. |
| `animateOnView` | `boolean \| string` | | Plays when the icon scrolls into view. |
| `animateOnViewMargin` | `string` | `'0px'` | Margin around the viewport, as in CSS. |
| `animateOnViewOnce` | `boolean` | `true` | Plays the in-view gesture only the first time. |
| `animation` | `string` | `'default'` | The named animation to play. |
| `loop` | `boolean` | `false` | Repeats the gesture for as long as the trigger is on. |
| `loopDelay` | `number` | `0` | Pause between two loops, in milliseconds. |
| `delay` | `number` | `0` | Wait before the gesture starts, in milliseconds. |

An icon with one of these props (other than `animateOnHover={false}`) holds its own controller and ignores the triggers of its parents. Each icon also exposes `Icon.parts` and `Icon.animations`, for tooling.

### Triggers

| Export | Description |
| --- | --- |
| `useIconTrigger(handlers?)` | Hook for a clickable element. Returns `{ handlers, scope }`: spread `handlers` on the element (your own `onMouseEnter` / `onMouseLeave` are called first), pass `scope` to `IconTriggerScope`. Steps aside under an `AnimateIcon`. |
| `IconTriggerScope` | Provides `scope` to the icons inside. Transparent when `scope` is `null`. |
| `IconTrigger` | A `div` whose hover plays the icons inside it. |
| `AnimateIcon` | Drives the icons inside with the triggers of the table above. Renders a `span`, or merges into its only child with `asChild`. |
| `useIconController(triggers, ref)` | The engine behind `AnimateIcon`, for building your own trigger. |
| `IconContext` | The context the icons read: `{ active, controls?, animation? }`. |
| `pointerCanHover()` | `false` on touch screens. |

### Factory and grammar

| Export | Description |
| --- | --- |
| `makeIcon(name, parts, animations, options?)` | Builds an icon. `parts` lists the shapes (`{ tag, part?, ...attributes }`); `animations.default` maps each part name, or `group` for the whole drawing, to its variants. `options.origins` sets a shared transform origin per part, in grid units; `options.groupOrigin` sets the origin of the group (`'50% 100%'`). |
| `move`, `rock`, `pulse`, `blink`, `shake`, `turn`, `spin`, `draw`, `appear`, `kf` | The motion factories described in [the motion grammar](#the-motion-grammar). |
| `EASE` | The strong ease-out curve shared by the set. |

Types: `AnimatedIcon`, `AnimatedIconProps`, `IconPart`, `IconAnimations`, `IconOptions`, `IconTriggerProps`, `IconTriggerValue`, `AnimateIconProps`, `IconContextValue`, `IconControls`.

### Catalog

`@fynex/icons/catalog` exports `ICON_CATALOG` (name, slug, family, motion description and lucide aliases of every icon) and `ICON_FAMILIES` (label and grammar of every family). It references no component, so it embeds no icon: use it to build an icon picker or a documentation page.

### Deep imports

`@fynex/icons/icons/<slug>` imports a single icon module, for tools that do not tree-shake.

## Icons

Generated from `src/catalog.ts` by `npm run generate`.

<!-- icons:start -->

173 icons in 6 families.

### Arrows and chevrons (26)

Anything that points or turns: an arrow nudges a pixel or two in its own direction and settles back, a loop goes all the way round.

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `ArrowUp` | `arrow-up` | The arrow rises and settles back |  |
| `ArrowDown` | `arrow-down` | The arrow dips and settles back | `ArrowDownIcon` |
| `ArrowLeft` | `arrow-left` | The arrow steps back and returns | `ArrowLeftIcon` |
| `ArrowRight` | `arrow-right` | The arrow steps forward and returns |  |
| `ArrowUpRight` | `arrow-up-right` | The arrow shoots off diagonally and returns | `ArrowUpRightIcon` |
| `ArrowDownUp` | `arrow-down-up` | The two arrows pass each other |  |
| `ArrowUpDown` | `arrow-up-down` | The two arrows pass each other |  |
| `ArrowLeftRight` | `arrow-left-right` | The two arrows move apart |  |
| `ChevronDown` | `chevron-down` | The chevron dips and settles back | `ChevronDownIcon` |
| `ChevronUp` | `chevron-up` | The chevron rises and settles back |  |
| `ChevronLeft` | `chevron-left` | The chevron steps back and returns | `ChevronLeftIcon` |
| `ChevronRight` | `chevron-right` | The chevron steps forward and returns | `ChevronRightIcon` |
| `ChevronsUpDown` | `chevrons-up-down` | The two chevrons move apart |  |
| `CornerLeftUp` | `corner-left-up` | The bend draws itself, the tip rises |  |
| `ExternalLink` | `external-link` | The arrow leaves the frame |  |
| `GitCompareArrows` | `git-compare-arrows` | The two links draw toward each other |  |
| `Split` | `split` | The trunk draws itself, then forks |  |
| `RotateCw` | `rotate-cw` | The loop makes a full turn |  |
| `RotateCcw` | `rotate-ccw` | The loop makes a full turn backwards |  |
| `RefreshCw` | `refresh-cw` | The two arrows make a half turn |  |
| `RefreshCcwDot` | `refresh-ccw-dot` | The two arrows make a half turn backwards |  |
| `History` | `history` | The dial winds time back one turn |  |
| `Share` | `share` | The arrow leaves through the top |  |
| `Upload` | `upload` | The arrow rises |  |
| `Download` | `download` | The arrow drops | `DownloadIcon` |
| `FileUp` | `file-up` | The arrow rises inside the page |  |

### Actions (37)

What the user does: each icon mimes its own action (the lid lifts, the check draws itself, the plus turns).

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `Plus` | `plus` | The plus turns a quarter turn |  |
| `Minus` | `minus` | The bar contracts |  |
| `X` | `x` | The cross turns a quarter turn | `XIcon` |
| `Check` | `check` | The check draws itself | `CheckIcon` |
| `CheckCheck` | `check-check` | The two checks draw one after the other |  |
| `Copy` | `copy` | The two sheets slide apart |  |
| `Trash2` | `trash-2` | The lid lifts |  |
| `Pencil` | `pencil` | The pencil writes |  |
| `SquarePen` | `square-pen` | The pen writes inside the frame |  |
| `Eraser` | `eraser` | The eraser rubs along the line |  |
| `Brush` | `brush` | The brush makes a stroke |  |
| `Save` | `save` | The label and the shutter draw themselves |  |
| `Send` | `send` | The paper plane winds up and takes off |  |
| `Search` | `search` | The magnifier sweeps around |  |
| `SearchX` | `search-x` | The magnifier shakes its head |  |
| `ScanSearch` | `scan-search` | The frame tightens, the magnifier searches |  |
| `Funnel` | `funnel` | The funnel narrows | `Filter` |
| `FunnelX` | `funnel-x` | The cross turns |  |
| `ListFilter` | `list-filter` | The three lines narrow in cascade |  |
| `SlidersHorizontal` | `sliders-horizontal` | The three knobs slide |  |
| `Settings` | `settings` | The gear turns one notch |  |
| `Bookmark` | `bookmark` | The bookmark lifts |  |
| `BookmarkPlus` | `bookmark-plus` | The plus turns |  |
| `BookmarkMinus` | `bookmark-minus` | The bar contracts |  |
| `CirclePlus` | `circle-plus` | The plus turns inside the circle | `PlusCircle` |
| `Eye` | `eye` | The eye blinks |  |
| `EyeOff` | `eye-off` | A slash strikes through the eye |  |
| `Lock` | `lock` | The shackle lifts and snaps shut | `LockIcon` |
| `Fullscreen` | `fullscreen` | The frame opens, the content grows |  |
| `TextCursorInput` | `text-cursor-input` | The text cursor blinks |  |
| `Plug` | `plug` | The plug pushes in |  |
| `Unplug` | `unplug` | The two halves pull apart |  |
| `ThumbsUp` | `thumbs-up` | The thumb gives its approval |  |
| `ThumbsDown` | `thumbs-down` | The thumb gives its disapproval |  |
| `MessageSquarePlus` | `message-square-plus` | The plus turns inside the bubble |  |
| `Link2` | `link-2` | The two links move closer |  |
| `Share2` | `share-2` | The branches draw out to both nodes |  |

### Data and charts (30)

Lines draw themselves, bars grow, list rows arrive one after another.

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `ChartLine` | `chart-line` | The line draws itself | `LineChart`, `ChartLineIcon` |
| `ChartSpline` | `chart-spline` | The curve draws itself |  |
| `ChartColumn` | `chart-column` | The bars grow one after another | `BarChart3` |
| `ChartColumnIncreasing` | `chart-column-increasing` | The bars grow one after another | `ChartColumnIncreasingIcon` |
| `ChartCandlestick` | `chart-candlestick` | The two candles move in opposite directions |  |
| `ChartPie` | `chart-pie` | The slice pops out |  |
| `TrendingUp` | `trending-up` | The trend draws itself, the arrowhead arrives |  |
| `Activity` | `activity` | The pulse line draws itself |  |
| `Gauge` | `gauge` | The needle sweeps the dial | `GaugeIcon` |
| `Coins` | `coins` | The coin flips |  |
| `DollarSign` | `dollar-sign` | The S draws itself |  |
| `Banknote` | `banknote` | The medallion beats, the corner marks blink |  |
| `Wallet` | `wallet` | The wallet sways |  |
| `CreditCard` | `credit-card` | The magnetic strip draws itself |  |
| `PiggyBank` | `piggy-bank` | The piggy bank hops, the eye winks |  |
| `Landmark` | `landmark` | The pediment lifts, the columns rise |  |
| `ReceiptText` | `receipt-text` | The receipt lines write themselves |  |
| `Scale` | `scale` | The beam tips and balances again |  |
| `Database` | `database` | The top disk lifts |  |
| `Layers` | `layers` | The layers spread apart |  |
| `TableProperties` | `table-properties` | The table rows draw themselves |  |
| `List` | `list` | The rows arrive one after another |  |
| `ListChecks` | `list-checks` | The two checks draw themselves |  |
| `Calendar` | `calendar` | The rings lift | `CalendarIcon` |
| `CalendarDays` | `calendar-days` | The days blink, week after week |  |
| `CalendarClock` | `calendar-clock` | The hands go round once | `CalendarClockIcon` |
| `CalendarPlus` | `calendar-plus` | The plus turns |  |
| `CalendarCheck` | `calendar-check` | The check draws itself |  |
| `Clock` | `clock` | The hands go round once |  |
| `Target` | `target` | The bullseye beats, the rings answer |  |

### Status (28)

What informs or warns: a light blinks, the bell rings, the exclamation mark shakes its head.

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `LoaderCircle` | `loader-circle` | The arc goes round once (loops while waiting) | `Loader2` |
| `Info` | `info` | The dot of the i hops |  |
| `CircleHelp` | `circle-help` | The question mark hesitates | `HelpCircle` |
| `CircleAlert` | `circle-alert` | The exclamation mark shakes its head | `AlertCircle` |
| `TriangleAlert` | `triangle-alert` | The exclamation mark beats | `AlertTriangle` |
| `BadgeAlert` | `badge-alert` | The badge turns one notch |  |
| `CircleCheck` | `circle-check` | The check draws itself |  |
| `CircleX` | `circle-x` | The cross turns | `XCircle` |
| `Circle` | `circle` | The circle beats |  |
| `CircleDashed` | `circle-dashed` | The dashed circle turns a quarter |  |
| `Smile` | `smile` | The smile draws itself |  |
| `Meh` | `meh` | The eyes blink |  |
| `Frown` | `frown` | The frown draws itself |  |
| `Shield` | `shield` | The shield beats |  |
| `ShieldAlert` | `shield-alert` | The exclamation mark shakes its head |  |
| `ShieldCheck` | `shield-check` | The check draws itself |  |
| `Bell` | `bell` | The bell rings |  |
| `BellRing` | `bell-ring` | The bell rings, the waves blink |  |
| `BellOff` | `bell-off` | A slash strikes through the bell |  |
| `Server` | `server` | The status lights blink |  |
| `ServerCrash` | `server-crash` | The bolt strikes, the status lights blink |  |
| `FileQuestion` | `file-question` | The question mark hesitates |  |
| `MapPinOff` | `map-pin-off` | A slash strikes through the pin |  |
| `Sun` | `sun` | The rays turn one notch |  |
| `Moon` | `moon` | The crescent sways |  |
| `Bug` | `bug` | The legs wriggle |  |
| `Wrench` | `wrench` | The wrench tightens |  |
| `MailCheck` | `mail-check` | The check draws itself |  |

### Navigation and interface (31)

The landmarks of an interface: panels, pages, people, tools.

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `House` | `house` | The door draws itself | `HomeIcon` |
| `PanelLeft` | `panel-left` | The left panel folds in and comes back |  |
| `PanelRight` | `panel-right` | The right panel folds in and comes back |  |
| `PanelBottom` | `panel-bottom` | The bottom panel folds in and comes back |  |
| `PictureInPicture2` | `picture-in-picture-2` | The thumbnail shrinks |  |
| `LayoutGrid` | `layout-grid` | The four tiles beat in turn |  |
| `LayoutTemplate` | `layout-template` | The three blocks beat in cascade |  |
| `Monitor` | `monitor` | The screen lights up |  |
| `Keyboard` | `keyboard` | The keys are struck from left to right | `KeyboardIcon` |
| `Globe` | `globe` | The globe spins on its axis |  |
| `SquareStack` | `square-stack` | The layers spread apart |  |
| `User` | `user` | The head lifts |  |
| `UserRound` | `user-round` | The head lifts |  |
| `IdCard` | `id-card` | The photo beats, the lines write themselves |  |
| `Newspaper` | `newspaper` | The article lines write themselves |  |
| `Mail` | `mail` | The envelope flap lifts | `MailIcon` |
| `FileText` | `file-text` | The document lines write themselves | `FileTextIcon` |
| `BookOpenText` | `book-open-text` | The book lines write themselves, page after page |  |
| `Megaphone` | `megaphone` | The megaphone makes an announcement |  |
| `Sparkles` | `sparkles` | The sparkles twinkle |  |
| `BrainCircuit` | `brain-circuit` | The circuits draw themselves, the nodes blink |  |
| `Bot` | `bot` | The robot blinks, the antenna quivers |  |
| `Image` | `image` | The sun beats, the hills draw themselves |  |
| `Telescope` | `telescope` | The telescope pivots on its stand | `TelescopeIcon` |
| `LifeBuoy` | `life-buoy` | The life buoy turns a quarter |  |
| `Headset` | `headset` | The microphone draws itself |  |
| `Palette` | `palette` | The colors light up one by one |  |
| `Tag` | `tag` | The tag swings from its eyelet | `TagIcon` |
| `Crown` | `crown` | The crown lifts |  |
| `CodeXml` | `code-xml` | The brackets move apart | `Code2` |
| `Volume2` | `volume-2` | The sound waves spread out |  |

### Objects (21)

Everyday things, each doing what the object does: the heart beats, the flame flickers, the rocket takes off.

| Component | shadcn item | On hover | lucide aliases |
| --- | --- | --- | --- |
| `Anchor` | `anchor` | The anchor swings from its ring |  |
| `Baby` | `baby` | The baby blinks and smiles |  |
| `Briefcase` | `briefcase` | The briefcase lifts |  |
| `Building2` | `building-2` | The floors light up from bottom to top |  |
| `Car` | `car` | The car moves forward and brakes |  |
| `Flame` | `flame` | The flame flickers |  |
| `Gem` | `gem` | The facets draw themselves |  |
| `Gift` | `gift` | The lid and the bow lift |  |
| `GraduationCap` | `graduation-cap` | The tassel swings |  |
| `Heart` | `heart` | The heart beats |  |
| `Leaf` | `leaf` | The leaf quivers |  |
| `Plane` | `plane` | The plane winds up and takes off |  |
| `Sprout` | `sprout` | The stem grows, the leaves unfold |  |
| `Star` | `star` | The star turns by one point |  |
| `TreePalm` | `tree-palm` | The fronds sway |  |
| `Zap` | `zap` | The bolt crackles |  |
| `Rocket` | `rocket` | The rocket winds up, the flame crackles |  |
| `Coffee` | `coffee` | The steam rises |  |
| `FlaskConical` | `flask-conical` | The flask gets a shake |  |
| `TestTube` | `test-tube` | The test tube gets a shake |  |
| `Shapes` | `shapes` | The three shapes hop one after another |  |

<!-- icons:end -->

## Contributing

Issues and pull requests are welcome.

```sh
npm install
npm test               # vitest, jsdom
npm run typecheck
npm run lint
npm run build          # ESM and declarations into dist/
npm run registry:build # shadcn registry into public/r/
```

To add an icon:

1. Create `src/icons/<slug>.tsx`, starting with `'use client'`, importing only `../make-icon` and `../motions`. Reuse the lucide path when the icon exists in lucide, and keep the lucide name.
2. Split the drawing into named parts and pick their gestures from the grammar. Prefer an existing factory over new keyframes, and keep the gesture short, small and back at rest when it ends.
3. Add its entry to `src/catalog.ts`: family, a one sentence description of the motion, and the lucide aliases if any.
4. Run `npm run generate`: it updates the barrel `src/icons/index.ts`, `registry.json` and the table above.
5. Run `npm test`. The suite checks that every exported icon has a catalog entry and the other way round, that every animated part has a resting value, that gestures only use transforms, opacity and path length, and that durations stay within the grammar.

Commit messages follow the [Karma convention](http://karma-runner.github.io/latest/dev/git-commit-msg.html): `type(scope): subject`, for instance `feat(icons): add the inbox icon`.

## Credits

- The shapes derive from [Lucide](https://lucide.dev) (ISC License), itself a fork of [Feather](https://feathericons.com) (MIT License). See `LICENSE-lucide.md`.
- Animations run on [Motion](https://motion.dev).
- Made for and used in production by Fynex, https://fynexapp.com.

## License

MIT for the code, the animations and the catalog (see `LICENSE`). The icon shapes keep the Lucide ISC License (see `LICENSE-lucide.md`).
