import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../common/style'

export default styled('img', {
  objectFit: 'cover',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: 0,
  background: color.lightGrey,
  marginRight: spacing.sm
})
