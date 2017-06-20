import React from 'react'
import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'
import { Heading1, Small } from '../../../../../components/text'
import { InputForm } from '../../../../../components/form'

const Container = styled('div', {
  marginBottom: spacing.sd,
  padding: spacing.sd,
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd
})

export default class Members extends React.Component {
  state = { email: '' }

  handleChange = (e) => this.setState({ email: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.email)
  }

  render () {
    const { members, loading } = this.props
    const { email } = this.state
    return (
      <Container>
        <Heading1>Members</Heading1>
        <Small>Invite your fellow trippers!</Small>
        <InputForm
          small
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={email}
          type='email'
          placeholder='name@domain.com'
          label='Invite Member'
          buttonText='Invite' />
        <div>
          {loading && <p>loading...</p>}
          {
            Object.values(members).map((member) => (
              <p key={member.id}>{member.email} ({member.status})</p>
            ))
          }
        </div>
      </Container>
    )
  }
}
