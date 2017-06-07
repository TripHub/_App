import { styled } from 'styletron-react'
import { Link as _Link } from 'react-router-dom'
import { fontFamily, fontSize, color, colorDarker, spacing, opacity } from '../../common/style'

const baseStyles = ({ disabled = false, light = false }) => ({
  color: light ? 'white' : color.black,
  opacity: disabled ? opacity.disabled : 1
})

export const Title = styled('h1', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  fontWeight: 'bold',
  margin: `0 0 ${spacing.sd}`
}))

export const Heading1 = styled('h1', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  fontWeight: 'bold',
  margin: `0 0 ${spacing.sd}`
}))

export const Heading2 = styled('h2', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.heading,
  fontWeight: 'normal',
  fontSize: fontSize.heading2,
  margin: `0 0 ${spacing.sd}`
}))

export const P = styled('p', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  margin: `0 0 ${spacing.sd}`
}))

export const Small = styled('small', (props) => ({
  ...baseStyles(props),
  fontFamily: fontFamily.body,
  fontSize: fontSize.small,
  margin: `0 0 ${spacing.sd}`
}))

export const Link = styled(_Link, ({ disabled }) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  color: color.blue,
  textDecoration: 'none',
  opacity: disabled ? opacity.disabled : 1,
  pointerEvents: disabled ? 'none' : 'auto',

  ':hover': {
    color: colorDarker.blue
  }
}))
