import { createSelector } from 'reselect'
import { merge } from '../../../services/primitives'
import { ADD_ENTITIES, addEntities } from '../actions'

export const STATE_KEY = 'trips'

const REQUEST_ALL = `${STATE_KEY}_all_request`
const FAILURE_ALL = `${STATE_KEY}_all_failure`
const REQUEST_SINGLE = `${STATE_KEY}_single_request`
const FAILURE_SINGLE = `${STATE_KEY}_single_failure`
const SET_ACTIVE_TRIP = 'SET_ACTIVE_TRIP'

export default function reducer (state = { byId: {} }, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.trip, { loading: false }),
        loading: false
      }
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

const selectActiveTripId = ({ entities }) => entities.trips.active

export const selectActiveTrip = createSelector(
  [({ entities }) => entities.trips.byId, selectActiveTripId],
  (trips, active) => active ? trips[active] || {} : {}
)

export const isUserActiveTripOwner = createSelector(
  [({ user }) => user.sub, selectActiveTrip, ({ entities }) => entities.users.byId],
  (sub, activeTrip, users) => (
    activeTrip && activeTrip.owner && users[activeTrip.owner].auth0_id === sub
  )
)

export const selectActiveTripDestinations = createSelector(
  [({ entities }) => entities.destinations.byId, selectActiveTrip],
  (destinations, activeTrip) => (
    activeTrip.destinations &&
    activeTrip.destinations.map((id) => destinations[id])
  )
)

export const selectActiveTripInvitations = createSelector(
  [({ entities }) => entities.invitations.byId, selectActiveTripId],
  (invitations, activeTripId) => activeTripId &&
    Object.values(invitations)
      .filter((invitation) => invitation.trip === activeTripId)
)
