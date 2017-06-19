import { styled } from 'styletron-react'
import { Link } from 'react-router-dom'
import { color, fontFamily, fontSize, spacing } from '../../../../common/style'

export default styled(Link, ({ disabled }) => ({
  display: 'block',
  padding: `${spacing.sm} ${spacing.sd}`,
  boxSizing: 'border-box',
  fontSize: fontSize.small,
  fontFamily: fontFamily.body,
  textDecoration: 'none',
  background: disabled ? color.medGrey : 'white',
  color: disabled ? color.darkGrey : color.black,
  cursor: 'pointer',
  pointerEvents: disabled ? 'none' : 'auto',

  ':hover': {
    background: color.lightGrey
  }
}))
