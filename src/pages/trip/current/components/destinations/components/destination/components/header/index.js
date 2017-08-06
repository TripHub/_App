import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../../../../common/style'

export default styled('div', {
  display: 'flex',
  padding: spacing.sd,
  justifyContent: 'space-between',
  borderBottom: `1px solid ${color.lightGrey}`
})
