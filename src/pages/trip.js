import React from 'react'
import { withSidebar, withMenu } from '../enhancers'
import Auth from '../services/auth'

export default withSidebar(withMenu(() => (
  <div>
    <button onClick={new Auth().login}>Login</button>
  </div>
)))
