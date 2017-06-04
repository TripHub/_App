import { styled } from 'styletron-react'
import { breakpoint, spacing } from '../../../../../../common/style'

export default styled('div', {
  // base styles
  display: 'flex',
  margin: 0,
  padding: `0 ${spacing.sd} ${spacing.sd} 0`,
  width: '100%',
  boxSizing: 'border-box',

  // medium and up
  [`@media screen and (min-width: ${breakpoint.medium})`]: {
    width: '50%'
  }
})
