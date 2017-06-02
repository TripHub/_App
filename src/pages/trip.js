import React from 'react'
import Sidebar from '../components/sidebar'
import Menu from '../components/menu'

export default () => (
  <Sidebar>
    <Menu />
    <p>{process.env.REACT_APP_AUTH0_CLIENT_ID}</p>
  </Sidebar>
)
