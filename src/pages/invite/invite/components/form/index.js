import React from 'react'
import { Text } from '../../../../../components/text'
import Button from '../../../../../components/button'

export default class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit()
  }

  render () {
    return (
      <form>
        <Button primary type='submit' onClick={this.handleSubmit}>
          <Text>Create Account and Join Trip</Text>
        </Button>
      </form>
    )
  }
}
