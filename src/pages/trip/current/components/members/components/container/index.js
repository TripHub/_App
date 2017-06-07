import { styled } from 'styletron-react'
import { breakpoint } from '../../../../../../../common/style'

export default styled('div', {
  // base styles
  width: '100%',

  // small and up
  [`@media screen and (min-width: ${breakpoint.small})`]: {
    width: '50%'
  },

  // medium and up
  [`@media screen and (min-width: ${breakpoint.medium})`]: {
    width: `${100 / 3}%`
  },

  // large and up
  [`@media screen and (min-width: ${breakpoint.large})`]: {
    width: '25%'
  }
})
