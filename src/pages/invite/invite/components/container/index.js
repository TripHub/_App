import { styled } from 'styletron-react'
import { color, spacing, borderRadius } from '../../../../../common/style'

export default styled('div', {
  boxSizing: 'border-box',
  padding: spacing.sd,
  margin: `${spacing.lg} auto`,
  maxWidth: '720px',
  width: '80%',
  border: `1px solid ${color.medGrey}`,
  textAlign: 'center',
  borderRadius: borderRadius.sd
})
