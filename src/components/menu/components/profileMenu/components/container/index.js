import { styled } from 'styletron-react'

export default styled('div', ({ loading }) => ({
  opacity: loading ? 0.6 : 1,
  pointerEvents: loading ? 'none' : 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer'
}))
