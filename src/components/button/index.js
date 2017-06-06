import { styled } from 'styletron-react'
import {
  fontFamily,
  fontSize,
  spacing,
  gradient,
  borderRadius,
  color
} from '../../common/style'

export default styled('button', ({ primary, small }) => ({
  boxSizing: 'border-box',
  padding: small ? '2px 5px' : `7px ${spacing.sd}`,
  background: primary ? gradient.green : 'white',
  border: primary ? 0 : '1px solid',
  borderColor: color.medGrey,
  borderRadius: borderRadius.sd,
  fontFamily: fontFamily.body,
  fontSize: small ? fontSize.small : fontSize.body,
  cursor: 'pointer',
  color: color.black,

  ':hover': {
    background: primary ? gradient.greenHover : 'white',
    borderColor: color.darkGrey,
    boxShadow: '0 1px 1px rgba(0, 0, 0, .1)'
  },

  ':disabled': {
    opacity: 0.4
  }
}))
