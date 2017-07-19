import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../../../../common/style'

export default styled('div', {
  paddingLeft: spacing.sd,
  borderLeft: `3px solid ${color.lightGrey}`,
  margin: `${spacing.sd} ${spacing.sd} 0`
})
