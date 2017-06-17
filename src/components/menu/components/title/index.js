import { styled } from 'styletron-react'
import { Link } from 'react-router-dom'
import { color, fontSize, fontFamily } from '../../../../common/style'

export default styled(Link, {
  color: color.black,
  fontWeight: 'bold',
  fontFamily: fontFamily.heading,
  fontSize: fontSize.heading2,
  textDecoration: 'none'
})
