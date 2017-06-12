import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'

export const Form = styled('form', {
  maxWidth: '720px',
  width: '84%',
  margin: `${spacing.sd} auto`,
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd
})

export const Header = styled('div', {
  padding: spacing.sd,
  background: color.lightGrey,
  borderBottom: `1px solid ${color.medGrey}`
})

export const Body = styled('div', {
  padding: spacing.sd
})

export const Footer = styled('div', {
  padding: spacing.sd,
  borderTop: `1px solid ${color.medGrey}`
})

export const FooterLink = styled('span', {
  marginRight: spacing.sd
})
