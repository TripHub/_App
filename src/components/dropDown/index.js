import React from 'react'
import Container from './components/container'
import Menu from './components/menu'
import Item from './components/item'

export default class DropDown extends React.Component {
  state = { open: false }

  open = () => this.setState({ open: false })
  close = () => this.setState({ open: false })
  toggle = () => this.setState(s => ({ open: !s.open }))

  render () {
    return (
      <Container>
        <div onClick={this.toggle}>{this.props.toggle}</div>
        {
          this.state.open &&
          <Menu>
            {this.props.children}
          </Menu>
        }
      </Container>
    )
  }
}

export const DropDownItem = (props) => (
  <Item to='#' {...props} />
)
