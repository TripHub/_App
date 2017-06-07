import { styled } from 'styletron-react'
import { spacing } from '../../../../common/style'
import { Link as _Link } from 'react-router-dom'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: spacing.sd,
  textDecoration: 'none'
}

export const Link = styled(_Link, {
  ...styles,
  cursor: 'pointer'
})

export const Button = styled('button', {
  ...styles,
  cursor: 'pointer'
})

export const Div = styled('div', {
  ...styles
})
