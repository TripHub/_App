import { combineReducers } from 'redux'
import { default as list } from './list/reducer'
import { default as current } from './current/reducer'

export default combineReducers({ list, current })
