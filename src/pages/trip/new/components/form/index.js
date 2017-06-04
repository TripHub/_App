import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'

export default styled('form', {
  maxWidth: '720px',
  width: '84%',
  margin: `${spacing.sd} auto 0`,
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd,
  padding: spacing.sd
})
