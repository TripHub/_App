import { styled } from 'styletron-react'
import { Link as _Link } from 'react-router-dom'
import { fontFamily, fontSize, color, colorDarker, spacing } from '../../common/style'

export const Title = styled('h1', ({light}) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  fontWeight: 'bold',
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Heading1 = styled('h1', ({light}) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  fontWeight: 'bold',
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Heading2 = styled('h2', ({light}) => ({
  fontFamily: fontFamily.heading,
  fontWeight: 'normal',
  fontSize: fontSize.heading2,
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const P = styled('p', ({light}) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Small = styled('small', ({light}) => ({
  fontFamily: fontFamily.body,
  fontSize: fontSize.small,
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Link = styled(_Link, {
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  color: color.blue,
  textDecoration: 'none',

  ':hover': {
    color: colorDarker.blue,
    textDecoration: 'underline'
  }
})
