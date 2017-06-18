import { styled } from 'styletron-react'
import { Link } from 'react-router-dom'
import { breakpoint, color, spacing, fontFamily, fontSize } from './../../../../common/style'

export default styled(Link, {
  // base
  display: 'block',
  color: color.black,
  margin: '0',
  padding: spacing.sd,
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  fontWeight: 'bold',
  textDecoration: 'none',

  // small and up
  [`@media screen and (min-width: ${breakpoint.small}`]: {
    textAlign: 'center',
    padding: `${spacing.lg} ${spacing.sm}`
  }
})
