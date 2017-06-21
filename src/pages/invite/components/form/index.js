import React from 'react'
import { Heading2, Link, P } from '../../../../components/text'
import { Input } from '../../../../components/form'
import Button from '../../../../components/button'

export default ({ email }) => (
  <form>
    <Heading2>Create an account</Heading2>
    <Input readonly disabled value={email} label='Email' />
    <Input type='password' label='Password' />
    <Input type='password' label='Confirm Password' />
    <Button primary>Join</Button>
    <P>Already have an account? <Link to=''>Login</Link></P>
  </form>
)
