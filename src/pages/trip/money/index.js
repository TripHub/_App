import React from 'react'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import { P } from '../../../components/text'

export default dashboardPageWithLogin(loadTrip(() => (
  <div>
    <P>Money</P>
  </div>
)))
