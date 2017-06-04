import React from 'react'
import Form from './components/form'
import Input from './components/input'

export default class extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Form>
        <Input
          value={children}
          placeholder='Trip Title...' />
      </Form>
    )
  }
}
