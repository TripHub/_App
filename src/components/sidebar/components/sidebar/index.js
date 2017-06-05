import { styled } from 'styletron-react'
import { breakpoint, gradient } from './../../../../common/style'


export default styled('nav', {
  // base styled
  background: gradient.green,
  width: '100%',
  boxShadow: '1px 0 2px rgba(0, 0, 0, .08)',

  // small and up
  [`@media (min-width: ${breakpoint.small}`]: {
    alignSelf: 'stretch',
    overflowX: 'hidden',
    width: '190px'
  },

  // medium and up
  [`@media (min-width: ${breakpoint.medium}`]: {
    width: '230px'
  }
})
