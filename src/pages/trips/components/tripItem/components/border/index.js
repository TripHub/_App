import { styled } from 'styletron-react'
import { color, shadow } from '../../../../../../common/style'

export default styled('div', ({ active }) => ({
  // base styles
  display: 'flex',
  width: '100%',
  border: `1px solid ${active ? color.blue : color.medGrey}`,
  boxShadow: active ? shadow.sd : 'none',

  ':hover': {
    borderColor: active ? color.blue : color.darkGrey,
    boxShadow: shadow.sd
  }
}))
