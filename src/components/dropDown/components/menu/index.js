import { styled } from 'styletron-react'
import { shadow, color } from '../../../../common/style'

export default styled('div', {
  position: 'absolute',
  right: 0,
  top: '100%',
  background: 'white',
  border: `1px solid ${color.medGrey}`,
  boxShadow: shadow.sd
})
