import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../../../../common/style'

export default styled('div', {
  paddingLeft: spacing.sd,
  borderLeft: `4px solid ${color.lightGrey}`,
  margin: `0 ${spacing.sd} ${spacing.sd}`
})
