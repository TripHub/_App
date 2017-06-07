import { styled } from 'styletron-react'
import { spacing } from '../../../../../../common/style'

export default styled('div', ({ loading }) => ({
  opacity: loading ? 0.6 : 1,
  pointerEvents: loading ? 'none' : 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: spacing.lg
}))
