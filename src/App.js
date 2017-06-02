import React, { Component } from 'react'
import Sidebar from './components/sidebar'
import { Title, Heading1, Heading2, P, Small } from './components/text'

class App extends Component {
  render () {
    return (
      <div>
        <Sidebar>
          <Title>Trip Title</Title>
          <Heading1>Some example text</Heading1>
          <Heading2>Some example text</Heading2>
          <P>Some example text</P>
          <Small>Some example text</Small>
        </Sidebar>
      </div>
    )
  }
}

export default App
