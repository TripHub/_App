import { styled } from 'styletron-react'
import { spacing, color } from '../../../common/style'

export default styled('input', {
  padding: spacing.sm,
  border: `1px solid ${color.medGrey}`,

  ':hover': {
    borderColor: color.darkGrey
  }
})
