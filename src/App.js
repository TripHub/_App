import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import { store } from './'
import Trips from './pages/trips'
import New from './pages/trip/new'
import Trip from './pages/trip/current'
import Settings from './pages/trip/settings'
import Tickets from './pages/trip/tickets'
import Money from './pages/trip/money'
import Auth0Callback from './pages/auth/callback'
import Auth0Renew from './pages/auth/renew'
import Logout from './pages/auth/logout'
import NotFound from './pages/error/notFound'

const checkTripId = (props) => {
  // show NotFound if trip id not in trips list
  const trips = store.getState().trip.entities
  const { params } = props.match
  return trips[params.id]
    ? <Trip {...props} />
    : <NotFound />
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Notifications />
        <Switch>
          <Route path='/auth/callback' component={Auth0Callback} />
          <Route path='/auth/renew' component={Auth0Renew} />
          <Route path='/auth/logout' component={Logout} />
          <Route path='/new' component={New} />

          <Route path='/:id/settings' component={Settings} />
          <Route path='/:id/tickets' component={Tickets} />
          <Route path='/:id/money' component={Money} />
          <Route path='/:id' render={checkTripId} />

          <Route exact path='/' component={Trips} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
