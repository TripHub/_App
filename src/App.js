import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Trip from './pages/trip'
import Trips from './pages/trips'
import Tickets from './pages/tickets'
import Money from './pages/money'
import Auth0Callback from './pages/auth/callback'
import Auth0Renew from './pages/auth/renew'
import NotFound from './pages/error/notFound'
import { store } from './'

const checkTripId = (props) => (
  store.getState().trip.list.trips
    .map(trip => trip.id)
    .includes(props.match.params.id)
    ? <Trip {...props} />
    : <NotFound />
)

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/tickets' component={Tickets} />
          <Route path='/money' component={Money} />
          <Route path='/auth/callback' component={Auth0Callback} />
          <Route path='/auth/renew' component={Auth0Renew} />
          <Route path='/:id' render={checkTripId} />
          <Route exact path='/' component={Trips} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
