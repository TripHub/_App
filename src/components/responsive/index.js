import { styled } from 'styletron-react'
import { breakpoint, spacing } from '../../common/style'

export const Row = styled('div', ({ noGutter }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: noGutter ? 0 : `0 0 0 ${spacing.sd}`
}))

export const OneTwoFour = styled('div', ({ noGutter, smallGutter }) => ({
  // base styles
  display: 'inline-flex',
  boxSizing: 'border-box',
  width: '100%',
  padding: noGutter
    ? 0
    : `0 ${smallGutter ? spacing.sm : spacing.sd} ${smallGutter ? spacing.sm : spacing.sd} 0`,

  // med and up
  [`@media screen and (min-width: ${breakpoint.medium})`]: {
    width: '50%'
  },

  // large and up
  [`@media screen and (min-width: ${breakpoint.large}`]: {
    width: '25%'
  }
}))
