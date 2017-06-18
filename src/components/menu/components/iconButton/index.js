import { styled } from 'styletron-react'
import { Link } from 'react-router-dom'
import { color, fontSize, spacing, opacity } from '../../../../common/style'

export default styled(Link, ({ disabled }) => ({
  padding: spacing.sm,
  border: 0,
  background: 'none',
  color: color.black,
  opacity: disabled ? opacity.disabled : opacity.muted,
  cursor: 'pointer',
  fontSize: fontSize.heading1,
  marginRight: spacing.sd,

  ':hover': {
    opacity: 1
  }
}))
