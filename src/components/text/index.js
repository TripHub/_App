import { styled } from 'styletron-react'
import { Link as _Link } from 'react-router-dom'
import { fontFamily, fontSize, color, colorDarker, spacing, opacity, letterSpacing } from '../../common/style'

export const baseStyles = ({ disabled, muted, light, noMargin }) => ({
  display: 'block',
  color: light ? 'white' : color.black,
  opacity: disabled ? opacity.disabled : muted ? opacity.muted : 1,
  boxSizing: 'border-box',
  letterSpacing: letterSpacing.body,
  ...noMargin && { margin: 0 }
})

export const Text = styled('span', (props) => ({
  ...baseStyles(props)
}))

export const Title = styled('h1', (props) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  fontWeight: 'bold',
  margin: `0 0 ${spacing.lg}`,
  letterSpacing: letterSpacing.heading,
  ...baseStyles(props)
}))

export const Heading1 = styled('h1', (props) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  fontWeight: 'bold',
  margin: `0 0 ${spacing.sd}`,
  letterSpacing: letterSpacing.heading,
  ...baseStyles(props)
}))

export const Heading2 = styled('h2', (props) => ({
  fontFamily: fontFamily.heading,
  fontWeight: 'normal',
  fontSize: fontSize.heading2,
  margin: `0 0 ${spacing.sd}`,
  letterSpacing: letterSpacing.heading,
  ...baseStyles(props)
}))

export const P = styled('p', (props) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  margin: `0 0 ${spacing.sd}`,
  ...baseStyles(props)
}))

export const Small = styled('small', (props) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.small,
  margin: `0 0 ${spacing.sd}`,
  ...baseStyles(props)
}))

export const Link = styled(_Link, ({ disabled }) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  color: color.blue,
  textDecoration: 'none',
  opacity: disabled ? opacity.disabled : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  letterSpacing: letterSpacing.body,

  ':hover': {
    color: colorDarker.blue
  }
}))
