import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Trips from './pages/trips'
import New from './pages/trip/new'
import Trip from './pages/trip/current'
import Tickets from './pages/trip/tickets'
import Money from './pages/trip/money'
import Auth0Callback from './pages/auth/callback'
import Auth0Renew from './pages/auth/renew'
import Logout from './pages/auth/logout'
import NotFound from './pages/error/notFound'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/auth/callback' component={Auth0Callback} />
          <Route path='/auth/renew' component={Auth0Renew} />
          <Route path='/auth/logout' component={Logout} />
          <Route path='/new' component={New} />
          <Route path='/:id/tickets' component={Tickets} />
          <Route path='/:id/money' component={Money} />
          <Route path='/:id' component={Trip} />
          <Route exact path='/' component={Trips} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
