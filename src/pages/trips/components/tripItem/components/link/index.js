import { styled } from 'styletron-react'
import { spacing } from '../../../../../../common/style'
import { Link } from 'react-router-dom'

export default styled(Link, {
  // base styles
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: spacing.sd,
  cursor: 'pointer',
  textDecoration: 'none'
})
