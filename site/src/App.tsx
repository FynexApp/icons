import * as React from 'react'

import * as Icons from '@fynex/icons'
import { ICON_CATALOG, type IconFamily } from '@fynex/icons/catalog'
import { IconTriggerScope, type AnimatedIcon, type IconContextValue } from '@fynex/icons'

import { KEYWORDS } from './keywords'
import { MOTION_FR } from './motion-fr'

type Lang = 'fr' | 'en'

const REGISTRY = 'https://icons.fynexapp.com/r'
const FAMILY_ORDER: IconFamily[] = ['data', 'arrows', 'actions', 'status', 'navigation', 'objects']

type Art = { key: string; fr: string; en: string }

const ART: Record<string, Art> = {
  hero: { key: 'hero', fr: 'Rembrandt, La Parabole du riche insensé, 1627. Gemäldegalerie, Berlin.', en: 'Rembrandt, The Parable of the Rich Fool, 1627. Gemäldegalerie, Berlin.' },
  data: { key: 'data', fr: 'Quentin Metsys, Le Prêteur et sa femme, 1514. Musée du Louvre, Paris.', en: 'Quentin Metsys, The Moneylender and His Wife, 1514. Louvre, Paris.' },
  arrows: { key: 'arrows', fr: 'Georges de La Tour, Saint Sébastien soigné par Irène, vers 1649. Musée du Louvre, Paris.', en: 'Georges de La Tour, Saint Sebastian Tended by Irene, c. 1649. Louvre, Paris.' },
  actions: { key: 'actions', fr: 'Caravage, La Vocation de saint Matthieu, 1599-1600. Saint-Louis-des-Français, Rome.', en: 'Caravaggio, The Calling of Saint Matthew, 1599-1600. San Luigi dei Francesi, Rome.' },
  status: { key: 'status', fr: 'Georges de La Tour, Le Tricheur à l’as de carreau, vers 1635. Musée du Louvre, Paris.', en: 'Georges de La Tour, The Cheat with the Ace of Diamonds, c. 1635. Louvre, Paris.' },
  navigation: { key: 'navigation', fr: 'Johannes Vermeer, Le Géographe, 1668-1669. Städel Museum, Francfort.', en: 'Johannes Vermeer, The Geographer, 1668-1669. Städel Museum, Frankfurt.' },
  objects: { key: 'objects', fr: 'Willem Claesz. Heda, Nature morte aux huîtres, 1634. Musée Boijmans Van Beuningen, Rotterdam.', en: 'Willem Claesz. Heda, Still Life with Oysters, 1634. Museum Boijmans Van Beuningen, Rotterdam.' },
  astronomer: { key: 'astronomer', fr: 'Johannes Vermeer, L’Astronome, 1668. Musée du Louvre.', en: 'Johannes Vermeer, The Astronomer, 1668. Louvre.' },
  philosopher: { key: 'philosopher', fr: 'Rembrandt, Philosophe en méditation, 1632. Musée du Louvre.', en: 'Rembrandt, Philosopher in Meditation, 1632. Louvre.' },
  airpump: { key: 'airpump', fr: 'Joseph Wright of Derby, Expérience sur un oiseau dans une pompe à air, 1768. National Gallery, Londres.', en: 'Joseph Wright of Derby, An Experiment on a Bird in the Air Pump, 1768. National Gallery, London.' },
  orrery: { key: 'orrery', fr: 'Joseph Wright of Derby, Le Philosophe faisant un exposé sur l’orrery, vers 1766. Derby Museum and Art Gallery.', en: 'Joseph Wright of Derby, A Philosopher Lecturing on the Orrery, c. 1766. Derby Museum and Art Gallery.' },
}

// The paintings are plain files in `site/public/art`, served under the Vite base (`/` on icons.fynexapp.com).
const artSrc = (key: string) => `${import.meta.env.BASE_URL}art/${key}.jpg`

const FAMILIES: Record<IconFamily, { mark: string } & Record<Lang, { label: string; grammar: string }>> = {
  data: {
    mark: 'ChartCandlestick',
    fr: { label: 'Données et graphiques', grammar: "Les courbes se tracent, les barres montent, les lignes d'une liste arrivent l'une après l'autre." },
    en: { label: 'Data and charts', grammar: 'Lines draw themselves, bars rise, the rows of a list arrive one after another.' },
  },
  arrows: {
    mark: 'ArrowUpRight',
    fr: { label: 'Flèches', grammar: "Tout ce qui pointe ou tourne : la flèche avance d'un pixel ou deux dans son sens et revient, la boucle fait son tour." },
    en: { label: 'Arrows', grammar: 'Anything that points or turns: the arrow moves a pixel or two its own way and comes back, the loop makes its turn.' },
  },
  actions: {
    mark: 'Pencil',
    fr: { label: 'Actions', grammar: "Les gestes de l'utilisateur : chaque icône mime ce qu'elle fait. Le couvercle se lève, la coche se trace, le plus pivote." },
    en: { label: 'Actions', grammar: 'What the user does: each icon mimes its action. The lid lifts, the check draws, the plus turns.' },
  },
  status: {
    mark: 'BellRing',
    fr: { label: 'Statuts', grammar: "Ce qui informe ou alerte : un voyant clignote, la cloche sonne, le point d'exclamation dit non." },
    en: { label: 'Status', grammar: 'What informs or warns: a light blinks, the bell rings, the exclamation mark shakes no.' },
  },
  navigation: {
    mark: 'Globe',
    fr: { label: 'Navigation', grammar: "Les repères de l'interface : panneaux, pages, personnes, outils de l'app." },
    en: { label: 'Navigation', grammar: 'The landmarks of an interface: panels, pages, people, app tools.' },
  },
  objects: {
    mark: 'Gem',
    fr: { label: 'Objets', grammar: 'Ce que les gens possèdent, visent ou rêvent de financer.' },
    en: { label: 'Objects', grammar: 'What people own, aim for or dream of paying for.' },
  },
}

const T = {
  fr: {
    navIcons: 'Icônes',
    navInstall: 'Installer',
    eyebrow: 'Jeu d’icônes animées, open source',
    title: ['Des icônes', 'qui bougent', 'juste.'],
    lede: 'Chaque icône mime ce qu’elle dit, en moins d’une demi-seconde, et redevient un SVG ordinaire au repos. Dessinées sur la grille de lucide, pensées pour une app de finance, utilisées en production par Fynex.',
    specs: ['icônes', 'grille 24', 'trait 2', 'React + motion'],
    installTitle: 'Installer',
    installLede: 'Trois façons de s’en servir. Le paquet pour tout prendre, le registre shadcn pour copier une icône dans votre code, le composant pour l’utiliser.',
    cards: [
      { tag: 'npm', title: 'Le paquet', note: 'Tree-shakable : seules les icônes importées partent dans le bundle.' },
      { tag: 'shadcn', title: 'Le registre', note: 'Copie l’icône et son moteur dans votre projet. Le code est à vous.' },
      { tag: 'React', title: 'Le composant', note: 'Mêmes props que lucide. Survol, appui, boucle ou entrée à l’écran.' },
    ],
    browseTitle: 'Les icônes',
    searchLabel: 'Rechercher une icône',
    placeholder: 'argent, flèche, cloche, chart, delete…',
    all: 'Toutes',
    results: (n: number) => (n === 0 ? 'Aucune icône' : n === 1 ? '1 icône' : `${n} icônes`),
    empty: (q: string) => `Rien pour « ${q} ». Essayez un synonyme, en français ou en anglais.`,
    suggestions: 'Essayez',
    via: 'via',
    motion: 'Mouvement',
    keywords: 'Mots-clés',
    aliases: 'Aussi exportée sous',
    sizes: 'Tailles',
    usage: 'Utilisation',
    install: 'Installer',
    copy: 'Copier',
    copied: 'Copié',
    close: 'Fermer',
    hoverHint: 'Survolez une icône pour la voir bouger. Cliquez pour le détail.',
    tapHint: 'Touchez une icône pour le détail.',
    credits: 'Tracés dérivés de lucide (ISC). Code sous licence MIT. Tableaux du domaine public.',
    madeBy: 'Conçu pour Fynex, et utilisé chaque jour dans l’app.',
    shortcut: 'pour chercher',
  },
  en: {
    navIcons: 'Icons',
    navInstall: 'Install',
    eyebrow: 'Animated icon set, open source',
    title: ['Icons', 'that move', 'with intent.'],
    lede: 'Each icon mimes what it means in under half a second, then goes back to being a plain SVG at rest. Drawn on the lucide grid, designed for a finance app, used in production by Fynex.',
    specs: ['icons', '24 grid', '2 stroke', 'React + motion'],
    installTitle: 'Install',
    installLede: 'Three ways to use it. The package to take everything, the shadcn registry to copy one icon into your code, the component to put it to work.',
    cards: [
      { tag: 'npm', title: 'The package', note: 'Tree-shakable: only the icons you import end up in the bundle.' },
      { tag: 'shadcn', title: 'The registry', note: 'Copies the icon and its engine into your project. The code is yours.' },
      { tag: 'React', title: 'The component', note: 'Same props as lucide. Hover, press, loop or on view.' },
    ],
    browseTitle: 'The icons',
    searchLabel: 'Search icons',
    placeholder: 'money, arrow, bell, graphique, supprimer…',
    all: 'All',
    results: (n: number) => (n === 0 ? 'No icons' : n === 1 ? '1 icon' : `${n} icons`),
    empty: (q: string) => `Nothing for “${q}”. Try a synonym, in English or French.`,
    suggestions: 'Try',
    via: 'via',
    motion: 'Motion',
    keywords: 'Keywords',
    aliases: 'Also exported as',
    sizes: 'Sizes',
    usage: 'Usage',
    install: 'Install',
    copy: 'Copy',
    copied: 'Copied',
    close: 'Close',
    hoverHint: 'Hover an icon to see it move. Click for details.',
    tapHint: 'Tap an icon for details.',
    credits: 'Paths derived from lucide (ISC). Code under the MIT license. Paintings in the public domain.',
    madeBy: 'Made for Fynex, and used every day in the app.',
    shortcut: 'to search',
  },
} as const

const SUGGESTIONS: Record<Lang, string[]> = {
  fr: ['argent', 'bourse', 'supprimer', 'notification', 'ia', 'sécurité', 'calendrier'],
  en: ['money', 'stock', 'delete', 'notification', 'ai', 'security', 'calendar'],
}

/* ---------- Index ---------- */

type Entry = {
  name: string
  slug: string
  family: IconFamily
  Icon: AnimatedIcon
  motion: Record<Lang, string>
  aliases: string[]
  fr: string[]
  en: string[]
  terms: { text: string; norm: string; weight: number }[]
}

const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[\u2019']/g, ' ')
    .replace(/[^a-z0-9 -]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

// Simple plurals, so that "flèches" finds "flèche" and "coins" finds "coin".
const stem = (w: string) => (w.length > 3 && /[sx]$/.test(w) ? w.slice(0, -1) : w)
const splitName = (name: string) => name.replace(/([a-z])([A-Z0-9])/g, '$1 $2').replace(/([0-9])([A-Z])/g, '$1 $2')
const iconByName = (name: string) => (Icons as unknown as Record<string, AnimatedIcon>)[name]

// Bilingual keywords and the French motion line, read from the catalog when it carries them.
type CatalogExtras = { keywords?: { en?: string[] | string; fr?: string[] | string }; motionFr?: string }
const toList = (value: string[] | string | undefined) =>
  (Array.isArray(value) ? value : (value ?? '').split(',')).map((s) => s.trim()).filter(Boolean)

const ENTRIES: Entry[] = ICON_CATALOG.map((catalogEntry) => {
  const e = catalogEntry as typeof catalogEntry & CatalogExtras
  // Fallback: the local KEYWORDS and MOTION_FR tables. It goes away once the catalog
  // carries `keywords` and `motionFr` for every icon (delete keywords.ts and motion-fr.ts then).
  const [, fallbackFr, fallbackEn] = KEYWORDS[e.name] ?? ['', '', '']
  const frList = toList(e.keywords?.fr ?? fallbackFr)
  const enList = toList(e.keywords?.en ?? fallbackEn)
  const motionFr = e.motionFr ?? MOTION_FR[e.name] ?? e.motion
  const terms: Entry['terms'] = [
    { text: e.name, norm: norm(splitName(e.name)), weight: 12 },
    ...e.aliases.map((a) => ({ text: a, norm: norm(splitName(a)), weight: 8 })),
    ...frList.map((k) => ({ text: k, norm: norm(k), weight: 10 })),
    ...enList.map((k) => ({ text: k, norm: norm(k), weight: 10 })),
    { text: FAMILIES[e.family].fr.label, norm: norm(FAMILIES[e.family].fr.label), weight: 3 },
    { text: FAMILIES[e.family].en.label, norm: norm(FAMILIES[e.family].en.label), weight: 3 },
    { text: motionFr, norm: norm(motionFr), weight: 2 },
    { text: e.motion, norm: norm(e.motion), weight: 2 },
  ]
  return { name: e.name, slug: e.slug, family: e.family, Icon: iconByName(e.name), motion: { fr: motionFr, en: e.motion }, aliases: e.aliases, fr: frList, en: enList, terms }
}).filter((e) => e.Icon)

function editDistanceAtMostOne(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 1) return false
  let i = 0
  let j = 0
  let edits = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++
      j++
      continue
    }
    if (++edits > 1) return false
    if (a.length > b.length) i++
    else if (b.length > a.length) j++
    else {
      i++
      j++
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1
}

type Hit = { entry: Entry; score: number; via?: string }

function search(query: string): Hit[] {
  const exact = searchWith(query, false)
  // Typo tolerance only when nothing matches as typed,
  // so that "bourse" does not bring up "course".
  return exact.length > 0 ? exact : searchWith(query, true)
}

function searchWith(query: string, fuzzy: boolean): Hit[] {
  const tokens = norm(query).split(' ').filter(Boolean).map(stem)
  if (tokens.length === 0) return ENTRIES.map((entry) => ({ entry, score: 0 }))
  const hits: Hit[] = []
  for (const entry of ENTRIES) {
    let total = 0
    let best: { score: number; text: string; weight: number } | undefined
    let all = true
    for (const token of tokens) {
      let tokenBest = 0
      let tokenText = ''
      let tokenWeight = 0
      for (const term of entry.terms) {
        const words = term.norm.split(' ').map(stem)
        let s = 0
        if (term.norm === token || words.join(' ') === token) s = 1
        else if (words.includes(token)) s = 0.85
        else if (words.some((w) => w.startsWith(token))) s = token.length >= 2 ? 0.7 : 0.3
        else if (token.length >= 3 && term.norm.includes(token)) s = 0.45
        else if (fuzzy && token.length >= 5 && words.some((w) => editDistanceAtMostOne(w, token))) s = 0.35
        const weighted = s * term.weight
        if (weighted > tokenBest) {
          tokenBest = weighted
          tokenText = term.text
          tokenWeight = term.weight
        }
      }
      if (tokenBest === 0) {
        all = false
        break
      }
      total += tokenBest
      if (!best || tokenBest > best.score) best = { score: tokenBest, text: tokenText, weight: tokenWeight }
    }
    if (!all) continue
    // Show the keyword that found the icon, unless it is the icon's own name.
    const via = best && best.weight !== 12 && best.weight > 2 ? best.text : undefined
    hits.push({ entry, score: total, via })
  }
  return hits.sort((a, b) => b.score - a.score || a.entry.name.localeCompare(b.entry.name))
}

/* ---------- Small pieces ---------- */

const canHover = () => typeof window !== 'undefined' && window.matchMedia?.('(hover: hover)').matches

function useActiveScope(active: boolean): IconContextValue {
  return React.useMemo(() => ({ active }), [active])
}

function CopyButton({ text, lang }: { text: string; lang: Lang }) {
  const [done, setDone] = React.useState(false)
  const t = T[lang]
  return (
    <button
      type="button"
      className="copy"
      onClick={async (event) => {
        const code = event.currentTarget.parentElement?.querySelector('code') ?? null
        try {
          await navigator.clipboard.writeText(text)
          setDone(true)
          setTimeout(() => setDone(false), 1400)
        } catch {
          if (code) {
            const range = document.createRange()
            range.selectNodeContents(code)
            const sel = window.getSelection()
            sel?.removeAllRanges()
            sel?.addRange(range)
          }
        }
      }}
    >
      {done ? t.copied : t.copy}
    </button>
  )
}

function Snippet({ code, lang, prompt }: { code: string; lang: Lang; prompt?: boolean }) {
  return (
    <div className="snippet">
      {prompt && (
        <span className="prompt" aria-hidden="true">
          $
        </span>
      )}
      <code>{code}</code>
      <CopyButton text={code} lang={lang} />
    </div>
  )
}

function Painting({ art, lang, className }: { art: Art; lang: Lang; className?: string }) {
  return (
    <figure className={className}>
      <img src={artSrc(art.key)} alt="" loading="lazy" decoding="async" />
      <figcaption>{art[lang]}</figcaption>
    </figure>
  )
}

/** The icon set as a superscript of a heading: it plays its gesture when the heading enters the screen, then on hover. */
function Superscript({ name }: { name: string }) {
  const Icon = iconByName(name)
  return (
    <sup className="sup">
      <Icon size={22} strokeWidth={1.5} animateOnView animateOnViewMargin="0px 0px -25% 0px" />
    </sup>
  )
}

/* ---------- Hero ---------- */

const HERO_ICONS = ['Coins', 'Scale', 'ChartCandlestick', 'Landmark', 'PiggyBank', 'Wallet', 'ReceiptText', 'Banknote', 'Gauge', 'TrendingUp', 'Gem', 'Crown']

function HeroIcons({ onPick }: { onPick: (name: string) => void }) {
  const [step, setStep] = React.useState(0)
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setStep((s) => s + 1), 1300)
    return () => clearInterval(id)
  }, [])
  const current = step % HERO_ICONS.length
  return (
    <div className="hero-icons" role="list">
      {HERO_ICONS.map((name, i) => (
        <HeroIcon key={name} name={name} lit={i === current} onPick={onPick} />
      ))}
    </div>
  )
}

function HeroIcon({ name, lit, onPick }: { name: string; lit: boolean; onPick: (name: string) => void }) {
  const [hover, setHover] = React.useState(false)
  const Icon = iconByName(name)
  const scope = useActiveScope(lit || hover)
  return (
    <button
      type="button"
      role="listitem"
      className={`hero-icon${lit || hover ? ' is-lit' : ''}`}
      aria-label={name}
      onMouseEnter={() => canHover() && setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onPick(name)}
    >
      <IconTriggerScope scope={scope}>
        <Icon size={30} strokeWidth={1.5} />
      </IconTriggerScope>
    </button>
  )
}

/* ---------- Install ---------- */

function Install({ lang }: { lang: Lang }) {
  const t = T[lang]
  const codes = [`npm i @fynex/icons`, `npx shadcn add ${REGISTRY}/coins.json`, `<Coins size={24} animateOnHover />`]
  const arts = [ART.astronomer, ART.philosopher, ART.airpump]
  const marks = ['Download', 'Copy', 'CodeXml']
  return (
    <section className="install-band" id="install">
      <div className="section-head">
        <h2>
          {t.installTitle}
          <Superscript name="Plug" />
        </h2>
        <p>{t.installLede}</p>
      </div>
      <div className="cards">
        {t.cards.map((card, i) => {
          const Mark = iconByName(marks[i])
          return (
            <InstallCard key={card.tag} art={arts[i]} lang={lang}>
              <p className="card-tag">
                <Mark size={14} strokeWidth={1.75} /> {card.tag}
              </p>
              <h3>{card.title}</h3>
              <Snippet lang={lang} prompt={i < 2} code={codes[i]} />
              <p className="card-note">{card.note}</p>
            </InstallCard>
          )
        })}
      </div>
    </section>
  )
}

function InstallCard({ art, lang, children }: { art: Art; lang: Lang; children: React.ReactNode }) {
  const [active, setActive] = React.useState(false)
  const scope = useActiveScope(active)
  return (
    <article className="card" onMouseEnter={() => canHover() && setActive(true)} onMouseLeave={() => setActive(false)}>
      <img className="card-art" src={artSrc(art.key)} alt="" loading="lazy" decoding="async" />
      <span className="card-space" aria-hidden="true" />
      <IconTriggerScope scope={scope}>{children}</IconTriggerScope>
      <p className="card-credit">{art[lang]}</p>
    </article>
  )
}

/* ---------- Grid ---------- */

function Cell({ hit, lang, selected, onOpen }: { hit: Hit; lang: Lang; selected: boolean; onOpen: (name: string) => void }) {
  const [active, setActive] = React.useState(false)
  const scope = useActiveScope(active)
  const { entry, via } = hit
  const Icon = entry.Icon
  return (
    <button
      type="button"
      className={`cell${selected ? ' is-selected' : ''}`}
      onMouseEnter={() => canHover() && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => onOpen(entry.name)}
      aria-label={`${entry.name}, ${entry.motion[lang]}`}
    >
      <span className="cell-icon">
        <IconTriggerScope scope={scope}>
          <Icon size={26} strokeWidth={1.75} />
        </IconTriggerScope>
      </span>
      <span className="cell-name">{entry.name}</span>
      {via && (
        <span className="cell-via">
          {T[lang].via} {via}
        </span>
      )}
    </button>
  )
}

/* ---------- Detail ---------- */

function Detail({ entry, lang, onClose, onSearch }: { entry: Entry; lang: Lang; onClose: () => void; onSearch: (q: string) => void }) {
  const t = T[lang]
  const Icon = entry.Icon
  const closeRef = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
  }, [entry.name])
  const keywords = lang === 'fr' ? [...entry.fr, ...entry.en] : [...entry.en, ...entry.fr]
  return (
    <aside className="detail" aria-label={entry.name}>
      <div className="detail-head">
        <div>
          <p className="detail-family">{FAMILIES[entry.family][lang].label}</p>
          <h2 className="detail-name">{entry.name}</h2>
        </div>
        <button ref={closeRef} type="button" className="close" onClick={onClose} aria-label={t.close}>
          <Icons.X size={18} />
        </button>
      </div>

      <div className="stage" key={entry.name}>
        <Icon size={112} strokeWidth={1.25} animate loop loopDelay={700} />
      </div>

      <p className="detail-label">{t.motion}</p>
      <p className="detail-motion">{entry.motion[lang]}</p>

      <p className="detail-label">{t.sizes}</p>
      <div className="sizes">
        {[16, 20, 24, 32].map((s) => (
          <div className="size" key={s}>
            <Icon size={s} />
            <span>{s}</span>
          </div>
        ))}
      </div>

      <p className="detail-label">{t.usage}</p>
      <Snippet lang={lang} code={`import { ${entry.name} } from '@fynex/icons'`} />
      <Snippet lang={lang} code={`<${entry.name} size={24} />`} />

      <p className="detail-label">{t.install}</p>
      <Snippet lang={lang} prompt code={`npx shadcn add ${REGISTRY}/${entry.slug}.json`} />

      <p className="detail-label">{t.keywords}</p>
      <div className="chips">
        {keywords.slice(0, 14).map((k) => (
          <button key={k} type="button" className="chip" onClick={() => onSearch(k)}>
            {k}
          </button>
        ))}
      </div>

      {entry.aliases.length > 0 && (
        <>
          <p className="detail-label">{t.aliases}</p>
          <p className="aliases">{entry.aliases.join(', ')}</p>
        </>
      )}
    </aside>
  )
}

/* ---------- App ---------- */

const LANG_KEY = 'fynex-icons-lang'

/** The language the visitor chose before, else the browser's. Browser only: called after hydration. */
function readLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* storage unavailable */
  }
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function App() {
  // The page is prerendered in English: the first render matches that HTML on every browser,
  // and the visitor's language is read in an effect, once the page is hydrated.
  const [lang, setLang] = React.useState<Lang>('en')
  const [query, setQuery] = React.useState('')
  const [family, setFamily] = React.useState<IconFamily | 'all'>('all')
  const [open, setOpen] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const browseRef = React.useRef<HTMLElement>(null)
  const t = T[lang]
  const deferred = React.useDeferredValue(query)

  React.useEffect(() => {
    const preferred = readLang()
    if (preferred !== 'en') setLang(preferred)
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const chooseLang = (next: Lang) => {
    setLang(next)
    try {
      localStorage.setItem(LANG_KEY, next)
    } catch {
      /* storage unavailable */
    }
  }

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const typing = (event.target as HTMLElement)?.closest?.('input, textarea')
      if ((event.key === '/' && !typing) || (event.key === 'k' && (event.metaKey || event.ctrlKey))) {
        event.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.select()
      }
      if (event.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const hits = React.useMemo(() => search(deferred), [deferred])
  const filtered = family === 'all' ? hits : hits.filter((h) => h.entry.family === family)
  const counts = React.useMemo(() => {
    const c: Record<string, number> = { all: hits.length }
    for (const h of hits) c[h.entry.family] = (c[h.entry.family] ?? 0) + 1
    return c
  }, [hits])
  const searching = norm(deferred).length > 0
  const openEntry = open ? ENTRIES.find((e) => e.name === open) : undefined

  const runSearch = (q: string) => {
    setQuery(q)
    setFamily('all')
    setOpen(null)
    browseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      <div className="frame" aria-hidden="true" />
      <header className="bar">
        <nav className="bar-left">
          <a href="#icons">{t.navIcons}</a>
          <a href="#install">{t.navInstall}</a>
        </nav>
        <a className="mark" href="#top" aria-label="Fynex Icons">
          <span className="mark-word">Fynex</span>
          <span className="mark-sub">Icons</span>
        </a>
        <nav className="bar-right">
          <div className="lang" role="group" aria-label="Langue / Language">
            <button type="button" aria-pressed={lang === 'fr'} onClick={() => chooseLang('fr')}>
              FR
            </button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => chooseLang('en')}>
              EN
            </button>
          </div>
          <a className="gh" href="https://github.com/FynexApp/icons" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>
            {t.title.map((line, i) => (
              <span key={i} className={i === 1 ? 'em' : undefined}>
                {line}
              </span>
            ))}
          </h1>
          <p className="lede">{t.lede}</p>
          <ul className="specs">
            <li>
              <strong>{ENTRIES.length}</strong> {t.specs[0]}
            </li>
            <li>{t.specs[1]}</li>
            <li>{t.specs[2]}</li>
            <li>{t.specs[3]}</li>
          </ul>
        </div>
        <HeroIcons onPick={setOpen} />
        <Painting art={ART.hero} lang={lang} className="painting" />
      </section>

      <Install lang={lang} />

      <main className="browse" ref={browseRef} id="icons">
        <div className="section-head">
          <h2>
            {t.browseTitle}
            <Superscript name="Search" />
          </h2>
        </div>
        <div className="search-wrap">
          <div className="search">
            <Icons.Search size={20} strokeWidth={1.75} />
            <label htmlFor="q" className="sr-only">
              {t.searchLabel}
            </label>
            <input
              id="q"
              ref={inputRef}
              type="search"
              autoComplete="off"
              spellCheck={false}
              placeholder={t.placeholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <button type="button" className="clear" onClick={() => setQuery('')} aria-label={t.close}>
                <Icons.X size={16} />
              </button>
            ) : (
              <kbd title={t.shortcut}>/</kbd>
            )}
          </div>
          <div className="filters" role="group">
            <button type="button" aria-pressed={family === 'all'} onClick={() => setFamily('all')}>
              {t.all} <span>{counts.all ?? 0}</span>
            </button>
            {FAMILY_ORDER.map((f) => (
              <button key={f} type="button" aria-pressed={family === f} onClick={() => setFamily(f)} disabled={!counts[f]}>
                {FAMILIES[f][lang].label} <span>{counts[f] ?? 0}</span>
              </button>
            ))}
          </div>
          <p className="hint">
            <span className="count">{t.results(filtered.length)}</span>
            {/* Both hints are rendered and CSS shows the one that fits the pointer: the server cannot know it. */}
            <span className="hover-hint">
              <span className="hint-hover">{t.hoverHint}</span>
              <span className="hint-touch">{t.tapHint}</span>
            </span>
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <p>{t.empty(deferred)}</p>
            <p className="try">
              {t.suggestions}
              {SUGGESTIONS[lang].map((s) => (
                <button key={s} type="button" className="chip" onClick={() => setQuery(s)}>
                  {s}
                </button>
              ))}
            </p>
          </div>
        ) : searching ? (
          <div className="grid flat">
            {filtered.map((hit) => (
              <Cell key={hit.entry.name} hit={hit} lang={lang} selected={open === hit.entry.name} onOpen={setOpen} />
            ))}
          </div>
        ) : (
          FAMILY_ORDER.filter((f) => family === 'all' || family === f).map((f) => {
            const group = filtered.filter((h) => h.entry.family === f)
            return (
              <section key={f} className="family">
                <Painting art={ART[f]} lang={lang} className="family-art" />
                <div className="family-main">
                  <header className="family-head">
                    <h3>
                      {FAMILIES[f][lang].label}
                      <Superscript name={FAMILIES[f].mark} />
                    </h3>
                    <span className="family-count">{group.length}</span>
                    <p>{FAMILIES[f][lang].grammar}</p>
                  </header>
                  <div className="grid">
                    {group.map((hit) => (
                      <Cell key={hit.entry.name} hit={hit} lang={lang} selected={open === hit.entry.name} onOpen={setOpen} />
                    ))}
                  </div>
                </div>
              </section>
            )
          })
        )}
      </main>

      <footer className="foot">
        <img className="foot-bg" src={artSrc(ART.orrery.key)} alt="" loading="lazy" decoding="async" />
        <div className="foot-content">
          <div className="foot-word" aria-hidden="true">
            Fynex
          </div>
          <div className="foot-row">
            <p>{t.madeBy}</p>
            <p>{t.credits}</p>
            <p>
              <a href="https://fynexapp.com" target="_blank" rel="noreferrer">
                fynexapp.com
              </a>
            </p>
          </div>
          <p className="foot-credit">{ART.orrery[lang]}</p>
        </div>
      </footer>

      {openEntry && (
        <>
          <div className="scrim" onClick={() => setOpen(null)} aria-hidden="true" />
          <Detail entry={openEntry} lang={lang} onClose={() => setOpen(null)} onSearch={runSearch} />
        </>
      )}
    </div>
  )
}
