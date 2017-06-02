import { styled } from 'styletron-react'
import { breakpoint, color } from './../../../../common/style'


export default styled('nav', {
  // base styled
  background: color.green,
  width: '100%',

  // small and up
  [`@media (min-width: ${breakpoint.small}`]: {
    alignSelf: 'stretch',
    overflowX: 'hidden',
    width: '190px',
    padding: '10px'
  },

  // medium and up
  [`@media (min-width: ${breakpoint.medium}`]: {
    width: '230px'
  }
})
