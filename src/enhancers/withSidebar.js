import React from 'react'
import Sidebar from '../components/sidebar'

export default (Wrapped) => (props) => (
  <Sidebar>
    <Wrapped {...props} />
  </Sidebar>
)
