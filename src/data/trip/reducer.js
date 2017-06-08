import { combineReducers } from 'redux'
import { default as list } from './list/reducer'
import { default as active } from './active/reducer'

export default combineReducers({ list, active })
