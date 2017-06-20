import { combineReducers } from 'redux'
import { default as user } from './user/reducer'
import { default as trip } from './trip/reducer'
import { default as invite } from './invite/reducer'

export default combineReducers({ user, trip, invite })
