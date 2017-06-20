import React from 'react'
import { styled } from 'styletron-react'
import { NavLink } from 'react-router-dom'
import Icon from '../../../icon'
import { color, colorDarker, fontFamily, fontSize, spacing, opacity, letterSpacing } from '../../../../common/style'

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
  opacity: disabled ? opacity.disabled : 1,
  letterSpacing: letterSpacing.body,

  ':hover': {
    background: 'rgba(0, 0, 0, 0.045)'
  }
}))

const Text = styled('span', {
  marginLeft: spacing.sd
})

const IconContainer = styled('div', {
  display: 'inline-block',
  width: '15px',
  overflow: 'visible'
})

export default ({ icon, children, ...props }) => (
  <Link exact activeStyle={!props.disabled ? {
    background: 'rgba(0, 0, 0, 0.1)',
    borderColor: colorDarker.green,
    pointerEvents: 'none'
  } : {}} {...props}>
    <IconContainer>
      <Icon name={icon} />
    </IconContainer>
    <Text children={children} />
  </Link>
)
