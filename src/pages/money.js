import React from 'react'
import Sidebar from '../components/sidebar'
import Menu from '../components/menu'
import Auth from '../services/auth'

export default () => (
  <Sidebar>
    <Menu />
    <button onClick={new Auth().login}>Click</button>
    Money
  </Sidebar>
)
