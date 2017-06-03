import { styled } from 'styletron-react'
import { spacing } from '../../../../common/style'

export default styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  padding: `${spacing.sd} 0 0 ${spacing.sd}`
})
