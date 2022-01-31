import {mediaUp, mediaDown, mediaBetween} from '../media-queries'

describe('Test media queries helper fn', () => {
  it('Media Up "sm" breakpoint', () => {
    const breakpoint = '576px'
    const query = mediaUp(breakpoint)
    expect(query).toEqual(`@media (min-width: ${breakpoint})`)
  })

  it('Media Down "lg" breakpoint', () => {
    const breakpoint = '992px'
    const query = mediaDown(breakpoint)
    expect(query).toEqual(`@media (max-width: calc(${breakpoint} - 0.02px))`)
  })

  it('Media Between "sm" and XL breakpoint', () => {
    const breakpointMin = '576px'
    const breakpointMax = '1200px'
    const query = mediaBetween(breakpointMin, breakpointMax)
    expect(query).toEqual(
      `@media (max-width: calc(${breakpointMax} + 0.02px)) and (min-width: ${breakpointMin})`,
    )
  })
})
