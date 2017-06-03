import React from 'react'
import { withSidebar, withMenu } from '../enhancers'
import { P } from '../components/text'

export default withSidebar(withMenu(() => (
  <P>Tickets</P>
)))
