/**
 * TODO
 * Find a suitable level of abstraction for reducer logic.
 * Perhaps move logic to action?
 */

import * as actionTypes from './actions'
import * as fetch from '../../common/fetch'
import { objectFromArray } from '../../services/primitives'

export const initialState = {
  loading: false,  // loading list
  errors: {},  // object of errors
  didInvalidate: true, // flags whether to fetch from API
  entitiesCount: 0,  // results count from API
  entities: {},  // object of trips
  fetchStatus: {},  // object matching entities, with item fetch statuses
  activeTripId: ''  // currently selected trip
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    /**
     * Get details for all trips
     */

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
        entities: objectFromArray(action.payload.results, 'id', (item) => ({ ...item, is_complete: false })),
        fetchStatus: objectFromArray(action.payload.results, 'id', () => fetch.LOADED),
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

    /**
     * Set the active trip
     */

    case actionTypes.SET_ACTIVE_TRIP:
      return {
        ...state,
        activeTripId: action.payload.id
      }

    /**
     * Get details for a trip
     */

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
        }
      }
    case actionTypes.GET_TRIP_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: {
            ...state.entities[action.payload.id],
            ...action.payload,
            is_complete: true  // we have full details about this trip
          }
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

    /**
     * Create a trip
     */

    case actionTypes.CREATE_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.CREATE_TRIP_SUCCESS:
      return {
        ...state,
        didInvalidate: true,
        loading: false
      }
    case actionTypes.CREATE_TRIP_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        },
        loading: false
      }

    /**
     * Delete a single trip
     */

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
        didInvalidate: true
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

    /**
     * Delete a single trip
     */

    case actionTypes.CREATE_DESTINATION_REQUEST:
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
    case actionTypes.CREATE_DESTINATION_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.meta.id]: {
            ...state.entities[action.meta.id],
            destinations: [
              ...state.entities[action.meta.id].destinations,
              action.payload
            ]
          }
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: fetch.LOADED
        }
      }
    case actionTypes.CREATE_DESTINATION_FAILURE:
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
