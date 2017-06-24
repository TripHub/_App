import { combineReducers } from 'redux'
import user from './user/reducer'
import entities from './entities/reducer'

export default combineReducers({ user, entities })
