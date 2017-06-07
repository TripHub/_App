import React from 'react'
import Container from './components/container'
import { Link, Button, Div } from './components/link'

export default ({ active, to, onClick, ...props }) => {
  return (
    <Container
      hoverStyles={to || onClick}
      active={active}>
      {
        to
          ? <Link to={to || '#'} {...props} />
          : onClick
            ? <Button onClick={onClick} {...props} />
            : <Div {...props} />
      }
    </Container>
  )
}
