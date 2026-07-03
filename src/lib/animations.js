// Shared Framer Motion variants & easing curves for FuseOne Studio

export const EASE_PREMIUM = [0.16, 1, 0.3, 1]
export const EASE_OUT = [0.25, 0.46, 0.45, 0.94]
export const EASE_IN = [0.55, 0, 1, 0.45]

// Fade + Rise — used for most section reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
}

// Stagger container
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// Clip-path wipe reveal (left → right)
export const clipWipe = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 1, ease: EASE_PREMIUM },
  },
}

// Scale-in reveal for cards
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
}

// Slide from side
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
}

// Character-by-character hero text
export const charReveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
}

// Viewport trigger defaults
export const viewportOnce = { once: true, margin: '-80px' }
