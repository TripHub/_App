import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Trip from './pages/trip'
import Tickets from './pages/tickets'
import Money from './pages/money'
import Auth0Callback from './pages/auth/callback'
import NotFound from './pages/error/notFound'
import Auth from './services/auth'

console.log(new Auth().auth0)

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Trip} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/money' component={Money} />
          <Route path='/auth/callback' component={Auth0Callback} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
