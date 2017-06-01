import { styled } from 'styletron-react'
import { fontFamily, fontSize, color, spacing } from '../../common/style'

export const Title = styled('h1', ({light}) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Heading1 = styled('h1', ({light}) => ({
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading1,
  color: light ? 'white' : color.black,
  margin: `0 0 ${spacing.sd}`
}))

export const Heading2 = styled('h2', ({light}) => ({
  fontFamily: fontFamily.heading,
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
