import React from 'react'
import { styled } from 'styletron-react'
import { NavLink } from 'react-router-dom'
import Icon from '../../../icon'
import { color, colorDarker, fontFamily, fontSize, spacing } from '../../../../common/style'

const Link = styled(NavLink, ({ disabled }) => ({
  display: 'block',
  fontFamily: fontFamily.heading,
  color: color.black,
  fontSize: fontSize.body,
  textDecoration: 'none',
  padding: `9px 12px 9px ${spacing.sd}`,
  background: 'rgba(0, 0, 0, 0)',
  borderLeft: '6px solid transparent',
  pointerEvents: disabled ? 'none' : 'auto',
  opacity: disabled ? 0.4 : 1,

  ':hover': {
    background: 'rgba(0, 0, 0, 0.045)'
  }
}))

const Text = styled('span', {
  marginLeft: spacing.sd
})

export default ({ icon, children, ...props }) => (
  <Link exact activeStyle={{
    background: 'rgba(0, 0, 0, 0.1)',
    borderColor: colorDarker.green,
    pointerEvents: 'none'
  }} {...props}>
    <Icon name={icon} />
    <Text children={children} />
  </Link>
)
