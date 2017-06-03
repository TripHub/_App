import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../common/style'

export default styled('button', {
  padding: spacing.sm,
  marginRight: spacing.lg,
  background: 'white',
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd,
  cursor: 'pointer',

  ':hover': {
    borderColor: color.darkGrey
  }
})
