import { combineReducers } from 'redux'
import { default as user } from './user/reducer'
import { default as trip } from './trip/reducer'

export default combineReducers({ user, trip })
