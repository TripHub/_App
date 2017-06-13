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

export default styled('button', ({ primary, small, noMargin }) => ({
  boxSizing: 'border-box',
  marginRight: noMargin ? 0 : small ? spacing.sm : spacing.sd,
  padding: small ? '2px 5px' : `7px ${spacing.sd}`,
  background: primary ? gradient.green : 'white',
  border: '1px solid',
  borderColor: primary ? 'white' : color.medGrey,
  borderRadius: borderRadius.sd,
  fontFamily: fontFamily.body,
  fontSize: small ? fontSize.small : fontSize.body,
  cursor: 'pointer',
  color: color.black,

  ':hover': {
    background: primary ? gradient.greenHover : 'white',
    borderColor: primary ? 'white' : color.darkGrey,
    boxShadow: shadow.sd
  },

  ':disabled': {
    opacity: opacity.disabled
  }
}))
