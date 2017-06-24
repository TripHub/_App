import { createSelector } from 'reselect'
import { ADD_ENTITIES, addEntities } from '../actions'

export const STATE_KEY = 'trips'

const REQUEST_ALL = `${STATE_KEY}_all_request`
const FAILURE_ALL = `${STATE_KEY}_all_failure`
const REQUEST_SINGLE = `${STATE_KEY}_single_request`
const FAILURE_SINGLE = `${STATE_KEY}_single_failure`
const SET_ACTIVE_TRIP = 'SET_ACTIVE_TRIP'

export default function reducer (state = { byId: {}, active: '' }, action) {
  switch (action.type) {
    case REQUEST_ALL:
      return {
        ...state,
        loading: !action.error
      }
    case REQUEST_SINGLE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.meta.id]: {
            ...state.byId[action.meta.id],
            loading: true
          }
        }
      }
    case ADD_ENTITIES:
      return {
        byId: Object.entries(action.payload.trip || {})
          .reduce((trips, [id, trip]) => ({
            ...trips,
            [id]: {
              ...(trips[id] || {}),
              ...trip,
              loading: false
            }
          }), state.byId),
        loading: false
      }
    case FAILURE_ALL:
      return {
        ...state,
        loading: false
      }
    case FAILURE_SINGLE: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.meta.id]: {
            ...state.byId[action.meta.id],
            loading: true
          }
        }
      }
    }
    case SET_ACTIVE_TRIP: {
      return {
        ...state,
        active: action.payload.id
      }
    }
    default:
      return state
  }
}

export const getTrips = () => (dispatch, getState, { api, schema }) => (
  dispatch(api('/trip/', {
    types: [ REQUEST_ALL, addEntities([schema.trip]), FAILURE_ALL ]
  }))
)

export const getTrip = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/trip/${id}/`, {
    types: [
      {type: REQUEST_SINGLE, meta: { id }},
      addEntities(schema.trip),
      { type: FAILURE_SINGLE, meta: { id } }
    ]
  }))
)

export const setActiveTrip = (id) => ({
  type: SET_ACTIVE_TRIP,
  payload: { id }
})

export const selectActiveTrip = createSelector(
  [({ entities }) => entities.trips.byId, ({ entities }) => entities.trips.active],
  (trips, active) => active ? trips[active] || {} : {}
)

export const isUserActiveTripOwner = createSelector(
  [({ user }) => user.sub, selectActiveTrip, ({ entities }) => entities.users.byId],
  (sub, activeTrip, users) => (
    activeTrip && activeTrip.owner && users[activeTrip.owner].auth0_id === sub
  )
)
