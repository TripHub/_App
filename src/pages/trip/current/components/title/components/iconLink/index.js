import { styled } from 'styletron-react'
import { Link } from 'react-router-dom'
import { color, fontSize, spacing, opacity } from '../../../../../../../common/style'

export default styled(Link, ({ disabled }) => ({
  padding: spacing.sm,
  border: 0,
  background: 'none',
  color: color.black,
  opacity: disabled ? opacity.disabled : 0.55,
  cursor: 'pointer',
  fontSize: fontSize.heading2,

  ':hover': {
    opacity: 1
  }
}))
