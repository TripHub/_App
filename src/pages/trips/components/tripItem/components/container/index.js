import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../common/style'
import { Link } from 'react-router-dom'

export default styled(Link, {
  // base styled
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
  margin: `0 ${spacing.sd} ${spacing.sd} 0`,
  padding: spacing.sd,
  cursor: 'pointer',
  border: `1px solid ${color.lightGrey}`,
  textDecoration: 'none',

  ':hover': {
    borderColor: color.medGrey
  }
})
