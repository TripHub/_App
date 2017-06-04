import { styled } from 'styletron-react'
import { Input } from '../../../../../components/form'
import { fontFamily, fontSize } from '../../../../../common/style'

export default styled(Input, {
  fontFamily: fontFamily.heading,
  fontSize: fontSize.title,
  border: 0,
  width: '100%',
  boxSizing: 'border-box'
})
