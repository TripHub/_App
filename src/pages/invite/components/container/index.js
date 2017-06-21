import { styled } from 'styletron-react'
import { color, spacing } from '../../../../common/style'

export default styled('div', {
  boxSizing: 'border-box',
  padding: spacing.sd,
  margin: `${spacing.lg} auto`,
  maxWidth: '720px',
  border: `1px solid ${color.medGrey}`,
  textAlign: 'center'
})
