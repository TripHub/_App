import { combineReducers } from 'redux'
import { default as user } from './user/reducer'
import { default as trip } from './trip/reducer'
import { default as invite } from './invite/reducer'
import { default as entities } from './entities/reducer'

export default combineReducers({ user, trip, invite, entities })
