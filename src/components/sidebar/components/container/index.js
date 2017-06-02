import { styled } from 'styletron-react'
import { breakpoint } from './../../../../common/style'

export default styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  [`@media screen and (min-width: ${breakpoint.small}`]: {
    flexDirection: 'row'
  }
})
