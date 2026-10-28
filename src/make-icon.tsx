'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

import { compose, mergeRefs, splitTriggerProps, useIconController, type IconTriggerProps } from './animate-icon'
import { IconContext, type IconControls } from './icon-context'
import { pointerCanHover } from './icon-trigger'

/**
 * The icon factory.
 *
 * An icon is a list of shapes on the 24 grid (stroke 2, round caps,
 * `currentColor`), some of which carry a part name, and a table of animations
 * that gives each part its `initial` / `animate` variants.
 *
 * AT REST, an icon is a plain SVG. The `motion` elements are only mounted for
 * the duration of the gesture, then unmounted. A list of 200 still icons does
 * not cost 200 times (a `motion.svg`, a `motion.g` and n `motion.path`), which
 * is what makes it affordable to animate EVERY icon of an app, tables
 * included.
 *
 * Four ways to trigger, in order of preference:
 * 1. a clickable element that uses `useIconTrigger` (a button, a menu row):
 *    the icon plays when the element is hovered, with nothing to write at the
 *    call site;
 * 2. a parent `IconTrigger` block, or a parent `<AnimateIcon animateOnHover>`;
 * 3. nothing at all: the icon plays on its own hover, with a simple local
 *    state (no controls, no context);
 * 4. explicit props (`animate`, `loop`, `animateOnTap`, ...) for a programmatic
 *    drive, for instance a looping loader.
 * `animateOnHover={false}` renders the bare drawing, without any listener.
 */

type ShapeTag = 'path' | 'line' | 'rect' | 'circle' | 'ellipse' | 'polygon' | 'polyline'

/** One shape of the drawing. `part` ties it to an entry of the animation table. */
export type IconPart = { tag: ShapeTag; part?: string } & {
  [attribute: string]: string | number | undefined
}

/**
 * Animations by name, then variants by part. `default` is required; the
 * special part `group` animates the whole drawing at once.
 */
export type IconAnimations = {
  default: Record<string, Variants>
  [animation: string]: Record<string, Variants>
}

export type IconOptions = {
  /**
   * Transform origin of a part, in units of the 24 grid. Without it, each
   * shape turns around its own center; with it, every shape of the part turns
   * around the same point (a lid and its handle, a needle and its pin).
   */
  origins?: Record<string, readonly [number, number]>
  /** Transform origin of the whole group, relative to its box (`'50% 0%'`). */
  groupOrigin?: string
}

/**
 * The props of a plain `<svg>` (as with lucide), plus `size` and the explicit
 * triggers. Not the props of `motion.svg`: the root is a real `<svg>`, so an
 * icon fits anywhere a `ComponentType<SVGProps<SVGSVGElement>>` is expected.
 */
export type AnimatedIconProps = React.SVGProps<SVGSVGElement> & IconTriggerProps & { size?: number | string }

export type AnimatedIcon = React.FC<AnimatedIconProps> & {
  /** The drawing, read by tests and tooling. */
  parts: readonly IconPart[]
  /** The animation table, read by tests and tooling. */
  animations: IconAnimations
}

type Drive = IconControls | 'initial' | 'animate'

/** How long an interrupted gesture takes to return to rest before `motion` is unmounted. */
const LINGER_MS = 700

/**
 * True during the gesture and for a short while after. The state is re-armed
 * during render (not in an effect) so that the `motion` elements exist in the
 * very render where the trigger turns on: the controller starts its controls
 * in an effect, and the parts must already be subscribed by then.
 */
function useLive(on: boolean) {
  const [settled, setSettled] = React.useState(true)
  if (on && settled) setSettled(false)
  React.useEffect(() => {
    if (on || settled) return
    const timer = setTimeout(() => setSettled(true), LINGER_MS)
    return () => clearTimeout(timer)
  }, [on, settled])
  return on || !settled
}

const hasAccessibleName = (props: Record<string, unknown>) =>
  props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined || props.role !== undefined

type SvgProps = React.SVGProps<SVGSVGElement> & { size?: number | string }

/* @__NO_SIDE_EFFECTS__ */
export function makeIcon(
  displayName: string,
  parts: readonly IconPart[],
  animations: IconAnimations,
  options: IconOptions = {},
): AnimatedIcon {
  const { origins, groupOrigin } = options

  const still = parts.map(({ tag, part: _part, ...attributes }, index) =>
    React.createElement(tag, { key: index, ...attributes }),
  )

  /** The shapes as `motion` elements, mounted only during the gesture. */
  function Moving({ drive, animation }: { drive: Drive; animation?: string }) {
    const variants = (animation && animations[animation]) || animations.default
    const reduce = useReducedMotion()
    // Reduced motion: the bare drawing, still.
    if (reduce) return <>{still}</>
    const body = parts.map(({ tag, part, ...attributes }, index) => {
      const partVariants = part ? variants[part] : undefined
      if (!partVariants) return React.createElement(tag, { key: index, ...attributes })
      const origin = part ? origins?.[part] : undefined
      return React.createElement(motion[tag] as React.ElementType, {
        key: index,
        ...attributes,
        variants: partVariants,
        initial: 'initial',
        animate: drive,
        // `originX` / `originY` rather than `transformOrigin`: motion
        // recomputes `transform-origin` on every frame and overwrites a style
        // set by hand.
        style: origin ? { transformBox: 'view-box', originX: `${origin[0]}px`, originY: `${origin[1]}px` } : undefined,
      })
    })
    if (!variants.group) return <>{body}</>
    const [originX, originY] = (groupOrigin ?? '50% 50%').split(' ')
    return (
      <motion.g
        variants={variants.group}
        initial="initial"
        animate={drive}
        style={{ transformBox: 'fill-box', originX, originY }}
      >
        {body}
      </motion.g>
    )
  }

  function Svg({
    size = 24,
    live,
    drive,
    animation,
    ...props
  }: SvgProps & { live: boolean; drive: Drive; animation?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-icon={displayName}
        // Decorative by default, as with lucide: the label belongs to the
        // button or the text next to it. An `aria-label` makes it speak.
        aria-hidden={hasAccessibleName(props) ? undefined : true}
        {...props}
      >
        {live ? <Moving drive={drive} animation={animation} /> : still}
      </svg>
    )
  }

  /** Driven by the controls of a parent `AnimateIcon`. */
  function Driven({ controls, active, animation, ...props }: SvgProps & { controls: IconControls; active: boolean; animation?: string }) {
    const live = useLive(active)
    return <Svg live={live} drive={controls} animation={animation} {...props} />
  }

  /** Under a light trigger (`useIconTrigger`): it only says "hovered". */
  function Triggered({ active, ...props }: SvgProps & { active: boolean }) {
    const live = useLive(active)
    return <Svg live={live} drive={active ? 'animate' : 'initial'} {...props} />
  }

  /** On its own, with no parent and no prop: a local state is enough. */
  function SelfHover({ onMouseEnter, onMouseLeave, ...props }: SvgProps) {
    const [hovered, setHovered] = React.useState(false)
    const live = useLive(hovered)
    return (
      <Svg
        live={live}
        drive={hovered ? 'animate' : 'initial'}
        onMouseEnter={(event) => {
          onMouseEnter?.(event)
          if (pointerCanHover()) setHovered(true)
        }}
        onMouseLeave={(event) => {
          onMouseLeave?.(event)
          setHovered(false)
        }}
        {...props}
      />
    )
  }

  /** With explicit props: the icon holds its own controller. */
  function Controlled({ trigger, ...props }: SvgProps & { trigger: IconTriggerProps }) {
    const ref = React.useRef<SVGSVGElement>(null)
    const { value, handlers } = useIconController(trigger, ref)
    const live = useLive(value.active)
    return (
      <Svg
        live={live}
        drive={value.controls ?? 'initial'}
        animation={value.animation}
        {...props}
        ref={mergeRefs(ref, props.ref as React.Ref<SVGSVGElement> | undefined)}
        onMouseEnter={compose(props.onMouseEnter, handlers.onMouseEnter)}
        onMouseLeave={compose(props.onMouseLeave, handlers.onMouseLeave)}
        onPointerDown={compose(props.onPointerDown, handlers.onPointerDown)}
        onPointerUp={compose(props.onPointerUp, handlers.onPointerUp)}
      />
    )
  }

  function Icon(props: AnimatedIconProps) {
    const context = React.useContext(IconContext)
    const { trigger, rest } = splitTriggerProps(props)
    const svgProps = rest as SvgProps
    const { animate, animateOnHover, animateOnTap, animateOnView } = trigger
    const explicit =
      animate !== undefined ||
      animateOnTap !== undefined ||
      animateOnView !== undefined ||
      trigger.animation !== undefined ||
      trigger.loop !== undefined ||
      trigger.delay !== undefined ||
      (animateOnHover !== undefined && animateOnHover !== false)
    // The bare drawing, even under an animated parent: for long lists and
    // state indicators.
    if (animateOnHover === false && !explicit) return <Svg live={false} drive="initial" {...svgProps} />
    if (explicit) {
      // With no other trigger, an icon given explicit props still plays on its own hover.
      const hover = animateOnHover ?? (animate === undefined && animateOnTap === undefined && animateOnView === undefined)
      return <Controlled trigger={{ ...trigger, animateOnHover: hover }} {...svgProps} />
    }
    if (context?.controls) {
      return <Driven controls={context.controls} active={context.active} animation={context.animation} {...svgProps} />
    }
    if (context) return <Triggered active={context.active} {...svgProps} />
    return <SelfHover {...svgProps} />
  }

  Icon.displayName = displayName
  Icon.parts = parts
  Icon.animations = animations
  return Icon
}
