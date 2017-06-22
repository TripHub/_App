import React from 'react'
import { Heading2, Link, P, Text } from '../../../../components/text'
import { Input } from '../../../../components/form'
import Button from '../../../../components/button'

export default class Form extends React.Component {
  state = {
    password: '',
    passwordConfirm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { password, passwordConfirm } = this.state
    this.props.onSubmit(password, passwordConfirm)
  }

  render () {
    const { email } = this.props
    const { password, passwordConfirm } = this.state
    return (
      <form>
        <Heading2>Create an account</Heading2>
        <Input
          readonly
          disabled
          value={email}
          label='Email' />
        <Input
          type='password'
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })}
          label='Password' />
        <Input
          type='password'
          value={passwordConfirm}
          onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
          label='Confirm Password' />
        <Button primary type='submit' onClick={this.handleSubmit}>
          <Text>Join</Text>
        </Button>
        <P>Already have an account? <Link to=''>Login</Link></P>
      </form>
    )
  }
}
