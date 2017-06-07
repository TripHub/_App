import React from 'react'
import Container from './components/container'
import Link from './components/link'

export default ({ active, to, ...props }) => {
  return (
    <Container active={active}>
      <Link to={to || '#'} {...props} />
    </Container>
  )
}
