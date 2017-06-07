import { styled } from 'styletron-react'
import { color, spacing, shadow } from '../../../../../../common/style'
import { Link } from 'react-router-dom'

export default styled(Link, ({ active }) => ({
  // base styles
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: spacing.sd,
  cursor: 'pointer',
  border: `1px solid ${active ? color.blue : color.medGrey}`,
  textDecoration: 'none',
  boxShadow: active ? shadow.sd : 'none',

  ':hover': {
    borderColor: active ? color.blue : color.darkGrey,
    boxShadow: shadow.sd
  }
}))
