type Keys = keyof typeof breakpoints
type Breakpoint = typeof breakpoints[Keys]

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
} as const

export const mediaUp = (breakpoint: Breakpoint) =>
  `@media (min-width: ${breakpoint})`

export const mediaDown = (breakpoint: Breakpoint) =>
  `@media (max-width: calc(${breakpoint} - 0.02px))`

export const mediaBetween = (
  breakpointMin: Breakpoint,
  breakpointMax: Breakpoint,
) =>
  `@media (max-width: calc(${breakpointMax} + 0.02px)) and (min-width: ${breakpointMin})`
