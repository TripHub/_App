import { styled } from 'styletron-react'
import { breakpoint, spacing } from '../../../../../../common/style'

export default styled('div', {
  // base styles
  display: 'flex',
  padding: `0 ${spacing.sd} ${spacing.sd} 0`,
  boxSizing: 'border-box',
  width: '100%',

  // medium and up
  [`@media screen and (min-width: ${breakpoint.medium})`]: {
    width: '50%'
  },

  // large and up
  [`@media screen and (min-width: ${breakpoint.large})`]: {
    width: '25%'
  }
})
