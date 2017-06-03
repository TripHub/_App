import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../common/style'

export default styled('div', {
  // base styled
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  flex: 1,
  boxSizing: 'border-box',
  margin: `0 ${spacing.sd} ${spacing.sd} 0`,
  padding: spacing.sd,
  border: `1px solid ${color.lightGrey}`,

  ':hover': {
    borderColor: color.medGrey
  }
})
