/**
 * TODO
 * Find a suitable level of abstraction for reducer logic.
 * Perhaps move logic to action?
 */

import * as actionTypes from './actions'
import * as fetch from '../../common/fetch'

const initialState = {
  loading: false,
  errors: {},
  didInvalidate: false, // denotes whether to fetch from API
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
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.GET_TRIPS_SUCCESS:
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
        didInvalidate: false,
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
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        fetchStatus: {
          ...state.fetchStatus,
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
          [action.meta.id]: fetch.ERROR
        },
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        }
      }
    case actionTypes.DELETE_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: action.error ? fetch.ERROR : fetch.LOADING
        }
      }
    case actionTypes.DELETE_TRIP_SUCCESS:
      return {
        ...state,
        didInvalidate: true,
        activeTrip: ''
      }
    case actionTypes.DELETE_TRIP_FAILURE:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: fetch.ERROR
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
