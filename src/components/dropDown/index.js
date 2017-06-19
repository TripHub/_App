import React from 'react'
import Container from './components/container'
import Menu from './components/menu'
import Item from './components/item'

export default class DropDown extends React.Component {
  state = { open: false }

  open = () => {
    this.setState({ open: true })
    this.attachListener()
  }
  close = () => {
    this.setState({ open: false })
    this.detachListener()
  }

  attachListener = () => document.body.addEventListener('click', this.close)
  detachListener = () => document.body.removeEventListener('click', this.close)

  componentWillUnmount () {
    this.detachListener()
  }

  render () {
    const { toggle, children } = this.props
    const { open } = this.state
    return (
      <Container>
        <div onClick={open ? this.close : this.open}>{toggle}</div>
        { open && <Menu children={children} /> }
      </Container>
    )
  }
}

export const DropDownItem = (props) => (
  <Item to='#' {...props} />
)
