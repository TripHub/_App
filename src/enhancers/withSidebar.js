import React from 'react'
import Sidebar from '../components/sidebar'

export default (Wrapped) => () => (
  <Sidebar>
    <Wrapped {...this.props} />
  </Sidebar>
)
