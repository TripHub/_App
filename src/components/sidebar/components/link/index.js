import React from 'react'
import { styled } from 'styletron-react'
import { NavLink } from 'react-router-dom'
import { color, fontFamily, fontSize, spacing } from '../../../../common/style'

const Link = styled(NavLink, {
  display: 'block',
  fontFamily: fontFamily.heading,
  color: color.black,
  fontSize: fontSize.body,
  textDecoration: 'none',
  padding: `9px 12px 9px ${spacing.lg}`,
  background: 'rgba(0, 0, 0, 0)',
  borderLeft: '6px solid transparent',

  ':hover': {
    background: 'rgba(0, 0, 0, 0.045)'
  }
})

export default (props) => (
  <Link exact activeStyle={{
    background: 'rgba(0, 0, 0, 0.09)',
    borderColor: 'white',
    fontWeight: 'bold',
    pointerEvents: 'none'
  }} {...props} />
)
