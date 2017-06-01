import React, { Component } from 'react'
import Nav from './components/nav'
import { Title, Heading1, Heading2, P, Small } from './components/text'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Title>Trip Title</Title>
        <Heading1>Some example text</Heading1>
        <Heading2>Some example text</Heading2>
        <P>Some example text</P>
        <Small>Some example text</Small>
      </div>
    )
  }
}

export default App
