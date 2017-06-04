import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../common/style'
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
  border: `1px solid ${color.medGrey}`,
  textDecoration: 'none',

  ':hover': {
    borderColor: color.darkGrey
  }
})
