import { styled } from 'styletron-react'
import { Link as _Link } from 'react-router-dom'
import { fontFamily, fontSize, color, colorDarker, spacing, opacity, letterSpacing } from '../../common/style'

const baseStyles = ({
  disabled = false,
  muted = false,
  light = false,
  noMargin = false,
  margin = spacing.sd
}) => ({
  display: 'block',
  opacity: disabled ? opacity.disabled : muted ? opacity.muted : 1,
  color: light ? 'white' : color.black,
  boxSizing: 'border-box',
  letterSpacing: letterSpacing.body,
  ...noMargin
    ? { margin: 0 }
    : { margin: `0 0 ${margin}` }
})

export const Text = styled('span', (props) => ({
  // since Text is primarily used for buttons, it defaults to noMargin
  ...baseStyles({ noMargin: true, ...props })
}))

export const Title = styled('h1', (props) => ({
  ...baseStyles({ ...props, margin: spacing.lg }),
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  fontWeight: 'bold',
  letterSpacing: letterSpacing.heading
}))

export const Heading1 = styled('h1', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  fontWeight: 'bold',
  letterSpacing: letterSpacing.heading
}))

export const Heading2 = styled('h2', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading2,
  letterSpacing: letterSpacing.heading
}))

export const Heading3 = styled('h3', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.body,
  fontWeight: '600',
  fontSize: fontSize.heading3,
  letterSpacing: letterSpacing.heading
}))

export const P = styled('p', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.body,
  fontSize: fontSize.body
}))

export const Small = styled('small', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.body,
  fontSize: fontSize.small
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
