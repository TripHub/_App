// import { combineReducers } from 'redux'
// import { default as list } from './list/reducer'
// import { default as current } from './current/reducer'

// export default combineReducers({ list, current })

import * as actionTypes from './actions'
import * as fetch from '../../common/fetch'

const initialState = {
  loading: false,
  errors: {},
  entitiesCount: 0,
  entities: {},  // object of trips
  fetchStatus: {},  // object of corresponding statuses,
  activeTrip: ''  // maybe move this to another file?
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRIPS_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          // if error is true then add the error details
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.GET_TRIPS_SUCCESS:
      // move this to actions
      return {
        ...state,
        entitiesCount: action.payload.count,
        entities: action.payload.results.reduce((acc, trip) => {
          acc[trip.id] = trip
          return acc
        }, {}),
        fetchStatus: action.payload.results.reduce((acc, trip) => {
          acc[trip.id] = fetch.LOADED
          return acc
        }, {}),
        errors: {},
        loading: false
      }
    case actionTypes.GET_TRIPS_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        },
        loading: false
      }
    case actionTypes.GET_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          // if error is true then add the error details
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        fetchStatus: {
          ...state.fetchStatus,
          // if there's no request error then change status to loading
          [action.meta.id]: action.error ? fetch.ERROR : fetch.LOADING
        },
        activeTrip: action.meta.id
      }
    case actionTypes.GET_TRIP_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.id]: fetch.LOADED
        }
      }
    case actionTypes.GET_TRIP_FAILURE:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.id]: fetch.ERROR
        },
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        }
      }
    default:
      return state
  }
}
