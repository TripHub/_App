import { styled } from 'styletron-react'
import { color, spacing, opacity } from '../../../../common/style'

export default styled('div', ({ disabled }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${spacing.sm} ${spacing.sd}`,
  borderBottom: `1px solid ${color.lightGrey}`,
  opacity: disabled ? opacity.disabled : 1
}))
