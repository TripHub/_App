import { styled } from 'styletron-react'
import {
  fontFamily,
  fontSize,
  spacing,
  gradient,
  borderRadius,
  color,
  opacity,
  shadow
} from '../../common/style'

export default styled('button', ({ primary, small, danger, noMargin }) => ({
  boxSizing: 'border-box',
  marginRight: noMargin ? 0 : small ? spacing.sm : spacing.sd,
  padding: small ? '2px 5px' : `7px ${spacing.sd}`,
  background: primary ? (danger ? color.red : gradient.green) : 'white',
  border: '1px solid',
  borderColor: primary ? 'white' : (danger ? color.red : color.medGrey),
  borderRadius: borderRadius.sd,
  fontFamily: fontFamily.body,
  fontSize: small ? fontSize.small : fontSize.body,
  cursor: 'pointer',
  color: danger && primary ? 'white' : color.black,

  ':hover': {
    background: primary ? (danger ? color.red : gradient.greenHover) : 'white',
    borderColor: primary ? 'white' : (danger ? color.red : color.darkGrey),
    boxShadow: shadow.sd
  },

  ':disabled': {
    opacity: opacity.disabled,
    pointerEvents: 'none'
  }
}))
