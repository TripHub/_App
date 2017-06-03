import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../common/style'
import { Link } from 'react-router-dom'

export default styled(Link, {
  // base styled
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  flex: 1,
  boxSizing: 'border-box',
  margin: `0 ${spacing.sd} ${spacing.sd} 0`,
  padding: spacing.sd,
  cursor: 'pointer',
  border: `1px solid ${color.lightGrey}`,

  ':hover': {
    borderColor: color.medGrey
  }
})
