/**
 * @fynex/icons: animated SVG icons for React, drawn on the lucide grid and
 * animated with motion. Same names and props as lucide (`size`, `className`,
 * `strokeWidth`), plus explicit triggers (`animate`, `animateOnHover`,
 * `loop`, ...).
 */
export {
  makeIcon,
  type AnimatedIcon,
  type AnimatedIconProps,
  type IconAnimations,
  type IconOptions,
  type IconPart,
} from './make-icon'
export { appear, blink, draw, EASE, kf, move, pulse, rock, shake, spin, turn } from './motions'
export {
  AnimateIcon,
  useIconController,
  type AnimateIconProps,
  type IconTriggerProps,
  type IconTriggerValue,
} from './animate-icon'
export { IconContext, type IconContextValue, type IconControls } from './icon-context'
export { pointerCanHover, useIconTrigger } from './icon-trigger'
export { IconTrigger, IconTriggerScope } from './icon-trigger-scope'
