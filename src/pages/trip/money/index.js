import React from 'react'
import { dashboardPageWithLogin } from '../../../enhancers'
import PageContainer from '../../../components/pageContainer'
import { P } from '../../../components/text'

export default dashboardPageWithLogin(() => (
  <PageContainer>
    <P>Money</P>
  </PageContainer>
))
