import { styled } from 'styletron-react'
import { breakpoint, color, fontSize, spacing } from './../../../../common/style'
import { Title } from '../../../text'

export default styled(Title, {
  // base
  color: color.black,
  margin: '0',
  padding: spacing.sd,
  fontSize: fontSize.heading1,

  // small and up
  [`@media screen and (min-width: ${breakpoint.small}`]: {
    fontSize: fontSize.title,
    textAlign: 'center',
    padding: `${spacing.lg} ${spacing.sm}`,
    margin: `0 0 ${spacing.sd}`,
    background: 'rgba(0, 0, 0, 0.04)'
  }
})
