import { styled } from 'styletron-react'
import { color } from '../../../../../../../../../common/style'

export default styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: `1px solid ${color.lightGrey}`,
  boxSizing: 'border-box'
})
