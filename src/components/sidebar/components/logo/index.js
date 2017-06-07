import { styled } from 'styletron-react'
import { breakpoint, color, spacing } from './../../../../common/style'
import { Heading1 } from '../../../text'

export default styled(Heading1, {
  // base
  color: color.black,
  margin: '0',
  padding: spacing.sd,

  // small and up
  [`@media screen and (min-width: ${breakpoint.small}`]: {
    textAlign: 'center',
    padding: `${spacing.lg} ${spacing.sm}`
  }
})
