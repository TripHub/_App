import { combineReducers } from 'redux'
import trips, { STATE_KEY as TRIPS_STATE_KEY } from './modules/trips'
import users, { STATE_KEY as USERS_STATE_KEY } from './modules/users'
import destinations, { STATE_KEY as DESTINATIONS_STATE_KEY } from './modules/destinations'

export default combineReducers({
  [TRIPS_STATE_KEY]: trips,
  [USERS_STATE_KEY]: users,
  [DESTINATIONS_STATE_KEY]: destinations
})
